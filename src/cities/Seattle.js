import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image9 from "../images/Seattle/image9.png"
import image11 from "../images/Seattle/image11.png"
import image12 from "../images/Seattle/image12.png"
import image1 from "../images/Seattle/image1.gif"
import image7 from "../images/Seattle/image7.gif"
import image8 from "../images/Seattle/image8.gif"
import image10 from "../images/Seattle/image10.png"
import image5 from "../images/Seattle/image5.png"
import image3 from "../images/Seattle/image3.gif"
import image6 from "../images/Seattle/image6.png"
import image4 from "../images/Seattle/image4.png"
import headphones from "../images/Seattle/headphones.png"
import SeattlePic from "../images/Seattle/SeattlePic.png"
import grain from "../images/Seattle/grain.jpeg"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={SeattlePic} width="100%" className="hideWhenBig" alt="Seattle" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"5s542h5plb"} />
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
              fontFamily: "IBM Plex Serif, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Seattle
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
            <h2 className="header">Evergreen</h2>
            <p className="copytext">
              After <Link to="/PortlandOr">Portland</Link> we continued North to Seattle.
              Although the cities were noticeably different, they still felt related.
              Portland was like the younger brother still figuring things out whereas
              Seattle was the older brother who sold out and got a respectable job.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ImageAndCaption
                imageUrl={image9}
                imageHeight={200}
                captionText={"Portland: “It’s not about money, it’s about art”"}
              />

              <ImageAndCaption
                imageUrl={image11}
                imageHeight={200}
                captionText={"Seattle: “It was just time to grow up”"}
              />
            </div>
            <p className="copytext">
              As with Portland, people in Seattle were surprisingly open to exploring the
              van. They had no fear jumping into a strangers unmarked vehicle. We’re not
              criminologists, but maybe that’s why murderers flock to the Pacific
              Northwest.
            </p>
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={400}
              captionText={"“Free? How could we turn that down?!”"}
            />
            <p className="copytext">
              Reactions to the van are varied. Mostly good, occasionally bad, and
              sometimes we’re not sure. We had one recently where we told a guy we live in
              a van and he said “But you’re so clean!”. Really not sure how to take that.
              Our instinct was to take it as a compliment but it was probably a mean dig.
            </p>
            <h2 className="header">Ask me anything</h2>
            <p className="copytext">
              There’s a huge divergence between the questions men ask vs. the questions
              women ask about the van. It’s like reaching a fork in the road where one
              path leads to a church and the other a brothel. The first thing women always
              ask is “Did you name it?”, whereas the first thing men always ask is “Have
              you banged chicks in it?”.
            </p>
            <p className="copytext">
              To answer the first question: NO. We did not name the van. It’s a hulking
              chunk of steel; an unthinking, insentient object. Why the hell would we name
              it? To answer the second question: we’re classy guys -- we don’t kiss and
              tell.
            </p>
            <ImageAndCaption imageUrl={image1} imageWidth={400} captionText={""} />
            <h2 className="header">Planet Fartness</h2>
            <p className="copytext">
              The people in the Seattle Planet Fitness were strange. We saw a weirdo walk
              into a bathroom stall with a can of Sprite. He must’ve figured he’d be in
              there a while and sensibly brought some refreshments. I was at the urinal
              when he let out the longest and loudest fart I’ve ever heard in my life. It
              started out as a yogurt splatter and finished like a rusty door creaking
              shut.
            </p>
            <ImageAndCaption imageUrl={image7} imageWidth={400} captionText={""} />
            <p className="copytext">
              After the fart, he cracked open the Sprite to celebrate his world record
              bowel blast. He guzzled vigorously, gasping for breath between slurps. It
              sounded like a man drowning in a bowl of soup. For the finale, he unleashed
              a hellacious belch which rivaled the fart in both decibels and duration. It
              was the most nauseating sequence of bodily functions ever executed in
              public.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“No, it’s your ruptured asshole”"}
            />
            <h2 className="header">Reeding is fun</h2>
            <p className="copytext">
              When we finished the workout and hit the locker room, we overheard
              (eavesdropped) a guy talking to his friend about all the books on tape he
              listens to. He acted like it made him really smart.
            </p>
            <ImageAndCaption
              imageUrl={headphones}
              imageWidth={400}
              captionText={"“Where WON’T Sam I Am eat green eggs and ham?”"}
            />
            <p className="copytext">
              We don’t understand why any adult would admit to/brag about listening to
              books on tape. If you listen to books on tape when your eyes work perfectly
              fine, you’re an idiot. Just read the book. You may even learn a thing or two
              - like how to spell. We have a friend who does books on tape and brags about
              it. Reading anything he writes on social media is excruciating.
            </p>
            <p className="copytext">
              He once posted a picture after a tough mudder with the caption{" "}
              <i>“I’m a gluten for punishment”</i>. He was obviously trying to say
              ‘glutton’, but he’s a moron that ‘reads’ books on tape. We wanted to mock
              him with a comment like <i>“Just train more, things will get breadder”</i>,
              but he probably wouldn’t fucking get it. Maybe if we made a recording and
              let him listen to it...
            </p>
            <ImageAndCaption
              imageUrl={grain}
              imageWidth={400}
              captionText={"“You can't digest ME? You can't be celiac!”"}
            />
            <h2 className="header">Getting on shows</h2>
            <p className="copytext">
              Before heading to a new city we usually reach out to hosts to get on shows.
              Our go-to’s for finding events are Facebook and Badslava. However, if a city
              is known for having a large comedy scene (think NY, LA, etc. where there are
              100 mics a night), we sometimes get lazy and hop on shows when we get there.
              Most of the time it works out, but occasionally it doesn’t. Seattle was one
              of the cities where it didn’t pan out.
            </p>
            <p className="copytext">
              Seattle has a good ‘comedy city’ reputation. We checked their showcase/open
              mic website before going and it looked good - there were a ton of shows
              listed. We thought it’d be easy to pop on a show but we were wrong! All the
              shows were either booked or required advanced signup. It was totally our
              fault - we should have planned more in advance.
            </p>
            <p className="copytext">
              If any comics out there are reading this and are in the same situation, we’d
              recommend hitting any open mic you can. If you impress people at the mic,
              they are usually willing to put you on one of their shows at a later date.
              At a minimum you can make friends with other comics and they can give you
              the inside scoop on places to get up.
            </p>
            <h2 className="header">Across the pond</h2>
            <p className="copytext">
              Because we overestimated the ease of getting on shows in Seattle, we had to
              go to the burbs. We drove an hour away to Bremerton. An hour makes it sound
              far, but really it’s directly across Elliott Bay. The trip could’ve been 15
              minutes if only there had been some kind of futuristic technology, like,
              say, a BRIDGE for instance.
            </p>
            <ImageAndCaption imageUrl={image10} imageWidth={400} captionText={""} />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The show in Bremerton was at a local bar. We met the host and other comics
              before the show - they’re always easy to spot at any venue. They weren’t
              used to traveling comics dropping in - they were excited just to hear new
              material and we were excited to deliver it!
            </p>
            <p className="copytext">
              The audience was a lot of fun as well. The population of Bremerton is not
              spoiled for choice when it comes to live entertainment, so everyone comes
              out when opportunities present themselves.
            </p>
            <p className="copytext">
              The first couple of comics had religion-heavy sets mainly skewering the
              catholic church. That got Dan and I thinking -- we almost feel bad for
              priests. When they started out decades ago, being a priest was a respectable
              profession. Now, religion is openly mocked and priests are regarded as
              child-molesting charlatans. It’d be like becoming a teacher now, and in 30
              years being regarded as <i>child-molesting charlatan</i>.
            </p>
            <p className="copytext">
              Priests are basically failed standup comedians. If you’ve ever been to
              church, then you’ve seen priests going for laughs at every mass. Anything to
              liven up the drudgery that is prayer. The only problem is their material --
              it's staler than the body of christ.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={
                "“If Mary had Jesus, and Jesus is the lamb of God, then Mary had a little lamb!”"
              }
            />
            <p className="copytext">
              The thing that bothers us about their cornball jokes is they actually get
              laughs. We have to work hard and write good jokes, but these fuckers change
              one word of scripture and bring the house down. It’s understandable though -
              if we believed the penalty for not laughing was eternal damnation and
              hellfire, we’d laugh too.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“MASS hysteria? Good one, padre!”"}
            />
            <p className="copytext">
              We did really well that night in Bremerton. We ran new jokes which landed
              hard and spent the rest of the time interacting with the crowd. We’ll
              definitely be back.
            </p>
            <MultiImageAndCaption
              imageUrls={[image6, image4]}
              imageHeight={240}
              captionText={""}
            />
            <p className="copytext">
              After our brief stint in Seattle/Bremerton, we hopped on a flight to{" "}
              <Link to="/Anchorage">Anchorage</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
