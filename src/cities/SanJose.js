import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image3 from "../images/SanJose/image3.png"
import image11 from "../images/SanJose/image11.png"
import image8 from "../images/SanJose/image8.png"
import image16 from "../images/SanJose/image16.jpg"
import image1 from "../images/SanJose/image1.png"
import image14 from "../images/SanJose/image14.png"
import image6 from "../images/SanJose/image6.png"
import image4 from "../images/SanJose/image4.png"
import image9 from "../images/SanJose/image9.png"
import image10 from "../images/SanJose/image10.png"
import image13 from "../images/SanJose/image13.png"
import image15 from "../images/SanJose/image15.png"
import image17 from "../images/SanJose/image17.png"
import image5 from "../images/SanJose/image5.png"
import image12 from "../images/SanJose/image12.png"
import image2 from "../images/SanJose/image2.png"
import image7 from "../images/SanJose/image7.png"
import image21 from "../images/SanJose/image21.png"
import image22 from "../images/SanJose/image22.png"
import image23 from "../images/SanJose/image23.png"
import SanJosePic from "../images/SanJose/SanJosePic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={SanJosePic} width="100%" className="hideWhenBig" alt="San Jose" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"1vksyi0uwy"} />
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
              fontFamily: "Cardo, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            San Jose
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
            <h2 className="header">Back to the mainland</h2>
            <p className="copytext">
              Leaving <Link to="/Honolulu">Hawaii</Link> was tough but we bounced back
              pretty quickly upon returning to California. We drove to San Francisco and
              stopped off in Palo Alto to see Dan’s old friends. The conversation covered
              all the usual ‘catching up’ beats. A lot of “what’ve you been up to’s?” and
              where’ve you been’s?”.
            </p>
            <p className="copytext">
              The conversation was perfectly ordinary - almost boring even, yet a few of
              the people said “Uh oh, this is gonna end up in your standup!”. It
              underscored another unwritten rule of comedy: The less interesting the topic
              of conversation, the more people think it’ll end up in your act.
            </p>
            <p className="copytext">
              Everyone thinks their lives are far more interesting than they are. We’ll be
              talking about something mundane like mortgage payments and they’ll be like
              “Uh oh, we’re giving you material!”. No. No, you’re not.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“My appendectomy was a hoot!”"}
            />
            <h2 className="header">Expecto Patronum</h2>
            <p className="copytext">
              In this case the conversations actually were interesting because I got intel
              on Dan from back before we knew each other. I knew he was a huge Harry
              Potter fan, but I didn’t know that his friends made fun of him for it. I was
              eager to hear the roasts, and they didn’t disappoint. Given that 95% of his
              body is carpeted by hair, the first name they gave him was Hair-mione. When
              that name lost its edge, he became Fagrid.
            </p>
            <MultiImageAndCaption
              imageUrls={[image8, image11]}
              imageHeight={280}
              captionText={"“Ah, go boil yer heads, all of yeh”"}
            />
            <p className="copytext">
              While we’re on Harry Potter … why did everyone trust Hagrid with children?
              He’s a slovenly 800 pound monster who lives in a shed. His favorite hobby?
              Raising spiders. His favorite outfit? Trenchcoat. His strongest talent?
              Gaining the trust of children. You couldn’t formulate a more precise
              mass-murderer profile.
            </p>
            <p className="copytext">
              He’s so dangerous no one will even teach him magic. His sneeze could snap a
              child’s spine, yet every adult is like “Go play in his bedroom! He loves
              being tickled”. It’s like they’re trying to get the kids killed. He’s one
              leather vest away from being a Hell’s Angel -- he’s already got the
              motorcycle.
            </p>
            <p className="copytext" />
            <ImageAndCaption
              imageUrl={image16}
              imageWidth={400}
              captionText={"“Blood in, blood out”"}
            />
            <h2 className="header">Just two guys</h2>
            <p className="copytext">
              San Francisco is a great comedy town but we didn’t have time to contact
              hosts for shows. They book pretty well in advance and we hadn’t done any
              outreach while in Hawaii. With standup out of the picture we instead shot a
              series of photos parodying girl photos on instagram.
            </p>
            <p className="copytext">
              The goal was to skewer ladies who post clearly staged photos and act like
              they're spontaneous. To lambaste those who are always cheesin’ hard and
              cracking up at nothing. To make fun of users desperately trying to depict a
              glamorous and interesting life even though they’re just eating lunch or
              sitting in a park.
            </p>
            <MultiImageAndCaption
              imageUrls={[image23, image22, image1, image14]}
              imageHeight={340}
              captionText={""}
            />
            <p className="copytext">
              You can check out the full video{" "}
              <a href="https://www.instagram.com/p/BxSSvTunY1z/" _target="blank">
                here
              </a>
              .
            </p>
            <h2 className="header">Did you catch that?</h2>
            <p className="copytext">
              Under the ‘fun times’ surface of the slideshow lurked a dark subplot where
              we kill a guy, and <i>no one</i> noticed. The photos below were interspersed
              with happy ones.
            </p>
            <MultiImageAndCaption
              imageUrls={[image10, image9, image6, image4, image13, image21]}
              imageHeight={340}
              captionText={""}
            />
            <p className="copytext">
              To make the post authentic we added wholesome hashtags like #positivevibes,
              #yoga, and #beach and several family friendly businesses ‘liked’ the post.
              They probably saw the first pictures and figured we were a happy gay couple
              sharing our weekend getaway, not comedians fucking with everyone. We’d have
              loved to see their faces when corporate chewed them out for associating with
              scum like us.
            </p>
            <h2 className="header">
              I was here <i>before</i> it was cool
            </h2>
            <p className="copytext">
              With San Fran out of the picture we decided to do standup in San Jose. We
              thought San Jose was a nice city with a lot of cool little places to grab
              drinks. The locals, on the other hand, were less enthused. Apparently the
              city had lost its edge and become sanitized since the tech boom.
            </p>
            <p className="copytext">
              One of the guys we talked to had lived there for a while and said “Ten years
              ago, if you moved to San Jose, you had an interesting backstory. Now,
              everyone’s the same. Everyone programs”. Put another way, programmers are to
              San Jose as basic bitches are to Tinder.
            </p>
            <ImageAndCaption
              imageUrl={image15}
              imageWidth={400}
              captionText={"“We love hiking, Netflix, rescue dogs, and TACOS!”"}
            />
            <h2 className="header">Get with the program</h2>
            <p className="copytext">
              As a programmer, Dan understands better than anyone how boring it can be.
              You can tell how boring a job is by how hard they try to make it look cool
              in movies. For example in the movie Swordfish, Hugh Jackman has 60 seconds
              to hack into FBI servers with a chick blowing him and a gun to his head.
              Think about that. Think about <i>how far overboard</i> the screenwriters had
              to go to make programming interesting.
            </p>
            <ImageAndCaption
              imageUrl={image17}
              imageWidth={400}
              captionText={"Audience: “I still don’t give a fuck”"}
            />
            <p className="copytext">
              And who casts these hacker movies? Who’s the guy that’s like “We need a
              computer programmer … how about Wolverine?”. If these movies were even
              remotely realistic, every computer hacker in every movie would be played by
              Paul Giamatti.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“We’ve gotta hack into the mainframe!”"}
            />
            <p className="copytext">
              Hollywood seriously doesn’t understand programming at all. There was another
              movie called ‘Blackhat’ where Chris Hemsworth (Thor, the god of thunder)
              plays a hacker. The FBI pulls him out of prison after 25 years to catch an
              even more dangerous hacker. He’s had zero access to technology for two
              decades -- <i>what does the FBI think he’s gonna do</i>? Hack everyone’s AOL
              account?
            </p>
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={400}
              captionText={
                "“Quick! Get me a floppy disk and go to AskJeeves, I’ve got ‘em!”"
              }
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              We reached out to the host pretty late - just a few days before the
              showcase. We expected a ‘no’ because of the timing but the host was awesome
              and threw us on. He said he saw our website (this very one you’re reading!)
              and thought “Ok, these guys are serious. I’ll put them on”.  It was
              gratifying after so much time and effort that the website helped us get
              work.
            </p>
            <MultiImageAndCaption
              imageUrls={[image2, image7]}
              imageHeight={280}
              captionText={""}
            />
            <p className="copytext">
              The showcase was at a brewery - and those are always good rooms. All of the
              features were great, so was the headliner. After the show we all went out to
              grab some food and shoot the shit.
            </p>
            <p className="copytext">
              We had a good time in San Jose. One benefit of constant travel is never
              staying anywhere long enough to develop a negative impression. Every scene
              has drama in some shape or form, but as outsiders we have no dog in the
              fight. We come, meet people, do shows, and move on. It’s awesome.
            </p>
            <p className="copytext">
              The only disadvantage of constant travel is not being able to stay long
              enough to do more shows. We’re always grateful for stage time but
              occasionally our schedule is too tight to stay longer in town. We love
              meeting comics and building relationships, so it sucks to have so many
              goodbyes. The good news is we usually see each other again in one city or
              another.
            </p>
            <p className="copytext">
              From San Jose we worked our way North to{" "}
              <Link to="/PortlandOr">Portland, Oregon</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
