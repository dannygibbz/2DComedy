import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton.js"

import image5 from "../images/Orlando/image5.png"
import image2 from "../images/Orlando/image2.gif"
import image4 from "../images/Orlando/image4.png"
import image3 from "../images/Orlando/image3.png"
import image1 from "../images/Orlando/image1.png"
import OrlandoPic from "../images/Orlando/OrlandoPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={OrlandoPic} width="100%" className="hideWhenBig" alt="Orlando" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"ij7aqm4t44"} />
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
              fontFamily: "'Lato', sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Orlando
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
            <h2 className="header">On to warmer pastures</h2>
            <p className="copytext">
              Leaving <Link to="Savannah">Savannah</Link>, we steered our ship South
              toward warmer waters. There were a lot of good cities in Florida but Orlando
              jumped out first. Not only were temperatures in the mid-high 70’s, but we
              had heard the comedy scene was good there. We planned to do two shows during
              our short stay: the first was an open mic at a comedy club, the second a
              showcase at a microbrewery.
            </p>
            <p className="copytext">
              The trip to the comedy club started as most of our trips do - with
              difficulty parking. The comedy club was in a densely packed, touristy area
              with parking only available in garages. Under normal circumstances parking
              garages are awesome - but the van is too tall to fit in most of them. We
              were short on time and tried our luck. A sign hanging above the entrance
              said “Clearance 8’0”.
            </p>
            <p className="copytext">
              We slowly crept under the sign, shrinking down in our seats as if more
              headroom would appear above the van. A grating echo rang out immediately --
              our vehicular limbo didn’t work. Luckily there was no damage to the van,
              this time. By the end of our trip we’ll have to go around and describe each
              dent like a dude regaling a lady with scar stories.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“Not to brag but I didn’t even cry that much”"}
            />
            <h2 className="header">Daily grind</h2>
            <p className="copytext">
              Struggling to find parking is part and parcel of vanlife. People always ask
              what the hardest part of living in a van is. “Is it living out of a
              suitcase?”, “Showering at Planet Fitness?”, “No home cooked meals?”. The
              list goes on and on, but for me the hardest part of vanlife is getting good
              sleep. For Dan, the hardest part of vanlife is trying to convince his dad
              that he’s not gay.
            </p>
            <p className="copytext">
              Every conversation with his dad begins with “You can tell me anything, you
              know”. Dan then tries to prove he’s not gay, but it doesn't help. The more
              he denies, the worse he looks. It’s like when you were a kid and your
              parents would say “You’re tired. You need a nap”. You’d scream “NO I
              DON’T!!!” and they’d go “See, you’re cranky”. The tantrum only proved their
              point.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={560}
              captionText={"“I LIKE GIRLS!!!"}
            />
            <p className="copytext">
              For my part, I go out of my way to make Dan’s dad think we’re gay. Every
              time we’re back in Philly I run to him with arms flapping in excitement
              screaming “Heyyy Mr. Crescimanno!” and kiss him on both cheeks. My bag
              ‘accidentally’ spills, pouring stacks of Playgirl magazines and lube. It
              really is fun watching Dan try to hyper-masculinize the van to ‘prove’ he’s
              straight. He’s like “Dad it’s a big tough van. The engine’s got balls and
              long pumping pistons. It’s a RAM, dad, a RAM! It’s tough! Otherwise they
              wouldn’t call it a BlowMaster .. I mean ProMaster!”
            </p>
            <h2 className="header">Ready to roll</h2>
            <p className="copytext">
              We parked at 7:50 and the signup sheet came out at 8:00. It sounds like we
              had plenty of time but of course that wasn’t the case; our parking spot was
              a mile away from the club. A ten-minute mile is easy to jog on a treadmill,
              but we were sprinting across busy highways, dodging traffic Frogger style.
            </p>
            <p className="copytext">
              We arrived sweaty and red-faced at 8:02 and asked around for the list. We
              found out we didn’t even need to rush - the mic had a ‘bump list’. This
              meant if you didn’t get up the week prior, you went up first next time.
              Typically we wouldn’t have gotten on the show, but luckily the host was
              really cool and reserved a few spots for out of towners.
            </p>
            <p className="copytext">
              We mixed it up with a bunch of the other comics and it was a real pleasure.
              The Orlando scene felt really inclusive and supportive. We did our time on
              stage then hung out to watch more. Toward the end, everyone at the show was
              treated to a unique set.
            </p>
            <h2 className="header">Blast from the past</h2>
            <p className="copytext">
              The host announced the next comic, saying “returning after a 20 year standup
              hiatus, please give a warm welcome to (guy’s name)!”. He took the stage and
              it was like he had just stepped out of a comedy time capsule. He looked like
              a wacky club comic from the 90’s with big billowy khakis and a loud,
              ill-fitting sport coat.
            </p>
            <p className="copytext">
              If his look was 20 years old, his material was at least 40. He had the
              cheesy setup/punch, setup/punch style of a guy who’d would play the Borscht
              Belt and crush with one-liners and rimshots. Watching this guy was surreal -
              it was as if a Catskills comic from the 70’s found a time machine and
              traveled to the modern day. He opened with “I walked into a dumbbell at the
              gym the other day … and he tried to sue me!”
            </p>
            <p className="copytext">
              Everyone laughed at the first few jokes thinking he was doing some kinda
              ironic schtick to shake off the rust but after a few more of those jokes it
              became clear he was serious. The laughs then petered out because comedy,
              like any art, evolves with time. Back in the day you could pump laughs out
              of the bovine masses through the setup/punch cadence alone, like “Why
              don’tcha play poker in the jungle? There’s too many cheetahs! OH!"
              *Buh-dun-chhh*. Today, those jokes are groaners.
            </p>
            <h2 className="header">On to the next one</h2>
            <p className="copytext">
              The following night we did a showcase at a microbrewery. Initially there was
              only room for one of us to go up, but when we got there the host told us a
              spot had opened up. We were in luck! The show was a blast. The other comics
              were welcoming and the crowd was really with it.
            </p>
            <MultiImageAndCaption
              imageUrls={[image4, image3]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              After the show we drove East to check out the coast. We went to Cocoa Beach
              and stepped into a bar. Not 15 minutes had passed before a fight broke out
              between a man and woman both in their 50’s. We were packed inside with all
              the other patrons but could see the melee clearly through the window. They
              slugged it out like Rocky and Tommy Gunn landing haymaker after haymaker. We
              decided it was time to go.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“I wanted a Corona LIGHT!”"}
            />
            <p className="copytext">
              With that bizarre turn in the night, we drove South until we found the
              nearest Planet Fitness. We got some rest and in the morning drove to{" "}
              <Link to="Miami">Miami</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
