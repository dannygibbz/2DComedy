import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"

import image9 from "../images/VirginiaBeach/image9.gif"
import image1 from "../images/VirginiaBeach/image1.png"
import image5 from "../images/VirginiaBeach/image5.gif"
import image8 from "../images/VirginiaBeach/image8.png"
import image2 from "../images/VirginiaBeach/image2.png"
import image7 from "../images/VirginiaBeach/image7.png"
import image6 from "../images/VirginiaBeach/image6.png"
import image4 from "../images/VirginiaBeach/image4.png"
import image3 from "../images/VirginiaBeach/image3.gif"
import image10 from "../images/VirginiaBeach/image10.png"
import BackButton from "../BackButton.js"
import VirginiaBeachPic from "../images/VirginiaBeach/VirginiaBeachPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img
          src={VirginiaBeachPic}
          width="100%"
          className="hideWhenBig"
          alt="Virginia Beach"
        />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"skr1ifmx80"} />
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
              color: "#495b7a",
              fontFamily: "Trade Winds, cursive",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Virginia Beach
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
            <h2 className="header">I’m feelin’ it</h2>
            <p className="copytext">
              We got into town pretty late after driving from{" "}
              <Link to="/Pittsburgh">Pittsburgh</Link>. We didn’t hit a mic our first
              night in Virginia Beach - we saw a show to get a feel for the local comedy
              scene. The show was broken up into two halves - the first half was amateurs,
              the second half pros. The clock was ticking on our two-hour parking spot -
              we could only stay for the first half.
            </p>
            <p className="copytext">
              ‘Amateur’ sounds like a standard competence, but there are levels. Some
              amateur guys have done comedy for a few weeks, others for a few years. As a
              result some of the performances were really good, others less so. Mid-show
              there was a string of about three or four comics that failed to rouse
              laughter from the audience … and then something strange happened. It was one
              of those things that even if repeated verbatim, could never work the same.
              Something was in the air that night.
            </p>
            <p className="copytext">
              A goofy guy stumbled onto the stage, doe-eyed, looking in all directions.
              People were already chuckling based on his appearance. When he got to the
              mic, he surveyed the audience with a doofus grin and said “It’s getting hot
              in here!”. He went to pull off his hoodie, but accidentally grabbed his
              undershirt with it and neither came off -- they got stuck around his head
              and he flailed around as if trapped in a net.
            </p>
            <ImageAndCaption imageUrl={image9} imageWidth={400} captionText={""} />
            <p className="copytext">
              After about fifteen seconds he emerged from the hoody, red-faced and
              breathless. A wave of laughter had already begun to spread through the room.
              He stumbled to the fore of the stage saying “Haha, whoops!” and as he
              reached for the mic stand, it collapsed. From there, it only got worse
              (better).
            </p>
            <p className="copytext">
              I don’t know how mentalism or groupthink works, but we were all under a
              spell that evening. To laugh at this guy, several gaps in propriety needed
              to be hurdled -- and everyone leapt with gusto. It started like “Oh, God.
              I’m not sure if this guy’s mentally all there, we probably shouldn’t laugh”
              and a chuckle was suppressed.
            </p>
            <p className="copytext">
              Just as everyone thought their laughter was under control, the dude bumbled
              around and told a joke that was so stupid, the laughs couldn’t be contained.
              Pockets of cackles and guffaws sprung up throughout the room. The urge to
              laugh <i>grew</i>. It was like laughing in a library or at a funeral - the
              harder you try to stop, the funnier it becomes.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={
                <div>
                  “Psst ... Pssst. I'm <i>DYIN</i>... to get outta here!”
                </div>
              }
            />
            <p className="copytext">
              Everyone thought “God this is terrible, are we all laughing <i>at</i> this
              guy? We have to stop!” but the more we fought it, the worse it became. A
              dull roar now echoed throughout the room, and the guy took it as laughter at
              his jokes. Emboldened, he energetically paced the stage and crashed
              shin-first into the stool, launching it across the room. The crowd erupted.
              People were rolling in the aisles. Thoughts of holding back laughter were a
              distant memory replaced by “Holy fuck, this is incredible”.
            </p>
            <p className="copytext">
              We live in a divisive time. Arguments break out over politics, the economy,
              and social issues ad nauseam. Men and women are often at odds. Even comedy
              clubs are divided by perceptions of what constitutes free speech. But when
              this dude made a joke comparing his Tinder date to a hurricane and then
              tripped over the mic cord, the roof blew off.{" "}
              <b>
                <i>Everyone</i>
              </b>
               was doubled over, clutching their chests and gasping for air. People of all
              races, colors, creeds, and genders pounded their fists on the table and
              wiped tears from their eyes. It was an extraordinary moment.
            </p>
            <p className="copytext">
              When his set was over, it felt like that movie moment where the evil
              mind-control plan is foiled and the hypnotized populace wakes up not knowing
              where they are or how they got there.
            </p>
            <ImageAndCaption imageUrl={image5} imageWidth={400} captionText={""} />
            <p className="copytext">
              We knew <i>something</i> special had occurred, we just weren’t sure{" "}
              <i>what</i>. Even the host came up after the set and said “What did I just
              watch?”.
            </p>
            <h2 className="header">Psychological analysis</h2>
            <p className="copytext">
              On the ride back to a Walmart parking lot, Dan and I tried to figure out
              what it was about that set that had everyone so spellbound. The only
              conclusion we could draw was it tapped into an ancient part of the human
              brain.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“Don’t drag me into this shit”"}
            />
            <p className="copytext">
              Throughout human history and evolution, specific actions and events recurred
              frequently enough to leave indelible marks on the psyche. Certain things are
              hardwired to elicit laughter. I’ll give two examples.
            </p>
            <p className="copytext">
              The first are farts. Farts are the great unifier. Rich or poor, famous or
              anonymous, smart or dumb, it makes no difference; farts are funny. You could
              visit an uncontacted tribe from the depths of the darkest jungle with zero
              linguistic, cultural, or moral commonalities. Your best efforts to
              communicate could fail miserably. But if you bend over to grab your bags
              before leaving and cut a fart, <i>everyone</i> will laugh.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“Whoever smelt it dealt it!”"}
            />
            <p className="copytext">
              The second are physical gags. Fools have entertained kings and commoners
              alike since the dawn of civilization. From the Egyptians to the Romans to
              the Aztecs, everyone loved laughing at a buffoon. We realized that this dude
              was basically a modern day court jester. The deep laughter hearkened back to
              when jesters clumsily pranced around castles with tinkling bells atop silly
              hats. The audience couldn’t stop laughing because this shit has been burned
              into brains for thousands of years.
            </p>
            <p className="copytext">
              Watching the comic trip over a mic cord was the modern-day equivalent of our
              ancestors watching a jester take a header into a cake. Watching the comic
              bellow terrible jokes into the mic was like watching a jester blow bubbles
              out of a trumpet. The entire set was hysterical in a deeply instinctive way,
              and trying to replicate it would be like trying to catch lightning in a
              bottle.
            </p>
            <h2 className="header">Our turn</h2>
            <p className="copytext">
              The first mic we did was at a place called Your Alibi’s Bar and Grill, and
              it was amazing. For comics: if you’re in VA Beach and want to perform, you
              need to go there. 10 minute sets, no content restrictions, and it’s full of
              really funny, talented people. It’s in a nice dive bar with a really open
              atmosphere, and it attracts real audiences. Even toward the end of the show,
              at 1 a.m., audience members were still sharing laughs. It was an excellent
              mic and we’ll definitely go back.
            </p>
            <p className="copytext">
              The following day we hit a mic in Newport News called Cozzy’s. It’s a
              dedicated comedy club that draws real audiences and awesome comics. Overall,
              the comedy scene was really inclusive - to the point that when we arrived at
              the next mic, some comics and audience already knew who we were.
            </p>
            <MultiImageAndCaption
              imageUrls={[image7, image6]}
              imageHeight={180}
              captionText={"“Who’s who?”"}
            />
            <p className="copytext">
              We signed up and another comic said “Oh, you’re the Dan’s!”. It turned out
              he was friends with the host of Alibi’s and they had talked. We even saw
              some of the same audience members from the previous night. It’s so cool when
              the audience appreciates comedy enough to travel and stay late to watch. We
              enjoyed the show and connected with a lot of comics.
            </p>
            <h2 className="header">Movin on up</h2>
            <p className="copytext">
              After the show we realized all of our batteries were dead. Laptops, phones,
              and even our portable generator. After all of the cities we visited, it was
              time to finally bite the bullet and get a motel for the night. We found a
              place not to far from the comedy club and decided to check in.
            </p>
            <p className="copytext">
              You ever drive past a dingy looking motel on a desolate stretch of road and
              think “I could blow my head off in there”? That’s where we stayed. Even
              though the wallpaper peeled, the lights flickered, and the carpet smelled,
              it was a step up.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“Can you believe it’s only $35 a night?!”"}
            />
            <p className="copytext">
              We look shady everywhere we go. When we began living on the road we had
              fresh haircuts and trimmed beards. At this point, we look like Robin
              Williams after escaping Jumanji.
            </p>
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <p className="copytext">
              People don’t know what to make of us - especially when we pull into a motel
              at 12 a.m. and ask for a room. We’re too unkempt to be gay guys but also too
              gross to attract women. We kinda look like greasy porn producers --
              especially when we unpack a bunch of cameras from a carpeted van that has a
              couch in it.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“Comics about to kill themselves, Take 17”"}
            />
            <p className="copytext">
              Sleeping in a warm bed was nice but we didn’t want to get too comfortable.
              We checked out early the next morning and enjoyed the motel’s continental
              breakfast: a tepid cup of coffee accompanied by <i>nothing</i>.
            </p>
            <p className="copytext">
              After Virginia beach we ventured down to{" "}
              <Link to="Savannah">Savannah, GA</Link>.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
