import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image16 from "../images/SaltLakeCity/image16.png"
import image13 from "../images/SaltLakeCity/image13.png"
import image2 from "../images/SaltLakeCity/image2.png"
import image6 from "../images/SaltLakeCity/image6.png"
import image14 from "../images/SaltLakeCity/image14.png"
import image15 from "../images/SaltLakeCity/image15.png"
import image5 from "../images/SaltLakeCity/image5.png"
import image10 from "../images/SaltLakeCity/image10.png"
import image4 from "../images/SaltLakeCity/image4.png"
import image7 from "../images/SaltLakeCity/image7.png"
import image8 from "../images/SaltLakeCity/image8.png"
import image1 from "../images/SaltLakeCity/image1.png"
import image3 from "../images/SaltLakeCity/image3.png"
import image12 from "../images/SaltLakeCity/image12.png"
import image11 from "../images/SaltLakeCity/image11.png"
import image9 from "../images/SaltLakeCity/image9.png"
import SaltLakeCityPic from "../images/SaltLakeCity/SaltLakeCityPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img
          src={SaltLakeCityPic}
          width="100%"
          className="hideWhenBig"
          alt="Salt Lake City"
        />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"9ktr3ipy5x"} />
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
              fontFamily: "Cinzel, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Salt Lake City
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
            <h2 className="header">The rapture</h2>
            <p className="copytext">
              We knew Salt Lake City was a religious town, but we didn’t know{" "}
              <i>just how conservative</i> it was until we saw the first billboard, which
              read “Cosmopolitan magazine contains porn”. If Cosmo was the bar for
              pornographic/objectionable content, this place was going to be very
              different for us.
            </p>
            <p className="copytext">
              We had just left <Link to="/Denver">Denver</Link> - a city with legal weed
              and ample breweries. Even though it’s a very tame city on a national scale,
              compared to Salt Lake City it was a veritable Gomorrah. If the people of
              Salt Lake City knew we had come from a city of such ‘drunkenness and
              debauchery’, they’d likely have executed us on the spot.
            </p>
            <ImageAndCaption
              imageUrl={image16}
              imageWidth={400}
              captionText={"“Nice try. We were more stoned in Denver”"}
            />
            <h2 className="header">Fill up my cup</h2>
            <p className="copytext">
              As expected, the drinking culture was strikingly different compared to the
              rest of the country. It was not a drinking town <i>at all</i>. In Salt Lake
              City, the peak of romance would be saying to your partner “Baby, I’m gonna
              make the moon <b>shine</b> for you”. Whereas in the South, the most romantic
              thing you can say to your partner is “Baby, I’m gonna make <b>moonshine</b>{" "}
              for you”.
            </p>
            <p className="copytext">
              Salt Lake City has bizarre laws concerning alcohol. If you want draft beer,
              the strongest they can serve is 3.2% abv. You can consume as much hard
              liquor as you please, but heaven forbid you have a draft beer stronger than
              3.2%. Makes perfect sense.
            </p>

            <MultiImageAndCaption
              imageUrls={[image13, image2]}
              imageHeight={380}
              captionText={
                "“You can only have 3.2 joint hits, but rip the bong til you collapse!”"
              }
            />
            <h2 className="header">Wait … what?</h2>
            <p className="copytext">
              The reasoning stems from religion -- which has always been known for
              infallible logic and flawless argumentation.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“Kill him, or you don’t love me!”"}
            />
            <p className="copytext">
              Mormons are against the consumption of alcohol. Knowing prohibition couldn’t
              be enforced, they decided to limit the strength of alcohol under the naive
              notion that limited potency would reduce the instance of abuse. This
              contradicts the science of addiction, which is strange because religion
              usually never contradicts science.
            </p>
            <ImageAndCaption
              imageUrl={image14}
              imageWidth={400}
              captionText={"“A heliocentric universe? Kill him”"}
            />
            <ImageAndCaption
              imageUrl={image15}
              imageWidth={400}
              captionText={"“Humans from apes? Kill him”"}
            />
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={
                "“Contraceptives? They don’t work. Remember: the poophole is a loophole”"
              }
            />
            <p className="copytext">
              We know, we know. Everyone bashes the mormons for being a bunch of zealots.
              It’s played out. Can’t we just give them a fair shake?
            </p>
            <ImageAndCaption imageUrl={image10} imageWidth={400} captionText={"No"} />
            <h2 className="header">Show #1</h2>
            <MultiImageAndCaption
              imageUrls={[image4, image7]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              Our first show was at a really indie coffee shop - the type where you’d get
              berated for liking Starbucks. If you’re a real hipster everything - even
              coffee - needs to be subversive or counter culture. If you like anything
              mainstream, you’re a fuckin’ square.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={
                <div>
                  “Pff, check out the stiff. I bet he went to <i>med school</i> and got{" "}
                  <i>licensed</i>”
                </div>
              }
            />
            <p className="copytext">
              Prior to showtime, the comics were spread out into little groups, chatting
              amongst themselves. A college age woman in one group was being particularly
              loud and annoying. It must’ve been a way to compensate for fear - nerves got
              the best of her and she chickened out before the mic began.
            </p>
            <p className="copytext">
              It’s understandable - standup <i>is</i> scary. It takes more guts to put
              your comedic ability on display than almost anything else. For example, most
              people could be talked into belting out karaoke even if they suck at
              singing. It’s just silly fun. But try convincing your friends to do a few
              minutes of standup and see how it goes. Despite your power of persuasion (or
              coercion), they likely won’t do it.
            </p>
            <p className="copytext">
              Humor is part of who you are, not just something that you do. Going back to
              the karaoke analogy - if someone says you’re not the best singer, it slides
              right off. No big deal. That was just some drunken thing you did. But if
              someone says <i>you’re not funny</i>, it’s like an indictment against your
              very being.
            </p>
            <MultiImageAndCaption
              imageUrls={[image1, image3]}
              imageHeight={380}
              captionText={"Show #2"}
            />
            <p className="copytext">
              The next show was at a comic book shop. It was a unique place. It was one
              third comic book shop, one third coffee shop, and one third arcade. One of
              the arcade games that really stuck out was Ms. Pac-Man.
            </p>
            <p className="copytext">
              They say sex sells, and nowhere in history is that more evident than the
              sexualization of Ms. Pac-Man. It’s a yellow orb, for christs sake. Could you
              imagine finishing art school and having your first assignment be “draw a
              sphere that dudes wanna fuck”. We’re sure young artists didn’t get into the
              game to eroticize circles (unless they were Japanese).
            </p>
            <p className="copytext">
              Executives must’ve thought “There’s no way young men will play this game
              without some sweet, cartoon ass. Make it nice and leggy. Give ‘er pouty lips
              and a seductive glance -- something to make pubescent teens cum in their
              pants and daydream about getting laid”.
            </p>
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={400}
              captionText={"“MISS. Pac-Man? So she’s single?”"}
            />

            <p className="copytext">
              The other games in the arcade weren’t nearly as arousing, so we didn’t play
              them.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={"“So I says FROGGER?! I barely know ‘er!”"}
            />
            <p className="copytext">
              The show was fun. The crowd was predominantly comics, with the exception of
              a few friends who came out. As it was an open mic, we warned our friends not
              to expect a polished show. Our warning proved to be a good primer - there
              was at least one guy who was awful. We could see the confused and pained
              glances of our friends as they tried to be good audience members during bad
              sets.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={"“This is awesome. Thanks for the invite”"}
            />
            <h2 className="header">Characters you’ll meet at open mic</h2>
            <p className="copytext">
              To clarify - if the ‘awful’ guy had written material that simply didn’t
              work, we wouldn’t talk smack. We respect <i>anyone</i> who gets up and tries
              to make jokes work -- that’s the name of the game. But some mic’ers seem
              like they don’t even know what comedy <i>is</i>. They don’t prepare, and
              they waste everyones time. This was one of those guys.
            </p>
            <p className="copytext">
              Flapping onto the stage in flip-flops and a football jersey, the guy pulled
              out his phone and read a text exchange with a potential Tinder date,
              verbatim. Nothing he read was remotely funny. It was five minutes of silent
              agony from the audience, which didn’t dent his confidence in the slightest
              (and it <i>should have</i>). Of all the characters you meet in the comedy
              world, this “time waster” is a front runner in the “most annoying” category.
              For a full description, see below.
            </p>
            <p className="copytext">
              <b>The time waster:</b> Impervious to social cues. Unaware when a set is
              going horribly. Paces the stage and absently asks “hmm what else” in between
              half-formed thoughts that got zero laughs. Thinks his ‘riffing’ is great.
              Doesn’t connect with the audience or receive any laughs, but runs the light
              and asks “Do I still have time?” as if everyone is thirsting for more.
            </p>
            <p className="copytext">
              After, we had dinner with our friends and thanked them for coming out. We
              were on the road shortly thereafter.
            </p>
            <h2 className="header">On the move</h2>
            <p className="copytext">
              We left Salt Lake City behind and drove straight to the very den of sin and
              vice - <Link to="/LasVegas">Las Vegas</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
