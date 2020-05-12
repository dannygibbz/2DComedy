import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image3 from "../images/Greenville/image3.gif"
import image2 from "../images/Greenville/image2.gif"
import image12 from "../images/Greenville/image12.gif"
import image8 from "../images/Greenville/image8.png"
import image13 from "../images/Greenville/image13.png"
import image9 from "../images/Greenville/image9.png"
import image10 from "../images/Greenville/image10.gif"
import image5 from "../images/Greenville/image5.gif"
import image7 from "../images/Greenville/image7.png"
import image1 from "../images/Greenville/image1.png"
import image4 from "../images/Greenville/image4.png"
import image11 from "../images/Greenville/image11.png"
import image6 from "../images/Greenville/image6.png"
import GreenvillePic from "../images/Greenville/GreenvillePic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={GreenvillePic} width="100%" className="hideWhenBig" alt="Atlanta" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"ryqe4qnsiu"} />
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
              fontFamily: "Literata, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Greenville
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
            <h2 className="header">Greenville</h2>
            <p className="copytext">
              The six hour haul from <Link to="/Huntington">Huntington</Link> to
              Greenville blew by quickly. When we pulled up to the club, the road was
              closed for some sort street festival or block party. The sidewalks were
              spilling over with food carts, live bands, and all manner of vendor booths.
              It looked awesome, but we’d have to wait until after the show to check it
              out.
            </p>
            <h2 className="header">Parlez-vous français?</h2>
            <p className="copytext">
              One of the comedians talked about how much fun she had on a recent trip to
              France and described how enamored she was with the language. I’m undoubtedly
              in the minority here, but I don’t think French is sexy. It sounds like the
              slurry, ineloquent drawl of everyone after 15 beers.
            </p>
            <p className="copytext">
              Don’t believe me? Just look at the numbers. They all sound like the guttural
              groans of a person waking from a drunken stupor.
            </p>
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={"“Un?”"} />
            <ImageAndCaption imageUrl={image2} imageWidth={400} captionText={"“Deux?”"} />
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={400}
              captionText={"“Trois?”"}
            />
            <p className="copytext">
              Everyone can sound French if they’re drunk enough. For instance, if you were
              stone cold sober and asked to name the objects below, you’d answer “Gem,
              Apple”.
            </p>
            <MultiImageAndCaption
              imageUrls={[image13, image8]}
              imageHeight={280}
              captionText={""}
            />
            <p className="copytext">
              However if you’d been ripping Jäger all day and tried to pronounce these two
              objects, you’d be introducing yourself in perfect French.
            </p>
            <h2 className="header">Deutschbag</h2>
            <p className="copytext">
              I’m biased because German was the first foreign language I learned, but it
              sounds way better than French. I will acknowledge, however, that it’s not
              really a ‘cool’ language. Whenever I tell someone I speak German, it never
              elicits a positive response. They assume I’m either a nazi or I love porn
              where people shit all over eachother. Frankly that offends me - I’m not a
              nazi.
            </p>
            <p className="copytext">
              Even as a school subject German has a bad reputation. If you were a cool
              kid, you took French. If you were an average kid looking for an easy grade,
              you took Spanish. If you were a nerd looking to get a leg up on the SAT, you
              took Latin (which doesn’t help by the way - it turns out the SAT’s are
              entirely in English). And if you were a fucking weirdo, you took German.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={250}
              captionText={"“Komm to my haus - we’ll listen to the new Rammstein album”"}
            />
            <h2 className="header">Get up there</h2>
            <p className="copytext">
              Through our travels we’ve met many who’ve expressed interest in trying
              standup but have been putting it off. They’re afraid of bombing, looking
              foolish, finding out they’re not funny, or any number of excuses. If you are
              reading this and feeling the same way, we totally get it. We were you guys.
              Dan and I didn’t get on stage until we were 26 and 27 years old. That’s how
              long it took us to work up the courage.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“I’m really gonna do it! Wait!”"}
            />
            <p className="copytext">
              All we can tell you is “get up there!” We know, we know, it’s easier said
              than done. It’s daunting. You’re probably thinking “But I don’t know any
              comedians, I don’t know the comedy scene in my city, I don’t know how to
              sign up, I don’t know, I don’t know, I don’t know!”. We were the same. We
              needed a metaphorical gun to the head to get on stage - meaning we signed up
              for a show and told everyone we knew about it so that we couldn’t chicken
              out.
            </p>
            <ImageAndCaption imageUrl={image5} imageWidth={400} captionText={""} />
            <p className="copytext">
              If that sounds like you, then try this. Jump on Google or Facebook and type
              ‘standup comedy in (your city)’. Chances are you’ll find some open mics or
              events to attend. Sign yourself up and tell all your friends and family “On
              X date I’m performing standup at Y venue”. It’s scary, but if you don’t draw
              a line in the sand then your standup aspirations will forever be trapped in
              that nebulous “I’ll try it someday” stage.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              We did a show at The Comedy Zone. It was a nice club in the heart of
              downtown Greenville.
            </p>
            <ImageAndCaption imageUrl={image7} imageWidth={400} captionText={""} />
            <p className="copytext">
              The show had a great turnout and the audience was a lot of fun. Before the
              show we hung around some of the comics and they were from all over. There
              were people from NJ, NY, and various southern states. As per usual everyone
              was really chill and friendly. They came up and introduced themselves and we
              hit it off.
            </p>
            <MultiImageAndCaption
              imageUrls={[image1, image4, image11, image6]}
              imageHeight={280}
              captionText={""}
            />
            <p className="copytext">
              Most of our new material hit, so the jokes got to survive another day. If a
              new joke works three times, we keep it in the rotation until it is
              fine-tuned and then sock it away for a longer set. If it fails three times,
              it’s done forever.
            </p>
            <p className="copytext">
              After the show we connected with the host and a few others and said our
              goodbyes.
            </p>
            <h2 className="header">Wait, we forgot to mention ...</h2>
            <p className="copytext">
              Earlier in the article we encouraged aspiring comedians to get out there and
              try it, but we forgot to mention this one important caveat: PREPARE. We’ve
              been noticing a trend where totally overconfident people (usually middle
              aged guys, for whatever reason) get up and throw around incoherent,
              offensive ‘material’ and that doesn’t work. To clarify: offensive, to us,
              means ‘unfunny’. You can make jokes about any topic - nothing is off limits
              - just make it funny.
            </p>
            <p className="copytext">
              If you really want to do comedy, don’t be one of those “My friends say I’m
              funny, I’m just gonna get up there and riff!” types. That’s not gonna work
              (unless you really are a genius). You’re going to bomb, run the light, and
              have your confidence crushed. Do yourself a favor and write material before
              going up. Practice your set beforehand, too. It sounds obvious, but is often
              overlooked.
            </p>
            <h2 className="header">Au revoir!</h2>
            <p className="copytext">
              Before leaving town we were excited to stroll around the street
              festival/block party we had seen prior to entering the club. By the time we
              got out, it looked like the city had been evacuated. The place was deserted,
              save for trash tumbleweeds and police questioning a midget. Realizing we’d
              missed the party, we hit the road for{" "}
              <Link to="/Indianapolis">Indianapolis</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
