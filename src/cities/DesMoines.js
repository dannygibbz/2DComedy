import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image10 from "../images/DesMoines/image10.png"
import image12 from "../images/DesMoines/image12.gif"
import image9 from "../images/DesMoines/image9.gif"
import image3 from "../images/DesMoines/image3.gif"
import image4 from "../images/DesMoines/image4.png"
import image11 from "../images/DesMoines/image11.gif"
import image7 from "../images/DesMoines/image7.gif"
import image8 from "../images/DesMoines/image8.gif"
import image2 from "../images/DesMoines/image2.png"
import image13 from "../images/DesMoines/image13.png"
import image1 from "../images/DesMoines/image1.png"
import image6 from "../images/DesMoines/image6.png"
import image5 from "../images/DesMoines/image5.gif"
import DesMoinesPic from "../images/DesMoines/DesMoinesPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={DesMoinesPic} width="100%" className="hideWhenBig" alt="Des Moines" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"29rxn051oc"} />
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
              fontFamily: "Libre Franklin, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Des Moines
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
            <h2 className="header">Field of dreams</h2>
            <p className="copytext">
              We want to start with a joke about Iowa, so lend us your ears. On second
              thought, it’s a bit too <i>corny</i>!
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"We are a-maize-ing writers"}
            />
            <p className="copytext">
              OK, OK, enough with the puns. We know they are are cringeworthy but the
              thing is this: our joy is derived from your agony. We love picturing your
              expression when reading them.
            </p>
            <ImageAndCaption imageUrl={image12} imageWidth={400} captionText={""} />
            <p className="copytext">
              We’re also making corn jokes because Iowa was one of the few states where
              it’s reputation and our preconceived notions were both 100% accurate -- the
              whole place really was a big ol’ cornfield. We find most state reputations
              to be exaggerated, but the rumors about Iowa were more than mere{" "}
              <i>kernels</i> of truth.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={"Ok, we swear that’s the last pun"}
            />
            <h2 className="header">R & R</h2>
            <p className="copytext">
              Des Moines was about four hours south of{" "}
              <Link to="/Minneapolis">Minneapolis</Link>. We were ready to hit the sack
              when we arrived, we just needed a nice place to park. We at first found a
              secluded industrial park that seemed like a winner, but it bordered a
              shipping and receiving hub for truckers who apparently only drove in
              reverse. It was LOUD.
            </p>
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <p className="copytext">
              We drove about a half mile out of the complex but could still hear the
              goddamn reverse beeps, so we moved to a Walmart and picked an empty corner
              of the lot. Not two minutes had passed before some fat slob grinded his rust
              bucket of a truck to a halt and blasted music. He just sat in the driver
              seat smoking cigarettes, cause why not?
            </p>
            <p className="copytext">
              Without fail, hordes of people will park next to us the moment we stop
              ANYWHERE. It’s a phenomenon straight outta nature.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={300}
              captionText={"‘Straight Outta Nature’ would’ve been better than ‘Antz’"}
            />
            <p className="copytext">
              When bees sting, pheromones are released that attract and signal other bees
              to swarm a target. The exact same thing happens when we park the van. The
              moment our engine shuts off, some kind of radio frequency is blasted out
              over the waves and signals everyone within 5 miles to park next to us and
              have a party.
            </p>
            <p className="copytext">
              We lifted anchor for the next spot once the shopping carts began crashing .
              We finally settled in an apartment complex parking lot not far from Walmart.
               We were about to drift off into dream land when the piercing screech rocked
              us awake. It was coyotes fucking.
            </p>
            <h2 className="header">Breaking down</h2>
            <p className="copytext">
              The following morning we awoke with a service engine light in the van. A few
              months yet remain before all 50 states are reached, so we make it a point to
              address automotive issues as soon as they spring up. Once the trip is
              finished we can drive the van over a cliff, but until then it’s our sweet
              little baby.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ImageAndCaption
                imageUrl={image7}
                imageHeight={180}
                captionText={"The van right now"}
              />
              <ImageAndCaption
                imageUrl={image11}
                imageHeight={180}
                captionText={"The van in a few months"}
              />
            </div>
            <p className="copytext">
              We used a diagnostic tool and discovered an error code for the catalytic
              converter. Neither of us possess enough automotive expertise to fix it
              ourselves, so we took the van to a mechanic. After a full day of waiting for
              its repair, the bright guys at the shop said, “We turned off that engine
              light for ya”.
            </p>
            <p className="copytext">
              They didn’t fix the problem, they just turned the warning sign off. It’s
              like a firefighter running out of your burning house to tell you “we’re all
              good, I turned the smoke detector off”.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“Problem solved!”"}
            />
            <h2 className="header">Rescue me</h2>
            <p className="copytext">
              We did a show at a bar called Lefty’s. The name and logo came from the
              owners three-legged dog who served as a mascot for the establishment.
              Despite missing the right leg, Lefty was still an ebullient sweetheart. To
              help paint a clearer picture, Lefty resembled the archetypal rescue dog.
            </p>
            <p className="copytext">
              We really wish women picked men the same way they pick rescue dogs. When it
              comes to rescue dogs it’s like the worse, the better. We’ve met so many
              girls who are like “Hey! This is my rescue, Woofy! He’s great - he has three
              legs, one eye, and two assholes. Oh, don’t scratch him - he bleeds. And
              forget about direct eye contact, he’s got a bit of a temper. Isn’t he the
              best?”
            </p>
            <p className="copytext">
              That would never happen with dudes. No girl would excitedly introduce her
              new boyfriend like “Hey! This is my new boyfriend, Rusty! He has dementia,
              two glass eyes, and violent night terrors. Wakes up kicking and punching.
              Isn’t he the best?”.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“He shits on the floor but he’s getting better”"}
            />
            <p className="copytext">
              We love dogs, but we can all agree that rescue dogs are not <i>noble</i>
               breeds by any stretch. It’s never a toss-up between rescuing a King James
              Spaniel or Great Dane, it’s more like “Should we get the Bull-huahua or the
              Pit-doodle?”. It’s always a mutt that resulted from a canine dumpster orgy.
            </p>
            <ImageAndCaption imageUrl={image13} imageWidth={400} captionText={"“Reff”"} />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The show was in bucket format (random selection). We hadn’t done a bucket
              show in months, but the universe followed the standard operating procedure
              without missing a beat - one of us performed in the first five, the other in
              the last five.
            </p>
            <MultiImageAndCaption
              imageUrls={[image1, image6]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              A surprising number of non-comics randomly filtered in for brief stretches
              throughout the show. They’d watch a few sets and then head out because one
              in four comedians would walk the room. They’d have a bad set or engage in
              uncomfortable crowd work and the audience members would leave. It was the
              first time we’d ever seen a room get walked more than once.
            </p>
            <ImageAndCaption imageUrl={image5} imageWidth={400} captionText={""} />
            <p className="copytext">
              There were a lot of comics at the mic, too. You can always spot the veterans
              vs newbies by where they sit. First timers cluster near the stage whereas
              veterans tuck themselves in the wayyyy back of the room.
            </p>
            <h2 className="header">Until next time</h2>
            <p className="copytext">
              After the show we hung out and connected with some of the comics. The host,
              also named Dan, mentioned he had a few ‘Dan’ comedian friends out of
              Davenport and the next time we come through he’ll put on a Dan-A-Palooza for
              us all. So watch out, Iowa! We’ll be back sometime after our trip to{" "}
              <Link to="/KansasCity">Kansas City</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
