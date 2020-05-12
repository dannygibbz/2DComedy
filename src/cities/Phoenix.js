import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image3 from "../images/Phoenix/image3.png"
import image10 from "../images/Phoenix/image10.png"
import image7 from "../images/Phoenix/image7.png"
import image9 from "../images/Phoenix/image9.png"
import image4 from "../images/Phoenix/image4.png"
import image2 from "../images/Phoenix/image2.png"
import image1 from "../images/Phoenix/image1.png"
import image5 from "../images/Phoenix/image5.png"
import image6 from "../images/Phoenix/image6.gif"
import image8 from "../images/Phoenix/image8.gif"
import PhoenixPic from "../images/Phoenix/PhoenixPic.png"

export default function ThisCity(props) {
  let isMobile = window.innerWidth < 768
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        {isMobile ? (
          <img src={PhoenixPic} width="100%" alt="Phoenix" />
        ) : (
          <WistiaEmbed hashedId={"uzgt554p7p"} />
        )}

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
              fontFamily: "Stylish, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Phoenix
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
            <h2 className="header">Phoenix Rising</h2>
            <p className="copytext">
              After <Link to="/Tucson">Tucson</Link>, we headed to Phoenix. Temperatures
              were sizzling, but the locals were quick to remind us that it was a{" "}
              <b>dry heat</b>. The heat didn’t bother locals one bit. They were out in
              droves and we noticed no one was walking -- everyone was riding a longboard.
              We wanted so badly to see a stone lodge in a wheel and send someone
              flyinging headlong into a mailbox, but no luck.
            </p>
            <p className="copytext">
              Those who weren’t on longboards were riding those electric scooters that are
              popping up in more and more cities. We couldn’t walk down any sidewalk
              without people zipping right up our assholes. We even saw a couple riding
              one together, smiling and laughing as their hair blew in the wind. It looked
              like one of those happy photos that sit on an easel right next to caskets of
              people who die tragically young.
            </p>
            <p className="copytext">
              Luckily, we had friends in Phoenix who let us crash at their place. It was a
              saving grace, because the van was unbearable. After sitting in the sun, the
              interior was an inferno.
            </p>
            <h2 className="header">DIY!</h2>
            <p className="copytext">
              We’ve talked about it before, but we didn’t do a great job insulating the
              van (read: we failed miserably). The purpose of insulation is to reduce the
              amount of heat that gets in on hot days and prevent heat loss on cold days.
              Put another way, it’s supposed to keep the outside elements out.
            </p>
            <MultiImageAndCaption
              imageUrls={[image3, image10, image7]}
              imageHeight={380}
              captionText={"“This is gonna work great!”"}
            />
            <p className="copytext">
              If we had done nothing, the van probably would’ve been better off. We’re not
              sure how, but we managed to create reverse-insulation where outside
              temperatures are amplified inside. If it’s cold outside, the van is arctic.
              If it’s hot outside, the van is volcanic -- hot enough to make even the most
              sun-baked Arizonan blush.
            </p>
            <ImageAndCaption imageUrl={image9} imageWidth={400} captionText={""} />
            <p className="copytext">
              In terms of temperature, our van only has two seasons: summer and winter.
            </p>
            <ImageAndCaption imageUrl={image4} imageWidth={400} captionText={"Summer"} />
            <ImageAndCaption imageUrl={image2} imageWidth={400} captionText={"Winter"} />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              Arizona doesn’t observe daylight savings time, and they’re dicks about it.
              We read an article from the Mayor of Arizona that could be roughly
              paraphrased “You guys need to SAVE your sunlight?! Hahaha. What pussies. I
              bet you have wet heat”.
            </p>
            <p className="copytext">
              We needed to figure out what time the shows were actually at. In Arizona,
              different territories and reservations make their own determination about
              daylight savings time. This means you can drive from one part of the state
              into another and be either an hour early or hour late.
            </p>
            <p className="copytext">
              We found the correct time and went to the show, which was awesome. It was a
              showcase competition for a spot at the Big Pine Comedy festival. We were on
              the show as features - not competitors - so it was an easy, stress-free
              night. The club was beautiful and the crowd was great - we couldn’t have
              asked for more.
            </p>
            <MultiImageAndCaption
              imageUrls={[image1, image5]}
              imageHeight={380}
              captionText={""}
            />
            <h2 className="header">Fix ‘er up</h2>
            <p className="copytext">
              We had planned to do another comedy showcase the following night, but the
              vans side door crapped out an hour before the show. The sliding mechanism
              snapped off and the door was hanging on by a thread. If we decided to drive
              before fixing it, the door would’ve fallen off and skittered off into
              traffic. It was a tough choice, but we had to forgo the showcase to fix the
              door.
            </p>
            <ImageAndCaption imageUrl={image6} imageWidth={400} captionText={""} />
            <p className="copytext">
              It took two hours, but we got the door to a point where it wouldn’t fly off.
              We muscled the sliding mechanism back into its track and got the locking
              lever to connect. The door almost closed perfectly, but a slight gap
              remained open. We had to order a few parts the next day to fully complete
              the job.
            </p>
            <p className="copytext">
              When we finished, we were covered in oil and grime from the fix and looking
              particularly manly. Dan wanted to send a picture to his dad in this macho
              state to prove that he’s not gay, so we had our friends snap a photo. Only
              by this point, the sun was setting - so instead of looking like manly men,
              we looked like two greased-up lovers enjoying a romantic sunset. Needless to
              say, he didn’t send it.
            </p>
            <p className="copytext">
              Once the van was roadworthy, we embarked on the the six and a half hour
              drive to <Link to="/Albuquerque">Albuquerque</Link>. Cruising at a solid 80
              mph the whole way, the mild crack in the door funneled every bit of cold air
              directly inside the van. Against all odds, it froze the van more quickly
              than our reverse insulation.
            </p>
            <ImageAndCaption imageUrl={image8} imageWidth={400} captionText={""} />
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
