import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image3 from "../images/Cincinnati/image3.png"
import image2 from "../images/Cincinnati/image2.png"
import image7 from "../images/Cincinnati/image7.png"
import image1 from "../images/Cincinnati/image1.png"
import image6 from "../images/Cincinnati/image6.png"
import image5 from "../images/Cincinnati/image5.png"
import image10 from "../images/Cincinnati/image10.png"
import image11 from "../images/Cincinnati/image11.png"
import image8 from "../images/Cincinnati/image8.png"
import image4 from "../images/Cincinnati/image4.png"
import image9 from "../images/Cincinnati/image9.png"
import image12 from "../images/Cincinnati/image12.png"
import CincinnatiPic from "../images/Cincinnati/CincinnatiPic.png"
export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={CincinnatiPic} width="100%" className="hideWhenBig" alt="Cincinnati" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"thhsxyx823"} />
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
              fontFamily: "Bungee Outline, sans-serif",
              fontSize: "8vw",
              textAlign: "center",
            }}
          >
            Cincinnati
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
            <h2 className="header">Spelling bee for $2,000</h2>
            <p className="copytext">
              We drove from <Link to="/Indianapolis">Indianapolis</Link> to Cincinnati.
              Who the hell decided the spelling for Cincinnati should have double N’s
              instead of  double T’s? It makes no sense. It’s pronounced sin-sin-NATTI not
              sin-SINN-ati.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={200}
              captionText={
                "Sin-sin-Natty would, however, make an incredible regional marketing campaign. You’re welcome, Anheuser-Busch."
              }
            />
            <p className="copytext">
              Spelling Cincinnati with three N’s and one T is like spelling Mississippi
              with 4 s’ and one P. You’d have to be a total moron.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={
                "“Let’s eat spaagheti in Misisssipi . Or cinammon rolls at Cinabbon”"
              }
            />
            <p className="copytext">
              If the painful spellings in the above caption didn’t make you cringe, you’re
              a turd. Now that we’ve got everyone on our side with that strong opening,
              let’s start the article!
            </p>
            <h2 className="header">Cut of the same cloth</h2>
            <p className="copytext">
              Luckily Dan had a cousin in Cincinnati who let us crash at his place for
              three days. It felt amazing to get out of the heat and settle down for a
              bit.
            </p>
            <p className="copytext">
              Dan’s cousin (Peter) is a musician and crashing with him made us realize
              just how similar comedians and musicians are - at least in the beginning of
              their careers. Both operate in the performing arts, both perform in front of
              live audiences, both spend a lot of time practicing the craft, both work
              hard to get stage time, and both are starving. It’s almost the exact same
              grind.
            </p>
            <p className="copytext">
              There is one key difference, though: music makes you more attractive. We
              went to one of Peter’s shows and all the women in the audience were hot and
              bothered, fanning themselves as they ogled the guys on stage. This is &nbsp;
              <i>not</i> the case for comedy.
            </p>
            <p className="copytext">
              In music, the stage can transform hideous beasts into fuckable gods. In
              comedy, the stage can transform hideous beasts into funny hideous beasts.
            </p>
            <h2 className="header">Music</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ImageAndCaption
                imageUrl={image1}
                imageHeight={240}
                captionText={"Guitarist off stage"}
              />

              <ImageAndCaption
                imageUrl={image7}
                imageHeight={240}
                captionText={"Guitarist on stage"}
              />
            </div>
            <h2 className="header">Comedy</h2>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ImageAndCaption
                imageUrl={image6}
                imageHeight={240}
                captionText={"Comedian offstage"}
              />

              <ImageAndCaption
                imageUrl={image6}
                imageHeight={240}
                captionText={"Comedian on stage"}
              />
            </div>
            <p className="copytext">
              If you’re still not convinced, just think about famous musicians for half a
              second. Mick Jagger. Keith Richards. Steven Tyler. Alice Cooper. Ed Sheeran.
              All of KISS. All of The Beatles. Hordes of women throw themselves at these
              toad-men. Do you think anyone is banging down the doors of Brian Posehn's
              tour bus?
            </p>
            <h2 className="header">Cafe days</h2>
            <p className="copytext">
              We spent most of our days working and writing in hipster coffee shops. Those
              places are great for people watching and gathering new material. There’s
              something enjoyable about watching vacuous, pseudo-bohemian types try to
              out-point each other for ‘most enlightened’.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={300}
              captionText={"“I have two suspenders but they’re non-binary”"}
            />
            <p className="copytext">
              There’s always a bunch of feminist types hanging around as well, which is
              fun. Honestly, men should love feminism - it basically gives us everything
              we want.
            </p>
            <p className="copytext">
              <b>Women:</b> You think you can tell us how to dress? Well we're DONE
              wearing bras!
            </p>
            <p className="copytext">
              <b>Men:</b> Oh .. nooo.
            </p>
            <p className="copytext">
              <b>Women:</b> Yep. Take that, buster! And we're going to pay for our own
              dinner too!
            </p>
            <p className="copytext">
              <b>Men:</b> Gee, you're really hitting us where it hurts. But you can’t just
              have promiscuous sex.
            </p>
            <p className="copytext">
              <b>Women:</b> Take off your pants.
            </p>
            <h2 className="header">Losing senses</h2>
            <p className="copytext">
              We had a few extra hours one afternoon and wanted to try something new. A
              friend recommended floating in a sensory deprivation tank -- they thought
              after spending so much time on the road, it’d be nice for us to have some
              quiet and solitude. Something where we could sit and collect our thoughts -
              maybe even think of new bits. We decided to try it out.
            </p>
            <p className="copytext">
              The worker at the place told us it takes a while to learn how to float
              properly -- but there’s nothing to learn. You just sit there. It’s like
              being told you have to learn how to recline.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“I think I’m getting the hang of it!”"}
            />
            <p className="copytext">
              When he was giving us the intro, he mentioned that they fill these tanks
              with “10,000 lbs” of salt. With the price of salt what it is, there is
              absolutely no way that they throw the salt away between uses. The only thing
              I could think when I entered was how recently this salt water was used. To
              add to that paranoia, I reached my hands out during my float, and felt the
              previous occupant’s earplugs. I could feel the ghosts of everyone who had
              ever entered this crypt.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={"“Alone at last”"}
            />

            <h2 className="header">Good eats</h2>
            <p className="copytext">
              We tried a Cincinnati staple called Skyline Chili. If you haven’t heard of
              it, imagine chili slopped on ramen buried under a mountain of shredded
              cheese. It’s a culinary concoction only a stoned college student could
              devise. It’s the meal you demolish after 14 shots of Fireball at an after
              hours bar. Incidentally, nearly everyone at the restaurant was stoned or
              drunk.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={
                <div>
                  Do you want ramen, chili, or nachos?       <b>“Yes”</b>
                </div>
              }
            />
            <p className="copytext">
              Every city has at least one staggeringly unhealthy dish that they take pride
              in, even if it seems gross to outsiders. It’s like old tribal shit that
              you’re born into. Chicago has deep dish pizza, Pittsburgh has Primanti Bros,
              and of course Philly has cheesesteaks.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={
                "“Let this be a lesson to anyone who dares suggest cheez whiz is unhealthy”"
              }
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              Before we even reached Cincinnati we already had a warm welcome awaiting us.
              One of the comedians we met in Indianapolis (shoutout Cam O’Connor) reached
              out to the Cincy comedy page on Facebook and let everyone know we were
              coming through. He told everyone that they should put us on shows - it was
              above and beyond nice!
            </p>
            <p className="copytext">
              We did a show at Mac’s pizza pub, which is technically Kentucky but we’re
              considering it Cincinnati because all the cincy comics said it was. Everyone
              much more lax about city boundaries in Cincinnati than in Philly. If you
              cross the bridge into Covington or Newport (both KY) they consider it
              Cincinnati. If you cross the bridge from Philly to Camden, you are in a land
              unto itself. No one would ever consider it a part of Philly.
            </p>
            <MultiImageAndCaption
              imageUrls={[image9, image12]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              The show was awesome. We talked to a bunch of comedians before the show who
              knew we were coming in, and they couldn’t have been friendlier. The host
              even gave us some extra stage time to work stuff out. The overall experience
              was awesome, and the comedians were hilarious. Cincinnati had really high
              quality comedians, clubs, and shows.
            </p>
            <p className="copytext">
              When it was all over we started driving West again. We had to go back and
              scoop up <Link to="/OverlandPark">Kansas</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
