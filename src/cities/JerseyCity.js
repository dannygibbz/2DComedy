import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image1 from "../images/JerseyCity/image1.gif"
import image11 from "../images/JerseyCity/image11.png"
import image3 from "../images/JerseyCity/image3.png"
import image13 from "../images/JerseyCity/image13.png"
import image8 from "../images/JerseyCity/image8.png"
import image6 from "../images/JerseyCity/image6.png"
import image5 from "../images/JerseyCity/image5.png"
import image2 from "../images/JerseyCity/image2.png"
import image12 from "../images/JerseyCity/image12.png"
import image14 from "../images/JerseyCity/image14.png"
import image4 from "../images/JerseyCity/image4.png"
import image7 from "../images/JerseyCity/image7.gif"
import image9 from "../images/JerseyCity/image9.png"
import image10 from "../images/JerseyCity/image10.png"
import JerseyCityPic from "../images/JerseyCity/JerseyCityPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={JerseyCityPic} width="100%" className="hideWhenBig" alt="Jersey City" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"19z5nfsss0"} />
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
              fontFamily: "Montserrat Alternates, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Jersey City
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
            <h2 className="header">48th runner-up</h2>
            <p className="copytext">
              After the show in <Link to="/Fairfield">Fairfield</Link> we pushed on to New
              Jersey -- our second-to-last state. Being right across the bridge from
              Philly, everyone always responded with “What?! You’re just doing Jersey
              now?!”. Yep. You know the old saying “Saving the best for last”? We wanted
              to do the opposite.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"Suck it, Jersey"}
            />
            <p className="copytext">
              In honesty, it wasn’t out of some bullshit state rivalry that we waited
              until the end for Jersey. State rivalries are ridiculous. Here’s how these
              things work. If it’s a North-South situation, the rivalry is about
              intelligence. The farther North the state, the smarter the people think they
              are. If it’s an East-West situation, the rivalry is about sports. Both think
              the other one sucks more (and both are dumb).
            </p>
            <ImageAndCaption imageUrl={image11} imageWidth={400} captionText={""} />
            <p className="copytext">
              The truth is, we began the trip in January because we just wanted to get the
              fuck out of the cold. It was easy to skip Jersey because we knew it wasn’t
              (and isn’t) going anywhere, no matter how much everyone wishes it would.
              From Philly it was a pedal to the metal scream down the coast until we
              reached Florida.
            </p>
            <h2 className="header">Mistaken Identity</h2>
            <p className="copytext">
              For most of our tour Dan rocked a beard that screamed “Allahu Akbar”. He was
              virtually indistinguishable from every single ISIS footsoldier.
            </p>
            <MultiImageAndCaption
              imageUrls={[image3, image13, image8]}
              imageHeight={120}
              captionText={""}
            />
            <p className="copytext">
              I, on the other hand, had a beard that screamed an equally murderous viking
              exclamation.
            </p>
            <MultiImageAndCaption
              imageUrls={[image6, image5, image2]}
              imageHeight={180}
              captionText={""}
            />
            <p className="copytext">
              I really didn’t think Dan and I could ever be confused for one another based
              on our looks. We don’t even almost look alike. I look like a 13th century
              Scotsman and Dan looks like a 15th century Sikh. We resemble one another
              about as much as Shaq and Peter Dinklage.
            </p>
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={400}
              captionText={"“Dude, you killed it as Tyrion Lannister”"}
            />
            <p className="copytext">
              But once we returned from Connecticut, it happened. Dan shaved his beard for
              the first time in a year and suddenly we were one and the same. Despite
              differences in skin tone, facial features, height, weight, and ancestry, we
              learned that facial hair is the only thing preventing us from identical
              status.
            </p>
            <ImageAndCaption
              imageUrl={image14}
              imageWidth={400}
              captionText={
                "“2DComedy set to star in the remake of Mary-Kate and Ashley’s ‘It Takes Two’”"
              }
            />
            <p className="copytext">
              We arrived at the bar before the show started and ordered some drinks. Dan
              ordered a Sprite and walked away to find a table. I then ordered a beer and
              waited at the bar. When the glass was full the bartender turned around,
              looked right through me, and then walked across the room to give Dan his
              (my) beer and his (my) debit card. If standup doesn’t pan out we at least
              have a bright future in film.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“Only their mother can tell them apart”"}
            />
            <h2 className="header">Jersey Scenes</h2>
            <p className="copytext">
              We got to chatting with the local comics and found out all about the various
              standup scenes in the Garden State. They told us about the scenes in New
              Brunswick, Jersey City, Hoboken, and Asbury Park. Although the opinions on
              each city in Jersey varied, one common theme was almost everyone hated the
              New York scene.
            </p>
            <p className="copytext">
              That topic is too long to cover in this article but if you’re interested in
              hearing about what that’s like, check out this{" "}
              <Link to="/NewYork">article</Link>. For now you can at least have a gif that
              illustrates but one of the many reasons the NY comedy rat race sucks.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"The food is the set list, the fish are the comics"}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The host of this particular show was a guy we had actually known back in
              Philly. He had recently made the move to Jersey City and was still getting
              his feet wet. We talked about all the old haunts in Philly that none of us
              missed and it was a nice little chat.  He joked about shit he’d do as a host
              in Philly (throw the list out, switch up the order, etc.) that drove us
              insane. Thankfully he ran this show in an egalitarian manner.
            </p>
            <ImageAndCaption imageUrl={image9} imageWidth={400} captionText={""} />
            <ImageAndCaption imageUrl={image10} imageWidth={400} captionText={""} />
            <p className="copytext">
              We had taken about a two week break before this show, and I think our
              ring-rust was showing. I thought both of us were cruising through our jokes
              too quickly and not allowing enough time to let the audience react. It
              wasn’t a bad set, but it certainly wasn’t one of our best.
            </p>
            <p className="copytext">
              With the 49th state behind us we dusted ourselves off and prepared for the
              final show in <Link to="/Wilmington">Delaware</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
