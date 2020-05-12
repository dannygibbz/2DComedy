import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image5 from "../images/Louisville/image5.png"
import image1 from "../images/Louisville/image1.png"
import image2 from "../images/Louisville/image2.png"
import image11 from "../images/Louisville/image11.png"
import image6 from "../images/Louisville/image6.png"
import image10 from "../images/Louisville/image10.gif"
import image9 from "../images/Louisville/image9.gif"
import image3 from "../images/Louisville/image3.png"
import image7 from "../images/Louisville/image7.png"
import image13 from "../images/Louisville/image13.png"
import image4 from "../images/Louisville/image4.png"
import image8 from "../images/Louisville/image8.png"
import DanG from "../images/Louisville/DanG.jpg"
import Louisville from "../images/Louisville/LouisvillePic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={Louisville} width="100%" className="hideWhenBig" alt="Louisville" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"zqf8gqv6zy"} />
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
              fontFamily: "DM Serif Text, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Louisville
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
            <h2 className="header">KC>STL>LVL</h2>
            <p className="copytext">
              We headed West after <Link to="/KansasCity">Kansas City</Link> with sights
              set on Louisville, but we managed to find a showcase midway through the
              trip. We stopped off in St. Louis at a place called Apotheosis Comics. In
              addition to comic books and graphic novels, the place sold beer and
              frequently hosted live comedy. In other words, the place was awesome.
            </p>
            <ImageAndCaption imageUrl={image5} imageWidth={400} captionText={""} />
            <p className="copytext">
              We hung out and connected with some of the local comics and really hit it
              off - they were funny and recommended a bunch of spots to get on stage in
              St. Louis. If we had been staying for more than 2 hours we’d’ve taken them
              up on hitting other shows but we couldn’t this time round. We’ll definitely
              reconnect when we head back that way.
            </p>
            <MultiImageAndCaption
              imageUrls={[image1, image2]}
              imageHeight={320}
              captionText={""}
            />
            <p className="copytext">
              The headliner was a comedian out of LA who was also touring around in a van.
              We shared road stories and talked about vanlife - specifically how it's not
              all created equal. For some it’s a fun adventure, for others a grim reality.
              Put another way, some people are doing vanlife and others are serving life
              in a van.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={"“A house is where you live, a home is where you love”"}
            />
            <h2 className="header">Loovul</h2>
            <p className="copytext">
              There’s a lot to like about Louisville. Sportswise they’ve got you covered
              from the Louisville Slugger Museum to the Muhammad Ali Center to the
              Kentucky Derby. Foodwise, it’s the HQ for Yum brands (Taco Bell, KFC, Pizza
              Hut), so you can really bust a gut. Best of all is the boozing -- Kentucky
              is the birthplace of bourbon, and boy do they drink it there.
            </p>
            <p className="copytext">
              The city’s pronunciation tells you all you need to know about how much they
              drink. To say it correctly, you have to sound blackout drunk even if you’re
              stone cold sober. Some think it’s pronounced Lewis-ville, but that’s not it.
              The next guess is pronouncing it like Louie-ville, but that’s still not
              drunk enough. Please refer to the helpful guide below for the correct
              pronunciation.
            </p>
            <p className="copytext" style={{ color: "red" }}>
              1-3 beer pronunciation: Lewis-ville ✖
            </p>
            <p className="copytext" style={{ color: "red" }}>
              4-7 beer pronunciation: Louie-ville ✖
            </p>
            <p className="copytext" style={{ color: "green" }}>
              8 + beer pronunciation: Loo-a-vull ✔
            </p>
            <p className="copytext">
              As you can see, the accuracy of pronunciation is correlated with the level
              of intoxication. To say it correctly, you have to sound drunk as a lord.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“I’m gonna need water and an Advull”"}
            />

            <h2 className="header">You call that ‘food’?!</h2>
            <p className="copytext">
              Some of you may be calling us out, saying “Hey! Louisville has way better
              food than Taco Bell, KFC, and Pizza Hut!”. It probably does, but we’re not
              spoiled assholes (aka foodies).
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"That’s right. We went there."}
            />
            <p className="copytext">
              There are few groups more annoying than foodies. When did it become
              fashionable to trash perfectly good food? Nowadays if you tell someone you
              ate Applebee’s they look at you like you ate turds covered in earwax. Can we
              all just stop acting like we’re better than chain restaurants?
            </p>
            <p className="copytext">
              There’s something truly perverse about deriving pleasure from food. Watching
              people lower their heads, flutter their eyes, and sensually exhale from a
              piece of cake is gross. Stop it. You can enjoy it, sure, but don’t cum from
              it for chrissakes.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={"Get your orgasm in now, cause it ain't happening later”"}
            />
            <p className="copytext">
              Food should be enjoyed, but not to <i>that</i> extent. It’s like cartoons --
              they’re meant to be enjoyed wholesomely, but someone inevitably makes it
              gross by drawing porn versions of it. We’re supposed to <i>laugh</i> when
              Homer Simpson falls down, not <i>cum </i>when he fucks Lisa. I wish this
              were an extreme comparison, but it’s not. Our society is so gluttonous that
              ‘food porn’ is a real thing.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“Shoot that icing in my mouth”"}
            />
            <h2 className="header">Hey there, slugger!</h2>
            <p className="copytext">
              We had some free time and decided to check out the Louisville Slugger
              Museum. The first thing we learned was the name Louisville Slugger was a
              nickname for a baseball player named Pete Browning. The dude was a great
              baseball player but also a prodigious drunk. One of his famous quotes was “I
              can’t hit the ball until I hit the bottle”.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"This lush needs no help pronouncing Louisville"}
            />
            <p className="copytext">
              Walking around the museum felt like one of those elementary school field
              trips where you were thankful to be out of class, yet decidedly
              uninterested. Like visiting a coal mine and seeing ‘different’ types of coal
              that were virtually all the same black lump. We just gazed at a bunch of
              bats. Whoopee.
            </p>
            <ImageAndCaption
              imageUrl={image13}
              imageWidth={400}
              captionText={"“Oh, look. That one’s red”"}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              We did ‘The Merry Weather’ showcase with a bunch of talented comedians at a
              bar called Kaiju.
            </p>
            <ImageAndCaption imageUrl={image4} imageWidth={400} captionText={""} />
            <p className="copytext">
              Most sets followed the traditional setup-punch format but one comedian had a
              really strange … performance. We hesitate to even call it a set. He got on
              stage with a plastic baby tucked in a baby bjorn and had  sort of
              conversation/chess match with it.
            </p>
            <p className="copytext">
              You may be asking “What is a conversation/chess match?”. We don’t know.  He
              bopped the babydolls head with a chess board and then acted like there was a
              bomb inside that was gonna explode. He even had a countdown and asked &nbsp;
              <i>“Aren’t y’all scared?”</i> as the countdown from 10 reached 3.
            </p>
            <MultiImageAndCaption
              imageUrls={[DanG, image8]}
              imageHeight={210}
              captionText={""}
            />
            <p className="copytext">
              Dan and I tried out some new stuff and had a blast. The room was only about
              25-30 people so it was intimate enough to have some fun crowd work. After
              the show we connected with some comics. We’re always grateful when local
              comics take us in and recommend/offer new spots in their city. We definitely
              look forward to coming back through Louisville.
            </p>
            <p className="copytext">
              The next stop was <Link to="/Huntington">Huntington, West Virginia.</Link>
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
