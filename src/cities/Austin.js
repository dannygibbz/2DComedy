import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image11 from "../images/Austin/image11.png"
import image5 from "../images/Austin/image5.png"
import image7 from "../images/Austin/image7.png"
import image8 from "../images/Austin/image8.png"
import image10 from "../images/Austin/image10.png"
import image13 from "../images/Austin/image13.png"
import image1 from "../images/Austin/image1.png"
import image12 from "../images/Austin/image12.jpg"
import image3 from "../images/Austin/image3.jpg"
import image4 from "../images/Austin/image4.jpg"
import image6 from "../images/Austin/image6.png"
import image9 from "../images/Austin/image9.png"
import image2 from "../images/Austin/image2.png"
import AustinPic from "../images/Austin/AustinPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={AustinPic} width="100%" className="hideWhenBig" alt="Austin" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"f68oqzogw4"} />
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
            Austin
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
            <h2 className="header">Let’s get weird</h2>
            <p className="copytext">
              <Link to="/Dallas">Dallas</Link> was a great town but we were ready to hit
              Austin. Everyone always raves about the food, music, and nature. Dan C also
              lived there for a stretch after college and knew the best spots.
            </p>
            <p className="copytext">
              We arrived in the middle of the SXSW festival, so the whole city was crazy.
              Most streets were blocked off or crawling with people, and to make matters
              worse, every single parking spot had a specific designation. We’d pull in
              and there’d be a sign saying ‘pickup only’ or ‘expectant mothers only’ or
              ‘manager parking’, ‘handicapped’, or ‘employee of the month’. It took quite
              a bit of time to find a spot.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={"“Finally!”"}
            />
            <h2 className="header">Party down</h2>
            <p className="copytext">
              Austin was incredibly lively. Music enthusiasts, film buffs, techies,
              political pundits, and folks of all stripes were out and about. There were
              even people taking wedding photographs in the street. We overheard two guys
              in front of us say “Dude, I’d rather <i>hang myself</i> than get married”.
            </p>
            <p className="copytext">
              It’s always strange when people take the lethal option when it’s not
              necessary. You ask someone if they like mustard and they’re like “I’d rather
              DIE than eat that”. It’s like -- “Ok, or you could just not have the mustard
              and keep living”. But at least in this case - marriage or noose - a knot’s
              getting tied either way.
            </p>
            <p className="copytext">
              After getting a solid food base we decided to see what kind of booze Austin
              had to offer. In addition to local breweries, there were also
              micro-distilleries that made vodka, whiskey, and moonshine. We tried a bit
              of each. When in Rome.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“Is it just me or did that chick with the horns seem DTF?”"}
            />
            <p className="copytext">
              Some spirits were tasty, others had the consistency of jet fuel.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"“Shots!”"}
            />
            <p className="copytext">
              When you say a drink tasted too strong, there’s always one person who’s like
              “Oh, you gotta get REAL moonshine. With <i>real</i> moonshine, you can’t
              even taste it!”. Yes, you can. What the FUCK are you talking about? It’s
              100% alcohol. You can absolutely taste it and feel it. It burns all the way
              down. Why would higher concentration make it weaker? If you were trapped in
              a house fire, you wouldn’t be like “these are really good flames, I can’t
              even feel them”.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“What was that, water?!”"}
            />
            <h2 className="header">First Show</h2>
            <p className="copytext">
              The first mic was at a place with a large outdoor stage in the back. Before
              the stage was a large, open space with picnic benches and ample seating. As
              it was an all-comic mic, everyone sat as far away as physically possible. It
              was one of those mics where the locals warn “this one’s pretty rough”.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“Best mic in town!”"}
            />
            <p className="copytext">
              Most comics expected to bomb. They’d deliver a joke, not get anything, and
              then say “Wow, I guess I’m bombing. I guess this is bombing”. After about
              three silent sets in a row, a comic got up with a lot of energy and tried to
              get the room back.
            </p>
            <p className="copytext">
              He stalked back and forth across the stage like a circus barker, bellowing
              “Come on guys! Let’s get it going, let’s get laughing, this is gonna be
              great!!”. It got nothing. He did one joke after that, got nothing, and said
              said “Fuck this” dropped the mic, and walked off.
            </p>
            <p className="copytext">
              Dan and I don’t care about the room. When we first started, we were so
              nervous, thinking ‘Oh no! It’s an empty room! What if there are no laughs?
              What if we BOMB?”. No more. We do our time and try new jokes, that’s it. We
              can’t be hurt -- we’re already dead inside.
            </p>
            <MultiImageAndCaption
              imageUrls={[image13, image1]}
              imageHeight={380}
              captionText={
                "Our dream of performing in a photographers darkroom finally came true"
              }
            />
            <h2 className="header">SXSW X2</h2>
            <p className="copytext">
              The party continued into and through the next day. SXSW was still in full
              swing and things just kept getting weirder and weirder. At one point we went
              into a bar that had live music, and a group of hipsters were huddled
              together in some sort of spiritual awakening. We were careful not to shatter
              their religious ecstasy.
            </p>
            <MultiImageAndCaption
              imageUrls={[image12, image3, image4]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              The musical prayer circle seemed normal compared to everything else in town.
              We talked to a couple of locals, and the activity they recommended most
              highly was ‘goat yoga’. You read that right. Goat. Yoga. Does it involve
              stretching out a goat? Does a goat stretch you? Is it a euphemism for
              fucking? We still don’t know.
            </p>
            <h2 className="header">What about personality?</h2>
            <p className="copytext">
              Tinder profiles vary considerably from city to city. In Asheville, women
              highlight how much they love outdoor activities like hiking. In Miami, women
              talk about dancing and spending time at the beach. In Austin, women used
              Tinder to blatantly brag about themselves. It was the least slick shit we’ve
              ever seen. Every profile was like “Let’s play Two Truths and a Lie! I’ll
              start. I climbed mount Kilimanjaro, I run ultra marathons, and I’m dead”.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“My subtlety is only exceeded by my modesty”"}
            />
            <h2 className="header">Second Show</h2>
            <p className="copytext">
              The second mic was at a bar just outside the city limits. It felt very much
              like a local watering hole without the refinement of the city. Comics got 10
              minutes each, which was awesome. It gave us a chance to try out new stuff to
              a room of comics. That’s the true testing ground for your material. If you
              can get a group of tired comics to chuckle, the joke is usually a winner.
            </p>
            <p className="copytext">
              The only downside was the same as the first mic -- some comics went up with
              an attitude like “Man, I’m just going to bomb. I’m gonna eat it”. It was
              annoying because … well, it’s kinda like this: certain movies are so bad
              they’re good. Some ‘bombs’ are like that; the comic goes up and tanks, but
              it’s funny. It’s so bad that it’s good.
            </p>
            <p className="copytext">
              Other movies are so bad that they’re just bad. That was how these ‘bombs’
              felt. The comics would say “Oh, gee, I guess im bombing” and it wasn’t
              funny. It made the whole room feel uneasy.
            </p>
            <MultiImageAndCaption
              imageUrls={[image9, image2]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              Our next stop was <Link to="/Tucson">Tucson</Link> - about a 13 hour drive
              from Austin. We hit the road after the show and knocked out a solid 4 hours.
              We broke up the drive by going a few hours, then checking out small towns in
              between.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
