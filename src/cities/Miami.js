import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"

import image13 from "../images/Miami/image13.png"
import image11 from "../images/Miami/image11.png"
import image12 from "../images/Miami/image12.png"
import image8 from "../images/Miami/image8.png"
import image4 from "../images/Miami/image4.png"
import image10 from "../images/Miami/image10.png"
import image5 from "../images/Miami/image5.png"
import image7 from "../images/Miami/image7.png"
import image1 from "../images/Miami/image1.png"
import image2 from "../images/Miami/image2.png"
import image6 from "../images/Miami/image6.png"
import image14 from "../images/Miami/image14.png"
import image3 from "../images/Miami/image3.gif"
import image9 from "../images/Miami/image9.gif"
import MiamiPic from "../images/Miami/MiamiPic.png"
import BackButton from "../BackButton"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={MiamiPic} width="100%" className="hideWhenBig" alt="Miami" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"pn155d7hz0"} />
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
              fontFamily: "'Roboto Slab', sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Miami
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
            <h2 className="header">Bienvenidos a Miami</h2>
            <p className="copytext">
              A great philly comedian and rapper once said that Miami is a city where the
              heat is on all night on the beach til the break of dawn. This is true -
              Miami was sweltering. Our plan to visit cities based on warmth was going off
              without a hitch. However, as comedians, we can always find the copper
              lining. In this case, high temperatures also come with high sun exposure.
            </p>
            <h2 className="header">On the spectrum</h2>
            <p className="copytext">
              Dan and I are always on opposite ends of any spectrum. In the personality
              spectrum Dan is outgoing and I’m reserved. In the emotional spectrum Dan is
              cheerful, I’m despondent. In Miami we reached a new antithetical plane - the
              genetic spectrum.
            </p>
            <p className="copytext">
              I’m genetically not a ‘sunlight person’ whereas Dan C soaks it up. He’s SPF
              8 in a brown bottle with palm trees on the label, I’m SPF 85 in a kevlar
              canister with a tombstone on the label. His ancestors frollicked around
              sun-kissed Italian beaches whereas mine skulked around Hibernian mud bunkers
              with thatched roofs.
            </p>
            <MultiImageAndCaption
              imageUrls={[image13, image11]}
              imageHeight={180}
              captionText={"“Hon, which should we choose for our next vacation?”"}
            />
            <p className="copytext">
              Darker skin gives Dan a level of ethnic ambiguity that I simply am not
              afforded. When people see him, they’re not sure if he’s an Italian
              mathematician or an a Middle-Eastern oil baron. When people see me, they’re
              not sure if i’m an Irish dock worker or an alcoholic Irish dock worker.
            </p>
            <p className="copytext">
              Owing to his Mediterranean ancestry, Dans skin is a natural ‘deep olive’. My
              skin, due to celtic ancestry, is an unnatural ‘bleached bone’. Despite
              genetic differences, the sun is actually a great equalizer in its ability to
              darken and radically transform our appearances. After an hour of direct sun
              exposure, Dan goes from vaguely Italian to 100% Indian. I go from 100% Irish
              to vaguely Martian.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ImageAndCaption
                imageUrl={image8}
                imageHeight={240}
                captionText={
                  <div>
                    Before: <b>Dan Crescimanno</b>
                  </div>
                }
              />

              <ImageAndCaption
                imageUrl={image12}
                imageHeight={240}
                captionText={
                  <div>
                    After: <b>Danesh Crescimally</b>
                  </div>
                }
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ImageAndCaption
                imageUrl={image10}
                imageHeight={240}
                captionText={
                  <div>
                    Before: <b>Dan Gibbons</b>
                  </div>
                }
              />

              <ImageAndCaption
                imageUrl={image4}
                imageHeight={240}
                captionText={
                  <div>
                    <div>After:&nbsp;&nbsp;</div>
                    <div>
                      <img src={image5} width={"200px"} alt="Alien" />
                    </div>
                  </div>
                }
              />
            </div>

            <p className="copytext">
              Even audiences have opposite reactions to our skin. If I make jokes about
              being pale, the laughter doesn’t pass through a filter -- nobody has any
              qualms with laughing at a melanin deficient loser. But when Dan jokes about
              looking like a terrorist, everyone glances around the room first to see if
              it’s ok to laugh.
            </p>
            <p className="copytext">
              A big factor in how hard a joke hits is location. In DC, Dan ran jokes about
              being profiled as a terrorist and many struggled to stifle laughter through
              their hands - holding back in case the joke wasn’t PC enough. But in the
              South (and Colombia) those same jokes obliterated the room. Dan talked about
              his look being terrible for the airport and everyone had a seizure. They
              were practically rolling in the aisles. They almost laughed <i>too</i> hard.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={500}
              captionText={"“Dang, Cleetus, that A-rab sure is funny. Now git eem!”"}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              One of the first things that struck us about Miami is that real audiences
              attended mics. Open mic is usually attended exclusively by comics waiting to
              go up, but in Miami the showrunners advertise really well. We were
              impressed!
            </p>
            <p className="copytext">
              Our first show was an open mic after a showcase. The showcase went from
              8:00-11:00, so it was amazing that anyone stayed afterwards to continue
              watching. Watching comedy is like watching porn - after you’ve seen what you
              came to see, you don’t continue watching til the end.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={500}
              captionText={"“Wait .. I need to see if the sink actually gets fixed”"}
            />
            <p className="copytext">
              One hour is the sweet spot for comedy shows; it’s no coincidence that most
              specials last about that long. Two hours is stretching the limit but still
              ok. Any longer than 2 - 2 ½ hours and audiences are basically fried.
            </p>
            <p className="copytext">
              We went midway through the mic and the audience had just about had it. It
              didn’t help that some idiot got up at the beginning of the open mic and
              walked the room. He had a shit set and went after the crowd saying “It’s not
              gonna get better from here, the showcase is over. It’s all mic’ers now”.
              Bomb with dignity, you fucking turd. Don’t ruin it for the rest of us.
            </p>
            <p className="copytext">
              We’ve learned that launching straight into material doesn’t usually go well
              in dead rooms and figured we’d use this set to practice crowd work and
              puzzle out how to revive a flatlining room.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={500}
              captionText={"“Hey, don’t go! I’ve still got impressions”"}
            />
            <p className="copytext">
              The best resuscitation we’ve seen was at the Comedy Cellar. There were about
              6-8 performers at that particular show and the audience was becoming
              restless after an hour and half. Godfrey took the stage and immediately
              cried out “Bar the doors! We’ve got 100 more comedians left. No one’s
              leaving”. Addressing the audience and acknowledging the collective weariness
              won the room back.
            </p>
            <h2 className="header">It’s Alive!!!</h2>
            <p className="copytext">
              Luckily a comic had made it easy for us to revive the room on this night.
              Right before Dan was due to go up, a belligerently drunk comic performed and
              made spectacle of herself. Stumbling around and slurring for what seemed an
              eternity, the captive audience could only raise eyebrows and think “WTF?”.
            </p>
            <p className="copytext">
              Not only did she go over her time, but 30 seconds after leaving the stage
              she went back and snatched the mic from the host! She prattled on
              incoherently for another minute or so until the host managed to wrestle the
              mic away. After briefly addressing the awkwardness in the room, the host
              welcomed Dan to the stage.
            </p>
            <p className="copytext">
              Dan pulled a pro move and managed to breathe new life into the room with
              “What in the sweet fuck just happened? You run the light and come back?
              Where do we start now? Where do we go?” and the crowd loved it. Addressing
              that weird, shared experience was the key to winning everyone over.
            </p>
            <p className="copytext">
              Calling back to that weird moment made it easy to run jokes between
              spontaneous riffs. I went after Dan and was able to continue riding that
              wave. We both did well that night - well enough that another host put us on
              his showcase the following night.
            </p>
            <MultiImageAndCaption
              imageUrls={[image6, image14]}
              imageHeight={200}
              captionText={""}
            />
            <h2 className="header">Nevermind. Spoke too soon.</h2>
            <p className="copytext">
              I’d love to say that we crushed the showcase and the crowd hoisted us atop
              their shoulders like Rudy, or that the previous nights lesson in crowd
              rejuvenation strengthened us to the point of invincibility -- but we did
              not crush. We went at the very end of the showcase and ate silence. We
              failed to zap the crowd back to life.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“What’s up with Tinder?”"}
            />
            <p className="copytext">
              At the mic we were able to use the lemons that life gave us (drunk chick
              riffing) to revive the audience. We weren't able to replicate that in the
              showcase. Of course, we can't hope for a gift like that in every show. We
              need to learn how to make our own lemonade. It's something we're still
              learning. The more shows we do, the less we fear crashing and burning.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={"“See you on the other side”"}
            />
            <p className="copytext">
              The following day we packed our bags and flew to{" "}
              <Link to="/Medellin">Medellin, Colombia</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
