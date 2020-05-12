import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image7 from "../images/Fargo/image7.gif"
import image3 from "../images/Fargo/image3.gif"
import image1 from "../images/Fargo/image1.png"
import image4 from "../images/Fargo/image4.png"
import image8 from "../images/Fargo/image8.png"
import image6 from "../images/Fargo/image6.png"
import image5 from "../images/Fargo/image5.png"
import image9 from "../images/Fargo/image9.png"
import image2 from "../images/Fargo/image2.gif"
import FargoPic from "../images/Fargo/FargoPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={FargoPic} width="100%" className="hideWhenBig" alt="Fargo" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"8ex6rpq0pd"} />
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
              fontFamily: "Shadows Into Light Two, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Fargo
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
            <h2 className="header">Lukewarm rivals</h2>
            <p className="copytext">
              Before leaving <Link to="/SiouxFalls">Sioux Falls</Link>, we wanted dirt on
              North Dakota - something we could use to playfully antagonize the Fargo
              crowd. Beyond the Dakota’s calling each other ‘the more boring one’ there
              really wasn’t any strife.
            </p>
            <p className="copytext">
              The comics in South Dakota openly admitted “Fargo is actually pretty
              awesome”. It was Midwestern politeness in action, and we didn’t like it.
              Coming from the Northeast, we expect hostility in all situations.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={300}
              captionText={"“Nice to meet you too”"}
            />
            <h2 className="header">The Philadelphia Connection</h2>
            <p className="copytext">
              We actually ran into some Philly people in Fargo. As per usual, the
              conversation became an interrogation from the git. We provided a ‘Philly
              heritage’ summary in the Mobile article, but here are the cliffnotes.
            </p>
            <p className="copytext">
              If you say you’re from Philly, you better be ready to rattle off your entire
              history to prove it. It’s turns what should be a chill conversation into an
              extremely stilted conversation. Here’s how a normal chat should go when you
              meet someone from your hometown in another state.
            </p>
            <p className="copytext">
              <b>Person</b>: I’m from Philadelphia
            </p>
            <p className="copytext">
              <b>Dan</b>: Oh cool, me too! So what brings you to Fargo?
            </p>
            <p className="copytext">
              <b>Person</b>: Business. We’re attending a conference for …
            </p>
            <p className="copytext">
              It’s never like that when you’re dealing with a Philadelphian. Here’s
              exactly how our conversation went.
            </p>
            <p className="copytext">
              <b>Person</b>: You guys are from Philly? Where?
            </p>
            <p className="copytext">
              <b>Dan</b>: Fishtown.
            </p>
            <p className="copytext">
              <b>Person</b>: Pffff, Fishtown.
            </p>
            <p className="copytext">
              <b>Dan</b>: Yeah, off Girard avenue. How about you?
            </p>
            <p className="copytext">
              <b>Person</b>: What cross street? 5th?
            </p>
            <p className="copytext">
              <b>Dan</b>: 3rd
            </p>
            <p className="copytext">
              <b>Person</b>: What <i>high school</i> did you go to?
            </p>
            <p className="copytext">
              None of that information is pertinent. Asking about <i>5th</i> and Girard?
              Besides a church, there’s nothing there. Were they curious if we’ve seen the
              shrine of St. John Neumann? Of course not. They’re just asking questions to
              prove our Philadelphian roots.
            </p>
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <p className="copytext">
              “What high school did you go to?” Really? That’s what you want to talk
              about? You’d think the discussion would go something like ...
            </p>
            <p className="copytext">
              “Isn’t it crazy that a bunch of us Philly people are in North Dakota - a
              seldom visited state which just so happens to be the place where Carson
              Wentz, the Eagles quarterback, comes from? What a small world!”.
            </p>
            <p className="copytext">
              Nope. They’re more interested in identifying the precise GPS coordinates of
              our childhood homes.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={
                "“Technically, your address is outside of Philadelphia proper”"
              }
            />
            <h2 className="header">Bingo!</h2>
            <p className="copytext">
              When people in South Dakota vouched for Fargo, we breathed a sigh of relief.
              We didn’t want to be the millionth people to rag on North Dakota for being
              boring. We were excited to provide a fresh take, to rebrand an oft-maligned
              state. But when we entered what was supposed to be a fun bar and saw
              everyone inside playing BINGO, we knew the place was fucked.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“God damnit”"}
            />
            <p className="copytext">
              We want to be clear here. This was not a local watering hole on the edge of
              town catering to the elderly. This was a <i>sports bar</i> across from a
              &nbsp;
              <i>college</i> catering to <i>students</i>. That place should’ve been rowdy
              as fuck. Instead, it had the energy of a hospice.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“Bingo! Can I die now?”"}
            />
            <p className="copytext">
              Here’s how boring the city is. Google ‘Fargo’ right now. The first FOUR
              results aren't even about the actual city -- they’re about the movie and TV
              series. Fiction is 4x more interesting than real life. The only overlap
              between fiction and reality is people actually want to throw themselves in a
              wood chipper.
            </p>
            <p className="copytext">
              You know a state’s got nothing going on when their big claim to fame is
              producing the most wheat in the US. Budweiser even had billboards boasting
              that their beer is brewed exclusively from ND wheat. That’s all well and
              good, but there’s not enough wheat in the world to produce enough beer to
              make you forget you’re in Fargo.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={
                "“Flip cup is fun but who’s up for old maid? Maybe an episode of Golden Girls?"
              }
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              We couldn’t find a lot of standup in Fargo, so we ended up hitting an open
              mic. As much shit as we talk on the city, we don’t have anything negative to
              say about the comics. They were all cordial and funny people. There were
              about 12 comedians who performed that night
            </p>
            <p className="copytext">
              The ‘stage’ at this mic was a cornhole table. If comedians chose to stand on
              it, they had to be mindful of where the hole was, lest they snap their
              ankles in half. As is standard at open mic, everyone got 5 minutes and the
              skill/experience range was all over the board. There were a few tables of
              non-comics who were amused or confused depending on the set.
            </p>
            <MultiImageAndCaption
              imageUrls={[image5, image9]}
              imageHeight={180}
              captionText={""}
            />
            <p className="copytext">
              Due to the low frequency of shows/mics, we decided to leave town. &nbsp;
              <Link to="/Minneapolis">Minneapolis</Link> was a relatively short drive and
              offered stage time nearly every night of the week. Although the Fargo was
              really fun, we knew it was time to move on. Leaving was tough, but we
              somehow managed to do it.
            </p>
            <ImageAndCaption imageUrl={image2} imageWidth={400} captionText={""} />
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
