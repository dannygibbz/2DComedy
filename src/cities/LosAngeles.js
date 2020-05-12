import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image1 from "../images/LosAngeles/image1.png"
import image2 from "../images/LosAngeles/image2.png"
import image6 from "../images/LosAngeles/image6.gif"
import image3 from "../images/LosAngeles/image3.png"
import image7 from "../images/LosAngeles/image7.png"
import image5 from "../images/LosAngeles/image5.png"
import image4 from "../images/LosAngeles/image4.png"
import image8 from "../images/LosAngeles/image8.png"
import LosAngelesPic from "../images/LosAngeles/LosAngelesPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={LosAngelesPic} width="100%" className="hideWhenBig" alt="Los Angeles" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"ize43ggqmj"} />
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
              fontFamily: "Dancing Script, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Los Angeles
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
            <h2 className="header">La-La Land</h2>
            <p className="copytext">
              We loved the year round warmth and sunshine in{" "}
              <Link to="/SanDiego">San Diego</Link>. When we got to LA, we felt the same.
              Both cities are special in their own way.
            </p>
            <p className="copytext">
              The only mismatched expectation we encountered in LA was Hollywood. As huge
              film buffs, we were under the naive assumption that everything was a movie
              set or possessed the glitz and glamour of Old Hollywood in its heyday. Man,
              were we wrong.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ImageAndCaption
                imageUrl={image1}
                imageHeight={240}
                captionText={"Expectation"}
              />

              <ImageAndCaption
                imageUrl={image2}
                imageHeight={240}
                captionText={"Reality"}
              />
            </div>

            <p className="copytext">
              As movie freaks, we were extremely let down. We felt like kids who waited
              their whole lives to visit Disneyland finally entering the Magic Kingdom
              only to see Mickey tying off while Minnie blew him for a crack rock in a
              cardboard box.
            </p>
            <p className="copytext">
              Even though it was grittier than expected, we still had a blast in
              Hollywood. We enjoyed every neighborhood we visited, even if some were
              considered ‘dangerous’. Safety is something we get asked about all the time.
              Parents, specifically, are under the impression that certain cities have a
              “kill on sight” policy. Most places are totally fine. Let’s have a quick
              chat about safety.
            </p>
            <h2 className="header">Safety first</h2>
            <p className="copytext">
              Since we’ve traveled to so many cities, we’ve developed our own safety
              rating scale. If you really want to identify whether or not a city is safe,
              don’t waste your time looking up crime statistics - just follow this one
              simple trick we use.
            </p>
            <p className="copytext">
              <i>Use a public toilet</i>.
            </p>
            <p className="copytext">
              You can tell how dangerous a city is by how many layers of security are
              involved in using a restroom.
            </p>
            <h2 className="header">2D Comedy City Safety Scale</h2>
            <p className="copytext">
              <b>1 - City is safe.</b> Free to enter restrooms whenever you please.
            </p>
            <p className="copytext">
              <b>2 - City is questionable.</b> A key or pincode is required to enter the
              restroom.
            </p>
            <p className="copytext">
              <b>3 - City is downright sketchy.</b> An employee must escort you to the
              restroom.
            </p>
            <p className="copytext">
              LA scored a 3. At Jersey Mike’s Subs, an employee had to stop what he was
              doing, grab the key (which was chained to an object the size and weight of a
              table leg), and walk me to the restroom to unlock it personally. Let that
              sink in.
            </p>
            <p className="copytext">
              A germ-infested shithouse needed to be under lock and key. If a filthy,
              rancid bathroom is more alluring than what’s outside, you know it’s a rough
              area. What do they think people are going to do if given the key with no
              supervision? <i>Run out and make a copy?</i> To what end? Break in and poop
              off-hours?
            </p>
            <h2 className="header">Comedy Scene</h2>
            <p className="copytext">
              We have a confession: prior to visiting, we thought we were gonna hate LA.
              We’d met several comics throughout the country that had spent time in LA and
              talked nothing but shit on it. They’d claim LA was a town of superficial
              assholes trying to use comedy shows to get exposure in acting or that all
              the comics were dicks. The disparaging remarks were varied and plenty.
            </p>
            <p className="copytext">
              We’re happy to report that our preconceived notions were unfounded. The
              comedians we met were an awesome, friendly bunch of people. It was a
              pleasant surprise -- usually the bigger the comedy scene, the more
              cutthroat. That wasn’t our experience at all - the comics we met were
              easygoing and offered to put us on shows.
            </p>
            <p className="copytext">
              <b>*Disclaimer*</b> Of course, if you’re an LA comedian you might be saying
              “LA &nbsp; <i>does</i> suck! It’s like high school! You don’t know shit!”
              and you could be right. We were only there for a few days so naturally we
              had on rose-tinted glasses.
            </p>
            <h2 className="header">Slotted mics</h2>
            <p className="copytext">
              LA was the first city in which we experienced ‘slotted’ mics. For those
              unfamiliar with the concept, it’s simple: you check the schedule on the
              clubs website and pick a date/time you want to perform. Shows are an hour
              long. There are 9 slots at 5 minutes a pop. On the night of the show you
              venmo the club $5 dollars and you’re set. We found slotted mics to be
              awesome, but some people aren’t fans. We’ll break down the pros and cons
              below.
            </p>
            <h2 className="header">The argument for</h2>
            <p className="copytext">
              <ul>
                <li style={{ marginBottom: "15px" }}>
                  The timing is perfect - an hour is the sweet spot.
                </li>

                <li style={{ marginBottom: "15px" }}>
                  You can actually plan out your night as you know exactly when shows
                  begin and end. No wondering “when the hell will I get up, at midnight?”.
                  It’s perfect if you’re trying to schedule multiple mics a night.{" "}
                </li>

                <li style={{ marginBottom: "15px" }}>
                  There’s no bumrush for a list. Signups are done well ahead of time.
                </li>

                <li style={{ marginBottom: "15px" }}>
                  You do not get bumped. No last minute “Oh hey, my buddy just walked in,
                  I’ll get you up later” or “we’re not following the list”. You get the
                  exact slot that you signed up for.{" "}
                </li>

                <li style={{ marginBottom: "15px" }}>
                  Comics must arrive on time and stay for the duration. This guarantees
                  you’re not hurling jokes down a black hole to no one.{" "}
                </li>

                <li style={{ marginBottom: "15px" }}>
                  A tight atmosphere is cultivated, if only for 60 minutes. You’re knit
                  into a little group and are more likely to connect after the show. When
                  shows have 20 + comics coming and going, it’s hard to make any
                  connections.
                </li>

                <li>
                  Because everyone takes time to book their slot in advance and shell out
                  some dough, they are generally more serious about preparing actual
                  material and improving. It weeds out lazy comics who pace around stage
                  trying to think of ‘funny stuff’ that happened this week or tell
                  meandering stories without jokes.
                </li>
              </ul>
            </p>

            <p className="copytext">
              <b>Closing argument:</b> It’s how every mic should be run. It’s egalitarian,
              rewards those who are serious, and creates a supportive atmosphere.
            </p>
            <h2 className="header">The argument against</h2>
            <p className="copytext">
              <ul>
                <li style={{ marginBottom: "15px" }}>You have to pay</li>

                <li>You’re not ‘grinding it out’ or ‘paying your dues’</li>
              </ul>
            </p>

            <p className="copytext">
              <b>Closing argument:</b> The only conceivable argument is that you shouldn’t
              have to pay. Otherwise, slotted is always a better way to run a show.
            </p>
            <h2 className="header">But, but ..</h2>
            <p className="copytext">
              Some will say “You’re so biased! There were so many points for slotted and
              almost none against” You’re right. We are biased - if you don’t like it,
              feel free to leave some hate in the comments. Oh, you can’t find the
              comments? That’s because it’s our website, not yours.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“Suck it, nerds”"}
            />
            <p className="copytext">
              For the complaints about paying, all we can say is “Boo hoo”. If you’re
              serious about getting better at anything, investment is required. Be it
              time, money, resources, or a combination of the three, you need to invest to
              improve. End of story.
            </p>
            <p className="copytext">
              If you’re still saying “Well, you shouldn’t have to pay!”, then you’re not
              considering ‘paying’ in the form of time. If you go to a regular mic where
              30 people sign up and don’t follow an order, you’ve just spent 2-3 hours
              waiting, minimum. That’s 2-3 hours you could’ve spent writing, hitting the
              gym, sleeping, or doing whatever it is you enjoy doing.
            </p>
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <p className="copytext">
              Also, let’s face it, 5 bucks is not make or break. $5 dollars an hour is
              less than minimum wage. Not being arrogant, but we think our time is worth
              more than that. Sorry, not sorry. We’d much rather spend money to save time
              than spend time to save money.
            </p>
            <p className="copytext">
              <b>*Disclaimer* We are not for ALL paid mics.</b> Some cities have pay mics
              that are not slotted. You pay just to be on a show and also have a one drink
              minimum. Avoid these if you can. If it’s not slotted, you’re wasting time
              which obviously defeats the purpose.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The first show we did was at a spot in Koreatown called Fourth Wall. It was
              a slotted mic we booked a few days ahead of time and it was great. I
              addition to the 8 or 9 comics, there were also regular audience members
              watching and enjoying. It was an intimate space full of funny, talented
              people working out bits.
            </p>
            <MultiImageAndCaption
              imageUrls={[image7, image5]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              After the show we talked to some of the comics and exchanged positive
              feedback. It’s much easier to connect when people haven’t been leaving at
              random intervals throughout a show. Overall we were really impressed with
              the quality of comedians.
            </p>
            <p className="copytext">
              We did another mic the following day and it was the same story, different
              sets. We have nothing but positive things to say about the comics, the shows
              structure, and the positive culture it creates
            </p>
            <MultiImageAndCaption
              imageUrls={[image4, image8]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              We really enjoyed LA. We were only there for a few days before flying to{" "}
              <Link to="/Honolulu">Hawaii</Link> for three nights of showcase slots.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
