import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import image7 from "../images/Atlanta/image7.png"
import image1 from "../images/Atlanta/image1.png"
import image8 from "../images/Atlanta/image8.png"
import image15 from "../images/Atlanta/image15.png"
import image12 from "../images/Atlanta/image12.png"
import image9 from "../images/Atlanta/image9.png"
import image4 from "../images/Atlanta/image4.png"
import image18 from "../images/Atlanta/image18.png"
import image6 from "../images/Atlanta/image6.png"
import image13 from "../images/Atlanta/image13.png"
import image5 from "../images/Atlanta/image5.png"
import image3 from "../images/Atlanta/image3.png"
import image2 from "../images/Atlanta/image2.png"
import image14 from "../images/Atlanta/image14.png"
import image17 from "../images/Atlanta/image17.png"
import image16 from "../images/Atlanta/image16.png"
import image11 from "../images/Atlanta/image11.png"
import image10 from "../images/Atlanta/image10.png"
import image19 from "../images/Atlanta/image19.png"
import image20 from "../images/Atlanta/image20.png"
import AtlantaPic from "../images/Atlanta/AtlantaPic.png"
import BackButton from "../BackButton.js"

function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={AtlantaPic} width="100%" className="hideWhenBig" alt="Atlanta" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"xsvjj29jtz"} />
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
              fontFamily: "Audiowide, cursive",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Atlanta
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
            <h2 className="header">One nation, indivisible</h2>
            <p className="copytext">
              We left <Link to="/ChapelHill">Chapel Hill</Link> and headed south. The
              first order of business upon arriving in Atlanta was to crash a convention.
              A friend of ours from Philly was in Atlanta selling his wares, so we told
              him we’d meet at the convention center. He assured us the event was closed
              to the public and even if we were allowed in, passes would cost $60 dollars
              at a minimum. Challenge accepted.
            </p>
            <p className="copytext">
              We were promptly rejected on our first entrance attempt. Dan and I made the
              mistake of trying to walk in just the two of us. The guard saw we didn’t
              have access lanyards around our necks and swiftly turned us away. Learning
              from our mistake, we figured blending into a group would be our best bet. We
              spotted various groups of people milling about the entrance; we just had to
              select the right one.
            </p>
            <p className="copytext">
              The first group we saw was dressed in business attire. Dan and I were
              dressed in pants and T-shirts, so that was a no-go. The next group was
              carpenters wearing jeans, plaid shirts, and work boots -- still not the best
              match. We thought it was over until we spotted a perfect match: Amish
              people. Our bland clothes, long beards, and crappy hairstyles allowed us to
              blend in seamlessly. Following closely behind the tail end of their pack, we
              waltzed into the convention as if invisible.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"“So I says to her, I says ‘Why don’tcha churn THIS?’”"}
            />
            <p className="copytext">
              When we got to our friends’ booth he was stunned. It was clear he thought
              we’d never get in. It was amusing watching him try to carry on discussions
              with potential clients as we clumsily fumbled around with sample products.
              In a bold improv exercise, Dan C began herding people to the booth to sell
              items he knew nothing about. Shockingly, he didn’t get any commission.
            </p>
            <p className="copytext">
              We couldn’t find any open mics after the convention, so we saw a
              professional show at the Laughing Skull Lounge. It’s always inspiring to
              watch professionals. It sheds light on how good you can become.
            </p>
            <h2 className="header">A statement for the record</h2>
            <p className="copytext">
              The next day we found a mic in a hipster area of Atlanta. While we’re on the
              subject, I want to set something straight -- Dan and I are not hipsters.
              Sure we have beards and occasionally wear flannel, but that’s where the
              similarities end. I studied foreign language and business, not urban
              foraging and graphic design. Dan C studied math and computer science, not
              philosophy and mustache wax. We even listen to music that people have heard
              of.
            </p>
            <p className="copytext">
              Honestly, it’s impressive how quickly we get identified as outsiders among
              real ‘hip’ people. We could enter a hipster bar dressed in full thrift-store
              regalia, and everyone would still look at us like we’re a couple of suits.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“Pff, check out the corporate drone”"}
            />
            <p className="copytext">
              Before you tap your delighted fingertips together and snicker “gotcha!”, we
              are aware that denial makes us seem more hipster. Hipsters <i>would</i> deny
              being part of group, as it’s conformist. Whatever you may think, we are NOT
              hipsters. We get up every morning, just like you, and put our skinny jeans
              on one leg at a time. We put our typewriters in vintage satchels, just like
              you, and ride our penny farthings to the nearest specialty coffee shop.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={
                "“It’s about angular momentum, you probably haven’t heard of it”"
              }
            />
            <h2 className="header">The struggle is real</h2>
            <p className="copytext">
              We were engaged in what has become the bulk of our trips: struggling to find
              parking. We made a few passes around the venue and eventually found a spot
              that looked good. The front was bookended by a car, but the back of the spot
              was wide open. Even better, a weeping willow hung overhead, providing much
              needed shade on this hot summer day.
            </p>
            <p className="copytext">
              I pulled up parallel to the front car and cut the wheel. Backing the van in
              nice and easy, I could feel the long, wispy leaves of the weeping willow
              caressing the roof ever-so-delicately; cradling us in a sexy embrace as if
              whispering “I will keep you nice and cool, baby”. But before our lovers
              promise could be kept, a branch dealt a swift pimp smack. It wasn’t the kind
              of smack to knock you on your heels, but enough to get your attention. A
              sharp “thwack” echoed off the rear panel, indicating the small branch had
              just snapped. Thinking it was a one-off, I continued backing up. That’s when
              a second (and infinitely stronger) branch dealt a pimp haymaker - the kind
              to knock you on your ass.
            </p>
            <p className="copytext">
              Crunching into the trunk of the tree, the rear panel and mega-branch locked
              together like two rams battling for a mate. The tree buckled, stretching the
              branch backwards at an extreme angle. If I backed up another centimeter, the
              branch would’ve had the elastic potential energy to launch the van like a
              pebble from a slingshot.
            </p>
            <p className="copytext">
              I stomped on the brake with all my might, causing a cloudburst of leaves to
              rain down on us. After a few tense moments I gently shifted into drive,
              easing forward to reduce the tension on the tree trunk. Once I felt
              confident the branch wouldn’t explode in a hail of splinters, I sped away,
              embarrassed.
            </p>
            <ImageAndCaption
              imageUrl={image15}
              imageWidth={400}
              captionText={"The Ram lost this battle. Maybe it’ll find a mate next year"}
            />
            <p className="copytext">
              I wasn’t gone for long. Like a murderer returning to the scene of the crime,
              I circled back to survey the damage.
            </p>
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={400}
              captionText={
                "“I didn’t see nothin. I have no idea which white, 2015, Dodge Promaster 2500 hit the tree”"
              }
            />
            <p className="copytext">
              We imagined a crowd standing behind a yellow police-tape perimeter,
              tearfully sobbing “But I just saw them yesterday!” as broken branches lay
              dead under a billowing white sheet in the background. Nope. No one even
              noticed. Welcome to Atlanta.
            </p>
            <h2 className="header">The usual suspects</h2>
            <p className="copytext">
              After being humiliated by the tree, our eternal search for parking
              continued. We didn’t have any luck in the commercial district, so we drove a
              few blocks into a residential area. After ten minutes a public park appeared
              out of nowhere like an oasis in the desert. Perfect!  We could park on the
              street and practice sets before walking to the venue.
            </p>
            <p className="copytext">
              We circled the block to find the best spot. While one of us drives the van,
              the other typically works on a laptop. That sounds like a logical,
              productive use of time. However, in practice it’s one of the most suspicious
              actions a person can do. There’s almost nothing more conspicuous than a guy
              typing on a laptop in a moving vehicle. The only time you see that guy is as
              a villain in a hacker movie, and he’s usually in the exact same van.
            </p>
            <MultiImageAndCaption
              imageUrls={[image9, image4, image18, image6]}
              imageHeight={100}
              captionText={"“Just sending out a few emails”"}
            />
            <p className="copytext">
              On second thought, if you’re on a laptop in <i>any</i>  vehicle that isn’t a
              plane or a train, you’re up to no good.
            </p>
            <ImageAndCaption
              imageUrl={image13}
              imageWidth={400}
              captionText={"“What’s the wifi?”"}
            />
            <p className="copytext">
              We couldn’t look inconspicuous in the van if we tried. The huge windshield
              is basically a magnifying glass allowing everyone within 5 blocks to see us
              in HD, and Dan C looks like an amalgam of every police-sketch jihadi.
               Suspicion Level 4/10.
            </p>
            <MultiImageAndCaption
              imageUrls={[image5, image3, image2, image14]}
              imageHeight={160}
              captionText={
                "“I’m making a dating app for married people called ‘Infidelity’ ”"
              }
            />
            <p className="copytext">
              I looked suspect, too. Before driving to the mic I was taking pictures with
              a DSLR camera and left it hanging around my neck in case a good photo op
              presented itself at a red light. I didn’t realize how bad that would look -
              one guy clacking away on a laptop and the other with a garish secret agent
              camera. Suspicion level 6/10.
            </p>
            <ImageAndCaption
              imageUrl={image17}
              imageWidth={400}
              captionText={"“Hello, fellow non-spy”"}
            />
            <p className="copytext">
              Cruising by the park, we noticed it was jumpin! There were at least 100
              people grilling, listening to music, chatting, and having a good time.
              Usually when groups are enjoying such revelry, they take no notice of
              passing people or vehicles. But we weren’t just <i>any people</i> in{" "}
              <i>any vehicle</i>. We were the only two white guys in a half-mile radius,
              looking like hackers/spies/terrorists, driving a gargantuan (and freshly
              dented) unmarked white van. As we pulled up to the parking spot, it was like
              that record-scratch movie scene where the music cuts and everyone stares.
            </p>
            <ImageAndCaption
              imageUrl={image16}
              imageWidth={400}
              captionText={"“Sup, dudes?”"}
            />
            <p className="copytext">
              For those not already glaring at us, the skull fracturing reverse siren
              violently seized their attention. Suspicion level 9/10. For our suspicion
              coup de gras, we didn’t get out of the van when we parked. In full view of
              200 + skeptical eyeballs, we skulked into the back and clumsily pulled down
              the shades. Suspicion level 536/10.
            </p>
            <p className="copytext">
              We were simply practicing our sets, but there must’ve been dozens of
              theories circulating the BBQ about what sort of nefarious individuals we
              were. From <i>‘murderers preparing their sniper rifles’</i> to{" "}
              <i>‘moron rookie cops on their first stakeout’</i> to the cliché 
              <i>‘pedophiles handing out free candy’</i>, we’re sure the ideas were coming
              hard and fast (like pedophiles when handing out free candy).
            </p>
            <p className="copytext">
              After 20 minutes we hopped out, ready to hit the mic. A family parked next
              to us was struggling to unpack plastic tables and chairs, so we lent them a
              hand a shot the breeze for a few minutes. After seeing us interact in a
              non-creepy manner, the crowd let out a collective sigh of relief. If we
              weren’t crunched for time, it would’ve been awesome to hang around, eat some
              food, and explain to everyone that we were aspiring comedians only aiming to
              kill with laughter -- nothing else.
            </p>
            <h2 className="header">On to the show</h2>
            <p className="copytext">
              Speaking of mics and killing laughter, we need to have a word about a shitty
              habit that happens at (some) open mics. Sometimes the stage and the bar are
              two separate spaces in the same building, and comics waiting to perform hang
              at the bar instead of the performance area. What the fuck is that? How does
              anyone expect to get better when there’s no audience and thus no feedback?
            </p>
            <p className="copytext">
              We’re not saying you need to stay for every set. We’re not even saying you
              need to laugh at the jokes. All we’re saying is if you’re in the building,
              why not support your fellow comedian by being an audience member? We’re all
              working toward the same goal. The smallest bit of feedback, even “Hey, I
              liked X or Y joke” is infinitely better than “Hey, go perform in that empty
              room while we sit at the bar and watch muted reruns of Law and Order”.
            </p>
            <p className="copytext">
              Some may say "You want us to stick around? Hell no, I've got places to be!".
              If that's the case then by all means go -- but don’t stay in the same place
              and actively ignore sets when you're done. Hanging around outside the
              performance room is like hanging around outside a video booth at Adult
              World. Once you’re finished either leave, or stay to give the next person a
              hand.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={"“I come for the videos, but stay for the conversation”"}
            />
            <p className="copytext">
              The comics that preceded us basically said the same thing on stage. They’d
              get up and say something like “Why the fuck are we even here? I could’ve
              just stayed home”.
            </p>

            <MultiImageAndCaption imageHeight={400} imageUrls={[image19, image20]} />

            <p className="copytext">
              The silver lining is it provides the opportunity to riff about shared
              annoyance and try totally new material. Dan and I didn’t bomb that day; you
              can’t really bomb in a room with no people. You more so just die.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“You guys have been great!”"}
            />
            <p className="copytext">
              When the mic wrapped up, we went out for food and drinks with the comics
              that stayed throughout the show. They were really cool and explained that
              that particular rooms culture wasn’t indicative of the overall comedy scene,
              which we’re sure is true. We’ll be back, Atlanta. Just like your city’s
              emblematic Phoenix, we died this time but will arise from the ashes.
            </p>
            <p className="copytext">
              From there we went North with our sites set on{" "}
              <Link to="/Asheville">Asheville</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThisCity
