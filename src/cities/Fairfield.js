import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image8 from "../images/Fairfield/image8.gif"
import image6 from "../images/Fairfield/image6.gif"
import image7 from "../images/Fairfield/image7.gif"
import image5 from "../images/Fairfield/image5.gif"
import image4 from "../images/Fairfield/image4.gif"
import image2 from "../images/Fairfield/image2.gif"
import image3 from "../images/Fairfield/image3.png"
import image1 from "../images/Fairfield/image1.png"
import FairfieldPic from "../images/Fairfield/FairfieldPic.png"
export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={FairfieldPic} width="100%" className="hideWhenBig" alt="Fairfield" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"51wr7hvv8k"} />
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
              fontFamily: "Yanone Kaffeesatz, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Fairfield
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
            <h2 className="header">Nearing the end</h2>
            <p className="copytext">
              After the weird show in <Link to="/Burlington">Burlington</Link> we headed
              South and ended up in Fairfield. Connecticut was our 47th state visited, yet
              the 1st that made us begin to realize that this 50-state odyssey would soon
              conclude.
            </p>
            <p className="copytext">
              Our trip began on January 7th and it was now August 19th.  Except for the
              rare weekend flight home for weddings or important events, we’d been on the
              road for that entire time. After the show we planned to drive home and sleep
              in our own beds for the first time in 7 months. It was a mix of emotions
              that was tough to describe articulately.
            </p>
            <ImageAndCaption imageUrl={image8} imageWidth={400} captionText={""} />
            <h2 className="header">Crusty barnacle</h2>
            <p className="copytext">
              In fact, everything was pretty weird about that night. The show was in a
              seaside town and the bar felt like a dive for salty old sailors. Despite the
              aesthetic, the first people we saw were a family with young children. We
              couldn’t wait to see their reactions when the “fucks” and “cunts” began
              flying out of comedians mouths.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“God damnit”"}
            />
            <p className="copytext">
              Even the guy sitting next to us at the bar was strange.  We had sat down to
              grab a beer before the show started, and this guy was muttering to himself
              and spinning his phone atop a moist coaster. Just then, his phone began to
              ring. He delicately lifted the phone, saw who was calling, and loudly
              shouted ‘FUCK’. But when he answered the call, he couldn’t have spoke more
              sweetly.
            </p>
            <p className="copytext">
              It made us realize that phone calls, with all their pleasantries and
              information exchange, do very little to convey what people actually think
              about you. If you wanted to know people's true feelings, you’d have to see 5
              seconds before they answer your call or 5 seconds after they hang up. We all
              have someone in our contacts to whom we speak pleasantly, but react the
              following way.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"Before talking"}
            />
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"After talking"}
            />
            <h2 className="header">Roasted</h2>
            <p className="copytext">
              The show was a weird one, too. The local comics were putting on a roast of a
              comic who was heading back to college in Michigan. Obviously, we didn’t know
              the guy. So you’ve got a bunch of people making hyperspecific in-jokes, and
              us - trying to look like we get what’s going on.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“Ha! That is soooo Thomas!”"}
            />
            <p className="copytext">
              The room was split. One half looked like high school kids who got lost on a
              field trip and the other half looked like parents. It was a strange room to
              figure out. Adding another layer to the odd atmosphere was most in
              attendance had never been to a regular comedy show before, let alone a
              comedy show with a roast-heavy theme. It made for a strange energy.
            </p>
            <p className="copytext">
              If you weren’t doing roast jokes, you had to battle to keep the audience
              engaged. Some guys opened with killer roasts and then switched to regular
              material, and it did not end well for them. In keeping with the nautical
              theme of the bar, the sets felt like sailing on rough seas. It felt like
              every comedian had to pilot their vessel against an unending string of rogue
              waves.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={
                "“That concludes my roast jokes, now on to ...wait ...wait! NO!!!”"
              }
            />
            <p className="copytext">It made for a great challenge, though!</p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The crowd was rough for some, but the more experienced comics adapted well.
              One guy we met had been doing comedy for more than ten years and this was
              his first mic back after a 2 year hiatus. It was definitely not a warm
              return that you’d want, but he made it work.
            </p>
            <p className="copytext">
              At one point during his set, he made a suicide joke that didn’t get the
              response he thought it would. After the set, he asked “do you think that
              joke was too far?” Firstly, we are the worst to ask about that. We think
              most jokes aren’t far enough. But secondly, because he had been out of the
              game for a few years, it was just interesting to watch him recalibrate and
              rework jokes to catch up with modern trends. We respected this guy's
              adaptability.
            </p>
            <MultiImageAndCaption
              imageUrls={[image3, image1]}
              imageHeight={280}
              captionText={""}
            />
            <p className="copytext">
              As for our sets, we had to go out and win the audience. We did that by
              acknowledging that we didn’t know the roastee because we were from out of
              town. Instead we roasted things about the town and random people in the
              audience (for example, making fun of the high school kids for trying to look
              old enough to get into the bar).
            </p>
            <p className="copytext">
              Once we established that everyone was on blast if they opened their mouths,
              they were much more willing to listen to regular material/jokes. It turned
              out to be a really fun show.
            </p>
            <h2 className="header">Thank you, next!</h2>
            <p className="copytext">
              With our 47th state crossed off the list, we made our way back home to rest
              in our own homes for a change. Next up on the chopping block was{" "}
              <Link to="/NewJersey">New Jersey</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
