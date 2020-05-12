import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image9 from "../images/Indianapolis/image9.png"
import image7 from "../images/Indianapolis/image7.png"
import image1 from "../images/Indianapolis/image1.png"
import image2 from "../images/Indianapolis/image2.gif"
import image8 from "../images/Indianapolis/image8.gif"
import image6 from "../images/Indianapolis/image6.png"
import image5 from "../images/Indianapolis/image5.png"
import image3 from "../images/Indianapolis/image3.png"
import image10 from "../images/Indianapolis/image10.gif"
import image11 from "../images/Indianapolis/image11.gif"
import image4 from "../images/Indianapolis/image4.png"
import image12 from "../images/Indianapolis/image12.png"
import IndianapolisPic from "../images/Indianapolis/IndianapolisPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img
          src={IndianapolisPic}
          width="100%"
          className="hideWhenBig"
          alt="Indianapolis"
        />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"ijx72qiy4j"} />
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
              fontFamily: "PT Serif, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Indianapolis
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
            <h2 className="header">Keep in touch!</h2>
            <p className="copytext">
              Within a week we had performed in <Link to="/Louisville">Louisville</Link>,{" "}
              <Link to="/Huntington">Huntington</Link>, and{" "}
              <Link to="/Greenville">Greenville</Link>. It was great to get that much
              stage time but the best part was meeting awesome comedians along the way.
            </p>
            <ImageAndCaption imageUrl={image9} imageWidth={400} captionText={""} />
            <p className="copytext">
              We often hear “You meet so many people - isn’t it hard keeping in touch?”.
              Not really. Between Facebook and email we’ve managed to stay well connected
              with friends both new and old. The real challenge is dealing with ‘new and
              helpful’ tools in email.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={
                "“It looks like you’re trying to solicit a prostitute. Would you like help?”"
              }
            />
            <p className="copytext">
              Gmail’s A.I. is getting too smart. The autocomplete feature is like having a
              smarmy know-it-all talk over you and finish your sentences. Most irritating
              is the fact that it’s super accurate. I’ll write to an old friend, typing
              “long time” and it’ll complete ‘no see’. I’ll type “what have you” and it’ll
              interrupt ‘been up to?’. I’ll type “let’s meet” and it’ll suggest ‘for
              lunch’.
            </p>
            <p className="copytext">
              I don’t like it. Even if the autocomplete suggestions are correct, no one’s
              gonna tell me how to finish my sentences. Now when gmail suggests endings, I
              deliberately insert non-sequiturs. My friends and family think I've gone
              completely insane.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“Don’t MAKE me take trout bait outcha crumb jacket”"}
            />
            <p className="copytext">
              My emails read like a schizophrenics mad lib. Here’s a typical message.
            </p>
            <p
              className="copytext"
              style={{
                font: "400 20px/1.3  Helvetica, sans-serif",
                color: "#2b2b2b",
                marginLeft: "40px",
                marginRight: "40px",
              }}
            >
              Greetings Tom, <br /> <br />
              Long time no anal bleach. Let’s meet for pube strudel. Shall we cure dragon
              meat at 6? Let me know if plutonium time portal. <br />
              <br />
              Huzzah, <br />
              <br />
              Daniel Longarmed Ape
            </p>

            <p className="copytext">
              I feel like I'm doing my part for the next generation. Some people are
              recycling, others are developing renewable energy, I’m fucking up machine
              learning so we can identify cyborgs in the future.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“I are au naturale human, thank you nutsack”"}
            />
            <h2 className="header">Tech revolution</h2>
            <p className="copytext">
              Speaking of technology we don’t understand, we overheard two programmer
              types at a cafe talking about computer use for blind people. It blew our
              minds - we had never even <i>considered</i> how difficult it must be for
              blind people to find and click search bars. The guys mentioned adding audio
              to help guide blind users, and we imagined some sort of Marco Polo
              situation.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={
                "“Warm … warmer .. warmer! You’re getting hot! Agh, nope. Cold. colder”"
              }
            />
            <p className="copytext">
              It turned out that’s <i>not</i> how it works. Users tab over an item and
              it’s read aloud. Either way it’s still not that useful. “Hey, now it’s
              easier to get to the next page that you <i>still can’t see</i>”. It’s like
              using a color to describe another color. “Oh you’ve never seen green? It’s
              like blue mixed with yellow”.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={300}
              captionText={"“Thanks. That clears it up.”"}
            />
            <p className="copytext">
              I made that joke recently and someone said “You shouldn’t brag about being
              able to see and hear, that’s Ableist!” I hadn’t heard that term but now that
              I know it exists, I’m going to be the biggest offender. I’m gonna rub my
              ability in everyone's face. If I meet a mute person, I’m gonna rattle off
              any and all words that enter my mind.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“Book, joke, whiskey, zamboni”."}
            />
            <p className="copytext">
              Better yet, i’ll keep a dictionary with me at all times and read from the
              beginning
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={300}
              captionText={"“Aardvark, abandon, abase, abbey, abbott, abdicate ...”"}
            />
            <p className="copytext">
              If I meet a deaf person I’m gonna dance around wildly as if I’m really taken
              with rhythm. I’ll really get after it like those old Ipod commercials.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={
                <div>
                  “Man, you <b>gotta</b> hear this!"
                </div>
              }
            />
            <p className="copytext">
              I’m not being ableist just for kicks; I’m doing it to even the score with
              folks who are emotionalist. That’s right, <i>emotionalist</i>. Most people
              with audio/visual/verbal impairment are beacons of positivity and happiness
              despite their physical condition. I, on the other hand, despite good
              physical condition am a ceaseless pit of despair. I can’t just{" "}
              <i>be happy</i> - much the same way blind people can’t <i>just see</i>. But
              no one seems to get mad when these fucks rub joy in everyone's face.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={"Shove it up your ass"}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              We stretched our muscles at a weekly open mic at Shoefly Public House. The
              upstairs was beautiful but in true open mic/fight club fashion, we were
              guided underground to the semi-finished basement to do our dirty deeds under
              dimly lit string bulbs.
            </p>
            <p className="copytext">
              We could immediately tell the scene was tight based on how welcoming
              everyone was. There were a few new faces in the room and when regulars
              spotted them, they went over and introduced themselves. It was nice they
              took the time to make everyone feel welcome - especially first timers, as
              the first mic is incredibly stressful.
            </p>
            <MultiImageAndCaption
              imageUrls={[image4, image12]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              The show went great. After connecting with a few more comics we began
              preparing our drive to <Link to="/Cincinnati">Cincinnati</Link> (Cincy for
              &nbsp;
              <i>cool</i> people). We had met several Cincinnati comics through our
              travels who had plenty of positive things to say about the culture. We were
              pumped to experience it firsthand and actually spend a few nights out of the
              van -- Dan had a cousin we could crash with.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
