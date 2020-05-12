import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image6 from "../images/Albuquerque/image6.png"
import image7 from "../images/Albuquerque/image7.gif"
import image9 from "../images/Albuquerque/image9.png"
import image5 from "../images/Albuquerque/image5.png"
import image2 from "../images/Albuquerque/image2.gif"
import image8 from "../images/Albuquerque/image8.gif"
import image1 from "../images/Albuquerque/image1.png"
import image10 from "../images/Albuquerque/image10.png"
import image3 from "../images/Albuquerque/image3.png"
import image4 from "../images/Albuquerque/image4.png"
import AlbuquerquePic from "../images/Albuquerque/AlbuquerquePic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img
          src={AlbuquerquePic}
          width="100%"
          className="hideWhenBig"
          alt="Albuquerque"
        />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"xp26t48ylq"} />
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
              fontFamily: "Sofia, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Albuquerque
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
            <h2 className="header">On the lookout</h2>
            <p className="copytext">
              It took about seven hours to get from <Link to="/Phoenix">Phoenix</Link> to
              Albuquerque. We drove through the night and passed out at the first Planet
              Fitness we saw. We figured it wouldn’t be an issue - when have two guys in a
              camper van ever done any harm in Albuquerque?
            </p>
            <ImageAndCaption imageUrl={image6} imageWidth={400} captionText={""} />
            <p className="copytext">
              Locals warned us to watch out for ‘lot lizards’. Anywhere else, the term
              ‘lot lizard’ refers to prostitutes that frequent truck stops, but in
              Albuquerque it was in reference to scaly, scabby meth-heads who steal from
              cars.
            </p>
            <p className="copytext">
              Our van looks like a standard cargo/work vehicle, so we weren’t concerned
              about potential thievery … until a local told us about someone calling 9/11
              just to steal the ambulance. The thief needed a vehicle to drive around and
              score heroin. After that enchanting tale we decided to be more vigilant.
            </p>
            <ImageAndCaption imageUrl={image7} imageWidth={400} captionText={""} />
            <h2 className="header">Faces of drugs</h2>
            <p className="copytext">
              We often post up at Planet Fitness, Walmart, or laundromat parking lots, so
              we encounter a large volume of shady people. The types who would play
              extremely convincing extras as either “junkie” or “zombie”. Due to Breaking
              Bad, the reputation for ‘drug of choice’ in ABQ is meth.
            </p>
            <p className="copytext">
              Meth is a strange beast. It’s really the only drug where people crack up at
              the havoc it wreaks. There are countless videos out there with titles like
              “The Faces of Meth” where timelapse photos show users becoming hideously
              disfigured after long-term use. There’s usually even a studio audience
              laughing along, practically rolling in the aisles.
            </p>
            <MultiImageAndCaption
              imageUrls={[image9, image5]}
              imageHeight={250}
              captionText={
                "“Woah-hoah-hoah! Look at these ugly pieces of shit! Gross! Hahahaha”"
              }
            />
            <p className="copytext">
              That’s why meth is special -- it somehow gets a pass with laughs. It’s a
              punchline. People have no qualms snickering at lives destroyed by meth, yet
              somehow it would be in poor taste if slideshows covered lives destroyed by
              pills. Also, addiction is a disease -- you wouldn’t see a “Faces of Cancer”
              video with a laugh track. But meth? Play it again!!.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“Hah! He lost another tooth! And his left eye!”"}
            />
            <h2 className="header">Get up and move</h2>
            <p className="copytext">
              Driving from city to city and working at a computer all day has made us
              pretty sedentary. Most of our time is spent sitting, so when we came across
              an article titled “Counteract too much sitting with this five minute trick”,
              we were intrigued. Until we read it.
            </p>
            <p className="copytext">
              Do you want to know what the trick is? Walking. That’s it. The trick to
              counteract too much sitting … is <i>walking</i>. We didn’t expect much from
              a clickbait article, but Jesus. That was really scraping the bottom of the
              barrel. It must have been part of a health tip series, preceded by “Not
              getting enough nutrients? Try nutrients!”
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“We should’ve been doing this all along!”"}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The first show we did was at a downtown brewery. One of the hosts had a
              birthday and the comedians went all out. They gave everyone party hats,
              noise makers, and even took turns saying nice things about the guy. It was
              cool to see such a tight group - camaraderie like that doesn’t exist
              everywhere.
            </p>
            <MultiImageAndCaption
              imageUrls={[image1, image10]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              That night we stayed in a hotel and ordered some pizza. Dan was on the phone
              with the pizza place and they needed the address spelled out. We were on
              Turner street and Dan began “It’s Turner street. T as in Trayvon ….”
            </p>
            <p className="copytext">
              Of all the words beginning with T, the one used for clarification was
              <i>Trayvon</i>. It sounded like the beginning of the most woke acrostic poem
              in existence. I’m surprised he didn’t finish the spelling “U as in unfair
              treatment of minorities, R as in Racists are everywhere….”
            </p>
            <p className="copytext">
              We did anther brewery the next night and a local host liked our sets enough
              to put us on his monthly showcase. It was a great show -- at least 50 people
              were packed into a dense microbrewery to enjoy some laughs. It was a fun
              crowd and everyone did well.
            </p>
            <MultiImageAndCaption
              imageUrls={[image3, image4]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              When it was all over, we began the ride to <Link to="/Denver">Denver</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
