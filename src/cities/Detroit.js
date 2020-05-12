import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image2 from "../images/Detroit/image2.gif"
import image4 from "../images/Detroit/image4.gif"
import image7 from "../images/Detroit/image7.gif"
import image9 from "../images/Detroit/image9.gif"
import image5 from "../images/Detroit/image5.gif"
import image8 from "../images/Detroit/image8.gif"
import image1 from "../images/Detroit/image1.png"
import image6 from "../images/Detroit/image6.png"
import image3 from "../images/Detroit/image3.png"
import DetroitPic from "../images/Detroit/DetroitPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={DetroitPic} width="100%" className="hideWhenBig" alt="Detroit" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"dvefto6r8l"} />
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
              fontFamily: "Manjari, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Detroit
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
            <h2 className="header">Motor City</h2>
            <p className="copytext">
              After the awesome show in <Link to="Madison">Madison</Link> we hopped in the
              van and drove seven hours to Detroit. Detroit was another city we were
              looking forward to -- it’s like Philly’s brother from another mother. Both
              are blue collar cities, both are gritty, and both have a rough reputation.
              Although the news runs a lot of negative stuff about Detroit, it’s perfectly
              fine.
            </p>
            <MultiImageAndCaption
              imageUrls={[image2, image4]}
              imageHeight={180}
              captionText={""}
            />
            <p className="copytext">
              It’s easy to pick on Detroit but it was honestly nice. A few years ago when
              houses were advertised with a $1 dollar pricetag, things were probably
              different - but in 2019 everything was looking great. We asked Google about
              safety in Detroit - but whenever we select answers, we always choose
              articles with the oldest dates possible because the answers are way funnier.
            </p>
            <p className="copytext">
              For example - If you Google something like “What should I do if my dog bites
              me?”, an answer from an article posted in 2019 will read along the lines of
              “Get a tetanus shot and enroll your dog in a behavioral adjustment course”.
              But if you select the answer from an article published in 2002, it’s like
              “Slap a band-aid on, then bash that dog in the snout”.
            </p>
            <ImageAndCaption imageUrl={image7} imageWidth={400} captionText={""} />
            <p className="copytext">
              In fact, Detroit probably has an even better reputation than Philly at this
              point. Here are some things people have said or asked about after
              discovering we’re from Philly.
            </p>
            <h2 className="header">Reppin’</h2>
            <p className="copytext">
              It’s not all bad, though. Philly has a good reputation as a comedy city -- a
              sort of hardworking, underground respect. Let’s put it this way - if someone
              says they’re a New York comic, everyone instantly thinks “Ohhh, look out.
              Here comes Mr. Big Shot!”. It’s like saying you went to Harvard.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={"“Watch it, folks. There’s a god in our midst”"}
            />
            <p className="copytext">
              But when people hear Philly, there’s no automatic negative impression; no
              ‘too big for its britches’ vibe. Like Detroit, Philly has this sort of
              hardhat-and-lunchpail workmanlike perception. A lot of good comics come from
              both cities but the grind to the top has a grittier aura.
            </p>
            <ImageAndCaption imageUrl={image5} imageWidth={400} captionText={""} />
            <p className="copytext">
              Another good thing about saying we’re from Philly is people give us a
              certain amount of street cred right off the bat. They think we’re hardasses.
              To be clear: we’re suburban pussies, but we’re not going to correct anyone.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“If I wasn’t tuff, could I do THIS?”"}
            />
            <h2 className="header">A passion for the arts</h2>
            <p className="copytext">
              Detroit has a vibrant art scene and lots of spaces set up for live
              performance. On the night of our show alone there were performances in
              various media: standup, sketch, improv, and karaoke.
            </p>
            <p className="copytext">
              The teams that performed improv at the show did awesome -- they had great
              chemistry and the laughs came effortlessly. A lot of standups we know poke
              fun at improv but we actually enjoy it. There’s a bit of a rivalry between
              the two forms I guess. Standups say that improvers are a bunch of losers
              playing make-believe but of course that’s not true.
            </p>
            <p className="copytext">
              While we’re on the topic, the thing people use to describe the ultimate
              loser is “A guy who lives in his mom’s basement”. We don’t understand why
              there’s so much hate on basements. They’re cool, cozy, and little light gets
              in - meaning you sleep much better.  Would these guys be more respected if
              they lived in a different room in their moms house?
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={
                "“Hold on now, this guy lives on the THIRD floor - he may know a thing or two”"
              }
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The host of the show really hooked it up for us. We reached out totally last
              minute and she bumped some local guys so we could go up (sorry, local guys).
              The show was arranged with standup first (host, Dan, myself) followed by
              improv and sketch teams. The host did 7 and Dan and I did 10 minutes a
              piece.
            </p>
            <ImageAndCaption imageUrl={image6} imageWidth={400} captionText={""} />
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <p className="copytext">
              The audience was almost exclusively comedians (and … improvers? sketchers?)
              so it made for a fun show. It was a very low pressure situation where we got
              to try new material mixed in with crowd work.
            </p>
            <h2 className="header">Saddle up</h2>
            <p className="copytext">
              Detroit was a great town. It was one of those places where the people and
              shows were so good that we genuinely wanted to stay longer. But, as is often
              the case, our schedule dictated that we had to go. Our next show was set up
              for Saturday night in <Link to="/Burlington">Burlington, VT</Link> and the
              drive took about 12 hours - we had no time to lose. Until next time,
              Detroit!
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
