import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"

import image5 from "../images/Savannah/image5.png"
import image2 from "../images/Savannah/image2.gif"
import image7 from "../images/Savannah/image7.png"
import image6 from "../images/Savannah/image6.png"
import image1 from "../images/Savannah/image1.png"
import image4 from "../images/Savannah/image4.png"
import image3 from "../images/Savannah/image3.png"
import image8 from "../images/Savannah/image8.png"
import image9 from "../images/Savannah/image9.png"
import BackButton from "../BackButton.js"
import SavannahPic from "../images/Savannah/SavannahPic.png"
export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={SavannahPic} width="100%" className="hideWhenBig" alt="Savannah" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"ahn4wj7mp6"} />
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
              fontFamily: "'Mrs Sheppards'",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Savannah
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
            <h2 className="header">Let it snow, elsewhere</h2>
            <p className="copytext">
              From <Link to="/VirginiaBeach">Virginia Beach</Link> we went South to visit
              friends in <Link to="ChapelHill">Chapel Hill</Link>. We considered several
              cities for our next stop like Charlotte, Columbia, and Charleston - but we
              landed on Savannah. We’d like to say we chose Savannah for the strength of
              its comedy scene, a club audition, or some worthwhile reason, but it’d be a
              lie. We went there because we wanted to evade an upcoming blizzard.
            </p>
            <p className="copytext">
              Initially when choosing cities to perform in, we asked{" "}
              <i>“Are there good places to perform?”</i>. Now our only question is{" "}
              <i>“Is it summer there?”</i>. On our first test-run with the van we went
              South at the end of summer and North in the beginning of winter - like
              idiots. We baked from August to September and froze from November to
              December. It was basically navy seal training for vanners.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“Wifi signal acquired. Move, move, move!”"}
            />
            <p className="copytext">
              It’s embarrassing to admit that warm weather is our only guiding compass,
              but it’s the truth. We started with the best of intentions. Dan, being a
              math guy, analyzed cities by largest population. He measured distance with
              np-hard combinatorial optimization. He wrote a program for route mapping and
              downloaded a Canadian executable. Then the temperature plummeted to 30
              degrees and we immediately scrapped the plan without looking back.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“I hear Florida is nice this time of year”"}
            />
            <h2 className="header">Change of Plans</h2>
            <p className="copytext">
              The new route was wherever warmth was. We’re essentially moths drawn to
              flame. The reasoning is sound, though - why program in the cold when you can
              do it on a beach?
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"“Check out the 80085 on her”"}
            />
            <p className="copytext">
              The new plan was simple: go South for winter and North for summer.
              From&nbsp;
              <Link to="ChapelHill">Chapel Hill</Link> we burned rubber for six straight
              hours to Savannah. We slept at a Walmart for about 4 hours, then were awoken
              by the reverse beep of every construction vehicle in the state of Georgia.
              The beeping <i>did not stop</i>. Apparently we parked next to the world's
              only all-reverse construction site.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={
                "“You’ve already got three forward driving violations. Next times your last time”"
              }
            />
            <p className="copytext">
              Doing comedy in Savannah (and all small cities/towns, for that matter) was a
              lot of fun. A lot of people think comedy only exists in big cities like New
              York and LA but believe it or not people in small towns laugh too.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“No we don’t, college boy”"}
            />
            <p className="copytext">
              One of the main reasons for hitting the road was to learn what makes people
              laugh in different parts of the country. A joke that could crush a liberal
              Northeast audience could be met with hostility in other states. Our goal is
              to play as many rooms as possible and be exposed to all varieties of humor.
              We want to be able to walk into any room and kill.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageHeight={400}
              captionText={"“I called the constipation hotline - they asked me to hold!”"}
            />
            <ImageAndCaption imageUrl={image3} imageHeight={400} captionText={""} />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The show in Savannah was in a microbrewery, and those are fun spots for
              shows. The atmosphere is relaxed, the space is intimate, and everyone is
              there to let out steam and have a good time. The crowds are usually loose
              and provide great crowd work material - even if unintentionally. For
              example, there was some dude at this show in the back corner that
              periodically hacked up his entire respiratory system every ten minutes, and
              that made for good riffing. That might seem mean, but if you come out and
              cough SARS all over everyone, you’re fair game.
            </p>
            <p className="copytext">
              About 15 comics performed that night and it was a great show.
            </p>
            <MultiImageAndCaption
              imageUrls={[image9, image8]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              The local comedians were a real friendly bunch and they told us about
              upcoming mics later in the week. We wanted to stay a few more days and
              really get to see Savannah but the weather forecast won out. We googled
               “Florida weather” and saw temperatures in the 70’s - our decision was made.
              We drove straight to <Link to="/Orlando">Orlando</Link> after the show.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
