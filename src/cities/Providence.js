import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
// import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import image3 from "../images/Providence/image3.png"
import image1 from "../images/Providence/image1.png"
import image2 from "../images/Providence/image2.png"
import image6 from "../images/Providence/image6.png"
import image7 from "../images/Providence/image7.png"
import image4 from "../images/Providence/image4.png"
import image5 from "../images/Providence/image5.png"
import ProvidencePic from "../images/Providence/ProvidencePic.png"
import BackButton from "../BackButton.js"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={ProvidencePic} width="100%" className="hideWhenBig" alt="Providence" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"3j6i29pzj3"} />
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
              fontFamily: "Bungee, cursive",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Providence
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
            <h2 className="header">By almighty decree</h2>
            <p className="copytext">
              We’re not sure if Providence got its name from the biblical “protective care
              of God”, but the city certainly had a divine feel. The comedic atmosphere
              was really unique and had a special way of leaving a lasting impression --
              like a touch from God.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“Swallow”"}
            />
            <p className="copytext">
              Somewhere between <Link to="/NewYork">New York</Link> and Providence we
              crossed the invisible 'really vs. wicked' line. I imagine two neighbors
              getting their newspapers in the morning like "It's really hot today, huh?"
              and the other neighbor goes "No, it's <i>wicked</i> hawt!" and they fight to
              the death.
            </p>
            <p className="copytext">
              Providence was one of those rare cities where parking wasn’t an issue. We
              parked and were inside in less than 5 minutes (A new record!). The mic was
              held in a neat bar that had pinball machines, air hockey tables, and vintage
              arcade games spread throughout.
            </p>
            <p className="copytext">
              We signed our names on the list and began making small talk with the
              bartender to pass time.  She was friendly but exhausted. She said she had
              just returned from a bachelorette weekend in Vegas and was feeling the pain.
              We could tell. If a hangover symptom list from WebMD became a living person,
              she was it. Bloodshot eyes, fatigue, and increased sensitivity to light and
              sound. She still made it to work, though -- gotta respect that hustle.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“I’m never drinking another drop again until tonight”"}
            />
            <p className="copytext">
              Of course we didn’t perform in the nice area upstairs. As is often the case
              with open mic, comics are relegated to the basement. When the host announced
              the start of the mic, we and our fellow court jesters slunk downstairs.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={
                <div>
                  “Isn’t this <i>great?</i>”
                </div>
              }
            />

            <p className="copytext">
              The basement was basically a <i>Saw</i> filming location. Concrete slab
              floors. Exposed piping. Slow drip leaks. None of us were even phased. In the
              world of open mic, this place is home. We can’t even get in the right
              headspace for comedy without a comforting lungful of asbestos.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“Great set”"}
            />
            <h2 className="header">
              If it’s your first night at open mic, you HAVE to perform
            </h2>
            <p className="copytext">
              As we settled in and began looking around, we realized open mic and fight
              club are essentially identical on paper. A bunch of dudes gather in dim,
              dirty basements. They follow a set of rules. It’s cult-like. They kick ass
              or get their asses kicked -- sometimes it’s a bloodbath. They don’t talk
              about when or where it takes place. The club owner doesn’t even know about
              it. And there’s a rush of endorphins when it’s over.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={
                "“The second rule of open mic is: you DO NOT talk about open mic”"
              }
            />
            <p className="copytext">
              The hosts really crushed it that evening. There was one for the first half
              and one for the second half but they did a kind of two-man show between
              performers. They played off each other really well and their material was
              clever. They also followed the list, so Dan and I performed back-to-back
              that night.
            </p>
            <h2 className="header">True grit</h2>
            <p className="copytext">
              The comics in Providence were tough. It was a shitty, rainy night and
              everyone still showed up. There was even a dude with a broken hip who
              performed on crutches. Before he even got to the stage (to be spiritually
              broken), he crutched his (physically broken) body down a flight of uneven,
              rickety steps.  He had to balance on his good leg and set the other crutch
              down to hold the mic. Respect.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“Did you hear the one about the priest and the rabbi?”"}
            />

            <p className="copytext">
              The comics in Providence had really dark material, which was awesome. In the
              current climate of political correctness and walking on eggshells so as not
              to offend anyone, there were a number of comics in Providence running
              hilariously un-PC jokes. It was refreshing to see. Some scenes are clearly
              more sensitive than others, but there wasn’t even a shred of that here.
            </p>
            <h2 className="header">For a good time, call ...</h2>
            <p className="copytext">
              I hit the bathroom before we left. The walls were covered in vulgar messages
              and stickers from various local bands. There were also twitter and instagram
              handles scrawled on every imaginable surface. We all know the best way to
              gain fans is to provide an associative link between your art and a mountain
              of fecal matter.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={
                <div>
                  “God damn, I love Two{" "}
                  <a href="https://instagram.com/2dcomedy">Dan’s in a Van</a>”
                </div>
              }
            />
            <p className="copytext">
              Scanning the room, I actually did see a sticker from a comic we know out of
              Philly. It’s funny how you can travel all over and still find shreds of
              home.
            </p>
            <p className="copytext">
              After the show we hopped back in the van and headed to{" "}
              <Link to={"/Boston"}>Boston</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
