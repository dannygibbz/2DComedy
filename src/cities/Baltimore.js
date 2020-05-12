import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
// import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import image8 from "../images/Baltimore/image8.png"
import image2 from "../images/Baltimore/image2.png"
import image1 from "../images/Baltimore/image1.png"
import image10 from "../images/Baltimore/image10.png"
import image3 from "../images/Baltimore/image3.png"
import image6 from "../images/Baltimore/image6.png"
import image4 from "../images/Baltimore/image4.png"
import image5 from "../images/Baltimore/image5.png"
import image9 from "../images/Baltimore/image9.png"
import image7 from "../images/Baltimore/image7.png"
import image11 from "../images/Baltimore/image11.png"
import image12 from "../images/Baltimore/image12.png"
import BackButton from "../BackButton.js"
import BaltimorePic from "../images/Baltimore/BaltimorePic.png"
export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={BaltimorePic} width="100%" className="hideWhenBig" alt="Baltimore" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"jqkwh3s1m6"} />
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
              fontFamily: "Oleo Script, cursive",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Baltimore
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
            <h2 className="header">A Sea of Wonder</h2>
            <p className="copytext">
              We took some time to warm up after freezing in{" "}
              <Link to={"/Concord"}>Concord</Link>. It took about two weeks for us to thaw
              out, but as soon as we could move again we hit the road toward Baltimore.
              Our excursion began with a trip to the aquarium. We both love Planet Earth
              and were pumped to see wild animals like in the show.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ImageAndCaption
                imageUrl={image8}
                imageHeight={240}
                captionText={"Expectation"}
              />

              <ImageAndCaption
                imageUrl={image2}
                imageHeight={240}
                captionText={"Reality"}
              />
            </div>
            <p className="copytext">
              All told, we were both underwhelmed. We didn’t see any entertaining
              exhibits, but we were thoroughly entertained by the laughably unscientific
              fish names plastered above each tank. In most branches of biology, names are
              given through systematic classification - but when it comes to fish, it
              seems names are given by drunken pirates.{" "}
              <a
                href="https://en.wikipedia.org/wiki/Slimehead"
                target="_blank"
                rel="noopener noreferrer"
              >
                Slimehead
              </a>
              ,{" "}
              <a
                href="https://en.wikipedia.org/wiki/Indian_Ocean_oriental_sweetlips"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oriental Sweetlips
              </a>
              , and{" "}
              <a
                href="https://en.wikipedia.org/wiki/Upside-down_catfish"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blotched Upside-Down Catfish
              </a>{" "}
              were but a few of the bizarre names. I can’t make this shit up.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={
                "“Ahoy, Matey! Behold me latest discovery - the Spotted Fartface McTitties”"
              }
            />
            <p className="copytext">
              I’m honestly surprised that{" "}
              <a
                href="https://en.wikipedia.org/wiki/Slimehead"
                target="_blank"
                rel="noopener noreferrer"
              >
                Slimehead
              </a>
               and{" "}
              <a
                href="https://en.wikipedia.org/wiki/Indian_Ocean_oriental_sweetlips"
                target="_blank"
                rel="noopener noreferrer"
              >
                Oriental Sweetlips
              </a>{" "}
               made it up the naming chain of approval. One sounds like what a child would
              call a friend at a playground, the other sounds like what a grandpa would
              call a waitress at P.F. Changs. A good rule of thumb should be “don’t select
              a name that would return porn in a google search”. If someone saw you looked
              up ‘oriental sweetlips’, I doubt they’d think you were curious about fish
              from the Indian Ocean”.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“Babe, Hispanic Sugarpussy is a type of bass!”"}
            />

            <p className="copytext">
              Setting the <i>why</i>  aside, a more important question is <i>how</i>  did
              the scientists decide on the name? “Oh, I’ve frenched a good many fish and I
              can tell you, without a shadow of a doubt, this one has the sweetest, (heavy
              breathing) most delectable lips (twists nipple) in the sea (ruffles hair)”.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={
                <div>
                  “It’s for <i>science</i>, goddammit!”
                </div>
              }
            />
            <h2 className="header">Jawsome</h2>
            <p className="copytext">
              We reconvened at the shark tank. Next to us stood a couple of guys having a
              heated conversation. The one guy asked his friend “Dude, what would you do
              right now if you fell in?”. Without a moment's hesitation the friend said
              “If a shark bit me, I’d just punch it in the nose”. Why does every idiot
              think that’ll work? It’s a 400 million year old apex predator. Do they
              really think sharks have a Death Star-like weakness where they just explode
              if you hit the right point?
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "25px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <img src={image6} height={160} width={195} alt="Shark" />
              </div>
              <div style={{ fontSize: "48px", marginRight: "10px", marginLeft: "10px" }}>
                {" "}
                +{" "}
              </div>
              <img src={image4} height={160} width={195} alt="Punch" />
              <div style={{ fontSize: "48px", marginRight: "10px", marginLeft: "10px" }}>
                {" "}
                ={" "}
              </div>
              <img src={image5} height={160} width={195} alt="Explosion" />
            </div>
            <p className="copytext">
              The guy answered that question with the utmost sincerity. He truly believed
              if a shark clamped down on his leg, he’d give it a knuckle sandwich and walk
              off. It was hard not to laugh out loud. Like - that’s what you’re gonna do?
              You’re gonna give this ten thousand pound killing machine a bop on the
              sniffer? A little slap on the snoot? Why not give it a Wet Willy? They hate
              that.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={
                "“If you don’t knock it off, a wicked noogie is headed your way!”"
              }
            />
            <p className="copytext">
              It’s hard enough to punch a human on land, but you’re confident you can KO a
              shark under water? A shark's nose is mere centimeters above its mouth. And
              in case you forgot, the nose comes to a point. It’s just a slippery slope
              into its mouth. You’re basically just feeding your arm to the shark.
            </p>
            <p className="copytext">
              These guys kept running through hypothetical scenarios - each more
              implausible than the next -  in which they crushed every imaginary
              challenge. I love listening to that kinda stuff. It’s the perfect way to
              identify how full of shit someone is. The quicker the answer, the fuller of
              shit.
            </p>
            <p className="copytext">
              I wanted to follow these guys around the aquarium to eavesdrop for more
              material, but we had to get to to our first mic of the week.
            </p>
            <h2 className="header">Hurry up and wait</h2>
            <p className="copytext">
              We’ve discussed this in prior posts but when there’s a lottery system for
              performing at mics, one of us always gets picked in the first five, the
              other in the last five. If you’re one of the first five performers, it’s
              great. The audience is fresh and you get useful feedback on jokes. If you’re
              one of the last five, it’s the opposite.
            </p>
            <p className="copytext">
              The two main drawbacks of going up late are 1.) everybody leaves - the only
              remaining people are the 2-3 frustrated comics still waiting for their turn,
              and 2.) there’s no anonymity, which means fewer laughs. Anonymity makes
              everyone more comfortable in their actions. If you don’t believe that, then
              you’ve never read comments on the internet.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={
                "“I’m a navy seal and I’ll kick your ass you stupid fucking pussy bitch”"
              }
            />
            <p className="copytext">
              If the connection between anonymity and laughter is still unclear, imagine
              the following. It’s Friday night and you decide catch a comedy show. The
              club is packed and dimly lit. When edgy jokes start flying, you feel
              comfortable laughing because you’re a grain of salt in a sea of strangers.
              But now think about the same comic doing the same set for a corporate gig at
              your well-lit workplace. You’re sitting at a table with your boss and
              coworkers. When the comic hits that abortion joke, do you think you’d howl
              with laughter?
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={
                <div>
                  “Oh, I guess prematurely terminating my <i>employment</i> is ok”
                </div>
              }
            />

            <p className="copytext">
              I went fourth that night, Dan C went second to last. By that time it was
              only me, the host, and the final comic in the audience. Tough to get good
              feedback with such a small crowd but that’s just how it shakes out
              sometimes. Live to die another day.
            </p>
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={400}
              captionText={"“Laugh or I’ll fucking kill you”"}
            />
            <h2 className="header">Back on the horse</h2>
            <p className="copytext">
              We did another show later in the week. It started out great - there were a
              lot of comics and non-comics in attendance. However, it pretty quickly went
              off the rails. A table of obnoxious people in the middle of the room got
              totally hammered and either heckled or too-loudly-laughed their way through
              a bunch of sets. The host set them straight several times but the damage was
              done. The crowd was alienated and a bunch of people left.
            </p>
            <p className="copytext">
              The audience was pretty sparse by the time we got up. Dan went first and
              managed to wring laughs out of the crowd. It was impressive - the energy in
              the room was totally dead and few remained, but he made it work.
            </p>
            <p className="copytext">
              I was excited to riff and playfully shit on the table who had been drinking
              and heckling. I have a couple of drinking jokes that I knew would hit. But
              when I was walking to the stage, that whole table was leaving. Without those
              people to connect with, I bombed. I ate shit for five silent minutes.
            </p>
            <h2 className="header">Kicked off the horse</h2>
            <p className="copytext">
              We went to IHOP after the show to drown our sorrows in syrup. After eating,
              we pulled into a Planet Fitness parking lot with bellies full of garbage and
              had a terrible nights sleep. By morning the van was buried in snow and we
              still had to get back to Philly. In case anyone is curious about how to
              double the duration of any trip -- just try driving in a blizzard.
            </p>
            <p className="copytext">
              Afterwards, we went to <Link to="/Pittsburgh">Pittsburgh</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
