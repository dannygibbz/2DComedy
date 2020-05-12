import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
// import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import image5 from "../images/PortlandME/image5.png"
import image3 from "../images/PortlandME/image3.png"
import image4 from "../images/PortlandME/image4.png"
import image1 from "../images/PortlandME/image1.png"
import image2 from "../images/PortlandME/image2.png"
import PortlandMEPic from "../images/PortlandME/PortlandMEPic.png"
import BackButton from "../BackButton.js"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={PortlandMEPic} width="100%" className="hideWhenBig" alt="Portland" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"2f92otu32x"} />
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
              fontFamily: "Nosifer, cursive",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Portland
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
            <h2 className="header">The horror!</h2>
            <p className="copytext">
              Heading Northeast out of <Link to={"/Boston"}>Boston</Link>, we made our way
              through New Hampshire and into Maine. We had no sooner crossed the state
              line than were swallowed by ghostly mist. We should have expected as much
              from the state that provides the backdrop to Stephen King’s nightmarish
              tales. Everyone wonders where King gets his spooky ideas from, but if you’ve
              ever been to Maine it’s no mystery - just step outside. The whole place
              seems like a haunted forest.
            </p>
            <p className="copytext">
              Our next show was in Portland, which is a beautiful little city.
              Unfortunately we arrived just in time for two straight days of fog and
              drizzle. It doesn’t take long to get paranoid when you can only see 30ft in
              any direction. I was waiting to see a balloon following me around or
              Pennywise grinning from a sewer. Instead of monsters, I met locals who
              turned out to be the super friendly and welcoming.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“Can I get you anything?”"}
            />
            <h2 className="header">Daily grind</h2>
            <p className="copytext">
              We spent the first day working and writing at Starbucks, and that night we
              rehearsed sets in the van. Portland was small enough to quickly cross on
              foot, so we left the van at Planet Fitness and walked to the venue. We were
              enamored with the city. The buildings were picturesque, the people were
              charming, and the streets cut clean lines through the fog.
            </p>
            <p className="copytext">
              Just as we were beginning to think this place was too good to be true, we
              turned a corner and saw a guy sitting against a building with blood pouring
              down his face. We weren’t sure if he had slipped or been popped a good one
              (he was outside a bar, though, so probably the latter). An ambulance pulled
              up as we were walking by and we assume the guy got the help he needed. Or he
              ate the paramedics brain. This was Maine, after all.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“Send more B-movie references”"}
            />

            <h2 className="header">Let the mic begin</h2>
            <p className="copytext">
              The show was held above a small bar. When we asked the bartender where the
              mic was she excitedly said “you’re comedians? That’s awesome! The mic is
              upstairs”. That was a fresh take - comics don’t always have the best
              reputations. Typically when you ask where the mic is, bartenders think
              either “Great, here’s another schlub who’s just gonna sit here all night and
              not order any drinks” or “Great, here’s another drunk that’s gonna be a
              problem”.
            </p>
            <p className="copytext">
              We went upstairs and met the host and her husband, who were both comedians.
              They were kind to us and even gave out Halloween candy! The warm welcome was
              nice; it’s not always the case when you’re a fresh face in a new scene. But
              best of all, they followed the order comics signed up in, which is very
              uncommon at open mic. Mics are typically run like an oligarchy wherein a few
              scenelords control the list and get their people on first.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={
                "Nikolaev, quick! Ziss guy sinks he vill ektually go up first. What a delboyop!"
              }
            />
            <p className="copytext">
              Until that point we had experienced performing without a stage, lighting, or
              some combination of of the two. That night we added a new one to the list:
              no microphones. It was good practice for projecting our voices and really
              connecting in small rooms. The intimate space and lack of equipment made the
              performances feel real -- almost as if you were joking around with a bunch
              of friends. The energy in the room was really positive. Everyone was excited
              for Halloween and some comics even dressed in costume (costumed comics got
              an extra minute of stage time).
            </p>
            <h2 className="header">Annoying interrupter</h2>
            <p className="copytext">
              The only blight in the room was a guy interrupting and trying to find issues
              in jokes where they didn’t exist. The kind of humorless, oversensitive wimp
              that can find offense in anything. The type of person who asks “Is that
              objectionable?” instead of “Is that funny?”. The type of virtue signalling
              turd who goes for claps rather than laughs.
            </p>
            <p className="copytext">
              At one point a comic was talking about his personal struggle to define his
              sexual orientation and didn’t know if he identified as queer. Innocuous,
              right? Well, the interrupter took it upon himself to shout out “Can you
              define queer?!” in a combative tone.
            </p>
            <p className="copytext">“What?” the comic replied, confused.</p>
            <p className="copytext">
              The interrupter was slowly chewing candy and held an index finger up as if
              to say “Wait for it”. The comic then said “Oh yeah go ahead and finish
              chewing, we’ll all wait”, which got a big laugh.
            </p>
            <p className="copytext">
              When he finished chewing, the interrupter said “I just want to know
              how&nbsp;<i>you</i> define <i>queer</i>”.
            </p>
            <p className="copytext">
              The comic realized no answer would ever be satisfactory. He handled it by
              saying “We can do this after my set if you want”, and followed it up with “I
              can’t even define my own identity, how could I begin to do it for others?”
              and moved on. You’ll notice that in the original context, the comic never
              once said anything negative about queer people.
            </p>
            <p className="copytext">
              It goes to show that anything can be offensive if you try hard enough to be
              upset.
            </p>
            <h2 className="header">Afterparty</h2>
            <p className="copytext">
              After the show we wanted to hang around and meet some of the comics. First
              thing we did was head downstairs to grab a beer. The bartender from earlier
              poured our drinks and let us know that they were on the house. It was
              awesome! After giving our thanks, we went back upstairs to chat with new
              friends.
            </p>
            <p className="copytext">
              Before the first sip could be taken, Dan C spilled his beer everywhere. The
              glass hit the ground with a thunderous clang and splashed Golden liquid on
              every object in sight. Tables, chairs, new friends -- nothing and no one was
              dry. If Dan had detonated a grenade in the glass, the blast radius wouldn’t
              have been bigger.
            </p>
            <p className="copytext">
              Spilling a beer as an adult is like dropping an ice cream cone as a child.
              It hurts. <i>It really hurts</i>. Strangers come together to mourn. People
              offer condolences. In terms of the worst things to drop, beer ranks number
              2. Cell phones are number 1. Babies are number 3.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“This two-year contract is finished. Time for an upgrade”"}
            />

            <p className="copytext">
              It stings doubly when the beer was free. That’s like slapping God in the
              face. It's the worst for the bartender. “Thanks for the free drink. I hope
              you enjoy staying late to give this place a proper scrubdown”. That'll teach
              her to be nice.
            </p>
            <p className="copytext">
              Until everything literally exploded in his face, Dan had been spitting game
              with a pretty lady. Now, he was soaked - his jeans especially. Without a
              clean pair to change into, he had to endure the most frigid, non-sexual walk
              of shame in recorded history. To top it all off, the internal temperature in
              the van was 23 degrees -- too cold to even take the pants off. He did what
              any responsible adult would do, and slept in the beer-battered jeans like a
              champion.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“The smell of success“"}
            />
            <p className="copytext">
              All in all, Portland was great. We headed next to{" "}
              <Link to="/Concord">Concord</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
