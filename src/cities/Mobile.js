import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image7 from "../images/Mobile/image7.gif"
import image6 from "../images/Mobile/image6.gif"
import image2 from "../images/Mobile/image2.png"
import image1 from "../images/Mobile/image1.png"
import image4 from "../images/Mobile/image4.png"
import image11 from "../images/Mobile/image11.png"
import image9 from "../images/Mobile/image9.png"
import image10 from "../images/Mobile/image10.png"
import image5 from "../images/Mobile/image5.png"
import image3 from "../images/Mobile/image3.png"
import image8 from "../images/Mobile/image8.png"
import MobilePic from "../images/Mobile/MobilePic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={MobilePic} width="100%" className="hideWhenBig" alt="Mobile" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"gugbyau9kq"} />
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
              fontFamily: "Cute Font, sans-serif",
              fontSize: "10vw",
              textAlign: "center",
            }}
          >
            Mobile
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
            <h2 className="header">It could be a CRACK HEDDD</h2>
            <p className="copytext">
              After barely surviving the accent in Louisiana, we were pretty nervous about
              Alabama. Linguistically, New Orleans had us on wobbly legs but we thought
              Mobile was gonna be lights out.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <ImageAndCaption
                imageUrl={image7}
                imageHeight={180}
                captionText='"New Orleans"'
              />
              <ImageAndCaption
                imageUrl={image6}
                imageHeight={180}
                captionText='"Mobile"'
              />
            </div>
            <p className="copytext">
              Our initial Alabama-specific references were decidedly not good. The first
              that jumped to mind was Forrest Gump (From Greenbow Al-a-BAM-A), followed by
              Nic Cage in Con Air (“Wah cudd’nt you just put the bunneh back in the
              bawx?”), and rounding out the unholy trinity was the leprechaun guy who
              wanted the gold.
            </p>
            <MultiImageAndCaption
              imageUrls={[image2, image1, image4]}
              imageHeight={180}
              captionText={'"What they lack in enunciation they make up for in hair"'}
            />
            <p className="copytext">
              We know it’s not a fair assessment. Thinking everyone in Alabama sounds like
              Forrest Gump is like thinking everyone in Pennsylvania has the diction of
              Rocky. It’s embarrassing that these moronic references were the only ones we
              could recall, but Dan and I are simple folk.
            </p>
            <h2 className="header">Come again?</h2>
            <p className="copytext">
              Communication was ok, it just took a bit of time to get the hang of
              listening. Comprehension required a good bit of repetition.
            </p>
            <p className="copytext">
              Asking people to repeat themselves when learning a foreign language is fine
              - you’re learning entirely new words so it’s understandable. But when you’re
              speaking the same language and can’t understand an accent, it gets awkward.
            </p>
            <p className="copytext">
              It’s basically a three-strikes-your-out policy when continually asking
              someone to repeat themselves. If you can’t make out what they said by the
              third swing, you just answer the best you can.
            </p>
            <h2 className="header">Dialogue</h2>
            <div style={{ marginLeft: "30px", marginRight: "30px" }}>
              <p className="copytext">
                <b>Southerner:</b> Y’all like po’ boys or gumbo?
              </p>
              <p className="copytext">
                <b>Northerner:</b> What was that?
              </p>
              <p className="copytext">
                <b>Southerner:</b> Y’all like po’ boys or gumbo?
              </p>
              <p className="copytext">
                <b>Northerner:</b> Sorry, one more time?
              </p>
              <p className="copytext">
                <b>Southerner:</b> I saiiiidd, y’all like{" "}
                <u>
                  <span className="bold">Po’ Boys</span>
                </u>{" "}
                or{" "}
                <span className="bold">
                  <u>GUM</u>-bo?
                </span>
              </p>
              <p className="copytext">
                <b>Northerner:</b> Yeah, me too.
              </p>
            </div>
            <h2 className="header">Growers, not show-ers.</h2>
            <p className="copytext">
              Before the show began, Dan and I hung around the bar and met some of the
              comics. We’ve noticed that comics in small towns and cities are usually not
              locals in the strict “I was born and raised here” variety, but are
              transplants from neighboring or sometimes distant cities.
            </p>
            <p className="copytext">
              Comics relocate for various reasons but a common cause is outgrowing a
              comedy scene. Cities are like dudes in that some are growers, others
              show-ers.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={300}
              captionText={"“I’ll get bigger one day, you’ll see. You’ll ALL see!”"}
            />
            <p className="copytext">
              Let us explain: grower cities have tons of mics and showcases where comics
              can get stage time and improve, but breaking into the ‘next level’ is
              difficult or impossible at that location. Show-er cities have marquee clubs
              featuring national headliners, but fewer opportunities to get stage time at
              lower levels.
            </p>
            <p className="copytext">
              You may be wondering “Then why the hell are you guys constantly changing
              cities?” Put simply, we think mobility accelerates development quicker than
              remaining stationary. It provides more options. If we were stuck in one city
              that didn’t have many mics, we wouldn’t get much practice. But because we
              stay mobile, we can practice any time, anywhere.
            </p>
            <p className="copytext">
              It’s a bit like poker; if you’re stuck at one casino, you can only play one
              hand at a time - whereas if you’re online you can play more hands whenever
              and wherever you want. We figure the more rooms we do, the more comedians we
              network with, and the more hours we accumulate on stage, the better off
              we’ll be.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={350}
              captionText={"“I’m all in”"}
            />

            <h2 className="header">Hometown heroes?</h2>
            <p className="copytext">
              Confession: Dan and I are not full-fledged Philadelphians. At least in the
              eyes of ‘real Philadelphians’. You may have heard Philly has a reputation
              for being … ‘passionate’ about certain topics, and Philly citizenship is
              certainly one of them.
            </p>
            <p className="copytext">
              If you were not born and raised within a certain zone, you will never be
              considered ‘from’ Philadelphia. You may not think Philly people are bright
              in the conventional sense - but they can recall postal codes and the exact
              borders of the city limits like rain man.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“18901? Nice try, Bucks County”"}
            />
            <p className="copytext">
              I was born in Philadelphia but grew up in the suburbs before moving back
              later. Dan also grew up in the burbs, so the chances of us ever being
              considered full Philly is nil. Naturalization is not an option.
            </p>
            <p className="copytext">
              Some countries grant citizenship through investment, marriage, or lineage.
              Not Philly. They have some of the most stringent citizenship requirements in
              the world and are super strict about what constitutes a ‘real’
              Philadelphian. So far as we’ve gathered, the following stipulations must be
              adhered to for one to attain that vaunted title.
            </p>
            <p className="copytext">
              If you meet the requirements, congratulations are in order. You’ve made it
              into the elite class.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“EEEyyy I DID it!”"}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The host did a great job setting the energy right in the room before we
              began. We were in an upstairs bar that had a stage tucked in the corner.
              Surrounding the stage were chairs, couches, and one single fold-out table.
              It made for good crowdwork - we made jokes about how the table looked like
              the worst Americal Idol/The Voice judges table in existence.
            </p>
            <MultiImageAndCaption
              imageUrls={[image3, image8]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              Most of the performers did traditional standup, but a 60-something year old
              guy came up and changed it up with song parodies and audience participation
              -- it was refreshing. At one point he brought a lady up to the stool and
              ‘serenaded’ her with an extremely vulgar Beetles cover.
            </p>
            <p className="copytext">
              He then brought out tennis balls and asked the audience to call out states
              as he juggled. His object was to name the capitals while juggling to
              demonstrate his mental fortitude -- except whenever someone shouted a state,
              he’d botch it. It was great. It went something like
            </p>
            <p className="copytext">
              <b>Juggling man:</b> (never taking his eye away from the balls) I never lose
              focus, I’m too good! Give me a state!
            </p>
            <p className="copytext">
              <b>Audience:</b> Texas!
            </p>
            <p className="copytext">
              <b>Juggling man:</b> (stops and catches all balls) What? Tennessee?
            </p>
            <p className="copytext">
              <b>Audience:</b> No, Texas!
            </p>
            <p className="copytext">
              <b>Juggling man:</b> Oh, uh … Austin (resumes juggling). Gimme another!
            </p>
            <p className="copytext">
              <b>Audience:</b> Montana!
            </p>
            <p className="copytext">
              <b>Juggling man:</b> (stops juggling) Missouri? Jefferson City! (resumes
              juggling)
            </p>
            <p className="copytext">
              Honest to God it was hard to tell if his bumbling act was intentional not,
              but the effect was hilarious nonetheless.
            </p>
            <p className="copytext">
              After the show we said our thanks to the host and connected with some of the
              comedians. We then hopped in the van and drove 3-4 hours in the direction of
              &nbsp;
              <Link to="Nashville">Nashville</Link> before pulling over to sleep.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
