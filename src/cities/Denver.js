import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image9 from "../images/Denver/image9.png"
import image3 from "../images/Denver/image3.png"
import image5 from "../images/Denver/image5.gif"
import image1 from "../images/Denver/image1.png"
import image4 from "../images/Denver/image4.gif"
import image7 from "../images/Denver/image7.png"
import image10 from "../images/Denver/image10.gif"
import image11 from "../images/Denver/image11.png"
import image2 from "../images/Denver/image2.png"
import image8 from "../images/Denver/image8.png"
import image6 from "../images/Denver/image6.gif"
import DenverPic from "../images/Denver/DenverPic.png"
export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={DenverPic} width="100%" className="hideWhenBig" alt="Denver" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"jy87fhq4l3"} />
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
              color: "black",
              fontFamily: "Shadows Into Light, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Denver
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
            <h2 className="header">Time for an update</h2>
            <p className="copytext">
              We left <Link to="/Albuquerque">Albuquerque</Link> and headed for Denver. It
              was a smooth ride, as the radio traffic update assured us it would be. We
              were actually blown away that radio traffic updates still exist. Who
              actually listens to those? It’s much easier to use Google Maps and get
              updates in real-time.
            </p>
            <p className="copytext">
              Here’s how every modern-day radio traffic update should sound
            </p>
            <p className="copytext" style={{ margin: "0 30px" }}>
              <i>
                “Hi, it’s Kevin with the traffic update. We’ve got an accident on I-30
                Westbound, be prepared for some stoppage. With the extra time in your car,
                make sure to buy a smartphone you geriatric fuck. Go ahead and join this
                century you Bengay wearing turd. Your grandchildren are dead and no one
                loves you. I’m Kevin with the traffic update”.
              </i>
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={"“Huh? Wha?”"}
            />
            <h2 className="header">Don’t blow your gasket</h2>
            <p className="copytext">
              The ride was going great until our radiator hose blew. It was Pittsburgh all
              over again.  We began losing acceleration on a stretch of highway where
              everyone was blowing by at 90 mph. The van limped along to the next exit.
            </p>
            <p className="copytext">
              The closest exit was just past Las Vegas. Not Las Vegas, Nevada, mind you.
              We’re talking about glamorous Las Vegas, New Mexico!
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“What happens here sta… well, actually nothing happens here”"}
            />
            <p className="copytext">
              The town occupied a dirt road that spanned maybe 200 yards, tops. The first
              resident we saw zoomed past on a 4-wheeler, shirtless, with a dog perched
              precariously atop the gas tank. Bouncing and kicking up dust clouds, every
              pothole nearly launched the little pooch from the ATV into the next life.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“Hang on, Woofy!”"}
            />
            <h2 className="header">Do I know you?</h2>
            <p className="copytext">
              This was the type of small town where everyone knows everyone. As soon as we
              pulled up to the junkyard, a woman watering her garden hollered “You looking
              for Tom? His house is right there” and motioned toward a building encircled
              by weatherbeaten cars and scrap metal.
            </p>
            <p className="copytext">
              Before we could reach the porch, another townsperson yelled “Tom is out! But
              me and my boy can fix your vehicle!” It had only been three minutes and the
              entire population was already aware of our presence.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“I seent ‘em. They over there”"}
            />
            <p className="copytext">
              The mechanic was a nice guy but very much a doom and gloom type. Every
              talking point circled back to death. We started “Thanks for fixing this,
              there aren’t many towns around” and he was like “Yeah, it’s good you were
              close. Wouldn’t want to get stuck and starve to death”.
            </p>
            <p className="copytext">
              When we tried to talk about how beautiful the scenery was, he replied “Yeah,
              but you’re lucky there weren’t any elk on the road. Out here, people get
              killed all the time hitting elk”. We kept trying to steer the topic away
              from death, but he was an expert at bringing it back. Whenever we zigged, he
              zagged. It kept going round and round
            </p>
            <ImageAndCaption imageUrl={image4} imageWidth={400} captionText={""} />
            <p className="copytext">
              We tried to steer the conversation toward Las Vegas in a last ditch effort
              to change the subject. We asked what people do for fun there, and he said
              “Oh, there’s plenty things for young people to do. A lot of college students
              party and get killed driving home drunk. The roads really curve and they
              veer off”.
            </p>
            <p className="copytext">
              Realizing we’d never turn the topic, we settled the check as soon as we
              could and left. We wanted to get outta there before we became the next
              casualties.
            </p>
            <h2 className="header">Rocky mountain high</h2>
            <p className="copytext">
              We’re not really ‘pot guys’ but we wanted to check out what the dispensaries
              in Denver had to offer. Unfortunately, the unexpected pit-stop ate a good
              chunk of the day and left us essentially no time to reach Denver. We ended
              up stopping in Pueblo for the night and got to a dispensary just before
              closing time.
            </p>
            <p className="copytext">
              The guy working the counter was the only dude who looked more hipster than
              Dan, which is no easy feat. With a manbun, beard, and black-rimmed glasses,
              Dans hipsterness is inception level; he’s like a barber inside a baristo
              inside a yoga instructor.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"“Look on my works, ye Mighty, and despair!”"}
            />
            <p className="copytext">
              The guy was extremely knowledgeable. He explained the differences between
              indica, sativa, and all the other shit we’re clueless about.  We decided to
              buy edible gummies, chocolates, and drinks because we can’t get those things
              in PA (legally). From there, we went to Planet Fitness.
            </p>
            <p className="copytext">
              Edibles take longer to kick in, so Dan ate a few gummies before working out.
              I was on the phone and couldn’t join until later. By the time I entered the
              gym, I expected to see Dan whacked out of his gourd and trying to curl the
              leg press. To my surprise, he looked absolutely fine. He was perfectly lucid
              and said he didn’t feel anything. He then went to shower, and I began my
              workout.
            </p>
            <p className="copytext">
              I headed back to the van about an hour later to find Dan melted into the
              couch and marveling at the vans roof. Hearing the door slide open, he turned
              his head at a glacial pace to meet my gaze.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“Who’d you come from?”"}
            />
            <p className="copytext">
              I’d never seen anyone that high. His eyes were so red and puffy I thought he
              had been maced. His speech was slow and garbled. With swollen eyes and
              mumbling speech combined, he looked and sounded like Rocky.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={"“Why do our noses run but our feet smell?”"}
            />
            <p className="copytext">
              I joined Dan in eating a few gummies. I was worried that I wouldn’t get
              high, as I had tried edibles before to no result. The guy at the shop even
              told us that 10% of the population can’t get high from eating pot, but
              luckily I didn’t fall into that group. Within an hour of ingestion I had
              begun to touch eternity. An hour after that, I was already passed out.
            </p>
            <h2 className="header">Denver, finally</h2>
            <p className="copytext">
              We arrived in Denver the following morning. There’s something energizing
              about living in a city surrounded by mountains. It just makes you feel good.
              The scenery in Denver is beautiful and the hiking is unreal. The weather is
              also supposed to be great. All the locals boast Denver has 300 days of
              sunshine. Our luck with the weather was … not great, to put it mildly, but
              we’ll get to that.
            </p>
            <h2 className="header">The show</h2>
            <p className="copytext">
              The show was pretty unremarkable -- just a standard ol’ bar mic. We got busy
              in Albuquerque and didn’t bother reaching out to any Denver hosts beforehand
              to ask about showcases.  We tried out new material, though, so it was all
              good. A fellow comic told us about a second mic that night, but it was a
              school night and a bit past our bedtimes.
            </p>
            <MultiImageAndCaption
              imageUrls={[image2, image8]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              We planned to leave the following day, but a blizzard rolled into this ‘city
              that never rains’. They called it a ‘bomb cyclone’. We understand
              sensationalizing in order to attract viewers, but bomb cyclone is a bit
              much. It’s gonna scare the shit out of old people. “We’ve got a bomb
              cyclone, followed by a rain grenade and wind rape.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“Gerald, quick! Baton down the hatch… ahh!”"}
            />
            <p className="copytext">
              We decided to get a hotel for the night and wait out the storm. With time to
              kill a bucket of leftover edibles, we settled in for a weird night. When the
              weather cleared up, we headed West for{" "}
              <Link to="/SaltLakeCity">Salt Lake City</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
