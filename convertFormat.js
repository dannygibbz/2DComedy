let shell = require("shelljs")
let cheerio = require("cheerio")
let fs = require("fs")

let pathToDir = process.argv[2]

let imageFolder = null
let htmlFile = null

if (!pathToDir) {
  console.log("Pathname doesn't exist")
  process.exit()
}

if (pathToDir[pathToDir.length - 1] === "/") {
  pathToDir = pathToDir.slice(0, pathToDir.length - 1)
}
let pathSplit = pathToDir.split("/")
let cityName = pathSplit[pathSplit.length - 1]
if (!cityName) {
  console.log("Haven't supplied a cityName (arg 3)")
  process.exit()
}
if (!fs.existsSync(pathToDir)) {
  console.log("Directory path doesn't exist")
  process.exit()
}
if (!fs.existsSync(`${pathToDir}/${cityName}.html`)) {
  console.log("Can't find html file")
  process.exit()
} else {
  htmlFile = `${pathToDir}/${cityName}.html`
}
if (!fs.existsSync(`${pathToDir}/images`)) {
  console.log("Can't find images folder")
  process.exit()
} else {
  imageFolder = `${pathToDir}/images`
}

/* Sanity Checks */

/* Move the image files */
if (!fs.existsSync(`src/images/${cityName}`)) {
  shell.mkdir(`src/images/${cityName}`)
}
shell.cp(`${imageFolder}/*`, `src/images/${cityName}`)

/*
Main assumptions of the html.

1. <p> tags separate blocks of text from one another. 
Hitting 'enter' closes current </p> And opens a new one

2. The format is always <p><span></span></p>

3. The first <p> Represents the first "subheader"
*/

function backendToIR(htmlText) {
  const $ = cheerio.load(htmlText)

  let brokenOut = $("p")
    .map(function() {
      return {
        pClasses: $(this).attr("class"),
        spanClasses: $(this)
          .find("span")
          .attr("class"),
        image: $(this)
          .find("img")
          .map(function() {
            return $(this).attr("src")
          })
          .get(),
        text: $(this).text(),
      }
    })
    .get()

  // Make classLists
  for (let i = 0; i < brokenOut.length; i++) {
    let cur = brokenOut[i]
    cur.pClasses = (cur.pClasses && cur.pClasses.split(" ")) || []
    cur.spanClasses = (cur.spanClasses && cur.spanClasses.split(" ")) || []
    cur.image = cur.image.map((el) => el.replace("images/", "").replace(".png", ""))
    cur.text = cur.text.trim()
  }

  return brokenOut
}

function splitOffFileName(path) {
  if (path.includes(".")) {
    return path.substr(0, path.lastIndexOf("."))
  }
  return path
}

function convertSingleObjectToCode(IRObject, headerClass) {
  if (IRObject.image.length === 1) {
    return `<ImageAndCaption
              imageUrl={${splitOffFileName(IRObject.image[0])}}
              imageWidth={400}
              captionText={'${IRObject.text}'}
            />`
  }
  if (IRObject.image.length > 1) {
    return `<MultiImageAndCaption
              imageUrls={[${IRObject.image.join(",")}]}
              imageHeight={380}
              captionText={'${IRObject.text}'}
            />`
  }
  if (IRObject.spanClasses.includes(headerClass)) {
    return `<h2 className="header">${IRObject.text}</h2>`
  }
  return `<p className="copytext">${IRObject.text}</p>`
}

function IRToFrontend(objectList) {
  /* Remove empty paragraphs */
  let actualObjects = objectList.filter(
    (el) => !(el.text === "" && el.image.length === 0)
  )

  if (actualObjects.length === 0) {
    console.log("No p tags. Html breaks assumptions")
    return ""
  }
  let firstValWhichIsSubHeader = actualObjects[0]
  let headerClass = firstValWhichIsSubHeader.spanClasses[0]

  let ourObjects = actualObjects.map((el) => convertSingleObjectToCode(el, headerClass))
  return ourObjects.join("\n")
}

function wholePass(htmlText) {
  let IR = backendToIR(htmlText)
  return IRToFrontend(IR)
}

function splitOffFileName(path) {
  if (path.includes(".")) {
    return path.substr(0, path.lastIndexOf("."))
  }
  return path
}

function picOrGif(path) {
  if (path.includes(".gif")) {
    return path.slice(0, path.length - 4)
  }
  return path
}

function makeRight(path) {
  if (path.includes(".")) {
    return path
  }
  return path + ".png"
}

function writeFile(htmlText) {
  let IR = backendToIR(htmlText)
  let innerCode = IRToFrontend(IR)
  let imageList = IR.map((el) => el.image)
    .filter((el) => el.length > 0)
    .reduce((a, b) => a.concat(b))

  let imageImports = imageList.map(
    (el) => `import ${splitOffFileName(el)} from "../images/${cityName}/${makeRight(el)}"`
  )
  return `
  import React from "react"
  import { Link } from "react-router-dom"
  import SkinnyHeader from "../Headers/SkinnyHeader"
  import WistiaEmbed from "../WistiaEmbed"
  import ImageAndCaption from "../ImageAndCaption.js"
  import MultiImageAndCaption from "../MultiImageAndCaption.js"
  import NewsletterEmail from "../NewsletterEmail"
  import BackButton from "../BackButton"
  ${imageImports.join("\n")}


  export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={AtlantaPic} width="100%" className="hideWhenBig" alt="Atlanta" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"xsvjj29jtz"} />
        </div>
        <div
          style={{
            background: "rgba(0, 0, 0, 0)",
            position: "absolute",
            top: 0,
            right: 0,
            left: 0,
          }}
        >
          <h1
            style={{
              color: "white",
              fontFamily: "Nobile, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            ${cityName}
          </h1>
        </div>
        <div style={{ marginRight: "10%", marginLeft: "10%", marginTop: "60px" }}>
          <div
            style={{
              margin: "auto",
              maxWidth: "700px",
              display: "flex",
              flexDirection: "column",
            }}
          >
          <BackButton />
          ${innerCode}
          <NewsletterEmail />
        </div>
        </div>
      </div>
    </div>
  )
}
`
}

/* Parse the html document */
let htmlText = fs.readFileSync(htmlFile, "utf8")
let newFile = writeFile(htmlText)

fs.writeFileSync(`src/cities/${cityName}_gen.js`, newFile)
