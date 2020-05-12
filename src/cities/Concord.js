import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
// import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import image4 from "../images/Concord/image4.png"
import image5 from "../images/Concord/image5.png"
import image6 from "../images/Concord/image6.png"
import image2 from "../images/Concord/image2.png"
import image1 from "../images/Concord/image1.png"
import image3 from "../images/Concord/image3.png"
import ConcordPic from "../images/Concord/ConcordPic.png"
import BackButton from "../BackButton.js"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={ConcordPic} width="100%" className="hideWhenBig" alt="Concord" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"9otk3fcabs"} />
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
              fontFamily: "Cabin Sketch, cursive",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Concord
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
            <h2 className="header">Where the hell are we?</h2>
            <p className="copytext">
              Waking up in freezing temperatures is a bit like waking up hungover. You
              come-to in a heavy lidded, semi-conscious fog where every flick of the eye
              drags with it a blurry tracer of the room. You’re not quite sure where you
              are or how you got there. Flashes of the previous night eventually filter in
              and form a rough timeline of events. Only after recognizing the crystalline
              glitter of a frosted windshield did I slowly begin to piece things together.
              We had left <Link to={"/PortlandME"}>Portland</Link> and ended up in
              Concord, New Hampshire.
            </p>
            <p className="copytext">
              Shifting uncomfortably in cocoon-like sleeping bags, our wool-capped heads
              and bearded faces were the only exposed bits. If anyone looked in the
              window, they’d think they were witnessing the pupa stage of hipster
              metamorphosis. You’d think having a beard would help with the cold, but it
              makes it worse. Puffs of steamy breath hang in viscous clouds above your
              face, leaving your mouth a soggy mess. It’s like receiving a nighttime visit
              from a sexually deviant ghost.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"”Was it as good for you as it was for me?”"}
            />
            <h2 className="header">Mistakes were made</h2>
            <p className="copytext">
              Owing to our flat-out lack of craftsmanship, sleeping outside probably
              would’ve been warmer than sleeping in the van. We spent days researching the
              best methods for insulation. We spent weeks studying the pros and cons of
              foam-board and fibrous systems. We spent months measuring, cutting out, and
              affixing insulation to the floor, ceiling, and individual wall panels.
            </p>
            <p className="copytext">
              As we locked the last panel into place, it was clear the insulation was an
              unmitigated failure. If we had done nothing, it would have been better. We
              somehow managed to create reverse insulation where outside temperature is
              sucked in and intensified. When it’s hot, the van is blistering. When it’s
              cold, the van is arctic.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“The conversion was a piece of cake”"}
            />
            <p className="copytext">
              Even homeless people sleep better than we do. When temperatures plunge
              beneath freezing, they stay in churches and shelters that provide warm beds.
              Not us. We stay in a frosty cardboard box that cost a lot, so homeless
              people manage money better than we do, too.
            </p>
            <p className="copytext">
              When people die outside, it’s sad. If a homeless person dies of hypothermia,
              people lament “Man, he got a sad lot in life. It’s terrible he didn’t get
              the help he needed”. But if you freeze to death in your own car, people
              think “Man, this guy was a friggin idiot”, and your family has to pretend
              you weren’t a total moron at the funeral.
            </p>
            <p className="copytext">
              If we freeze to death, we only hope that our bodies and those of our frozen
              homeless brethren will be put to good use; perhaps like Mt. Everest where
              frozen corpses serve as guideposts. “Coffee shop? Sure, walk North past
              Toothless Thomas, then bang a left at the Dipshit Dans and Starbucks will be
              on the corner between Captain Crumbjacket and Señor Catscratch”.
            </p>
            <h2 className="header">Time to warm up</h2>
            <p className="copytext">
              It isn’t all bad; cold weather helps immensely in achieving weight loss
              goals. You can lose up to 20 pounds a week once your frozen limbs are hacked
              off. Why spend money on a gym membership when you can do Body by Frostbite
              for free? Step aside, Planet Fitness, there’s a new kid in town.
            </p>
            <p className="copytext">
              It’s amazing how quickly people find silver linings for situations they’ll
              never be in. Whenever we discuss how cold the van is, someone will
              inevitably say “that’s not so bad, at least you can burn more calories”.
              Yeah, because we’re so damn cold the muscles violently contract to create
              heat. It’s not ideal or voluntary. It’s like going up to someone who lost
              their legs and saying “walking with crutches isn’t so bad, you can build
              your upper body”.
            </p>
            <p className="copytext">
              We usually practice sets in the van to prepare for shows, but that night it
              was so cold we had trouble remembering our jokes. Even if we had remembered,
              jokes tend to lose their punch when delivered with quivering breath and
              chattering teeth.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“What’s the deal with airplanes?”"}
            />
            <p className="copytext">
              We decided to go into the venue well before the mic was to start, just for
              the warmth. We opened the doors to a packed house and were pumped! It’s rare
              for regular audience (non-comics) to attend, or in this case fill the room.
              The whole reason we do mics is to practice for shows with a ‘real' audience,
              so when the opportunity presents itself, we jump on it. Thawing out at the
              bar, we asked around and were told the huge crowd was there for trivia
              night.
            </p>
            <p className="copytext">
              The mic immediately followed trivia and we held out hope thinking folks
              would stay and hang around for the show. How foolish. No sooner had the
              winning team been announced than the crowd dispersed as if a canister of
              tear gas exploded.
            </p>
            <h2 className="header">Sudden promotion</h2>
            <p className="copytext">
              It was mildly depressing seeing the huge crowd vanish, but we had played
              small rooms before and figured we’d shoot the shit with other comics before
              the show. When we didn't spot any figures hunched over notebooks or mouthing
              jokes, we began to get nervous. As the ever-dwindling crowd continued their
              march out the door, panic slowly crept in. “There’s no way we’re the only
              comics here” we murmured halfheartedly, trying to allay our fear.
            </p>
            <p className="copytext">
              By gametime neither the host nor any comics at all showed up. In the most
              spectacular promotion of our young careers, we had gone from mic’ers to host
              to headliners in an instant.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“Enough applause, ladies and gentlemen! You’re too kind!”"}
            />
            <p className="copytext">
              The space we had to perform in was, to put delicately, bad. We were tucked
              in the far corner of the room, sandwiched between a piano and dart board. No
              stage, no lighting. The guy who had MC’ed trivia came over and handed us one
              of those old-timey microphones that Elvis used and basically told us to let
              ‘er rip. So with no context, no setup, and no explanation, it was time to
              start telling jokes.
            </p>
            <p className="copytext">
              The patrons couldn’t have been less interested. One guy at the bar clunked
              down his prehistoric laptop and began “making trades” despite the market
              having been closed for five hours.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“This ‘Enron’ thing is the future”"}
            />
            <p className="copytext">
              A couple sitting front and center (or middle and diagonal) tapped their toes
              impatiently as we performed - apparently we were interrupting their romantic
              game of darts. Three older gentlemen sat in the far back of the room, mere
              specks on the horizon. Lastly, a small band of drunk regulars sat at the bar
              facing the opposite wall.
            </p>
            <p className="copytext">
              There were perhaps 10 people all told when Dan launched into his set. He
              chatted with the audience to warm them up, then hit them with jokes. Even
              though most didn’t want to hear comedy and some even talked through the set,
              Dan didn’t allow the audience to break him. He stayed in bits and ran
              material. It wasn’t until the end that he comically but earnestly dressed
              the audience down - which basically means chiding the audience for being
              rude or lame.
            </p>
            <p className="copytext">
              We saw a comic give a dressing down at a mic in NYC.  Seeing the sparsely
              occupied room of comics, this dude went in hard - saying something like
              “Man, fuck this. I hate this so much. I hope all of you fucking die. What
              are we even doing here? I don’t know what happened to me. I used to be so
              funny. Now I fuckin waste my time at these things and it sucks the life
              outta me” For comics, it’s hilarious. When someone is utterly exasperated
              and says real shit, it resonates because we’ve all been there. We’ve waited
              hours upon hours for our turn to perform, only to play an empty or
              disinterested room.
            </p>
            <p className="copytext">
              When you’re in a room full of people with shared experience, dressing down
              is hilarious because it’s relatable. But when you’re in an empty bar in
              small town New Hampshire, it’s jarring. When Dan hit the room with “I hope
              you all die in the most horrific way, hopefully a barn fire” you could feel
              the energy shift from indifference to anger. With that, Dan took leave and
              passed me the torch.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“Warmed ‘em up for ya!”"}
            />
            <p className="copytext">
              Gauging the room, I decided the best course of action was to hit them with
              local jokes (mocking Concord’s pronunciation, talking about ‘wicked’ vs.
              ‘really’, etc). If I had launched into material without connecting to the
              audience, it would’ve gone over like a mid-BJ fart. The crowd was with me
              for the Concord-specific jokes, but began to stray once the usual set began.
              I didn’t bring the house down, but learned for next time that if something
              is working, stick with it.
            </p>
            <p className="copytext">
              The cool thing about standup is even if you eat shit (and we did), you can
              potentially brighten at least one person’s day. After the ‘show’, a guy in
              his mid-50’s excitedly came up and started talking. He thanked us for coming
              out, saying it was the best comedy night they’d had in a long time. He began
              listing the comedy podcasts he listened to and naming the comedians he
              loved, and it was a great chat. Even though we were bummed about our
              performances and were ready to jump off a bridge, this guy had a great
              night. Small moments like that turn what would otherwise be soul-crushing
              experiences into worthwhile and reaffirming experiences.
            </p>
            <p className="copytext">
              The next morning we returned to Philly. Within the first three hours of the
              drive, the temperature increased 15 degrees. We were never so happy to get
              back to temperatures in the 40’s. We decompressed for a week or two in
              Philly before heading back on the road to{" "}
              <Link to={"/Baltimore"}>Baltimore</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
