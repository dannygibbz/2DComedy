import React from "react"
// import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image4 from "../images/Nashville/image4.png"
import image9 from "../images/Nashville/image9.png"
import image2 from "../images/Nashville/image2.png"
import image11 from "../images/Nashville/image11.png"
import image7 from "../images/Nashville/image7.png"
import image1 from "../images/Nashville/image1.png"
import image5 from "../images/Nashville/image5.png"
import image6 from "../images/Nashville/image6.png"
import image10 from "../images/Nashville/image10.png"
import image3 from "../images/Nashville/image3.png"
import image8 from "../images/Nashville/image8.png"
import NashvillePic from "../images/Nashville/NashvillePic.png"

export default function ThisCity(props) {
  let isMobile = window.innerWidth < 768
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        {isMobile ? (
          <img src={NashvillePic} width="100%" alt="Nashville" />
        ) : (
          <WistiaEmbed hashedId={"bon98u260d"} />
        )}

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
              fontFamily: "Luckiest Guy, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Nashville
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
            <h2 className="header">Once more unto the breach</h2>
            <p className="copytext">
              It was a mistake driving straight from Mobile to Nashville. Nashville is
              great, don’t get us wrong - it’s just further north than we wanted to go
              during winter. After a few weeks in Florida, Alabama, Mississippi, and
              Louisiana we had become accustomed to warm weather. In Nashville, we were
              once again back in the 30’s and 40’s.
            </p>
            <p className="copytext">
              We’re kind of like wildlings in Game of Thrones. In their minds, anything
              beneath the wall is ‘South’ and to us, anything beneath Virginia is ‘warm’.
              We learned the hard way that that’s not true. We also discovered in addition
              to sharing incorrect notions of geography and climate, we also kind of just
              look like wildlings.
            </p>
            <MultiImageAndCaption
              imageUrls={[image4, image9, image2, image11]}
              imageHeight={380}
              captionText={"“Winter is here”"}
            />
            <h2 className="header">Catch us on Broadway</h2>
            <p className="copytext">
              The first real Nashville destination we visited was the Honky Tonk Highway
              (Planet Fitness and Panera Bread don’t count). It’s a stretch of bars along
              the lower broadway historic district.
            </p>
            <p className="copytext">
              Being pushed and pulled in all directions through the crowd felt like
              swimming against a riptide. After the initial chaos, we were spit out of the
              swell and landed by a curb. Thankfully we were able to stand still for a few
              seconds and catch our breath.
            </p>
            <ImageAndCaption imageUrl={image7} imageWidth={400} captionText={""} />
            <p className="copytext">
              All of a sudden a John Deere tractor towing what looked like a greenhouse
              full of ladies celebrating a bachelorette party turned the corner and
              stopped directly in front of us. No sooner had we spotted the ladies then
              they flashed everyone on the street. It was a good omen.
            </p>
            <p className="copytext">
              Unexpected breasts will brighten anyone's day, and so will alcohol. We
              popped into a bar and on a chalkboard above moonshine bottles was written
              “You can’t drink all day if you don’t start now”. The logic was unassailable
              - we sat down for a drink.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“You win this one, Nashville“"}
            />
            <p className="copytext">
              Basically every bar on that stretch had live music, so after a round of
              whiskey gingers we moved to a new spot.
            </p>
            <h2 className="header">Music Mecca</h2>
            <p className="copytext">
              Everyone we met was a musician of some sort. Nashville is to music as LA is
              to showbiz -- everyone is trying to leave their mark. It seemed there’s
              ample opportunity to get stage time. Every restaurant on the honky tonk
              highway alone boasted live music from 10 a.m. to 3 a.m. 365 days a year.
              Furthermore, each venue has multiple floors, each offering different musical
              varieties.
            </p>
            <p className="copytext">
              Dan and I sat at a table on the second floor of a huge bar and listened to a
              band cranking out 90’s hits. The band was all male except for the lead
              singer, who was the prototypical southern belle. After their setlist
              concluded, the blonde bombshell walked around the room with a tip jar and
              made a fortune. It’d be great if Dan and I could do that after our sets, but
              I somehow doubt we’d have the same luck.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“DID’JA LIKE MY JOKES? TIPS, PLEASE”"}
            />
            <p className="copytext">
              As the next band was setting up, Dan and I went to the balcony for fresh
              air. Gazing out at the street and soaking in the view was great for us, but
              definitely not the image the bar wanted. They would’ve liked beautiful, sexy
              people to dance around and beckon crowds inside. Instead, they got Dan and I
              -- a pair of gargoyles warding off would-be revelers by the dozen. When
              passersby saw us, their face and body language immediately screamed “... How
              about the next bar?”.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“Want to have fun with some cool guyz?”"}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              We did a show at a dive bar on the outskirts of town. It was surrounded by
              an automotive scrapyard, liquor stores, and derelict buildings -- we felt
              right at home. As soon as the door opened we were engulfed in a cloud of
              cigarette smoke. I’m writing this article weeks after we were there and I
              can still smell and feel the grit of Pall Malls in my hair.
            </p>
            <p className="copytext">
              There were about 20-25 comics all told, and the people we met were awesome.
              The host was excited that out of towners dropped in, so he put us up early
              in the show - we were extremely grateful! We tried out new jokes and had a
              blast.
            </p>
            <p className="copytext">
              After the show we met a bunch of the comedians. They told us about other
              upcoming shows we could get on, recommended places to visit in Nashville,
              and even offered us places to crash. Overall just a really friendly and
              talented bunch of people. We loved Nashville and will definitely be back!
            </p>
            <MultiImageAndCaption
              imageUrls={[image10, image3]}
              imageHeight={380}
              captionText={""}
            />
            <h2 className="header">A rolling stone gathers no moss</h2>
            <p className="copytext">
              The best part about constantly traveling is testing new material with fresh
              audiences. When you’re in a new place and no one knows you, you get unbiased
              feedback, which is really important.
            </p>
            <p className="copytext">
              This is different for every individual comic, but we generally give jokes
              three tries before we decide to keep ‘em or toss ‘em, and playing different
              rooms definitely helps separate weak jokes from strong jokes. Accurately
              gauging a jokes strength can be tough if you only perform in one city,
              though. There are a few pitfalls.
            </p>
            <p className="copytext">
              The first pitfall: If you’re only testing jokes in one city, you’re probably
              performing to the same audiences over and over again, so naturally your
              jokes will suffer from diminished laughs on subsequent tellings. You may
              have written and delivered a joke perfectly but because the same people have
              already heard it, their reaction (or lack thereof) can mislead you into
              thinking it’s no good. This can cause you to abandon good jokes prematurely
              based on faulty perception.
            </p>
            <p className="copytext">
              The second pitfall is almost the opposite. Everyone has seen your set but
              because you’re all friends, the audience laughs loudly to show support -
              which can make you believe a weak joke is a strong joke. Then you take that
              joke to a showcase or higher level show, and it tanks.
            </p>
            <p className="copytext">
              We fell victim to both of the above when we only performed in Philly --
              that’s why we like to travel. The road doesn’t lie. If a joke gets nothing
              at three different places with three different audiences then the joke
              sucks. Ax it and start fresh.
            </p>
            <h2 className="header">Forget me not</h2>
            <p className="copytext">
              Before leaving for Memphis we had to try a Nashville specialty called Hot
              Chicken. It’s exactly what it sounds like - spicy ass chicken. One of the
              comics said that Hattie B’s was the place to go, so we stopped on our way
              out of town.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"Hot chicken"}
            />
            <p className="copytext">
              Their menu offered six levels of spiciness: Southern, Mild, Medium, Hot!,
              Damn Hot!!, and Shut the Cluck Up!!!
            </p>
            <p className="copytext">
              Dan sensibly ordered medium, not wanting to disintegrate his entire lower
              intestine. I, like an asshole, ordered Shut the Cluck Up. I still remember
              the cashiers face when I ordered it.
            </p>
            <p className="copytext">
              Before pressing the ‘confirm’ button on the order screen he tilted his head
              and with an expression of grave concern asked “Are you sure?”. I almost lost
              my will in that moment but confirmed I did indeed want it. He completed the
              order with a shake of his head.
            </p>
            <p className="copytext">
              I won’t fill you in on the gory details, but rest assured Dan and I paid for
              our chicken more than once. If you ever visit Nashville and want a memorable
              culinary and gastrointestinal experience, check out Hattie B’s for some Hot
              Chicken!
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
