import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image7 from "../images/SiouxFalls/image7.gif"
import image11 from "../images/SiouxFalls/image11.gif"
import image9 from "../images/SiouxFalls/image9.gif"
import image2 from "../images/SiouxFalls/image2.gif"
import image4 from "../images/SiouxFalls/image4.png"
import image14 from "../images/SiouxFalls/image14.png"
import image1 from "../images/SiouxFalls/image1.png"
import image13 from "../images/SiouxFalls/image13.png"
import image6 from "../images/SiouxFalls/image6.png"
import image5 from "../images/SiouxFalls/image5.gif"
import image12 from "../images/SiouxFalls/image12.png"
import image3 from "../images/SiouxFalls/image3.gif"
import image8 from "../images/SiouxFalls/image8.png"
import image10 from "../images/SiouxFalls/image10.png"
import SiouxFallsPic from "../images/SiouxFalls/SiouxFallsPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={SiouxFallsPic} width="100%" className="hideWhenBig" alt="Sioux Falls" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"iz2v7ryqhi"} />
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
              fontFamily: "Josefin Sans, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Sioux Falls
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
            <h2 className="header">Pounce & Bounce</h2>
            <p className="copytext">
              <Link to="/Boise">Boise</Link> was very much a hit and run visit. We had so
              little time that we considered leaving the van running during the show.
              Ahead of us lay the capstone of our driving marathon: Boise to Sioux Falls.
              We had 36 hours to cover 1,250 miles. About a quarter of those miles are
              scenic. To describe the remainder as ‘humdrum’ would be extremely generous.
            </p>
            <p className="copytext">
              Wyoming and South Dakota as a whole are not bad - there are plenty of
              beautiful places (Yellowstone, Grand Teton, Custer, etc.). But when you’re
              traveling straight through they are bleak, infinite expanses of nothingness.
              It’s so dull that animals try to kill themselves.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"“This place suuuuuuucccckkkssss….”"}
            />
            <h2 className="header">Tractor beam</h2>
            <p className="copytext">
              We’re used to splattering insects by the thousands on long drives -- the van
              is too big to miss. If a bug flies within five feet of the van, the
              gravitational pull of the windshield makes escape impossible. Anything that
              breaks that threshold is sucked in and immediately killed.
            </p>
            <ImageAndCaption imageUrl={image11} imageWidth={400} captionText={""} />
            <p className="copytext">
              Bugs can’t really help it - they’re small and have little control over their
              flightpath. Birds, however, <i>can</i> help it. They’re big and smart enough
              to avoid vehicles -- yet they <i>tried</i> to hit the van. That’s why
              we’re in no way joking when we say things are so grim in the ‘great’ plains
              that even animals want to murder themselves.
            </p>
            <p className="copytext">
              We often joked that the creatures hitting our windshield were growing
              progressively larger. It began with gnats, flies, and beetles. We figured
              regular old birds were the logical conclusion but we were spectacularly
              wrong. What happened next left us gobsmacked.
            </p>
            <h2 className="header">Bird is the word</h2>
            <p className="copytext">
              On the unending plains, going 120 mph feels like going 30. Somewhere on the
              Eastern end of Wyoming, we were zooming along … while still maintaining the
              speed limit, of course. We’ve never broken a law in our lives.
            </p>
            <ImageAndCaption imageUrl={image9} imageWidth={400} captionText={""} />
            <p className="copytext">
              Anyway, we were ‘doing the speed limit’ when out of nowhere a brown blur
              exploded into our left periphery. The moment it appeared was the moment a
              concussive blow echoed off the hood. It was deafening - like a cannonball
              breaching the hull of a battleship. Before fully processing the noise, a
              limp object rolled up the windshield and launched 20 feet into the air.
              Stunned, I could only sputter out “What the FUCK was that?!”.
            </p>
            <p className="copytext">
              With “JESUS CHRIST’s! and other exclamations now ringing throughout the van,
              Dan hung up a business call to join the ruckus. We were both hooting and
              hollering, mystified by what just happened. In disbelief, Dan ventured “Was
              that a piece of rubber?” The dusk had certainly obscured our vision, but it
              was not rubber. There were no other vehicles on the road, no tires to blow.
            </p>
            <p className="copytext">
              A hundred uncertainties flickered through my mind but one thing was certain
              - whatever we hit was a <i>living thing</i> (WAS is the key word). With
              adrenaline now coursing through my veins, everything slowed down and I
              replayed what happened in my mind.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“Shit, someone didn’t rewind”"}
            />
            <p className="copytext">
              The object that entered my vision was sleek -- full of purpose and control.
              The object that exited my vision was a mangled bundle of ribbons. I realized
              what it was. It was not rubber, or any inanimate object for that matter. It
              was a hawk, and it got absolutely SMOKED.
            </p>
            <p className="copytext">
              Here are some pictures taken minutes after the event.
            </p>
            <MultiImageAndCaption
              imageUrls={[image14, image4]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              Now contrast those with pictures taken in the daylight.
            </p>
            <MultiImageAndCaption
              imageUrls={[image1, image13]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              That bird got rocked SO HARD. I’m lucky it didn’t hit the windshield - it
              would’ve gone straight through my face.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={200}
              captionText={"“I just flew in and BOY are my arms tired!”"}
            />
            <h2 className="header">Crash into me</h2>
            <p className="copytext">
              We want everyone to take a good, hard look at that dent and imagine how big
              that fuckin bird had to be. It crumpled metal and stripped paint. If it were
              a Robin or Sparrow, we’d be talking a ding in the hood, <i>maybe</i>. This
              monster made a <i>crater</i>. It was basically a feathery pterodactyl.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“This’ll teach ya!”"}
            />
            <p className="copytext">
              The physics are mind blowing. Seriously - think about the tremendous kinetic
              forces required to inflict that sort of damage. That beast must’ve weighed
              20 pounds.
            </p>
            <h2 className="header">Self-destruction</h2>
            <p className="copytext">
              The only logical conclusion is the hawk wanted to kill itself. If it wanted
              to avoid the road, it could’ve. The roads in Wyoming are only 24 feet wide,
              and are surrounded by <i>millions</i> of feet of free space.
            </p>
            <p className="copytext">
              Put another way, 99.999976% of the land didn’t have roads. Avoiding the
              0.000024% would’ve been the easiest thing in the world for a bird,
              considering its domain is INFINITE. In the most literal sense, the sky's the
              limit.
            </p>
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={400}
              captionText={"“You fly? Pff … conformist”"}
            />
            <p className="copytext">
              It’s like being told “You can go absolutely anywhere in the state of New
              York except for this one clearly marked 2’ x 4’ space in Central Park. If
              you go there, you’ll explode”. Then the first thing you do is walk to that
              precise location.
            </p>
            <p className="copytext">
              The hawk was either suicidal, or profoundly stupid. How the fuck does an
              animal that can fly get killed on the ground? It could soar anywhere, but
              this dipshit decided to fly 4 feet above the earth. Some may say “Maybe it
              saw a mouse it wanted to eat”. OK, well then <i>maybe</i> this ‘smart’
              animal should’ve waited a goddamn second. There’s no other cars on the road
              and nowhere for prey to escape.
            </p>
            <h2 className="header">Kismet</h2>
            <p className="copytext">
              I’m not religious, but hitting the hawk made me believe in fate. The hawk
              and I were star crossed at birth. From the moment its little beak broke
              through egg, it was written that that beak would break through engine block.
              Every single action we ever took was moving us inexorably toward our
              destiny.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={
                "“I’m gonna chill for a bit. It definitely won’t cause my eventual ultraviolent death”"
              }
            />

            <p className="copytext">
              If I had brushed my teeth for 10 more seconds on that fateful day, the hawk
              would be alive. If it had flown left instead of right, the hawk would be
              alive. If I hadn’t made a pit stop that lasted exactly three minutes and
              eighteen seconds, the hawk would be alive. But each of those actions
              happened. They were predestined.
            </p>
            <p className="copytext">
              Our meeting had to be preordained, because mathematically it was impossible.
            </p>
            <ul className="copytext">
              <li style={{ marginBottom: "15px" }}>
                There are 100 million square feet of paved road, and 105 <b>trillion</b>{" "}
                square feet of land in the US. The probability a bird is flying over any
                road is one in a million.
              </li>

              <li style={{ marginBottom: "15px" }}>
                Birds can fly thousands of feet high. The probability they’re flying in
                the lowest ten feet is one in a thousand.
              </li>

              <li style={{ marginBottom: "15px" }}>
                The chance a car is on the road at any given time is one in a thousand.
              </li>

              <li style={{ marginBottom: "15px" }}>
                Therefore, the probability that a bird is flying over a road, in the
                bottom ten feet, while a car is driving in that space is{" "}
                <b>1 in 1,000,000,000,000</b>.
              </li>
            </ul>

            <p className="copytext">
              Statistically speaking, you’re more likely to be struck by lightning while a
              shark is eating you than hit a hawk on the open road.
            </p>
            <h2 className="header">The town</h2>
            <p className="copytext">
              Maybe we should finally talk about Sioux Falls, huh?! It was an
              unpretentious city with a relaxed atmosphere. Small cities take big pride in
              things they do well, and in Sioux Falls their pride was Pride. They’re one
              of the most gay-friendly cities in the country.
            </p>
            <p className="copytext">
              The comedy show fell on the first Friday of pride month and the town was
              ready to rock. The entire downtown was bumpin and half the people at the
              comedy show were heading to a drag party right after standup finished.
            </p>
            <h2 className="header">The peeps</h2>
            <p className="copytext">
              The comics we met there awesome. They were friendly, welcoming, and most
              importantly - hilarious. It was awesome to watch them before going on.
              Another cool aspect about the comedy scene in South Dakota was how well
              connected they are with comedians throughout the Midwest.
            </p>
            <p className="copytext">
              We really liked how tight and interconected the Midwest was. North Dakota,
              South Dakota, Minnesota, and Iowa in particular had a lot of overlap. It
              seemed like everyone knew everyone and had worked together or had at least
              heard of each other.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              We performed at a spot called Boss’ Comedy Club. If you’re ever in Sioux
              Falls you should definitely check it out - they run awesome shows. On the
              bill was the host, an opener, and four features (Dan and I included). The
              comics were great - we had a lot of fun watching them.
            </p>
            <MultiImageAndCaption
              imageUrls={[image8, image10]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              After the show we all went to a neat little bar to hang out. It was dimly
              lit and full of pinball machines. They’ve got pinball leagues in Sioux Falls
              and it’s taken very seriously. The combination of dim lighting, flashing
              arcade games, and metal blasting from the speakers made for a cool, unique
              experience we won’t soon forget.
            </p>
            <p className="copytext">
              We parted with our gracious hosts and checked off South Dakota. Next on tap
              was <Link to="/Fargo">Fargo, North Dakota</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
