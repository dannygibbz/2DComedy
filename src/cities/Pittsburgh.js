import React from "react"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import image4 from "../images/Pittsburgh/image4.png"
import image1 from "../images/Pittsburgh/image1.png"
import image2 from "../images/Pittsburgh/image2.png"
import image6 from "../images/Pittsburgh/image6.png"
import image7 from "../images/Pittsburgh/image7.png"
import image5 from "../images/Pittsburgh/image5.png"
import image8 from "../images/Pittsburgh/image8.png"
import image3 from "../images/Pittsburgh/image3.png"
import { Link } from "react-router-dom"
import PittsburghPic from "../images/Pittsburgh/PittsburghPic.png"
import BackButton from "../BackButton.js"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={PittsburghPic} width="100%" className="hideWhenBig" alt="Pittsburgh" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"l0ppxpnb7f"} />
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
              fontFamily: "Bungee Inline, cursive",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Pittsburgh
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
            <h2 className="header">To be young again</h2>
            <p className="copytext">
              While in <Link to={"/Baltimore"}>Baltimore</Link>, several people told us
              about a heated rivalry with Pittsburgh. That was enough for us -- we drove
              East to check it out. Dan C loves Pittsburgh - he has family there, went to
              college there, and said it’s a great comedy town. I had never been and had
              only heard negative things. Friends and family affectionately called it
              “Shittsburgh” and made it sound like a wasteland of toothless, jersey-clad
              Steelers fans belligerently shouting “Six rings! Six rings!!”. I was eager
              to see for myself.
            </p>
            <p className="copytext">
              Philly to Pittsburgh is roughly a five hour drive - no big deal. As we were
              packing the van we realized the heat suddenly stopped working - big deal.
              Driving five hours through the frost covered tundra didn’t sound too
              appealing, and breaking down in central PA would be a nightmare - there’s
              nothing out there. I figured we were probably low on antifreeze and popped
              the hood to check.
            </p>
            <p className="copytext">
              I couldn’t see <i>any</i>&nbsp; liquid in the reservoir. Thinking the
              plastic was too thick to see through, I decided to unscrew the cap and have
              a look inside. After a few turns, I felt significant pressure buildup.
              Instead of thinking “Maybe I oughta wait a bit to unscrew this” I thought
              “fuck this thing, I’m not going to let it beat me” and cranked with all my
              might. The cap blasted off like a rocket, unleashing a volcanic eruption of
              antifreeze that left me soaked. I’m glad I wasn’t looking straight down the
              pipe.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“Yep - just a tad low”"}
            />
            <p className="copytext">
              Covered in steaming purple fluid, I was able to conclude that not a
              milliliter of antifreeze remained in the vehicle. Every last drop was in my
              clothes and hair. We quickly refilled the reservoir and the van heated right
              up, thankfully. If I had to endure the whole ride drenched in coolant and
              various oils without heat, I would have had frostbite by Harrisburg, and who
              knows what by Pittsburgh.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“Can you crack a window?”"}
            />
            <p className="copytext">
              We found it strange that the antifreeze had been that low in the first
              place. After topping off in Philly we checked the coolant every hour or so
              to see if there was a leak. Sure enough, by the time we reached Steel City
              it was almost empty again. We took the van to a garage that said they’d have
              her out quick. That ‘quick fix’ ended up taking three days and a couple
              hundred dollars.
            </p>
            <p className="copytext">
              Life on the road is austere. There are no warm beds, hot meals, or creature
              comforts. You’re out in the wild, untethered ... until your vehicle (or
              home) is in the shop. Believe it or not, business owners aren’t crazy about
              having drifters sleep in vehicles under their roof. I don’t understand where
              it comes from. When have people in vans ever done anything to anyone?
            </p>
            <MultiImageAndCaption
              imageUrls={[image7, image2, image6]}
              imageHeight={180}
              captionText={""}
            />
            <p className="copytext">
              When traveling, we live a no frills existence. We work remotely in cafe’s,
              shower at Planet Fitness, and spend evenings at comedy clubs or bars before
              passing out in the van. Our diets are trash. We subsist primarily on duck
              food - crackers, bread, and the occasional sandwich. Sometimes we eat fast
              food, but we really only borrow it.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“I really gotta take a … piss”"}
            />
            <p className="copytext">
              That spartan lifestyle ended as soon as the van entered the shop. We went
              straight to Dans grandparents house and lived like little princes for three
              days. We had home-cooked meals and warm beds for the first time in ages. The
              only thing missing was footie pajamas with butt flaps - which i’m sure his
              grandma would’ve knitted immediately if we had asked.
            </p>
            <p className="copytext">
              Staying with grandparents is the only thing that can change a person's
              behavior so quickly. When fresh baked cookies hit the table, you instantly
              transform from a 28 year old telling autoerotic asphyxiation jokes to an 8
              year old telling corny knock-knock jokes. Grandparents just have that
              calming influence. It was relaxing to get off the road for a few days and
              focus on writing.
            </p>
            <p className="copytext">
              We reverted back to our old selves as soon as the van was fixed. When it got
              out of the shop we went straight to a mic. The first show we did was at a
              college. We jumped at the chance to perform somewhere other than a bar or
              club. College was a really unique experience for us. We looked and felt old
              as shit. When we walked around campus we felt like wizened old trolls
              prowling a playground.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“What time does orientation start?”"}
            />
            <p className="copytext">
              Most of the performers on this show were new to comedy, and the audience
              could feel their nervous energy. Confidence on stage is a strange beast.
              Awkward nervousness works if it’s part of the act, but genuine nervousness
              is the kiss of death. Although audiences generally root for performers, they
              will turn their back if they sense weakness. Great jokes can get crickets if
              delivered nervously, and bad jokes can get belly laughs if delivered
              confidently. It’s like a jedi mind trick.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={
                "“You will laugh at these jokes. I’m not actively shitting myself”"
              }
            />

            <p className="copytext">
              Dan and I have already died a thousand deaths on stage, so we were
              untouchable. We were like the grizzled sergeant calmly strolling around a
              battlefield with a cig in his mouth as bullets whiz past his head. There was
              a collective breath of relief when the crowd realized it wasn’t our first
              rodeo. We closed the show and crushed the room - it was a great feeling.
            </p>
            <p className="copytext">
              We were immediately encircled by students when the show ended. They were
              starry-eyed and excited to talk to us. It felt like a bit like being famous,
              which was hilarious for us. We are anonymous open mic comedians. Most crowds
              view us like pond scum, but this crowd viewed us like national headliners.
              Like two big time gunslingers dropping in and and tearing shit up.
            </p>
            <p className="copytext">
              Of course our little moment was extremely short lived. An hour later we hit
              a bar mic and were immediately knocked back down to Earth. No asses were
              kissed and no shits were given. We went from killing the crowd to the crowd
              wanting to kill us for interrupting the Penguins game. When that was
              finished, we were off to <Link to="/VirginiaBeach">Virginia Beach</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
