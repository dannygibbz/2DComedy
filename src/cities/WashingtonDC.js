import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"

import image2 from "../images/WashingtonDC/image2.png"
import image6 from "../images/WashingtonDC/image6.png"
import image4 from "../images/WashingtonDC/image4.png"
import image3 from "../images/WashingtonDC/image3.png"
import image5 from "../images/WashingtonDC/image5.png"
import image1 from "../images/WashingtonDC/image1.png"
import WashingtonDCPic from "../images/WashingtonDC/WashingtonDC.png"
import BackButton from "../BackButton.js"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img
          src={WashingtonDCPic}
          width="100%"
          className="hideWhenBig"
          alt="Washington DC"
        />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"9a4jonu6aa"} />
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
              fontFamily: "Nobile, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            WashingtonDC
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
            <h2 className="header">Let’s go!</h2>
            <p className="copytext">
              We couldn’t have asked for a better start to our trip. Washington, D.C. was
              the first stop on our southern tour, and after a two month standup hiatus we
              were excited to shake off the rust. We arrived in DC at the night before the
              show and were anxious about where to park the van for the night. We had read
              forums and sites about where vandwellers sleep, but we were still nervous.
            </p>
            <p className="copytext">
              After a lengthy discussion we agreed to spend the night in a Walmart parking
              lot. Being van newbies, we weren’t sure which spots would be ‘conspicuous’
              or not. We now know that no one gives a shit, but back then we thought
              anyone caught sleeping in a vehicle would face beheading.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“Next time, we tow it”"}
            />
            <h2 className="header">Walmart is LIT</h2>
            <p className="copytext">
              Rather than park on the outskirts of the lot (i.e. far away from noise), we
              parked a few rows away from the entrance (i.e. noise central). Below is the
              hour-by-hour recap of events of that evening.
            </p>
            <p className="copytext">
              <b style={{ fontSize: "23px" }}>1 a.m.</b>
              <br />
              The cart guy decided now was the best time to bring{" "}
              <i>every single cart that has ever existed</i>&nbsp; into the store in a
              banging, metallic cacophony.
            </p>
            <p className="copytext">
              <b style={{ fontSize: "23px" }}>2 a.m.</b>
              <br />A middle-aged man driving a ’94 Cutlass Ciera decided to park right
              next to us to do what every reasonable adult does on Tuesday at 2 a.m., and
              blasts Reggaeton. Meanwhile, a person parked diagonally from us connected
              their phone to their cars speaker system for the loudest phone call ever
              recorded.
            </p>
            <p className="copytext">
              <b style={{ fontSize: "23px" }}>3 a.m.</b>
              <br />
              Not to be outdone by Reggaeton Reggie and Speaker Sam, some cowpoke parked
              in front of us and blasted country music at decibels surpassing a jet
              engine. This parking lot was seriously not big enough for the two of us.
            </p>
            <p className="copytext">
              <b style={{ fontSize: "23px" }}>5 a.m.</b>
              <br />A couple parked - WHERE ELSE – right next to us, and emerged from the
              store embroiled in a bitter fight. The lady heatedly reminded the gentleman
              that her items needed to be returned to the shelves because he didn’t have
              enough money. The gentleman, trying his best to remain level-headed, hissed
              through gritted teeth “Don’t say dat. I’ll SNAP”. Undeterred, the lady
              vigorously prodded on until he DID snap, whereupon she received what we can
              only assume was the most vitriolic harangue of all time (I say ‘assume’,
              because it was in what sounded like Arabic, so I can’t be sure just how
              venomous it was.) Providing background music was their child, doing his part
              by wailing “Eehhhhhhhhh. AAAHhhhHHHH Aahhhhhh!!” throughout the entire
              quarrel.
            </p>
            <p className="copytext">
              <b style={{ fontSize: "23px" }}>6 a.m.</b>
              <br />
              We got ambushed in what can only be described as ‘The Great Seagull Uprising
              of 2018’. After a fitful 45 minutes of sleep we were jerked awake by the
              sudden and ferocious pecking of <b>A THOUSAND</b> seagulls on the roof. We
              had no idea what the hell was going on; it sounded like a lashing downpour
              of marbles and hex bolts. In our sheet-metal echo chamber of a van, anything
              that pings the roof sounds like firecrackers exploding between cymbals.
            </p>
            <p className="copytext">
              <b style={{ fontSize: "23px" }}>8 a.m.</b>
              <br />
              Our makeshift curtain, which was a towel clamped over a window, fell on Dan
              C. He belted the bloodcurdling scream of a man being bayoneted. It was so
              deafening a shriek it made the Seagull Uprising sound like a soft breeze.
              Thinking Dan was being flayed alive, I kicked the wall in an attempt to
              hobble any would-be intruder, only to smash my own toes. I finally saw what
              was happening - Dan was thrashing around with the towel as if he were a fish
              caught in a net. That was the last straw; we knew sleep simply wasn’t in the
              cards. With bleary-eyed resignation we got up and started the day.
            </p>
            <h2 className="header">No Parking</h2>
            <p className="copytext">
              Later that evening we arrived outside the comedy club and began our search
              for parking, which is no easy task when piloting what is essentially a ten
              thousand pound railroad tie with the turning radius of an aircraft carrier.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={600}
              captionText={"“Blending in. I bet you can’t even see us.“"}
            />
            <p className="copytext">
              Tourists and onlookers alike became visibly uneasy as they witnessed the
              same two disheveled guys repeatedly circle the block in an unmarked white
              van, wildly gesticulating at open spots as if designating where to throw
              pipe bombs. We’d approach a parking spot, gauge its size, attempt to
              parallel park, botch the angle, panic, and burn rubber down the block. We
              looked like an IRA/Al-Qaeda duo failing drivers ed.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={600}
              captionText={"“Always remember to check your blind spot!”"}
            />
            <p className="copytext">
              After about 30 minutes (or seventeen 9-1-1 calls from concerned citizens) we
              finally happened upon a space near the venue. Slipping the vans giant bulk
              into the parking spot without touching adjacent cars was like playing a
              vehicular version of Operation. The sea of spectators judging every turn of
              the wheel certainly didn’t help alleviate any stress. As we inched closer to
              each bumper, clusters of people began watching with bated breath. The
              spectators yearned to hear the oh-so-satisfying crunch of shattered tail
              lights.
            </p>
            <p className="copytext">
              There’s something about parallel parking that makes everyone stop what
              they’re doing and watch. Maybe they want to feel better about their own
              parking skills. Maybe they love watching others fail. In our case, it was
              because our van blares an eardrum-shattering back up sound when put in
              reverse. It’s impossible not to look.
            </p>
            <p className="copytext">
              To the crowds dismay, we parked without issue and hopped out of the van. The
              defeated crowd shuffled off as we stood back to admire the park job. Crammed
              between two eco-friendly sub-compact cars, the van resembled the fat friend
              who squeezes into group selfies.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“Wow, do WE look great or what?!”"}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The area around the venue was beautiful. Situated on the waterfront, it was
              surrounded by restaurants and bars connected by cobblestone streets. The mic
              was held in the lower level of a bar with a great setup - there was a small
              stage, dim lighting, and chairs facing front. It was a nice, intimate
              environment for comedy.
            </p>
            <p className="copytext">
              After getting the lay of the land we heard the airy flap of paper being
              slapped on the bar, signifying that the host had put the list out. We zoomed
              over, as signing up before the rush can save hours of waiting.
            </p>
            <p className="copytext">
              The order comics perform in is unique at each mic, but generally your spot
              is determined by lottery or list. Lottery (or bucket) is when the host
              selects your name randomly. Lists, as you would imagine, are numbered sheets
              where you write your name in the order you wish to go. Sounds simple, but
              it’s often changed last-minute to accommodate friends or features.
            </p>
            <p className="copytext">
              We signed up for slots one and two, eager to jump headfirst back into
              standup. The joke was on us. We ended up going 10th and 12th out of 14. It
              didn’t matter. We got up, did our time, and had a great audience response.
            </p>
            <MultiImageAndCaption
              imageUrls={[image1, image5]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              After the show ended we went back to the Walmart parking lot - but learned
              to park wayyy on the outskirts. It would still take some time until we
              figured out actual good places to park, but back in the early days we didn't
              know what we were doing.
            </p>
            <p className="copytext">
              The following morning we had a quick breakfast and were on our way to &nbsp;
              <Link to="/Richmond">Richmond</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
