const fs = require("fs")
const tinify = require("tinify")
tinify.key = "GScFn8tKx66gKG6wlxpWKXgN6dDdxnBD"

let imagePath = process.argv[2]

async function processPath(imagePath) {
  if (fs.lstatSync(imagePath).isFile()) {
    console.log(imagePath)
    const source = tinify.fromFile(imagePath)
    source.toFile(imagePath)
  } else if (fs.lstatSync(imagePath).isDirectory()) {
    const files = fs.readdirSync(imagePath)
    const images = files.filter((el) => el.includes(".png") || el.includes(".jpg"))
    for (let i = 0; i < images.length; i++) {
      let image = `${imagePath}/${images[i]}`
      console.log(image)
      const source = await tinify.fromFile(image)
      await source.toFile(image)
    }
  }
}

function addTinyToPath(path) {
  let fileSplit = path.split("/")
  let last = `tiny${fileSplit[fileSplit.length - 1]}`
  fileSplit[fileSplit.length - 1] = last
  return fileSplit.join("/")
}

processPath(imagePath)
