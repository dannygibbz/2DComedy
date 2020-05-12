import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image2 from "../images/Huntington/image2.gif"
import image8 from "../images/Huntington/image8.gif"
import image14 from "../images/Huntington/image14.gif"
import image9 from "../images/Huntington/image9.gif"
import image1 from "../images/Huntington/image1.gif"
import image4 from "../images/Huntington/image4.gif"
import image11 from "../images/Huntington/image11.png"
import image12 from "../images/Huntington/image12.gif"
import image10 from "../images/Huntington/image10.png"
import image5 from "../images/Huntington/image5.png"
import image13 from "../images/Huntington/image13.png"
import image7 from "../images/Huntington/image7.png"
import image3 from "../images/Huntington/image3.png"
import image6 from "../images/Huntington/image6.png"
import HuntingtonPic from "../images/Huntington/HuntingtonPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={HuntingtonPic} width="100%" className="hideWhenBig" alt="Huntington" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"6m11gqe4zy"} />
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
              fontFamily: "Roboto Condensed, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Huntington
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
            <h2 className="header">Bordertown</h2>
            <p className="copytext">
              We began our trip to Huntington right after the show in{" "}
              <Link to="/Louisville">Louisville</Link>. We knocked out the three hour
              drive and pulled into town around 1 in the morning. Huntington is an
              interesting spot. It’s mashed into a corner of the map where West Virginia,
              Ohio, and Kentucky come together.  If you go right instead of left or North
              instead of South, you can find yourself in an entirely new state. Most of
              the time we hadn’t the faintest idea where we were.
            </p>
            <ImageAndCaption imageUrl={image2} imageWidth={400} captionText={""} />
            <p className="copytext">
              Huntington was close to other cities we wanted to hit and we’re glad we
              found it - because as far as standup in West Virginia goes, it was pretty
              sparse. *If any WV comics are reading this and saying “That’s not true,
              we’ve got a lot!”, then email us and we’ll come back!*.
            </p>
            <h2 className="header">Accomodation</h2>
            <p className="copytext">
              A heat wave was still in full swing when we arrived. It was characterized by
              that thick, oppressive humidity that transforms you into a slimy mess the
              moment you step outside .
            </p>
            <ImageAndCaption imageUrl={image8} imageWidth={400} captionText={""} />
            <p className="copytext">
              We spent the first night sweating it out in the van, but had to bite the
              bullet and get a hotel room the following day. When we pulled up to the
              hotel and saw a cast of shady characters loitering around outside, we
              thought we might <i>actually</i> bite a bullet.
            </p>
            <p className="copytext">
              We walked past some hoods on the way to our room and overheard a discussion
              about their homie who’d just been arrested for “blasting someone with a
              shotgun”. The whole conversation was alarmingly casual given the grave
              nature of <i>murder</i>. After hearing of the arrest, one of the guys
              commented incredulously “I heard the dude aint even die tho!” as if that
              would exonerate his buddy for the shooting.
            </p>
            <ImageAndCaption
              imageUrl={image14}
              imageWidth={400}
              captionText={"“You’re fine. Rub some dirt on itl”"}
            />
            <h2 className="header">Cool off, stay a while</h2>
            <p className="copytext">
              We couldn’t get into our room fast enough. The door was stuck and we
              basically had to bust it down. A splintered patch of wood where the sliding
              lock <i>used to</i> be indicated we weren’t the first ones to enter that
              way.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={"“Knock knock!”"}
            />
            <p className="copytext">
              When the lights came on, a cluster of roaches panicked and scattered in
              every direction. We felt like police busting an underage party.
            </p>
            <ImageAndCaption imageUrl={image1} imageWidth={400} captionText={""} />
            <p className="copytext">
              We managed to stomp a few but most escaped into cracks and crevices,
              allowing our imaginations to run wild all night and see bugs in every
              shadow.
            </p>
            <ImageAndCaption imageUrl={image4} imageWidth={400} captionText={""} />
            <p className="copytext">
              On the bright side, the bathroom lights didn’t work at all. The entire
              switch box was ripped out of the wall and hanging by a few scant wires,
              leaving us blissfully unaware of any insectile companions.
            </p>
            <ImageAndCaption imageUrl={image11} imageWidth={400} captionText={""} />
            <p className="copytext">
              It was like a sensory deprivation tank meant to remove all senses and
              emotions except for extreme anxiety.
            </p>
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={400}
              captionText={"“They’re out of towels”"}
            />
            <p className="copytext">
              We wanted to notify the receptionist about the broken outlet to avoid being
              charged $50 dollars, but when we tried to call the front desk we discovered
              the phone was not connected. It wasn’t unplugged, there were just NO WIRES
              attached to the phone or the wall. Everything except the roaches was fake or
              didn’t work - it felt like we were in Pyongyang.
            </p>
            <h2 className="header">Move along, nothing to see here</h2>
            <p className="copytext">
              The next day as we were walking out we saw police officers questioning two
              obvious prostitutes about what they were doing hanging around the hotel. I
              overheard one of the ladies saying to the officer “No, I wouldn’t do that.
              I’m not that kinda girl”.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={
                "“What on Earth would ever have given you that idea, officer?”"
              }
            />
            <p className="copytext">
              We’re not making fun of these women for being prostitutes - we’re making fun
              of them for being so obvious and not having a better excuse.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“Oh these? You misunderstand, I use them for knitting”"}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              We co-headlined a show at Black Sheep Burritos and Brews. It was a great
              spot - the restaurant occupied the left half of the building and the right
              half was all tables and stage. Some bar/brewery shows are rinky-dink -- this
              was not. The stage and sound system were professional and the show was
              really well-attended.
            </p>
            <p className="copytext">
              Before the show began we hung out with the other comics on the bill. They
              were really friendly and welcoming - the scene in Huntington seemed really
              tight. Sometimes we’ll get to a city and sense lingering drama or other
              unpleasantness - we didn’t get any of that here.
            </p>
            <p className="copytext">
              One of the comedians we met before the show was Billy Summers. When he’s not
              performing, he’s out and about taking photographs. Shoutout to Billy for
              hooking us up with these kickass pictures from the show!
            </p>
            <MultiImageAndCaption
              imageUrls={[image13, image6, image7, image3]}
              imageHeight={180}
              captionText={""}
            />
            <p className="copytext">
              Our next stop was the Comedy Zone in{" "}
              <Link to="/Greenville">Greenville</Link>. It was a bit out of the way, but
              we hadn’t yet performed in South Carolina. We began our trip in January with
              the secondary goal of escaping the winter cold. In our haste to reach the
              beaches of Florida we drove clean through SC. This was our chance to finally
              circle back and scratch <Link to="/Greenville">SC</Link> off the list.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
