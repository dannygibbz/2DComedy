import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"

import image5 from "../images/NewOrleans/image5.png"
import image2 from "../images/NewOrleans/image2.png"
import image9 from "../images/NewOrleans/image9.png"
import image7 from "../images/NewOrleans/image7.gif"
import image12 from "../images/NewOrleans/image12.jpg"
import image4 from "../images/NewOrleans/image4.gif"
import image11 from "../images/NewOrleans/image11.png"
import image10 from "../images/NewOrleans/image10.png"
import image8 from "../images/NewOrleans/image8.png"
import image1 from "../images/NewOrleans/image1.png"
import image6 from "../images/NewOrleans/image6.png"
import image3 from "../images/NewOrleans/image3.png"
import NewOrleansPic from "../images/NewOrleans/NewOrleansPic.png"
import BackButton from "../BackButton"
export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={NewOrleansPic} width="100%" className="hideWhenBig" alt="New Orleans" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"lvk1ksg5cl"} />
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
              fontFamily: "Yellowtail, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            NewOrleans
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
            <h2 className="header">The Big Easy</h2>
            <p className="copytext">
              We were in town long before the mardis gras activities were to take place,
              but we never would’ve guessed as much from the chaotic scenes unfolding on
              every corner. People were carousing from noon til night. Ladders and
              clusters of fold-out chairs were already staked out along the roads for
              parade viewing, and beads already lay everywhere.
            </p>
            <p className="copytext">
              New Orleans is a hard city to get a grasp of because it’s so diverse in so
              many ways. Some people are really hard to understand because of the accent
              but others are perfectly articulate. Some are very wealthy but dress like
              paupers. There’s definitely no “Oh man, people from New Orleans are all
              [insert stereotype]” reputation that we could pin down..
            </p>
            <p className="copytext">
              We’ll put it this way -- it wouldn’t be strange to be in a fancy restaurant
              and see people from all different walks of life side-by-side. There could be
              a lawyer wearing a cartoonish seersucker suit next to a guy in flip flops
              and a Saints jersey. There could be a college student sitting next to a
              doctor wearing suit pants, a vest, no shirt, and nipple clamps. The whole
              atmosphere was weird as shit, but in a good way.
            </p>
            <h2 className="header">There’s no place like home</h2>
            <p className="copytext">
              After being in New Orleans for about two hours, we realized both of our
              drivers licenses were expiring at the end of the week. When you spend your
              life living in and driving a vehicle, a valid license is pretty clutch. We
              booked our flights and made arrangements to leave the van.
            </p>
            <p className="copytext">
              We pulled into a long-term parking lot at the airport and a surly lady in
              the booth was already pressing an earpiece and radioing someone in the lot
              to announce our arrival. We thought it strange that empty vehicles needed
              presidential security measures but wanted to park nonetheless.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“You just wanna park, huh? Likely story”"}
            />
            <p className="copytext">
              The woman had a thick accent, which turned the easy task of parking into a
              herculean feat of translation. As we stopped at the booth the woman looked
              at us and said something like “Gon’ park-in?” I said yes (subtext:
              obviously. What do you think, I came to just block the gate and paint my
              nails?).
            </p>
            <p className="copytext">
              She then said “Na how beeg da vehicle?” with an attitude. I politely
              remarked I didn’t know. She flashed an irritated scowl and we had a kind of
              standoff. The only missing element was a tumbleweed to blow between us.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“I’ma stamp yo ticket, son”"}
            />
            <p className="copytext">
              After what seemed a minute she grunted “The gate dun gone down”. The gate
              was already down, and had been down since I pulled up. I was beginning to
              get frustrated and said “I see that. Does the gate go UP? I want to go IN
              the lot”. Her rambling response took about an hour but we managed to roughly
              interpret “the gate is on a timer and because the van is so long, the bar
              may come down before you fully pass through the gate”.
            </p>
            <p className="copytext">
              Before lifting the bar to let us pass through, she instructed “Alright get
              real close, na” and I did as commanded. I pulled right up to the bar, nearly
              touching it with the front bumper. She flipped the switch and barked{" "}
              <b>“GO, GO, GO!!”</b> as the bar raised. I gunned it, and we hadn’t driven
              ten feet before the bar thumped down on the roof of the van. We kept going,
              hearing the rat-a-tat as the bar dragged all along the side. It was an
              inauspicious start.
            </p>
            <p className="copytext">
              It was midnight and our flight was in 7 hours. We figured we’d sleep in the
              van til morning and grab a shuttle to our terminal, but we had forgotten
              that the parking lot was under surveillance by the secret police.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={"“They’re making dick jokes. Get them”"}
            />
            <p className="copytext">
              A shuttle bus driver came over and asked what time we were leaving. Thinking
              he’d forget or not care, Dan said “Oh, we’ll head over in about an hour”.
              Sure enough an hour later, on the dot, he came back. At this point we just
              told the guy the truth - we were gonna wait it out in the van. The shuttle
              driver didn’t care at all, but his superior officer (booth lady) would have
              none of it. We had to leave and find a new lot. On the way out we were half
              tempted to floor it and explode through the fucking gate.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"“Eat my dust”"}
            />
            <h2 className="header">Back on the homefront</h2>
            <p className="copytext">
              When I first grew a beard, I made jokes on stage about bearded people I
              resembled. After a show, another comic said “Dude, you look just like
              Charles Manson!”. He said it to me after every subsequent show, too -- it
              really took root with this guy. Anyway, I always thought that was bad
              comparison. Manson has long, black hair and I have short, reddish hair.
              After seeing myself in my new license picture, though, I think he may have
              been on to something.
            </p>
            <ImageAndCaption imageUrl={image12} imageWidth={200} captionText={""} />
            <p className="copytext">
              Maybe not Manson exactly, but certainly a mixture of murderous satanist and
              bedraggled hobo. This look kills the ladies.
            </p>
            <ImageAndCaption imageUrl={image4} imageWidth={400} captionText={"“Ha”"} />
            <p className="copytext">
              Whereas I look like a mass murderer in my photo, Dan looks like he’s{" "}
              <i>about</i>&nbsp; to be a one-time murderer. With a tucked chin and
              sideways-cocked head, it looks like he was staring at the camera when
              suddenly across the room he spotted the guy who killed his father.
            </p>
            <MultiImageAndCaption
              imageUrls={[image11, image10]}
              imageHeight={280}
              captionText={"“Prepare to die”"}
            />
            <h2 className="header">Back to NOLA for showtime</h2>
            <p className="copytext">
              The show was on valentines day and few comics showed up - which is
              surprising considering a lot of comics are horribly alone. I thought
              valentines day would be a comics unification day - a day to mock
              consumerized love while tearing down our own walls to connect with each
              other. That’s not how it shook out.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“This was a mistake. Put it back.”"}
            />
            <p className="copytext">
              The first comic went up and was having a really good set, until a group of
              ladies was being really loud in the back. He asked them to keep it down
              politely enough, but the leader of the party stormed to the front of the
              stage aggressively and shouted something to the effect of “You don’t have a
              Netflix special, you’re a loser and you’ll never make it”.
            </p>
            <p className="copytext">
              Instead of just quieting down a bit, this lady chose the nuclear option as a
              first response and the comic reciprocated in true Cold War, M.A.D. fashion.
              He said something to the effect of “You’re an asshole and I hope you die”.
              She and about 8 others in her cadre stormed out. The show was off to a great
              start.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“This crowd’s HOT”"}
            />
            <p className="copytext">
              Dan went up two slots after that. As he was launching into his set, a guy
              with that obvious ‘I’ve got drugs in my backpack look’ shouted out “You look
              like a vegan!”. Dan handled it well. He asked the guy “Are you wearing a
              backpack?” and the guy said “No, it’s a bulletproof backpack” so of course
              Dan raked him over the coals for a while.
            </p>
            <p className="copytext">
              I got up next and ran a few jokes that didn’t work. I got the impression
              that the audience was looking for more interaction than material so I riffed
              for a while but it didn’t go anywhere. It was basically a few minutes of odd
              questions and crowd interactions. I meant to circle back to material on
              dating and valentine's day but I forgot to - on the one day they would have
              actually worked.
            </p>
            <MultiImageAndCaption
              imageUrls={[image6, image3]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              There were only about six comics at the show, so it was a short one. We hung
              out with the host afterwards and exchanged stories and contact information.
              The host had to go to another spot, so we went back to the van to plan the
              next trip. We kicked around a few ideas but landed on a little place called
              &nbsp;
              <Link to="/Hattiesburg">Hattiesburg</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
