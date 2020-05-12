import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
// import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image7 from "../images/Casper/image7.gif"
import image2 from "../images/Casper/image2.png"
import image5 from "../images/Casper/image5.gif"
import image4 from "../images/Casper/image4.gif"
import image10 from "../images/Casper/image10.gif"
import image3 from "../images/Casper/image3.gif"
import image11 from "../images/Casper/image11.gif"
import image1 from "../images/Casper/image1.png"
import image9 from "../images/Casper/image9.png"
import image6 from "../images/Casper/image6.png"
import image8 from "../images/Casper/image8.png"
import CasperPic from "../images/Casper/CasperPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={CasperPic} width="100%" className="hideWhenBig" alt="Casper" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"f6wtfpw8us"} />
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
              fontFamily: "Delius Unicas, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Casper
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
            <h2 className="header">Downtime</h2>
            <p className="copytext">
              Our scheduling gets crazy from time to time. There are weeks when we hit a
              new city every day, hitting the road as soon as shows ends. After{" "}
              <Link to="/Gillette">Gillette</Link>, we found ourselves without a pressing
              deadline for the first time in a month. We didn’t have to be anywhere for 4
              days and we didn’t know what to do with our newfound free time.
            </p>
            <ImageAndCaption imageUrl={image7} imageWidth={400} captionText={""} />
            <p className="copytext">
              We kicked around some ideas with the Greenroom guys and decided to chill out
              in an RV park for a couple of days. We chose a place outside Buffalo,
              Wyoming that sat on the beautiful Lake De Smet.
            </p>
            <ImageAndCaption imageUrl={image2} imageWidth={400} captionText={""} />
            <p className="copytext">
              This place was out there. It definitely provided an unplugged, off the grid
              feel. It was basically a camping trip - the only difference being our tent
              (van) was made of aluminum. It was nice to unwind and put a hectic couple of
              weeks behind us. We did all the traditional camping stuff: cooking over
              fire, playing poker, and getting eaten alive by mosquitoes.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“We should do this more often”"}
            />
            <p className="copytext">
              The park had no frills. We were ‘roughing it’ without wifi or showers. The
              only thing they did have was electric hookups -- and we heard the constant
              hum of voltage coursing through the power lines all day and night. We
              decided to keep our distance from the electrocution waiting to happen.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“Is this where we plug our stu….?”"}
            />
            <h2 className="header">The friendly town</h2>
            <p className="copytext">
              After a few days of camping in the boonies, we were in desperate need of
              bathing. We smelled bad enough to cause immediate distress to anyone in a
              five foot radius.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“I think that terrorist dropped nerve gas!”"}
            />
            <p className="copytext">
              After cleaning ourselves up at Planet Fitness we decided to learn more about
              Casper. The first interesting fact was Casper should’ve been spelled
              ‘Caspar’ to honor Fort Caspar and Lt. Caspar Collins, but someone botched it
              when the town's name was officially registered.  Gotta love a town that
              could easily fix an error but decides not to out of sheer laziness.
            </p>
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <h2 className="header">Plague upon sinners</h2>
            <p className="copytext">
              Some weird things were happening around town, and it all began on the drive
              in. There were thousands and thousands of grasshoppers all over the place.
              Everywhere we went the streets and buildings were crawling with them. We
              decided to go inside and get away from the omnipresent vermin. It got
              weirder from there.
            </p>
            <p className="copytext">
              We stood in line at Q’doba for maybe 30 seconds before the power blew out
              with a loud “Whoom”. The whole place blacked out. We went across the street
              to a Five Guys but it was the same deal - no power. Not about to give up the
              search for food, we hopped in the van and began driving around to find
              somewhere with running electricity.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={"“This is probably fine”"}
            />
            <p className="copytext">
              As we drove through town we realized even the traffic lights were out. The
              lack of traffic control left the streets in mass chaos and confusion. Horns
              were honking, accidents nearly occurred every 50 feet, and random people
              shambling through the streets. It looked like a scene out of The Walking
              Dead.
            </p>
            <p className="copytext">
              It felt like the Plagues of Egypt. We were covered in boils (OK - mosquito
              bites, but just go with it). Then came the swarms of grasshoppers. This was
              followed by the blackout that left everyone in darkness. The only thing
              missing was a firstborn massacre.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={
                "“Before the spear pierces your heart, just remember God loves you”"
              }
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The show was at Gruner Brothers Brewing. The bar, restaurant, and
              surrounding food trucks all did a great job of marketing the show - it
              seemed like the whole city showed up. The online tickets sold out quickly,
              as did the remaining tickets at the door. The place was packed.
            </p>
            <ImageAndCaption imageUrl={image9} imageWidth={400} captionText={""} />
            <p className="copytext">
              Dan and I opened the show and did 12 minutes each, then Cody and James each
              did 45. The crowd was amazing. In small towns where comedy isn’t readily
              available, the audiences are always awesome. They’re excited to go out and
              have fun - unlike, say, a comics mic in NYC.
            </p>
            <ImageAndCaption imageUrl={image6} imageWidth={400} captionText={""} />
            <ImageAndCaption imageUrl={image8} imageWidth={400} captionText={""} />
            <p className="copytext">
              The people always have a blast and tell us as much after the shows. They
              always come up and say “thanks”  or talk about how much they laughed. It
              feels good to serve laughs to underserved markets. It’s our version of a
              soup kitchen.
            </p>
            <p className="copytext">
              When the show was finished we thanked Cody and James for having us on their
              shows and went our separate ways. We had a long haul ahead of us to{" "}
              <Link to="/Chicago">Chicago</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
