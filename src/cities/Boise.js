import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
// import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image12 from "../images/Boise/image12.gif"
import image10 from "../images/Boise/image10.png"
import image8 from "../images/Boise/image8.gif"
import image13 from "../images/Boise/image13.gif"
import image6 from "../images/Boise/image6.gif"
import image4 from "../images/Boise/image4.png"
import image2 from "../images/Boise/image2.gif"
import image5 from "../images/Boise/image5.gif"
import image1 from "../images/Boise/image1.gif"
import image11 from "../images/Boise/image11.gif"
import image9 from "../images/Boise/image9.gif"
import image3 from "../images/Boise/image3.png"
import image7 from "../images/Boise/image7.png"
import BoisePic from "../images/Boise/BoisePic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={BoisePic} width="100%" className="hideWhenBig" alt="Boise" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"h33wfldrlf"} />
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
              fontFamily: "Muli, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Boise
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
            <h2 className="header">Highway to hell</h2>
            <p className="copytext">
              Between booking shows, getting to locations, and working during the day, our
              scheduling/planning ability occasionally suffers.
            </p>
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={400}
              captionText={"“Easy peasy”"}
            />
            <p className="copytext">
              The show in Boise fell in the middle of a week that amounted to an
              intracontinental endurance race. Returning from{" "}
              <Link to="/Anchorage">Alaska</Link>, we had <b>five</b> days to do standup
              in&nbsp;
              <b>three</b>&nbsp;states while covering <b>1,500 miles</b>. We went from{" "}
              <Link to="/Seattle">Washington</Link> to Montana, then{" "}
              <Link to="/Missoula">Montana</Link> to Idaho, and finally blasted through
              Wyoming and most of South Dakota.
            </p>
            <p className="copytext">
              The drive was full of empty highway that stretched beyond eternity. No
              matter how long we drove, it felt like we hadn’t moved -- it was like being
              in purgatory. The only breaks came when construction workers closed lanes
              for miles at a stretch to fix two-inch long potholes.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“Nine hours well spent”"}
            />
            <h2 className="header">Bread heads</h2>
            <p className="copytext">
              We couldn’t drive all the time. At least half of every day is spent working
              remotely. We’d love to say “Comedy covers all the bills!” but we’re not
              there yet. We use Panera Bread's WiFi to work from our laptops, and spending
              several hours a day in Panera is beginning to chip away at our sanity. It’s
              gotten so bad that our schedules run solely off Panera’s music playlist.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={
                "“Is it 'She Will Be Loved' already? This day has been flying”"
              }
            />
            <p className="copytext">
              When we hear ‘Rocketman’ our first thought is “Fuck! We’re late for the
              mic!”. When friends ask for our availability, we respond “We can meet before
              ‘Don’t Dream It’s Over’(4 p.m.) or after ‘Change The World’” (6 p.m.).
              Heaven forbid they want to meet during the cover of Lourde’s ‘Royals’ (8
              a.m., 9:15 a.m., 10 a.m. 10:30 a.m., 11:45 a.m., 12:10 p.m. 3:05 p.m., 5:00
              p.m.)
            </p>
            <p className="copytext">
              Sometimes one of us will hum a song from the Panera soundtrack in the van
              just to see how long the other can stand it.
            </p>
            <ImageAndCaption imageUrl={image13} imageWidth={400} captionText={""} />
            <p className="copytext">
              The good news is we feel incredibly sexy in there. The average age in Panera
              is 173. The ladies in that joint haven’t been hit since Pearl Harbor, so
              when we strut into the building sans-cane and with all our own chompers,
              they go wild.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={'"Keep your shirt on, Muriel, there’s enough to go around"'}
            />
            <h2 className="header">B-Town</h2>
            <p className="copytext">
              We’ll be honest with you guys - we were in Boise for probably three hours
              total. With our nutzoid schedule, we had no time to hang out and get to know
              the place. BUT, from our short time there, we thought it was awesome. Boise
              actually felt like a bigger Missoula. It was quaint, laid back, and had a
              surprising number of events going on.
            </p>
            <p className="copytext">
              One major thing that struck us was everyone being beautiful. Everyone
              walking the streets, sitting in cafes, and chatting on corners was hot.
               It’s probably a good thing we didn’t experience more of Boise - if we had,
              we’d blather on about it and spoil your hidden gem of a town.
            </p>
            <h2 className="header">Setting the mood</h2>
            <p className="copytext">
              Before the comedy show, the DJ was playing some music to get people excited.
              One of the songs brought Dan back to old times when he’d listen to hot
              tracks to get ready for jazz band. The song was “In the midnight hour” by
              Wilson Pickett.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“This guy is a real romantic!!”"}
            />
            <p className="copytext">
              It was one of those songs you find sweet as a child, but questionable as an
              adult. When you’re young, the lyrics sounded innocent enough. You’d imagine
              something like the following ...
            </p>
            <p className="copytext" style={{ textAlign: "center" }}>
              ♪ I'm gonna wait 'till the midnight hour
            </p>
            <p className="copytext" style={{ textAlign: "center" }}>
              When there's no one else around ♫
            </p>
            <ImageAndCaption imageUrl={image2} imageWidth={400} captionText={""} />
            <p className="copytext" style={{ textAlign: "center" }}>
              ♪ I'm gonna take you, girl, and hold you
            </p>
            <p className="copytext" style={{ textAlign: "center" }}>
              And do all the things I told you, in the midnight hour ♫.
            </p>
            <ImageAndCaption imageUrl={image5} imageWidth={400} captionText={""} />
            <p className="copytext" style={{ textAlign: "center" }}>
              As an adult, the lyrics seem downright dark.
            </p>
            <p className="copytext" style={{ textAlign: "center" }}>
              ♪ I'm gonna <b>wait</b> 'till the midnight hour ♫
            </p>
            <ImageAndCaption imageUrl={image1} imageWidth={400} captionText={""} />
            <p className="copytext" style={{ textAlign: "center" }}>
              ♪ When there's <b>no one</b> else around ♫
            </p>
            <ImageAndCaption imageUrl={image11} imageWidth={400} captionText={""} />
            <p className="copytext" style={{ textAlign: "center" }}>
              ♪ I'm gonna <b>take</b> you, girl, and <b>hold</b> you
            </p>
            <p className="copytext" style={{ textAlign: "center" }}>
              And do <b>all the things</b> I told you, in the midnight hour ♫.
            </p>
            <ImageAndCaption imageUrl={image9} imageWidth={400} captionText={""} />
            <h2 className="header">Showtime</h2>

            <p className="copytext">
              The show was at the only comedy club in town, and we were surprised at how
              many non-comics came out for open mic. We signed up early and went on around
              5th or 6th. There were a lot of comics in Boise -- so many signed up for the
              mic that sets were cut to 3 minutes a piece, which is enough time to do
              nothing.
            </p>

            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"“Hi, I’m Dan. You guys have been great!”"}
            />

            <p className="copytext">
              We’d usually stay to watch the show and connect with comics afterwards, but
              we simply didn’t have time. With less than two days to cover 1,200 miles,
              every second counted. The next leg of our trip (Boise to South Dakota) was
              19 hours and we had to get a jump on it.
            </p>
            <p className="copytext">
              After saying a few goodbye’s we hopped in the van and headed due West for{" "}
              <Link to="/SiouxFalls">Sioux Falls</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
