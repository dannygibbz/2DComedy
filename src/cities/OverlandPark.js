import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image10 from "../images/OverlandPark/image10.png"
import image12 from "../images/OverlandPark/image12.png"
import image8 from "../images/OverlandPark/image8.png"
import image9 from "../images/OverlandPark/image9.gif"
import image11 from "../images/OverlandPark/image11.gif"
import image1 from "../images/OverlandPark/image1.png"
import image6 from "../images/OverlandPark/image6.png"
import image5 from "../images/OverlandPark/image5.png"
import image7 from "../images/OverlandPark/image7.png"
import image2 from "../images/OverlandPark/image2.png"
import image4 from "../images/OverlandPark/image4.png"
import image3 from "../images/OverlandPark/image3.png"
import OverlandParkPic from "../images/OverlandPark/OverlandParkPic.png"
export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img
          src={OverlandParkPic}
          width="100%"
          className="hideWhenBig"
          alt="Overland Park"
        />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"fipfdl7zop"} />
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
              fontFamily: "Darker Grotesque, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Overland Park
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
            <h2 className="header">Hit the ol’ dusty trail</h2>
            <p className="copytext">
              With <Link to="/Cincinnati">Cincinnati</Link> in the rearview mirror we
              chugged westward to Kansas. In a perfect world  we’d’ve already completed
              the Midwest and begun the final eastward leg of our trip, but things didn’t
              quite work out that way. We still had Kansas, Nebraska, and Wyoming to
              cover. We circled the wagon and headed back, preparing for a prosperous
              trip.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“Dan died of dysentery”"}
            />
            <p className="copytext">
              Constantly traveling and facing challenges as they crop up really does make
              life feel like The Oregon Trail. If we get right down to it, the van is
              basically a modern-day Conestoga Wagon.
            </p>
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={400}
              captionText={"Pro Tip: Do NOT ford the river"}
            />
            <p className="copytext">
              One difference is we don’t have to do any hunting - which is probably for
              the better. It’d be unsettling to discover we had the same insatiable
              bloodlust in real life as we did in the game. Hunting in the Oregon Trail
              really brought the worst out of everyone -- it turned regular people into
              homicidal maniacs. You wouldn’t hunt to satisfaction; you’d hunt to
              extinction.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“Who’s hungry?”"}
            />
            <p className="copytext">
              The wagon could hold maybe 200 pounds of rations but your hunt would yield
              2,339 pounds. If you even tried storing that much meat, the axles would snap
              and you’d get typhoid. But that wouldn’t stop you.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={"“Deer on your six!”"}
            />
            <p className="copytext">
              The slaughter would continue well past the point of reason. You’d massacre
              the food chain from top to bottom, starting with buffalo and working your
              way down to squirrels. Hell, you’d even shoot birds. After the ammo was out
              you’d dry fire at any animal with the gall to cross your screen. Your only
              regret was being unable to plug each and every last creature.
            </p>
            <ImageAndCaption imageUrl={image11} imageWidth={400} captionText={""} />
            <h2 className="header">A glimpse into the past</h2>
            <p className="copytext">
              If you were to review the history books, you’d see Two Dans in a Van is not
              the first duo to travel the country doing comedy. We drew inspiration from
              the ol’ frontier comics Two Barts in a Cart
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“What’s the deal with magical elixirs?”"}
            />
            <p className="copytext">
              The Barts roamed from town to town, entertaining bewildered residents by the
              dozen. They even coined the term ‘killing’ as it pertains to comedy (getting
              huge laughs). You see, in those days laughter wasn’t the only thing
              contagious. Following punchlines, wet chortles rattled out of
              consumption-ridden lungs and spread countless germs through the air. Entire
              towns were routinely wiped out or left gravely ill.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“Thank you, that’s my time!”"}
            />
            <p className="copytext">
              Before moving on, the Barts would tack reviews onto wooden beams in the town
              square (much like a modern day blog).
            </p>
            <ImageAndCaption imageUrl={image5} imageWidth={300} captionText={""} />
            <p className="copytext">
              Their causes of death were consistent with most who died in that era: one
              from a snake bite, the other from autoerotic asphyxiation.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"“It’s how he would’ve wanted to go”"}
            />
            <h2 className="header">Back to the future</h2>
            <p className="copytext">
              We found ourselves once again in Kansas. We had previously performed in
              Kansas City Missouri, but not in Kansas itself. We checked around for mics
              in the big cities (Wichita, KC, Olathe) but didn’t come up with much.
              Luckily we found a club called ‘Clint’s Comedy Stop’ In Overland Park.
            </p>
            <ImageAndCaption imageUrl={image2} imageWidth={400} captionText={""} />
            <p className="copytext">
              It was a nice little club and the owner, Clint, was a supremely nice guy. He
              had been a comic, managed clubs, ran shows, and was familiar with all the
              in’s and out’s of standup comedy. He had seen it all, and as a result was a
              pleasure to deal with.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              About 10 people performed that night. Most of the comedians worked out of
              Kansas City but there were a few out of different reaches in Kansas. Dan and
              I were the only ‘true’ out of towners. The crowd seemed very midwestern
              (e.g. extremely polite) because they’d clam up whenever we used profanity.
            </p>
            <p className="copytext">
              Clint was nice enough to give us a few extra minutes and we used the time to
              test new jokes. Overall the show was fun, and it was amusing to run wildly
              profane jokes to a crowd that blanched at ‘the C word’ (crap).
            </p>
            <MultiImageAndCaption
              imageUrls={[image4, image3]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              A huge rainstorm began pelting Overland Park as we were finishing the show.
              We didn’t want to spend the night trapped in the van - sheet metal amplifies
              delicate raindrops up to eardrum shattering decibels (proof{" "}
              <a href="https://www.instagram.com/p/BvS-B_EHT4d/">here</a>
              ). We burned rubber outta town, outrunning the storm on our way to{" "}
              <Link to="/Casper">Wyoming</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
