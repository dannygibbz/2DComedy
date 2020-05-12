import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image1 from "../images/Portland/image1.png"
import image18 from "../images/Portland/image18.png"
import image14 from "../images/Portland/image14.png"
import image17 from "../images/Portland/image17.png"
import image2 from "../images/Portland/image2.png"
import image19 from "../images/Portland/image19.gif"
import image13 from "../images/Portland/image13.gif"
import image16 from "../images/Portland/image16.gif"
import image3 from "../images/Portland/image3.gif"
import image4 from "../images/Portland/image4.gif"
import image15 from "../images/Portland/image15.png"
import image12 from "../images/Portland/image12.png"
import image11 from "../images/Portland/image11.png"
import image7 from "../images/Portland/image7.png"
import image5 from "../images/Portland/image5.png"
import image6 from "../images/Portland/image6.png"
import image8 from "../images/Portland/image8.png"
import image9 from "../images/Portland/image9.png"
import image10 from "../images/Portland/image10.png"
import PortlandPic from "../images/Portland/PortlandPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={PortlandPic} width="100%" className="hideWhenBig" alt="Portland" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"fz6p6d1sil"} />
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
              fontFamily: "Karla, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Portland
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
            <h2 className="header">Roaming charges may apply</h2>
            <p className="copytext">
              After <Link to="/SanJose">San Jose</Link> we began the trek to Portland. We
              took a slight detour to a little mountain town outside of Bend, Oregon to
              visit a friend. Giant pine trees stretched as far as the eye could see,
              giving the place a downright eerie feel. If we had known his misty little
              hamlet was identical to every ‘spooky-small-town-murder-mystery’ TV show, we
              wouldn’t have gone.
            </p>
            <MultiImageAndCaption
              imageUrls={[image1, image18]}
              imageHeight={180}
              captionText={""}
            />
            <p className="copytext">
              The whole place was weird as shit. We arrived on a Saturday night and headed
              to the local bar - which closed and locked up at <b>10 p.m.</b> Who does
              that? When we pulled the door to enter, it clicked and rattled in its frame.
              The few people inside spun their heads and flashed a dead-eyed gaze in
              unison. We must’ve interrupted their seance.
            </p>
            <p className="copytext">
              Even the weather was possessed of a dark, supernatural spirit. On the ride
              in, it went from cloudy to rainy to snowy in under an hour.
            </p>
            <MultiImageAndCaption
              imageUrls={[image2, image14, image17]}
              imageHeight={230}
              captionText={""}
            />
            <p className="copytext">
              We consider ourselves lucky to have stayed the night without becoming blood
              sacrifices to Satan or being abducted by inter-dimensional beings. We rose
              with the sun to boogie outta town.
            </p>
            <h2 className="header">Keep Portland Weird</h2>
            <p className="copytext">
              The people of Portland were weird in the best way. The first indication that
              Portlanders were awesome was this: of all the places we’ve been to, Portland
              was the first city where the response to being told we live in a van was{" "}
              <b>“Show me!”</b>.
            </p>
            <p className="copytext">
              Most people respond “Ohh …” and then shuffle away as quickly as possible,
              but these folks were willing and eager to hop in the van. It was refreshing
              not to be viewed as creepy van dudes, because we’re totally normal.
            </p>
            <ImageAndCaption
              imageUrl={image19}
              imageWidth={400}
              captionText={"“Hop in”"}
            />
            <p className="copytext">
              The second indication that Portlanders were cool came from their activity
              recommendations. The very first suggestion was “Go to a strip club!”. We
              appreciated the earnest recommendation but we aren’t strip club guys. We’re
              not morally against stripping; we’re financially against it. It’s a waste of
              money.
            </p>
            <ImageAndCaption imageUrl={image13} imageWidth={400} captionText={""} />
            <p className="copytext">
              In strip clubs you pay just to <i>watch</i> women dance. That’s like going
              to KFC and paying just to <i>watch</i> chicken cook -- when all you really
              wanna do is fuck the chicken.
            </p>
            <h2 className="header">But that’s not all!</h2>
            <p className="copytext">
              The strip club recommendation caught us off guard, but we figured the next
              one would be more wholesome. It was not. The second suggestion was “Smoke
              some pot!”. We were beginning to realize that Portland, like Philly, had
              some grit to it. It’s the type of town where a fellow could snort blow off a
              switchblade in the middle of a bar and no one would bat an eye.
            </p>
            <p className="copytext">
              The last recommendation was finally something innocuous -- they suggested we
              go hiking. We don’t understand the fascination with hiking. If the best
              thing to do in your city is <i>walk out of that city</i>, it can’t be that
              great.
            </p>
            <ImageAndCaption
              imageUrl={image16}
              imageWidth={400}
              captionText={
                <div>
                  This <i>IS</i> fun!
                </div>
              }
            />
            <h2 className="header">Mo’ parking mo’ problems</h2>
            <p className="copytext">
              Portland must’ve been cracking down on people living in vehicles. Almost
              every parking lot was under constant surveillance with security guards
              shooing people away. We were kicked out of a Planet Fitness parking lot at 2
              a.m. the very first night in town. A security guy told us there was no
              overnight parking, and a huge convoy of fellow vanlifers drove to the
              loudest place on Earth ...
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“To the Walmart!”"}
            />
            <p className="copytext">
              For any van lifers reading this, avoid Walmart parking at all costs. If you
              plan to get any sleep, forget about it. At all hours of the night you’ll
              hear carts crashing, horns blaring, music blasting, reverse beeps, street
              sweepers, truck deliveries, police sirens, and people screaming at each
              other. It sucks.
            </p>
            <p className="copytext">
              Lots were even patrolled during the day. At 4 p.m. we were hanging in the
              van after a workout when we met the world's least aggressive security guy.
              This hippie looking dude sheepishly walked over and said “Hey guys, I don’t
              mind at all that you’re parked here. I see that you use the gym and don’t
              bother anyone. I don’t mind at all. But my boss - everyone calls her the
              wicked witch - is always watching the lot, and if SHE says something, I’ll
              have to ask you guys to leave but otherwise keep doing what you’re doing. I
              think it’s fine”.
            </p>

            <p className="copytext">
              The guy was so docile; so desperate not to be the bad guy. He looked like he
              lived in a van himself and wanted to join us, even. After he finished
              passing the buck to his boss we were waiting for him to say “Again, I don’t
              mind. I love the van, by the way. It looks like there’s plenty of room for
              two, or even <i>three</i> people to fit comfortably”. He was chill.
            </p>
            <ImageAndCaption imageUrl={image4} imageWidth={400} captionText={""} />
            <h2 className="header">A tale of two cities</h2>
            <p className="copytext">
              We were warned that comedy in Portland could be a bit touchy. That the
              tolerance for edginess was lower than average and some topics were flat-out
              forbidden. The rumors made it sound like a minefield but none of the rooms
              ever felt suffocating. On the contrary, the rooms we worked were well up for
              some blue material. There were groans here and there but that’s normal.
            </p>
            <p className="copytext">
              When we told the comedians what we had heard, they acknowledged that &nbsp;
              <i>some</i> shows are super restrictive. They explained that the Portland
              comedy scene is essentially split into two factions -- actual comedians vs.
              virtue signallers, aka those who go for laughs vs. those who go for claps,
              aka funny people vs. unfunny turds.
            </p>
            <ImageAndCaption
              imageUrl={image15}
              imageWidth={400}
              captionText={
                "“Speaking is ableist, and he didn't apologize for his privilege!”"
              }
            />
            <p className="copytext">
              Everything <i>can be</i> funny. You should be able to try out any material
              you want, and for the most part Portland is very much of that mind. It’s
              only a small group of PC extremists who want to shout people down for not
              espousing identical political viewpoints or social beliefs.
            </p>
            <p className="copytext">
              The real comedians are aware of the unfunny ranting trend and have devised
              methods to thwart it. One of the comics we met started running a show where
              performers have to get laughs within one minute or get off the stage. If
              they fail to elicit laughter after 60 seconds, they’re done. But if they’re
              getting laughs, they can do up to 10 minutes. It’s a pretty damn clever
              solution!
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              We really loved Portland. All the comics we met were so funny, open, and
              welcoming. They went out of their way to make traveling comedians have a
              good experience. When we got into town we only had one show booked for the
              week (feature slots on a Thursday night show). But after an open mic on
              Tuesday, we got booked for the rest of the week thru Saturday.
            </p>
            <MultiImageAndCaption
              imageUrls={[image12, image11]}
              imageHeight={280}
              captionText={""}
            />
            <p className="copytext">This was followed by the show on Thursday</p>
            <ImageAndCaption imageUrl={image7} imageWidth={400} captionText={""} />
            <ImageAndCaption imageUrl={image5} imageWidth={400} captionText={""} />
            <p className="copytext">
              The show on Friday was in a smaller room and the intimate space provided a
              great opportunity to practice crowd work.
            </p>
            <MultiImageAndCaption
              imageUrls={[image6, image8]}
              imageHeight={280}
              captionText={""}
            />
            <p className="copytext">
              The last show was about an hour outside of Portland in a town called
              Welches. Google described this location as a “village”. We carpooled in with
              two awesome comics from St. Louis and Tampa. The show was a blast -- in that
              small town, comedy was the only thing to do and it felt like the whole town
              came to the show.
            </p>
            <MultiImageAndCaption
              imageUrls={[image9, image10]}
              imageHeight={200}
              captionText={""}
            />

            <p className="copytext">
              After the show we kicked it with the other comics, trading war stories, and
              laughs and began the long drive back into Portland. We continued the journey
              North until we hit <Link to="/Seattle">Seattle</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
