import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"

import image3 from "../images/Hattiesburg/image3.png"
import image5 from "../images/Hattiesburg/image5.png"
import image9 from "../images/Hattiesburg/image9.png"
import image4 from "../images/Hattiesburg/image4.png"
import image6 from "../images/Hattiesburg/image6.png"
import image2 from "../images/Hattiesburg/image2.png"
import image8 from "../images/Hattiesburg/image8.png"
import image1 from "../images/Hattiesburg/image1.png"
import image7 from "../images/Hattiesburg/image7.gif"
import HattiesburgPic from "../images/Hattiesburg/HattiesburgPic.png"
import BackButton from "../BackButton"
export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img
          src={HattiesburgPic}
          width="100%"
          className="hideWhenBig"
          alt="Hattiesburg"
        />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"lubw4er8md"} />
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
              color: "#78909c",
              fontFamily: "Gochi Hand, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Hattiesburg
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
            <h2 className="header">Hatties...what?</h2>
            <p className="copytext">
              Our only prior knowledge of Hattiesburg was from hearing it in the title of
              Todd Barry’s{" "}
              <i>
                Thank You for Coming to Hattiesburg: One Comedian's Tour of
                Not-Quite-the-Biggest Cities in the World
              </i>
              . We knew it was not-quite-the-biggest but figured if Todd Barry had been
              there, a comedy scene must exist. It was also a relatively short drive from
              New Orleans, so we went.
            </p>
            <p className="copytext">
              The show was held above a restaurant in a place that had a unique aesthetic.
              The downstairs looked and felt like a bed and breakfast with a nice
              restaurant, and the upstairs felt like a proper bar where wild times could
              be had - and it didn’t disappoint.
            </p>
            <p className="copytext">
              Before the show began, we met the host and shared war stories. This guy was
              awesome - he had done comedy in various cities throughout the South and was
              happy to put us in contact with bookers and hosts in other cities that he
              knew. He did a great job of hosting the room and set up all the comics to do
              well.
            </p>
            <p className="copytext">
              We had a lot of fun at this show. We connected with the audience, tried out
              new jokes, and enjoyed the moment.  Dan did especially well. He got on stage
              with a Sprite in-hand and took a slow sip before launching into the set. It
              sent a subconscious “I’ll start when I’m good and ready, not when you are”
              to the audience. He also had killer pacing and delivery.
            </p>
            <MultiImageAndCaption
              imageUrls={[image3, image5]}
              imageHeight={300}
              captionText={""}
            />
            <h2 className="header">Don’t be THAT guy</h2>
            <p className="copytext">
              Every scene has one guy who’s paradoxically a fixture in the community but
              an outcast all the same. Let’s call him ‘Dave’. Dave is a guy who shows up
              to every mic and is perfectly friendly, but something about him is just{" "}
              <i>off</i>.
            </p>
            <p className="copytext">
              He stands too close. When he talks, you’re not sure if he’s making
              statements, telling jokes, or asking questions. His movements and eye
              contact are erratic. His sets are meandering, abstract mind-fucks. He shouts
              out non-sequiturs when comics ask the audience a question. He’s just{" "}
              <i>off</i>.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={"A structural representation of ‘Dave’"}
            />
            <p className="copytext">
              This scenes Dave got up right after Dan and I. In addition to being
              introduced as comics from Philly, we both had mentioned several times where
              we’re from. The first thing Dave asked was “Who here’s Mississippi? We all
              Mississippi?” and a few people shouted “No! The last two guys were from
              Philly!”.
            </p>
            <p className="copytext">
              Here’s a fun fact: there’s a Philadelphia in Mississippi. Of course, 99.99%
              of the people who make reference to Philadelphia are referring to the one in
              Pennsylvania, but naturally Dave - in intrinsically bizarre fashion -
              thought we were of the .01% from Mississippi.
            </p>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <ImageAndCaption
                imageUrl={image4}
                imageHeight={180}
                captionText='"To-may-to"'
              />
              <ImageAndCaption
                imageUrl={image6}
                imageHeight={180}
                captionText='"To-mah-to"'
              />
            </div>
            <h2 className="header">I’ll take US Geography for $200, Alex</h2>
            <p className="copytext">
              Being unaware of Philadelphia, Mississippi is forgivable but being oblivious
              about the real Philadelphia’s location is pretty embarrassing. When we told
              a guy after the show that we were from Philadelphia, he scratched his chin
              and repeated “Phil-a-DEL-phia?” in a molasses-drip Southern drawl and
              followed up after a long pause with “Hmm. Is that up in Maine?”
            </p>
            <p className="copytext">
              After a moment of stunned silence Dan said “Close - Pennsylvania” and we
              could see smoke pouring out of the guys ears. That’s how most of the
              conversation went. He asked questions, we answered simply, and the
              information would almost make it. This guy was like the exclamation point on
              the wifi when you’re trying to get internet -- some kind of connection was
              made, but the information never reached the servers.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“Hang up the phone, y’all, I’m tryna use the Netscape”"}
            />
            <p className="copytext">
              Talking to this guy brought me to the sad realization that there might be
              some validity to the ‘Americans have poor geographical knowledge’
              stereotype. Then again, maybe not -- in Dave’s case perhaps it’s not a lack
              of knowledge, but NEXT LEVEL knowledge. He’s just so good that he knows
              every cities double from <i>Paris, Texas</i> to <i>Madrid, Alabama</i> to{" "}
              <i>Rome, Georgia</i>.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={
                "“You fellers are from Shanghai, huh? I’ve never been to West Virginia, m’self”"
              }
            />
            <p className="copytext">
              We’re not saying everyone from Mississippi is dumb - of course not. It was
              simple happenstance that this guy possessed the intelligence of a wine cork.
              He was a one-off. However, if you asked people in the neighboring state of
              Alabama what they think of Mississippians, they’d tell you all
              Mississippians are stupid. It was comforting to see that all states have
              silly rivalries. It makes us feel less bad when we trash New Jersey.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={
                "*Full disclosure: we only hate on Jersey to avoid excommunication from friends and family"
              }
            />
            <h2 className="header">On the road again</h2>
            <p className="copytext">
              We left Hattiesburg and headed for <Link to="/Mobile">Mobile, Alabama</Link>
              . The ride was going smooth until about midway through when the skies opened
              up out of nowhere. Sheets of rain came driving down, pelting the van in an
              unending stream. Pushing through the storm felt like trying to clear rough
              surf in a kayak. As luck would have it, one of our windshield wipers broke
              exactly at that time.
            </p>
            <p className="copytext">
              We usually park overnight at Planet Fitness or Walmart, but the rain and
              wiper situation forced us to pull over on a desolate stretch of country road
              where an old strip mall stood. We parked next to a beat up old Vietnamese
              restaurant and called it a night. Or so we thought.
            </p>
            <p className="copytext">
              There’s some kind of magnetic phenomenon where whenever we park somewhere,
              anyone in a moving vehicle within a mile radius has an uncontrollable
              compulsion to stop what they were doing and park right next to us to make a
              racket.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={
                "“Get to abandoned lot #14 with subwoofers blaring, and step on it!!”"
              }
            />
            <p className="copytext">
              The rain pounding the roof was cartoonishly loud. It sounded like someone
              was whipping handfuls of marbles at aluminum siding. Any rest was short
              lived as vehicles inexplicably circled the van at random intervals
              throughout the night. When the rain let up we headed straight to{" "}
              <Link to="/Mobile">Mobile</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
