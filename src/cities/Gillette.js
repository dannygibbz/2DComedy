import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image12 from "../images/Gillette/image12.png"
import image11 from "../images/Gillette/image11.png"
import image4 from "../images/Gillette/image4.png"
import image6 from "../images/Gillette/image6.png"
import image7 from "../images/Gillette/image7.png"
import image5 from "../images/Gillette/image5.png"
import image2 from "../images/Gillette/image2.png"
import image9 from "../images/Gillette/image9.png"
import image3 from "../images/Gillette/image3.png"
import image8 from "../images/Gillette/image8.png"
import image1 from "../images/Gillette/image1.png"
import image10 from "../images/Gillette/image10.png"
import GillettePic from "../images/Gillette/GillettePic.png"
export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={GillettePic} width="100%" className="hideWhenBig" alt="Gillete" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"vbbnmqwlb9"} />
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
              fontFamily: "Black Ops One, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Gillette
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
            <h2 className="header">What is laughter?</h2>
            <p className="copytext">
              With <Link to="/Omaha">Omaha</Link> in the rearview we headed for Gillette,
              Wyoming. It was extremely difficult finding comedy anywhere in Wyoming. They
              don’t have any comedy clubs and mics are non-existent. We reached out to
              comedians in neighboring states asking if they knew of any shows, but they
              said there’s nothing except private gigs (corporate events, special parties,
              etc).
            </p>
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={400}
              captionText={
                "“Another year gone. Death marches inexorably closer with every breath. Anyway, Happy third birthday, kid”"
              }
            />
            <p className="copytext">
              We thought all hope was lost until we stumbled across an eventbrite page
              listing two comedy shows at the end of July - one in Gillette and one in
              Casper. We clicked the shows info page and discovered it was two comedians
              doing the exact same thing as Dan and I: travelling the country, living in
              their vehicle, and performing standup in every state.
            </p>
            <p className="copytext">
              We figured “What the hell, let’s see if these guys want openers or features.
              It’s our last shot”. We sent them a message and they took us on. It was a
              huge relief - if we hadn’t performed on their shows we would’ve had to shout
              our sets through bullhorns at bewildered passersby.
            </p>
            <ImageAndCaption imageUrl={image11} imageWidth={400} captionText={""} />
            <h2 className="header">The Rolling Greenroom</h2>
            <p className="copytext">
              The comedians are Cody Woods (LA) and James Myers (NY). Together, they make
              up ‘The Rolling Greenroom’.
            </p>
            <MultiImageAndCaption
              imageUrls={[image4, image6]}
              imageHeight={180}
              captionText={""}
            />
            <p className="copytext">
              These guys are veteran comics - they’ve toured colleges, performed on USO
              shows, and have been on Hulu, Comedy Central, and Sirius XM. We were pumped
              when they took us on -- not only because we could cross Wyoming off our
              list, but because we could learn from working with more experienced guys.
            </p>
            <p className="copytext">
              Instead of a van, they bought a big ol’ motorhome, fixed it up, painted it
              green, and started their own roadshow.
            </p>
            <ImageAndCaption imageUrl={image2} imageWidth={400} captionText={"Before"} />
            <MultiImageAndCaption
              imageUrls={[image7, image9, image5]}
              imageHeight={380}
              captionText={"After"}
            />
            <p className="copytext">
              We knew the guys had other gigs booked before the show in Gillette, but we
              didn’t know where. Our plan was to meet them in Wyoming on Saturday but
              that’s not quite how things worked out.
            </p>
            <h2 className="header">Chance encounter</h2>
            <p className="copytext">
              The drive from <Link to="/Omaha">Omaha</Link> to Gillette is about ten
              hours. You head North on I-29 until it meets I-90 West outside Sioux Falls,
              South Dakota. We had done a show in Sioux Falls at Boss’ Comedy Club about a
              month prior and really enjoyed it. Before hopping on 90 West for seven
              hours, we decided to spend the night in{" "}
              <Link to="/SiouxFalls">Sioux Falls</Link>.
            </p>
            <p className="copytext">
              On Wednesday morning as we arrived at the gym we spotted The Rolling
              Greenroom RV in the Planet Fitness parking lot.
            </p>
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <p className="copytext">
              This was totally unexpected but awesome. Cody and James had a brewery show
              scheduled for the following day and said they could put us on. A bonus show
              for Thursday? Hell yeah.
            </p>
            <p className="copytext">
              It was cool getting to know the guys and to have an RV/Van crossover tour.
              We shot some footage for our respective channels and got to know one another
              over sake at a Japanese restaurant.
            </p>
            <h2 className="header">Boss’ Comedy</h2>
            <p className="copytext">
              We were also in luck because it was Wednesday -- the night Boss’ Comedy Club
              runs weekly shows. All the house comedians are hilarious (shout out to Zach
              Dresch, Skyler Bolks, and Nathan Hults!) and Boss’ packs the house.
            </p>
            <MultiImageAndCaption
              imageUrls={[image8, image1]}
              imageHeight={220}
              captionText={""}
            />
            <p className="copytext">
              Having an $8 cover for all-you-can-drink keg privileges during the show
              certainly helps fill the room. It’s a toss-up whether the patrons enjoy the
              comedy or alcohol more but it doesn’t really matter - booze and laughs
              always go hand in hand.
            </p>
            <p className="copytext">
              For the most part the show was completely normal … but there’s always one or
              two odd sets. For instance one guy dropped an ‘N-bomb’ with a hard R and
              another comic yelled and almost fought audience members for talking loudly.
              Just another night in the life of a comic.
            </p>
            <ImageAndCaption imageUrl={image10} imageWidth={400} captionText={""} />
            <h2 className="header">First show with The Rolling Greenroom</h2>
            <p className="copytext">
              The following night we joined Cody and James for a show at Remedy Brewing.
              Cody and James bookended the show -- Cody opened up with 30 minutes, dan I
              did 10, a local guy (shoutout again to Zach Dresch) did 7, and James closed
              with another 30.
            </p>
            <h2 className="header">On the road again</h2>
            <p className="copytext">
              Gillette was still a solid 5 hours out, so on Friday morning we began
              chipping away at the drive. We knocked out 4 hours and stopped on the
              Western edge of South Dakota in Rapid City.
            </p>
            <p className="copytext">
              The next day we met up in Gillette where we met up for the show at Big Lost
              Meadery. It was awesome. Gillette was a cool town. In step with the
              medieval, old-timey vibe of the meadery, big heavy wooden tables and chairs
              were arranged all around. The low ceilings provided great acoustics
            </p>
            <p className="copytext">
              Dan and I opened the show this time ‘round. The reason Cody and James
              bookended the show in Sioux Falls was because they needed to determine if we
              were any good - or in their words “we had to make sure you guys didn’t
              suck”.
            </p>
            <p className="copytext">
              That sounds harsh but it’s not. They had never seen us perform before. If we
              ate shit back to back at the beginning of their show, not only would it kill
              the crowds energy but it would reflect poorly on them. People would leave
              bad reviews, making future ticket sales difficult. In reality it was a
              compliment - it meant we were good enough to earn their trust.
            </p>
            <p className="copytext">
              Remember when we said there’s no comedy in Wyoming? It’s absolutely true,
              but that doesn’t mean people don’t want it. On the contrary, they are
              starved for comedy and pounce on it like ravenous beasts. The crowd was
              amazing. Dan and I each got 12 minutes each, Cody and James did about 45
              each.
            </p>
            <p className="copytext">
              After the show a lot of people thanked us all heartily, saying things like
              “I can’t remember the last time I laughed so hard” and “that was the most
              fun we’ve had in months”. Many asked about when we were coming back and how
              they could follow us. They even left nice reviews on The Rolling Greenroom
              facebook page. We were thrilled that everyone had a blast and went home
              happy.
            </p>
            <p className="copytext">
              The next show was in <Link to="/Casper">Casper, Wyoming</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
