import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import image3 from "../images/Richmond/image3.png"
import image2 from "../images/Richmond/image2.png"
import image4 from "../images/Richmond/image4.png"
import image1 from "../images/Richmond/image1.png"
import image5 from "../images/Richmond/image5.png"
import image6 from "../images/Richmond/image6.png"
import image7 from "../images/Richmond/image7.png"
import RichmondPic from "../images/Richmond/RichmondPic.png"
import BackButton from "../BackButton.js"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={RichmondPic} width="100%" className="hideWhenBig" alt="Richmond" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"n5j53pe3ru"} />
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
              fontFamily: "Notable, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Richmond
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
            <h2 className="header">Rockin’ out</h2>
            <p className="copytext">
              As with <Link to={"/WashingtonDC"}>D.C.</Link>, we could tell Richmond was a
              cool town from the moment we arrived. Music was pulsing somewhere in the
              distance, the streets were lined with brewpubs and restaurants, and its
              small size gave it a cozy feel. We found a mic at an Irish pub and decided
              to stroll around before the show.
            </p>
            <p className="copytext">
              The area was packed with bars, mexican restaurants, ice cream shops and all
              kinds of places to get fat. We even found where the music was coming from -
              a karaoke bar that was already lit at 5 p.m. Even at this early hour patrons
              were drunkenly belting out high energy tunes like ‘Don’t Stop Believin’ and
              ‘Sweet Caroline’.
            </p>
            <p className="copytext">
              You can tell how cool a city’s people are by what time they begin carousing
              and what they’re singing. If they let loose and sing ‘The Final Countdown’
              while the sun’s still out, they’re generally awesome. Conversely, if you’re
              at a dingy cocktail lounge in a crumbling strip mall at 2 p.m. where
              leathery crooners sing ‘The Dreams in the Ditch’ - hightail it outta there.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“This song always makes me feel warm and scuzzy”"}
            />
            <h2 className="header">Set list</h2>
            <p className="copytext">
              We went back to the van to practice our sets. Miraculously, there was a
              parking lot near the venue, which was perfect; parking is usually an arduous
              ordeal. We walked back to the pub and met the host of the show, who was a
              really nice dude. As time went on, more comics began filtering in and we all
              hung out. We met comics from DC, Baltimore, Virginia Beach, and other local
              spots.
            </p>
            <p className="copytext">
              The mic's layout wasn’t great but that’s normal for open mic. You learn to
              deal with whatever space is available. If we had to perform on a crate in an
              alley to a rat orgy, we’d do it.
            </p>
            <ImageAndCaption imageUrl={image2} imageWidth={400} captionText={"“Boo!”"} />
            <p className="copytext">
              For this particular set, comics stood at the front of the room next to the
              pub entrance (no stage). The bar was on the left, booths were on the right.
              Given the layout, only about 30% of the audience had a straight,
              unobstructed view of comics. Another challenge was constantly moving out of
              the way so smokers and patrons could get in and outside - people were
              literally walking through every set.
            </p>
            <p className="copytext">
              In addition to spatial hindrances, comics also faced verbal interference
              from inebriated bar patrons. Not necessarily heckling; they just seemed to
              think standup was participatory and responses were merited for every joke.
            </p>
            <ImageAndCaption imageUrl={image4} imageWidth={400} captionText={"“Boo!”"} />
            <p className="copytext">
              There’s almost no better way to ensure a punchline dies a slow death than to
              interrupt the setup. If the crowd doesn’t understand the premise, the joke
              is fucked.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“Don’t you get it?”"}
            />
            <h2 className="header">Post game analysis</h2>
            <p className="copytext">
              When the layout and crowd aren’t ideal, it’s a learning opportunity. If you
              can capture attention and get laughs in less-than-ideal environments, it
              makes ‘real’ shows that much easier. It’s the “sweat more in peacetime to
              bleed less in wartime” mentality.
            </p>
            <p className="copytext">
              I did just ok that night. The jokes were landing as written, but I didn’t do
              enough crowdwork to forge a connection that turns regular laughs into belly
              laughs. Dan C did much better with the crowd. He had great interactions with
              the drunks at the bar and everyone was feeling his jokes.
            </p>
            <MultiImageAndCaption imageUrls={[image6, image7]} imageHeight={500} />

            <p className="copytext">
              After we performed, we stayed to see how more experienced comics handle
              distractions and the audience. At one point a huge black dude walked in, mid
              set, and sat right next to the comic performing at the front of room. This
              experienced comic started in on the guy right away. He questioned if the man
              was lost, why he had chosen that particular seat, and called him Mark Henry
              (the enormous WWE wrestler/worlds strongest man).
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“Seat selection world champion”"}
            />
            <p className="copytext">
              The comic obviously didn’t take it too far, lest he be eaten by the huge
              guy. We were impressed by his ability to poke enough fun that the big guy
              moved ‘offstage’, but not so much that the jokes became angry or personal.
            </p>
            <p className="copytext">
              After the show wrapped up, we started driving to{" "}
              <Link to="/Raleigh">Raleigh</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
