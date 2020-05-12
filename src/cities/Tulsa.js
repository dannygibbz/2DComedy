import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image3 from "../images/Tulsa/image3.png"
import image4 from "../images/Tulsa/image4.png"
import image12 from "../images/Tulsa/image12.png"
import image8 from "../images/Tulsa/image8.png"
import image11 from "../images/Tulsa/image11.png"
import image9 from "../images/Tulsa/image9.png"
import image1 from "../images/Tulsa/image1.png"
import image2 from "../images/Tulsa/image2.png"
import image7 from "../images/Tulsa/image7.png"
import image5 from "../images/Tulsa/image5.gif"
import image6 from "../images/Tulsa/image6.png"
import image10 from "../images/Tulsa/image10.png"
import TulsaPic from "../images/Tulsa/TulsaPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={TulsaPic} width="100%" className="hideWhenBig" alt="Tulsa" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"ry7r615nk6"} />
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
              color: "black",
              fontFamily: "Fredericka the Great, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Tulsa
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
            <h2 className="header">Stranger things</h2>
            <p className="copytext">
              After the show in <Link to="/Memphis">Memphis</Link>, we gassed up the van
              and drove several hours due west. Around midnight we began that heavy-lidded
              nodding that happens when you’re fighting to stay awake behind the wheel. It
              was time to pull over for some rest.
            </p>
            <p className="copytext">
              We took the nearest exit off an anonymous stretch of highway into a
              nondescript little town. We headed straight to a Walmart parking lot and
              immediately went to sleep. When we woke early the next morning, something
              about the town felt off. There was an indescribable yet definite strangeness
              that we couldn’t quite put a finger on. We would’ve stewed longer on the
              topic but our stomachs cried out in protest.
            </p>
            <p className="copytext">
              Most tiny roadside towns along the highway have staples like IHOP, Holiday
              Inn, and Pilot gas stations, but this town had none of ‘em - which
              heightened the strange vibe. With no IHOP in town we decided to go off-brand
              and hit a Waffle House.
            </p>
            <p className="copytext">
              As we drove through town the feeling of strangeness began to reemerge.
              Looking around, everything seemed <i>almost</i> right. It felt like a time
              travel movie where one small action in the past created a slightly altered
              present. Like if there used to be a Sunoco on the corner, it’s now a Texaco.
              The cashier still has the same name, but now he’s goth.
            </p>
            <p className="copytext">
              It wasn’t until we arrived at our breakfast destination that we began to
              piece things together. On the surface, everything about the restaurant
              seemed in order. There were the familiar yellow and black text blocks
              spelling ‘Waffle’ largely on top. However beneath ‘Waffle’ did not stand the
              word ‘House’, but ‘Shoppe’. It was a knockoff of a knockoff. With nearly
              identical names and logos, it’s easy to see how people mistake it for the
              brand name. It was some real Malt-O-Meal shit.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ImageAndCaption imageUrl={image3} imageHeight={200} captionText={""} />
              <ImageAndCaption imageUrl={image12} imageHeight={200} captionText={""} />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ImageAndCaption imageUrl={image4} imageHeight={200} captionText={""} />
              <ImageAndCaption imageUrl={image8} imageHeight={200} captionText={""} />
            </div>

            <h2 className="header">Bootlegs</h2>
            <p className="copytext">
              It finally dawned on us what was so strange about this place: every business
              was a generic store-brand. The whole town was a bowl of Fruity Dino Bites.
              They didn’t have Waffle House; they had Waffle Shoppe. Looking for a Holiday
              Inn? Sorry, don’t have one - try the Vacation Lodge. Need to fuel up?
              There’s no Pilot Gas Station but ‘round the corner is an Aviator Fuel Depot.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={"“Check out my new Tayota!”"}
            />
            <p className="copytext">
              We wondered how deep it went. Did the people of this town think originals
              were bootlegs? Would they scoff if they saw a name brand? It’d be amazing if
              we asked where the AMC movie theater was and someone said “You mean the
              AMZ?”. If we inquired about showtimes for Transformers or Kung Fu Panda,
              would they respond “Huh?! You mean Transmorphers and Chop Kick Panda?”.
            </p>
            <MultiImageAndCaption
              imageUrls={[image9, image1]}
              imageHeight={380}
              captionText={"“Coming soon to a VCR near you”"}
            />
            <p className="copytext">
              With its hard-to-place identity, the town was a physical representation of
              our preconceived notions about Oklahoma. Truth be told, we didn’t know
              anything about the states identity. Geographically Oklahoma is in the south
              and center of the U.S., so we didn’t know if it’s culturally more southern
              or midwestern. The only thing we knew for sure was the state looked like a
              butcher's cleaver.
            </p>
            <p className="copytext">
              We found out Oklahomans shared the best parts of each. They were friendly
              and talkative like Midwesterners and gave the hospitality of southerners. It
              was really nice.
            </p>
            <h2 className="header">Welcome to the North Pole</h2>
            <p className="copytext">
              By the time we reached Tennessee our whole ‘stay in warm places’ plan had
              run off course. When we got to Tulsa, we had veered into iceberg infested
              waters. The place was arctic. The city was in the grips of a polar vortex
              when we arrived. Everyone had the exact same joke, too: “If you don’t like
              the weather, just wait ten minutes!”.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“Good one”"}
            />
            <p className="copytext">
              The first mic we had scheduled was downtown. When we arrived, most of the
              streets were blocked by police vehicles with flashing lights. We thought
              something terrible like an ISIS attack had happened, but then thought better
              of it. What kind of statement would they make in Tulsa, of all places?
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"“Death to Chop Kick Panda!”"}
            />
            <h2 className="header">Party Time</h2>
            <p className="copytext">
              We went to the bar where our first mic was scheduled and the bartender
              informed us the roads were closed for Mardi Gras. Police blocked the streets
              so pedestrians could enjoy the festivities. It all made sense in theory but
              in practice everything was still strange.
            </p>
            <p className="copytext">
              Usually when you think of Mardi Gras, images of crowded streets, loud music,
              dancing, brightly colored outfits, and general craziness spring to mind.
              Mardi Gras in Tulsa looked more like a zombie march. Disjointed bands of
              people in drab clothes shuffled lifelessly through the streets.
            </p>
            <ImageAndCaption imageUrl={image5} imageWidth={400} captionText={""} />
            <p className="copytext">
              Every group of friends has that one person who needs to be dragged out
              kicking and screaming. Let’s call him/her ‘Sam’. Sam got married and now
              hates being out past 9 p.m. You basically need a cattle prod to keep Sam
              moving. In Tulsa, every group looked like a bunch of Sams got together and
              were forced to go clubbing. People have marched to mass graves with more
              enthusiasm.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              Even though Mardi Gras was a moribund affair, the mic had been cancelled
              because of it. The bars must have anticipated pandemonium. Instead, bars
              were sparsely populated by middle aged people slowly drinking Bud Lights
              with the liveliness of someone ‘just following orders’.
            </p>
            <p className="copytext">
              We’re giving Tulsa a bit of shit here but we actually really liked the city.
              It had a nice downtown and the people were awesome. After the mic was
              cancelled we reached out to the local comedy club and they pointed us in the
              right direction for another show.
            </p>
            <p className="copytext">
              We ended up doing a show at the VFW and all the comics we talked to were
              great. They told us about different shows throughout the week and even
              offered us places to crash.
            </p>
            <MultiImageAndCaption
              imageUrls={[image6, image10]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              Getting to know other comics is honestly one the best - if not the best -
              part of doing comedy. We’re at a point now where we’re starting to see
              people we’ve met in other cities at shows and it’s awesome to have that big
              network.
            </p>
            <p className="copytext">
              After freezing it out in Tulsa we drove West into Arkansas. We were excited
              for our next show in <Link to="/Fayetteville">Fayetteville</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
