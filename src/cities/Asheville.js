import React from "react"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
// import MultiImageAndCaption from "../MultiImageAndCaption.js"
import { Link } from "react-router-dom"
import image2 from "../images/Asheville/image2.png"
import image8 from "../images/Asheville/image8.png"
import image7 from "../images/Asheville/image7.png"
import image6 from "../images/Asheville/image6.png"
import image4 from "../images/Asheville/image4.png"
import image5 from "../images/Asheville/image5.png"
import image3 from "../images/Asheville/image3.png"
import image1 from "../images/Asheville/image1.png"
import marshmellow from "../images/Asheville/marshmellow.gif"
import clapping from "../images/Asheville/clapping.gif"
import AshevillePic from "../images/Asheville/AshevillePic.png"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton.js"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={AshevillePic} width="100%" className="hideWhenBig" alt="Asheville" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"fqlcz3vwgj"} />
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
              marginTop: "15px",
              color: "black",
              fontFamily: "Homemade Apple, cursive",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Asheville
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
            <h2 className="header">“You’ve gotta go to Asheville!”</h2>
            <p className="copytext">
              This sentence was parroted by just about everyone we encountered during our
              first southern trip. No matter what city we were in, the question “Where are
              you headed next?” came up. Before we could open our mouths, shouts of “Go to
              ASHEVILLE!” drowned out any response. Leaving{" "}
              <Link to="/Atlanta">Atlanta</Link>, we were excited to see for ourselves.
            </p>
            <p className="copytext">
              It was described as an idyllic slice of nature essentially untouched by the
              hustle and bustle of big business. That certainly was true; there were no
              skyscrapers or obnoxious chain stores to blight the cozy mom-and-pop shops
              dotting the landscape. It had the feel of a town where you’d be drawn and
              quartered if you dared even <i>suggest</i> that Starbucks has good coffee.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“On second thought, I’ll have a decaf”"}
            />
            <p className="copytext">
              The outdoor lifestyle is a huge draw, and residents clearly revel in it. You
              don’t need the hyper-observant eye of Sherlock Holmes to figure that out,
              either -- every person that lived there had a walking stick. Every. Single.
              One. Whether traversing a rugged parking lot or other completely flat
              surface, they sensibly had that extra bit of support. Some folks were even
              ‘grounding’, which apparently involves walking barefoot to forge a closer
              connection with the earth, and a further connection from me.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={
                '"The bond with Mother Nature is so strong you can almost smell it"'
              }
            />
            <p className="copytext">
              Asheville was humble to the point we couldn’t tell if buildings were
              intentionally minimalist, or derelict. Put another way, it was tough to
              discern whether the town was rust<i>ic</i> or rust<i>y</i>. Even the people
              had that ambiguous quality where we couldn’t tell if they were hipster or
              homeless; the line between the two is razor thin. If you’re unconvinced,
              read the description below. If you can make an immediate, accurate
              assessment to whether or not the description fits hipster or homeless, you
              win.
            </p>
            <p
              className="copytext"
              style={{ fontStyle: "italic", paddingLeft: "10%", paddingRight: "10%" }}
            >
              -Male, 30’s
            </p>
            <p
              className="copytext"
              style={{ fontStyle: "italic", paddingLeft: "10%", paddingRight: "10%" }}
            >
              - Unkempt hair hangs in twists and tangles beneath a wool cap. A half-ass
              attempt at dreads, the locks of his mane look like turds that fell on a
              barber shop floor and collected a mishmash of loose hair. The beard,
              redolent of a dusty old witches broom, curls out in all directions as if
              trying to escape his grubby face.
            </p>
            <p
              className="copytext"
              style={{ fontStyle: "italic", paddingLeft: "10%", paddingRight: "10%" }}
            >
              -A begrimed flannel sags loosely from bony shoulders. Against all odds, pit
              stains stand defiantly out against the tartan pattern. It’s clear he owned
              the shirt for years but washed it twice.
            </p>
            <p
              className="copytext"
              style={{ fontStyle: "italic", paddingLeft: "10%", paddingRight: "10%" }}
            >
              -Pants are a filthy, threadbare mess. The kind you <i>know</i> would stand
              up straight after they’ve been taken off.  Adorned with dark stains and
              mystery splotches, they resemble something between a Pollock painting and a
              Rorschach test.
            </p>
            <p
              className="copytext"
              style={{ fontStyle: "italic", paddingLeft: "10%", paddingRight: "10%" }}
            >
              -Mangled boots appear to have been picked off a corpse that stepped on a
              landmine. They’re the kind of boots you smell before you see.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"“Spare some change” or “I run a startup microbrewery” ?"}
            />
            <h2 className="header">Onward and downward</h2>
            <p className="copytext">
              We cruised Ashevilles main drag and absolutely could not find the venue. In
              step with the adversarial vibe towards technology, GPS didn’t work. We could
              only surmise that nature enthusiasts sniff at the lowbrow concept of
              satellite mapped precision, preferring celestial navigation instead. When we
              finally arrived at the venue, we were convinced we had the wrong place -
              probably due to a miscalculation of the sun's sextant altitude and
              curvature.'
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={280}
              captionText={
                <div>
                  “I used a Bond Chronometer <i>before</i> it was cool”
                </div>
              }
            />

            <p className="copytext">
              The place was constructed in the most slapdash assemblage of components;
              basically the architectural equivalent of Sid’s mutant doll collection from
              Toy Story. It was 1 part impound lot, 2 parts thrift shop, 1 part speakeasy
              and 3 parts mental asylum. As we got in, we discovered the show was a
              music/poetry/comedy open mic - which basically means no one was there for
              comedy.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“I built this place myself, can you believe it?!”"}
            />

            <p className="copytext">
              Realizing most, if not all in attendance were decidedly <i>not</i> there for
              comedy, I wanted to tuck tail and run. Not because the audience would be
              hostile; I just felt out of place as a comic. I reversed roles in my mind -
              if musicians sporadically performed and broke up the flow of a comedy mic,
              the audience would be slightly annoyed. I didn’t want to be that guy.
            </p>
            <p className="copytext">
              Thankfully Dan C was the voice of reason and brought up a great point: if we
              want to become better comedians, facing this type of challenge is exactly
              what we need. There will be plenty of rooms where audiences don’t
              necessarily want to listen, but it’s our job to turn the room. Utilizing
              crowd work, keeping the show entertaining, and not getting rattled are
              essential skills for comedians. So we decided to hang out before the show
              and get to know some of the other mic’ers.
            </p>
            <h2 className="header">Strange encounter ...</h2>
            <p className="copytext">
              Chatting people up before shows is one of the more enjoyable things about
              mics - you make new connections, share stories, and typically discover you
              have a lot in common. Most people at mics are friendly, supportive, and
              following their passion. However, there are outliers.
            </p>
            <p className="copytext">
              We heard a crash of piano keys across the room, followed by constant
              striking of a single high note on the piano. The ominous ‘ping ping ping’
              had an eerie melody, like in a horror movie right before the monster is
              revealed. Fittingly, as soon as the spooky tune wrapped up, the player - who
              was of monstrous proportions herself - drove over to us in a rascal scooter.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“And a diet coke”"}
            />
            <p className="copytext">
              If the people of Wal-Mart formed a kingdom, this woman would immediately be
              crowned queen. To call her The Blob would be too cliché, and to call her The
              Slob would be too lazy, so let’s settle somewhere in the middle and call her
              The Amoeba. With every bump of the scooter, the undefined boundaries of her
              form extended and retracted in kaleidoscopic shape-shifts. After running
              over my foot, instead of an apology she opened the conversation with an
              impatient “Ay I gotta sodeh round back udda chair. Coudja grab it fer me?”
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“My secret is cardio”"}
            />

            <p className="copytext">
              “Yeah ... sure”, I said. After picking a mountain dew bottle delicately
              between thumb and forefinger from a greasy bag, I extended it to her
              greedily awaiting pseudopod. Before the carbonated “csssshh” of an opening
              bottle could sound, nearly the entire soda had been consumed. With a quarter
              inch of backwash remaining at the bottom, she asked if i’d care for a sip.
              Although a magnanimous gesture, I politely declined.
            </p>
            <p className="copytext">
              To get every last drop, she upended the bottle and held it suspended above
              her gaping maw as if she were a rockstar hitting a high note. When the
              microscopic droplets weren’t flowing quickly enough, she began to vigorously
              shake the bottle - covering me and everyone within a 5-foot radius in
              Mountain Dew dew. Sufficiently bone dry, she tossed the bottle into a trash
              can. My utility as soda-fetcher concluded, and she floated off in another
              direction to engulf the next errand boy.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"♩For those about to snack, we salute you♩"}
            />
            <p className="copytext">
              Thoroughly shaken after that bizarre interaction, we sat at a table with
              some new friends and settled in to enjoy the show. Each musical performer
              was given three songs or fifteen minutes on stage. The first performer was
              incredible. She was a classically trained musician from Pennsylvania with a
              soulful voice. After her a guy who looked like he’d seen some shit and had
              stories to tell took the stage. He, too, was amazing. He had gravelly vocals
              that held eyes and ears hostage.
            </p>
            <h2 className="header">
              Let the <i>real</i> show begin
            </h2>
            <p className="copytext">
              The host then announced the next performer, who to our astonished and
              disbelieving eyes was The Amoeba. We couldn’t believe it; we really thought
              she was just a crazy, local yokel there to watch. We wouldn’t have guessed
              in a million years that she’d take the stage. However Dan and I, being
              performers, took a step back and reminded ourselves to stop being so
              judgemental. Looks don’t indicate talent, and books shouldn’t be judged by
              the cover. This woman could be like Susan Boyle, for all we knew.
            </p>
            <p className="copytext">
              Nope. Her skills and looks were evenly matched. The first ‘song’ began with
              a mirror-shattering screech which became a rumbling howl, followed by an
              atonal interlude about ‘skeeters’ (mosquitos) and ramblings of
              half-remembered dreams. The end was part gregorian chant, part funeral
              dirge, and abruptly guttered out like a candle without oxygen. Below is a
              rough recounting of the lyrics
            </p>
            <p className="copytext">*Botched high note, gutteral moan*</p>
            <p className="copytext">Heeyyyyyy alll, dun here be all love,</p>
            <p className="copytext">Be good to eachotherrrr and love the at time</p>
            <p className="copytext">*brief pause for non-existent chorus*</p>
            <p className="copytext">
              He sed, wut? I sed da skeeter dun gonn bite. I sed looOOooOviinnnnnNN all
              you peopleeeeee is good. I sed no, dat dun skeeter gon … fly to da…
              heavennnn for the ale. He sed no and i … laaaannnd offff the freee
            </p>
            <p className="copytext">
              This continued for the entire set. Let that sink in for a moment. She
              <i>‘sang’</i> three full <i>‘songs’</i> acapella, and{" "}
              <i>made up the words as she went.</i> We couldn’t even dream of having that
              kind of confidence on stage. During the second song, she even asked the
              audience if they had any requests. Someone shouted “Stayin Alive!” to which
              she replied “Sang Somethin? never heard of it”. Several other extremely
              well-known songs were shouted out, but she hadn’t heard a single one of
              them. I have zero doubt if someone shouted “sing Happy Birthday!” she’d act
              like someone requested a song in Cantonese. But if someone shouted “sing
              Cousin Zeke’s Pet Fly!” she’d be on it in an instant.
            </p>
            <p className="copytext">
              By this point we were the definition of a captive audience. All in
              attendance thought (correctly) that this lady was crazy, so no one wanted to
              rock the boat. Desperate attempts to inject positive energy into the room,
              like clapping along, died swiftly. It’s impossible to keep a beat when a
              song has zero instrumental accompaniment or lyrical cadence. By the time the
              collective clap had begun, it was already out of tune. It fizzled out within
              8 seconds and the energy returned to stunned silence.
            </p>
            <ImageAndCaption
              imageUrl={clapping}
              imageWidth={500}
              captionText={"'I am really feeling this beat'"}
            />
            <p className="copytext">
              She launched into the last song, which had a ‘pop-meets-colonoscopy’ sound,
              and it seemed to go on forever. It’s worth mentioning again that all these
              songs <i>didn’t fucking exist</i>, so no one in the audience knew when
              they’d end. Thankfully, she cued us in by swaying her hands and bowing like
              a conductor concluding a symphony. The bow was accompanied by a head nod and
              utterance of a smug “ayuh” to indicate the applause was well-deserved.
            </p>
            <h2 className="header">Sifting through the wreckage</h2>
            <p className="copytext">
              Sometimes you see people bomb. Sometimes they bomb so badly, they walk the
              room (people get up and leave). But rarest of all, the bomb is so horrific
              that people lose the will to live. The Amoeba’s performance easily scored a
              gold medal in the last category.
            </p>
            <ImageAndCaption
              imageUrl={marshmellow}
              imageWidth={600}
              captionText={"*Real security footage from the mic"}
            />
            <p className="copytext">
              With the energy of the room unequivocally obliterated, the bewildered host
              came back to announce the next performer. “Coming to the stage, we have Dann
              Gibbonnssss”. That’s right. I had to follow that. It took all the courage I
              had just to get out of my seat.
            </p>
            <p className="copytext">
              I got on stage and surveyed the room - almost everyone had evacuated to the
              outdoor portion of the venue. With five or six remaining people in the room,
              I started telling jokes and trying to connect. Dan C followed. It was
              extremely challenging for us to revive the audience, and although we didn’t
              set the room on fire in our performances, we definitely began to turn the
              tide in the room.
            </p>
            <p className="copytext">
              Looking back now, we’re both happy that the show went the route it did. Sure
              it was tough, but it was an incredible lesson in staying calm under
              pressure. Like the old saying “It’s always darkest before dawn”, Asheville
              proved to be a fitting end to our first road trip.
            </p>
            <p className="copytext">
              We recharged in Philly for a few weeks before going on our next road trip
              North. We started that trip with <Link to="/NewYork">New York</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
