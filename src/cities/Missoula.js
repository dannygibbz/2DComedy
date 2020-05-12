import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image3 from "../images/Missoula/image3.gif"
import image6 from "../images/Missoula/image6.gif"
import image1 from "../images/Missoula/image1.png"
import image5 from "../images/Missoula/image5.png"
import image9 from "../images/Missoula/image9.png"
import image11 from "../images/Missoula/image11.png"
import image4 from "../images/Missoula/image4.png"
import image2 from "../images/Missoula/image2.gif"
import image10 from "../images/Missoula/image10.png"
import image7 from "../images/Missoula/image7.png"
import MissoulaPic from "../images/Missoula/MissoulaPic.png"
import DcrescDgibbs from "../images/Missoula/DcrescDgibbs.png"
export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={MissoulaPic} width="100%" className="hideWhenBig" alt="Missoula" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"htkp6pyuke"} />
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
              fontFamily: "Hind Siliguri, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Missoula
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
            <h2 className="header">Big Sky Country</h2>
            <p className="copytext">
              After flying back into <Link to="/Seattle">Seattle</Link> from{" "}
              <Link to="/Anchorage">Anchorage</Link>, we broke the drive to Montana into
              two parts. The first leg from Seattle to Spokane was smooth - imagine long
              stretches of paved highway with little turning. The second leg from Spokane
              to Missoula was a nightmare - imagine country roads with hairpin turns
              snaking around a mountain.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ImageAndCaption
                imageUrl={image6}
                imageHeight={190}
                captionText={"Seattle to Spokane"}
              />

              <ImageAndCaption
                imageUrl={image3}
                imageHeight={190}
                captionText={"Spokane to Missoula"}
              />
            </div>
            <p className="copytext">
              The road from Spokane to Missoula was a meandering mindfuck through Flathead
              National Forest. It was almost as if the engineers intentionally made it
              shitty.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“Add a thousand 270° degree turns, cuz fuck it!“"}
            />
            <p className="copytext">
              Driving in the dark, we were never really safe at any moment on those roads.
              Deer, elk, and all manner of varmints lurked around every corner, eagerly
              waiting to jump at the van. At one point we even saw a suicidal Canadian
              goose standing alone on a cliff edge, staring down at the raging waters
              beneath as if preparing for the sweet embrace of death.
            </p>
            <p className="copytext">
              We had several close calls with hitting deer. The worst one was chillin in
              the middle of the road and made us slam the brakes. Although inches away
              from being vaporized, it didn’t even flinch. The deer fixed us with an
              annoyed gaze as if <i>we</i> were ruining <i>his</i> night.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={
                <div>
                  Oh. I guess <i>I’ll</i> move then. Not like I was <i>here first</i> or
                  anything
                </div>
              }
            />
            <p className="copytext">
              When we honked the horn, it didn’t run to the right or left, but{" "}
              <i>straight down the road</i>. We slowly tailed the deer as it zig-zagged in
              a jerky, panicked gallop in our lane. After a hundred yards it finally
              jumped into the forest. No sooner had we passed than the deer returned to
              it’s chill spot in the road.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“Thanks for the lovely visit. Come back real soon”"}
            />
            <p className="copytext">
              The road was dangerous even without animals trying to get hit. There was no
              shoulder on either side of the road. If we lost control, we would either
              wrap the van around a clutch of trees or launch headlong into the St. Regis
              River - which hugged the road the entire way.
            </p>
            <MultiImageAndCaption
              imageUrls={[image9, image11]}
              imageHeight={300}
              captionText={"“Pick your poison”"}
            />
            <p className="copytext">
              Wandering animals, slippery roads, and raging rivers aside, the biggest
              danger was not having any cell service. If any sort of engine problem had
              sprung up, we’d have had to walk a zillion miles in the dark to the next
              town for help. We've seen enough horror movies to know our chances of
              survival in that scenario would be about zero.
            </p>
            <h2 className="header">The town</h2>
            <p className="copytext">
              Montana really is as beautiful as people say, and Missoula in particular was
              a shining example. The green space and beautiful, rolling hills were like
              something off a postcard. The city itself felt tiny in a good way. There
              weren’t any garish buildings or overpopulated housing developments - just
              lots of little shops, bars and restaurants.
            </p>
            <p className="copytext">
              A lot of the bars we saw had lengthy ‘happy hours’. The happy hour at the
              bar in the picture below went from 4-9. People in Montana must be REALLY
              HAPPY.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“Happiness ends almost immediately after comedy begins”"}
            />
            <p className="copytext">
              In terms of comedy, the local comics told us Missoula is the fastest growing
              city in Montana. There are smaller scenes in Billings and Bozeman, but a lot
              of comics have been traveling to Missoula for the volume and variety of
              shows available.
            </p>
            <p className="copytext">
              Of course there are traditional open mic nights but in Missoula they also
              run shows with slight tweaks. For example they’ll do improv mics where
              you’re given a topic right before getting on stage or given topics on the
              go. When we were in town, they were running a two man show (or double act).
              When we roll into town as Two Dan’s in a Van, most people assume we’re gay
              or (and) do a two man show. We finally got to prove one of those things.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={
                <div>
                  “I <i>told you</i> we could dance!”
                </div>
              }
            />
            <h2 className="header">The days of yore</h2>
            <p className="copytext">
              Two man shows started out around vaudeville times and involved two
              performers engaging in cross talk and clever verbal exchanges. One performer
              is the ‘straight’ man, and the other the ‘funny’ man. The straight man is
              serious; the voice of reason. The ‘funny’ man is the wildcard, the stooge,
              the irreverent one. It’s the comedy equivalent of good cop, bad cop.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“YOU DON’T THINK THAT’S FUNNY?! I’LL SHOW YA FUNNY!!!”"}
            />
            <p className="copytext">
              The most famous double act was Abbott and Costello - you’ve probably heard
              their “Who’s on first?” sketch. These acts were really popular back in the
              20’s and 30’s but fell out of favor as movies became the new entertainment
              choice. Some places, like Japan, still have two man shows but their comedic
              tastes are … <i>unique</i>.
            </p>
            <ImageAndCaption imageUrl={image7} imageWidth={400} captionText={""} />
            <p className="copytext">
              We’ve been to 30 something states. We’ve been asked at least 50 times if we
              go on stage at the same or separate times. This was the first time we could
              actually answer “same time”.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The show began with 5 traditional open mic performers, then switched over to
              the duo’s. Each pair had 6 minutes. We kicked around different ways to
              structure the set and decided a conversational Q&A format would be best, as
              most people are curious about van life and traveling the country. The set
              went something like this ...
            </p>
            <p className="copytext">
              <b>Dan 1</b>: What are some of the weirdest reactions people have had about
              living in a van
            </p>
            <p className="copytext">
              <b>Dan 2</b>: We told a guy recently we live in a van and he said “WHAT?!
              But you’re so   clean!”.
            </p>
            <p className="copytext">
              <b>Dan 2</b>: People always ask “What’s the hardest part about living in a
              van?”. What do you think?
            </p>
            <p className="copytext">
              <b>Dan 1</b>: The hardest part of living in a van is trying to convince my
              dad I’m not gay.
            </p>
            <p className="copytext">
              The act continued like that -- questions and answers with chunks of bits
              we’d do in our solo standup acts added in.
            </p>
            <ImageAndCaption imageUrl={DcrescDgibbs} imageWidth={600} captionText={""} />
            <h2 className="header">So long</h2>
            <p className="copytext">
              We hit the road as soon as the show ended. We needed to be in{" "}
              <Link to="/Boise">Boise</Link> the following night and had no time to lose.
              It was an 8 hour drive that made the trip through Flathead National Park
              seem like a leisurely spin through the suburbs.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
