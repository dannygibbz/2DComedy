import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image4 from "../images/Memphis/image4.png"
import image8 from "../images/Memphis/image8.png"
import image3 from "../images/Memphis/image3.png"
import image6 from "../images/Memphis/image6.png"
import image2 from "../images/Memphis/image2.png"
import image7 from "../images/Memphis/image7.png"
import image5 from "../images/Memphis/image5.png"
import image1 from "../images/Memphis/image1.png"
import MemphisPic from "../images/Memphis/MemphisPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={MemphisPic} width="100%" className="hideWhenBig" alt="Memphis" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"7zn7kdrcas"} />
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
              fontFamily: "Bangers, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Memphis
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
            <h2 className="header">Bill-bored</h2>
            <p className="copytext">
              The ride from <Link to="/Nashville">Nashville</Link> to Memphis is just over
              three hours of long, empty highways dotted with Bible thumpin’ billboards.
              Every ten miles or so a new ad would appear with large text spouting
              nonsense like “In the beginning, GOD created...” accompanied by an image of
              evolution with a huge red{" "}
              <span style={{ color: "red", backgroundColor: "red" }}>&#x2716;</span>
               through it.
            </p>
            <p className="copytext">
              Right when the idiocy of the last billboard was about to leave our minds, a
              new one would pop up with equally preposterous drivel like “After you die,
              you WILL meet God” or “Beyond reasonable doubt, JESUS IS ALIVE!”.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={
                "“The case “Jesus is alive” is dismissed due to lack of evidence”"
              }
            />
            <p className="copytext">
              Once you’re fully under highway hypnosis you barely notice anything, let
              alone banal billboards. About 3/4ths of the way through the trip, Dan had
              long been daydreaming in the passenger seat and I was only just more
              cognizant of my surroundings than he. We were expecting to complete the
              journey on autopilot when suddenly the most peculiar billboard we’ve ever
              seen jarred us out of our reveries.
            </p>
            <p className="copytext">
              We were cruisin’ down the highway at a good clip when from the corner of my
              eye I spied what looked like an igloo built atop a billboard poking through
              a clutch of trees. I only managed to spit out “...Wha?” which snapped Dan
              awake. He quickly looked over and howled “What? WHAT?! Dude turn around.
              Turn AROUND! We gotta go back!”.
            </p>
            <p className="copytext">
              There’s no easy way to ‘go back’ on a major highway. You’re stuck until the
              nearest exit appears. Then you reenter in the opposite direction and drive
              until you can reverse again. We knew turning around would be at least a 20
              minute detour but we <i>had to</i> do it. We needed to make sure we weren’t
              imagining things.
            </p>
            <p className="copytext">
              We were laughing the whole way back and keeping our eyes peeled for the
              nearest exit. After a few miles we saw the billboard from behind and
              confirmed it did indeed look as if an igloo or hill of some sort was built
              into the rear wood paneling.
            </p>
            <p className="copytext">
              When we finally faced it head-on, we had to pull over to really soak in what
              stood before us. Here’s the billboard.
            </p>
            <ImageAndCaption imageUrl={image8} imageWidth={400} captionText={""} />
            <p className="copytext" style={{ display: "flex", justifyContent: "center" }}>
              Do you notice anything strange? Have a closer look
            </p>
            <ImageAndCaption imageUrl={image6} imageWidth={400} captionText={""} />
            <p className="copytext" style={{ display: "flex", justifyContent: "center" }}>
              Still not getting it? It’s ok, third time’s a charm.
            </p>
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <p className="copytext">
              What. The FUCK. Is that? Who...? ...Why?! We had so many questions - none of
              which could be articulated through tears of laughter. Who made this
              decision? How did the conversation go?
            </p>
            <div style={{ marginLeft: "30px", marginRight: "30px" }}>
              <p className="copytext">
                <b>Designer:</b> We’ve got a 14’ x 48’ rectangular space to work with. I’m
                thinking we frame Tina’s face on the right side at full 14 foot height,
                then ….
              </p>
              <p className="copytext">
                <b>Museum Manager:</b> NO. We need to print directions there. How can
                anyone find us if they don’t see an address on the billboard?
              </p>
              <p className="copytext">
                <b>Designer:</b> Oh … k, well how about simply printing the directions on
                the left?
              </p>
              <p className="copytext">
                <b>Museum Manager:</b> (Rubs temples) Aghh. You’re just not getting it.
                I’ll tell you what. Let’s meet in the middle. Put her face on the top half
                and the directions underneath. Sound good?
              </p>
              <p className="copytext">
                <b>Designer:</b> … But … we’ve got plenty of space. There’s no need to
                scrunch th...
              </p>
              <p className="copytext">
                <b>Museum Manager:</b> God DAMNIT!!! Who’s the Tina Turner expert here?
              </p>
              <p className="copytext">
                <b>Designer:</b> It’s just that we’d have to hire woodworking and print
                specialists and that would drastically increase costs -- but if you say
                so. How large should the addition be, about 3 feet?
              </p>
              <p className="copytext">
                <b>Museum Manager:</b> What’re you, crazy? That’ll never capture Tina’s
                likeness. Make it 40 feet.
              </p>
              <p className="copytext">
                <b>Designer:</b> But …
              </p>
              <p className="copytext">
                <b>Museum Manager:</b> Do as I say!
              </p>
            </div>

            <h2 className="header">Please wipe machines after use …</h2>
            <p className="copytext">
              Laughing at the billboard gave us a solid ab workout before we even stepped
              foot in the gym. Our first stop in Memphis was Planet Fitness to get in a
              light workout before show. Everything was going well until some asshole
              wearing hospital scrubs decided to work out and sweat over every machine.
            </p>
            <p className="copytext">
              Wearing hospital gear outside hospitals is a HUGE pet peeve of ours. What
              the fuck are people thinking? “I’m gonna go get a quick lift in in my plague
              pajamas!”
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={
                "“Don’t worry! It’s only piss, shit, vomit, and blood. Can I work in?”"
              }
            />
            <p className="copytext">
              Shouldn’t health care professionals be the most knowledgeable about the
              spread of disease and how to prevent it? You’re not even supposed to wash
              scrubs with other clothes because they’re so contaminated.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"“Whadd’ya think of my new SARS sash?”"}
            />
            <p className="copytext">
              We even saw a lady in scrubs at the airport once, which is tantamount to
              international terrorism through germ warfare. We just don’t understand what
              goes through peoples heads. It’s almost as if they’re <i>trying</i> to get
              everyone sick so they’ll never be out of a job.
            </p>
            <p className="copytext">
              They may argue “My scrubs are clean, I’m going to the hospital <i>after</i>{" "}
              this!”. Oh, even better. Who wouldn’t want a noxious lungful of B.O. and a
              few droplets of sweat in the eye while having an IV switched. A thousand
              pardons. By all means carry on your workout. There’s definitely no way you
              could transmit MRSA or ringworm from exercise equipment to already weak
              patients.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The show was at a bar that felt like it was someone’s living room. The
              tables and chairs were mixed in with couches, giving the space a homey air.
              The bar owners dog was also roaming around, providing a familial atmosphere.
              The dog was really sweet - it walked around and nuzzled up to just about
              everyone before settling down on a couch with Dan and I.
            </p>
            <p className="copytext">
              After a few minutes the host, a black female, walked in the side door and
              the dog went ballistic. It tore away from the couch and made beeline for
              her. The dog was only barking because someone new had entered - but from the
              hosts perspective it looked like we shouted “Sic ‘er!”
            </p>
            <p className="copytext">
              Thankfully she made a joke about it. The dog was licking her and she said
              “Did you guys train the dog specifically to attack black people?”. With that
              the tension evaporated.
            </p>
            <MultiImageAndCaption
              imageUrls={[image5, image1]}
              imageHeight={380}
              captionText={
                "“Nice to meet you! We are comedians and part-time dog trainers for the klan”"
              }
            />
            <p className="copytext">
              No matter how many mics or shows we do, we can always see something for the
              first time. On this particular night, we saw a guy go on <i>after</i> the
              show ended. Apparently he forgot to write his name down, so as the host
              announced the end of the show, he yelled from the back “I still have to
              go!”.
            </p>
            <p className="copytext">
              This ensuing scene was not good. Everyone was shuffling around, confused,
              and kind of bummed to have to be quiet again all of a sudden. The guy got up
              and forgot most of his set. Half of the audience wasn’t paying attention as
              he stammered through the remainder, but commanding a room after the show had
              already “ended” is no small feat. After the show we went West to{" "}
              <Link to="/Tulsa">Tulsa</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
