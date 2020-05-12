import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
// import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import image2 from "../images/Raleigh/image2.png"
import image1 from "../images/Raleigh/image1.png"
import image3 from "../images/Raleigh/image3.png"
import RaleighPic from "../images/Raleigh/RaleighPic.png"
import BackButton from "../BackButton.js"
export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={RaleighPic} width="100%" className="hideWhenBig" alt="Raleigh" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"5z9vfbryd3"} />
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
              fontFamily: "Graduate, cursive",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Raleigh
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
            <h2 className="header">Summer nights</h2>
            <p className="copytext">
              The temperature was a balmy 70 degrees when we pulled into Raleigh, and it
              seemed like the whole town was out. Crowds of people were drinking and
              laughing on every corner. The energy was vibrant and a sense of positivity
              floated through the air.
            </p>
            <p className="copytext">
              <b>We were not part of it</b>. As we drove through the city, happiness and
              positivity splattered against the van's windshield like June bugs. We were
              gearing up for the antithesis of vibrant energy -- open mic.
            </p>
            <p className="copytext">
              We always look suspicious in the van, but its the worst at night. Instead of
              using shades that sit flush against the windows, we hang towels over them.
              When we turn the lights on inside, an alien glow radiates from the corners
              of each window like we’re enriching plutonium.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={
                "“I guess you kids aren’t ready for this reference yet, but your parents are gonna love it”"
              }
            />

            <h2 className="header">PTSD</h2>
            <p className="copytext">
              Seeing everyone <i>else</i> have a great time brought Dan C back to his
              college days in Pittsburgh. His flashbacks became too strong and he had to
              let the emotions out. In his own words ….
            </p>
            <p className="copytext" style={{ paddingLeft: "10%", paddingRight: "10%" }}>
              <i>
                I studied math and computer science in school, which is a fancy way of
                saying that sex was for other people. I programmed a lot, and a bunch of
                my time was spent isolated in computer labs or my bedroom. The closest
                I’ve ever come to a breakdown was watching the Rascal Flatt’s “Summer
                Nights” music video after coding for like 12 hours in a smelly basement on
                campus. Beaten down from physical and mental exhaustion, I openly wept at
                the sight of young, happy, beautiful people partying on a beach. But
                luckily things are different now. Now, I live in a smelly van with another
                heterosexual man, and I shower at a Planet Fitness.
              </i>
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={500}
              captionText={"“Yeah, but do they know Javascript?”"}
            />
            <h2 className="header">On to the show</h2>
            <p className="copytext">
              The mic was at a sports bar where the layout was perfect for comedy. There
              was a stage (not directly next to the entrance,{" "}
              <Link to="/Richmond">like in Richmond</Link>) and most of the seats faced
              front. The host was also from Philadelphia so it was awesome to bond before
              the show. There was an Eagles game on TV at the time, which provided a
              wellspring of off-the-cuff crowdwork material to tap into. As there were
              many sports fans in the audience, there was plenty of playful banter going
              on.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“Playful”"}
            />
            <p className="copytext">
              The small space created a strong audience/comic bond, and everyone was on
              the same wavelength. In some rooms, asking the few females in attendance
              about pussy eating could ruin the energy. Not here. Everyone was on board
              for even the filthiest of crowd work.
            </p>
            <p className="copytext">
              The host did a great job of keeping the audience entertained between sets,
              too. At one point he got into a heated ‘debate’ with a patron about sports.
              Right when we thought it might escalate to a physical altercation, they
              laughed and hugged it out.
            </p>
            <p className="copytext">
              After connecting with a few comedians we packed up our stuff and headed to{" "}
              <Link to="/ChapelHill">Chapel Hill</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
