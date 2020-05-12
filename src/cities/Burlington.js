import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
// import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image10 from "../images/Burlington/image10.gif"
import image2 from "../images/Burlington/image2.png"
import image8 from "../images/Burlington/image8.png"
import image4 from "../images/Burlington/image4.gif"
import image5 from "../images/Burlington/image5.png"
import image7 from "../images/Burlington/image7.png"
import image1 from "../images/Burlington/image1.png"
import image9 from "../images/Burlington/image9.png"
import image6 from "../images/Burlington/image6.png"
import image3 from "../images/Burlington/image3.png"
import BurlingtonPic from "../images/Burlington/BurlingtonPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={BurlingtonPic} width="100%" className="hideWhenBig" alt="Burlington" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"3lizttakjn"} />
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
              color: "#424242",
              fontFamily: "Gayathri, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Burlington
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
            <h2 className="header">Onward to greener pastures</h2>
            <p className="copytext">
              Bounding out of <Link to="/Detroit">Detroit</Link>, we had two options for
              reaching Burlington, Vermont. We could cut through Canada and get there in
              10 hours or loop around Ohio, Pennsylvania, and New York in 12. The choice
              was easy. We were set to drink Molson and egregiously overuse “Eh?” with our
              neighbors to the North until we remembered our passports were in Philly.
            </p>
            <ImageAndCaption imageUrl={image10} imageWidth={400} captionText={""} />
            <p className="copytext">
              We’re actually glad we took the long route - it led us past an amazing truck
              stop called Betty Beavers. The mascot was a patriotic beaver with enormous
              3D tits, so really we had to stop. Whoever made the decision to fabricate 3D
              breasts on the sign is a hero. He gave courage to the throngs of weirdos out
              there who feel rodents need to be sexier.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“She’d get my nut”"}
            />
            <h2 className="header">Pit stop</h2>
            <p className="copytext">
              After 10 hours we stopped in an anonymous northeastern New York town to
              rest. It was one of those dreary little burgs that appear in every episode
              of COPS. Every home looked like a converted meth lab, and as per usual our
              lodging was a veritable opium den.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“Housekeeping!”"}
            />
            <p className="copytext">
              Right after checking in we went to the van to grab our stuff, and sure
              enough, a scabby couple slid out of a rusted jalopy right next to us. We
              exchanged a look that sarcastically conveyed “I wonder if they’re high on
              heroin”. Before we could finish that thought, the woman began vomiting in
              the street.
            </p>
            <ImageAndCaption imageUrl={image4} imageWidth={400} captionText={""} />
            <p className="copytext">
              With that, we decided to grab dinner. We weren’t expecting many options in
              this tiny place, but after traveling to a million cities and towns we’ve
              realized this one truism: every town worth its salt has a Chinese restaurant
              and/or an Irish pub.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={300}
              captionText={".... and sometimes it’s the same place."}
            />
            <p className="copytext">
              We only had to walk a single block before spotting a sign with a glowing
              Great Wall. The shop, though clearly not a palace as labeled, was the only
              thing open in the strip mall. Flashing neon lights drew us in like moths to
              flame.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={300}
              captionText={"This exact restaurant exists in every town in the world"}
            />
            <p className="copytext">
              After dinner, we went back to our dingy little hovel and got a terrible
              night's sleep. It wasn’t all bad, though - we got free breakfast (stale
              bread and spoiled orange juice).
            </p>
            <h2 className="header">Guest or pest</h2>
            <p className="copytext">
              Some may ask - well if you don’t like hotels that much, why don’t you stay
              with friends? We do, but we don’t have friends in every single state. That
              would be great, but oftentimes it’s not an option. And anyway, crummy hotels
              are occasionally better than friends houses.
            </p>
            <p className="copytext">
              Staying at friends houses is amazing most of the time … but it can be a bit
              awkward. People are rummaging around at all hours of the night. You can’t
              sleep. You don’t really want to take a shit. You don’t know if you’re being
              a bother and they’re just being polite. You don’t have a key, so you stay
              when they stay, leave when they leave, and eat when they eat. You’re
              basically their smelly new pet.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={300}
              captionText={"“Come back any time”"}
            />
            <h2 className="header">A-maze-ing</h2>
            <p className="copytext">
              We finally got to Burlington on a shitty, rainy Saturday. The show was in a
              labyrinthine building that used to be a factory. Rain was pouring down as we
              scurried in circles around the building, searching desperately for the door
              that led to the ‘comedy club’ suite. We started pounding on any and all
              doors to ask where the hell this place was, and no one had even heard of it.
              We were about to give up when we saw people who looked like comics enter a
              tiny back alley door. We followed them and sure enough, they were comedians.
            </p>
            <p className="copytext">
              The show was a monthly showcase, and it was one of the smallest shows we did
              on our entire cross country trip. With the shitty weather, the only people
              who bothered to come out were a lady (the host), and two dudes. With Dan and
              I, the grand total of this packed, sold out affair was a whopping FIVE.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={"“Are there any couples in here?”"}
            />
            <p className="copytext">
              The host told us she was an improv’er but agreed to host the mic for a
              friend who was sick. Of the other two in attendance, one guy was an aspiring
              standup/ventriloquist, and the other guy said he was just there to speak
              into a microphone (and he wasn’t kidding). It was definitely not what we
              expected for a Saturday showcase in Vermont's biggest city, but that’s the
              way it goes sometimes.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              With such a small turnout, there was no point in running any ‘tested’
              material. We used our time to comment on the venue, the town, the people in
              attendance, and anything to make the show real. We also tried out half-baked
              bits to determine if they had legs.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={
                "You know it’s a relaxed standup show when the comedian sits down"
              }
            />
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <p className="copytext">
              We found out after the show that everyone in Burlington was at a comedy
              competition down the road - something like ‘Vermont’s funniest person’.
              Apparently about 60 people were competing, which explained why this show and
              the city in general felt like a ghost town.
            </p>
            <p className="copytext">
              After saying our goodbyes we began our journey to{" "}
              <Link to="/Fairfield">Fairfield, CT</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
