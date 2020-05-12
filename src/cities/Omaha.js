import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image3 from "../images/Omaha/image3.gif"
import image1 from "../images/Omaha/image1.png"
import image11 from "../images/Omaha/image11.png"
import image10 from "../images/Omaha/image10.png"
import image4 from "../images/Omaha/image4.gif"
import image7 from "../images/Omaha/image7.png"
import image8 from "../images/Omaha/image8.png"
import image5 from "../images/Omaha/image5.png"
import image9 from "../images/Omaha/image9.png"
import image2 from "../images/Omaha/image2.png"
import image6 from "../images/Omaha/image6.png"
import OmahaPic from "../images/Omaha/OmahaPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={OmahaPic} width="100%" className="hideWhenBig" alt="Omaha" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"0ast3wnwdx"} />
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
              fontFamily: "Fira Sans, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Omaha
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
            <h2 className="header">Omaha</h2>
            <p className="copytext">
              We left <Link to="/OverlandPark">Overland Park</Link> with sights set on
              Omaha and got out of Kansas just in time - a rainstorm began hammering down
              as we were leaving.
            </p>
            <p className="copytext">
              When we visited LA, we didn’t see a single celebrity. But the moment we were
              on main street Omaha, we saw Jesse Eisenberg. He was walking down the street
              with his little daughter. We hope he was there for a shoot - if he was just
              on vacation in Nebraska, we’d have to seriously question his sanity.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“Hey, I just like the Midwest, OK?!”"}
            />
            <h2 className="header">Carbs are killers</h2>
            <p className="copytext">
              We tried Omaha steaks and they were delicious. We told a local about it and
              he said “I know it tastes good but it’s loaded with saturated fats”. We
              should mention this guy recently dropped a few lbs, and there’s nothing
              worse than people that just lost weight. They constantly brag about losing
              40 pounds, yet if they hadn’t said anything everyone would’ve assumed they
              just gained 80.
            </p>
            <p className="copytext">
              Even worse, they suddenly become exercise and nutrition experts. To be
              immensely overweight and advise healthier people about proper workout
              technique takes a serious set of balls.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“Fasted cardio is the only way to go”"}
            />
            <p className="copytext">
              Obesity is really the only disease where people brag and give advice once
              they overcome it. They’re always saying things like “The secret is just keep
              walkin’!”. You never see a person who beat depression march up to a group of
              happy people saying “The secret is just keep smilin’!”.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={"“I’m so happy it HURTS”"}
            />
            <h2 className="header">Chicanery</h2>
            <p className="copytext">
              There’s all kinds of bullshit out there for weight loss and happiness. We
              saw an article recently that stated “one simple trick could boost confidence
              and reduce stress''. The magical trick? Holding a Superman for two minutes a
              day.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={300}
              captionText={"“Great, now I can live in this hell forever”"}
            />
            <p className="copytext">
              A compelling argument. Let’s see. On the one hand we have billions of
              dollars going into neuropharmacology research each year to study
              brain-chemical interaction and understand behavioral effects in the hope of
              improving mental health and quality of life.
            </p>
            <p className="copytext">
              And on the other hand, we have “Nah, fuck all that shit. Just stand like
              Superman!”. I wonder which has higher levels of efficacy. That’d be like
              tossing a paralyzed person in the ocean and saying “Don’t worry, just stand
              like Aquaman!”
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“It’s working!”"}
            />
            <h2 className="header">The Zoo</h2>
            <p className="copytext">
              Omaha has a zoo that everyone was very proud of. We checked it out and it
              was nice - but the best part of any public place is people watching and
              listening. We were standing outside the aquarium as a couple was discussing
              how smart all the fish were. I’m sorry, what?
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={300}
              captionText={"“Heheheh I went poopy!”"}
            />
            <p className="copytext">
              Animals aren’t smart. They’re just not, at least in relation to humans. It’s
              not even close. Let’s take the dolphin for example. Dolphins are supposedly
              the most intelligent creature in existence. Why? “Because they can
              communicate with other dolphins and have sex for pleasure”. That’s the bar?
              That literally describes every dude on planet Earth.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={300}
              captionText={"Check out the mating call of this genius"}
            />
            <p className="copytext">
              We seriously don’t understand why people think dolphins are so great. They
              act like dolphins can cure cancer or go to the moon. If dolphins ever build
              sophisticated underwater civilizations, I’ll be impressed. If they reverse
              engineer SCUBA, come to land, study humans, and open up “Landworld” with
              human exhibits under the sea, I’ll be impressed. Until then, I’ll wait for
              these dipshits to figure out how not to choke themselves on plastic.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={
                "“Wow, what’s that? I’d better go ram my snout into it to check”"
              }
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              We featured on a monthly showcase at a club called The Backline. It was a
              nice spot where they hold standup, sketch, and improv shows.
            </p>
            <ImageAndCaption imageUrl={image9} imageWidth={400} captionText={""} />
            <p className="copytext">
              The host kicked the show off nicely by connecting with local jokes. The next
              comic was a woman who hilariously described the weird shit she encounters in
              the hood. Dan and I went after her, and then it was the closer. The closer
              was a comic out of New York who’d been on Conan, Last Comic Standing, and a
              bunch of other shows. He talked about how underwhelming the Omaha zoo was.
            </p>
            <MultiImageAndCaption
              imageUrls={[image2, image6]}
              imageHeight={145}
              captionText={""}
            />
            <p className="copytext">
              After Omaha we began the long haul to{" "}
              <Link to="/Gillette">Gillette, Wyoming</Link>. The first time we passed
              through Wyoming, we didn’t have any shows. All we managed to do was nail a{" "}
              <Link to="/SiouxFalls">hawk</Link> with the van. This time through we were
              opening shows for comedians out of LA and New York.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
