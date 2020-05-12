import React from "react"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import { Link } from "react-router-dom"
import image6 from "../images/Boston/image6.png"
import image4 from "../images/Boston/image4.png"
import image7 from "../images/Boston/image7.png"
import image8 from "../images/Boston/image8.png"
import image9 from "../images/Boston/image9.png"
import image1 from "../images/Boston/image1.png"
import image2 from "../images/Boston/image2.png"
import image5 from "../images/Boston/image5.png"
import image3 from "../images/Boston/image3.png"
import NewsletterEmail from "../NewsletterEmail"
import BostonPic from "../images/Boston/BostonPic.png"
import BackButton from "../BackButton.js"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={BostonPic} width="100%" className="hideWhenBig" alt="Boston" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"0tkf2vi0ny"} />
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
              fontFamily: "Monoton, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Boston
          </h1>
        </div>
        <div style={{ marginRight: "10%", marginLeft: "10%", marginTop: "60px" }}>
          <div
            style={{
              margin: "auto",
              maxWidth: "600px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <BackButton />
            <h2 className="header">Ya Bahsta’ds!</h2>
            <p className="copytext">
              From <Link to={"/Providence"}>Providence</Link> we drove about an hour North
              to Boston. I love Boston. It’s filled with wicked funny people and the large
              Irish population makes me feel at home. Bostonians communicate in a direct,
              no-nonsense (read: <i>mean</i>) manner that has earned them the brand
              ‘Massholes’. I love it. Probably because people from Philly are the same and
              could share that brand - minus the “M”.
            </p>
            <p className="copytext">
              Philly and Boston share a certain northeast assholeishness that’s magical.
              As an example: the Phillies and Red Sox rarely face each other, so there’s
              no need for rivalry or animosity -- but it exists for fun. I went to a
              Phillies/Red Sox game and half the people in the stadium were wearing
              “Bahston Sawks Cack” shirts. Instead of getting all pissy, Boston fans
              dismissively shouted “Ah, fuck you” and everyone shared a laugh.
            </p>
            <p className="copytext">
              Some (read: <i>most</i>) will take that as ‘being mean’ but in parts of the
              northeast, and especially in irish-catholic households, throwing shade is a
              sign of affection. The more shit you give a person, the more you like them.
              Whoever said “If you don’t have anything nice to say, don’t say anything at
              all” was a fucking loser. If you’re with a group of northeast ‘assholes’ and
              they don’t speak to you, that means they think you’re too big a pussy to
              participate in the banter.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“They’re inseparable”"}
            />
            <h2 className="header">Happy Halloween</h2>
            <p className="copytext">
              We arrived in Boston the Friday before Halloween. Halloween parties are
              always a blast - if you have a costume. A friend took us to a costume party
              without mentioning that pivotal fact, so basically we had to endure shitty
              jokes for the entire night. “What’re you dressed as, a dork?!” “What are
              you, a loser?” “Hey, take off the mask!”
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“Hi-larious”"}
            />
            <p className="copytext">
              Despite the deluge of 4th grade insults, we had a blast Friday night. We saw
              the city, drank some beer, and met a bunch of new people. The only drawback
              about being introduced as comedians is that when people find out you’re
              funny, they try to roast you for some reason - I guess to prove that they’re
              funny too. “Oh, you think you’re funny .. ya.. heh .. ya… Irish..
              fuckface!”. Zing. Nailed me.
            </p>
            <p className="copytext">
              The whole “I-can-do-what-you-do” thing is unique to comedy. If you tell a
              stranger you’re a mathematician, they don’t race to a whiteboard to solve
              systems of polynomial equations. But if you say you do comedy, there’s no
              shortage of people frothing at the mouth to hit you with their best jokes --
              which are typically a mix of Anchorman quotes mixed with stolen bits from
              Comedy Central.
            </p>
            <p className="copytext">
              Even with no comedic context I get roasted when meeting people. I have one
              of those familiar faces where I ‘look like’ someone, and whenever I hear
              “Hey, you look like …” I have to emotionally prepare for a really hurtful
              comparison.
            </p>
            <p className="copytext">
              A person will be like “You look like that guy from Lord of the Rings …
              Gimli”. The worst part is they’re not even trying to be mean. It’s just
              true.
            </p>
            <MultiImageAndCaption
              imageUrls={[image7, image8, image9]}
              imageHeight={150}
              captionText={"“Where’s Waldo?”"}
            />
            <h2 className="header">Suited and booted</h2>
            <p className="copytext">
              The following day we actually bought halloween costumes and were spared the
              delightful witticisms of fellow merrymakers. Dan C couldn’t go to the
              costume shop because of work, so he made the mistake of allowing me to
              choose for him. He requested something simple like a police officer or a
              pilot - so I got him a Leather Daddy outfit. He was decked out with vest,
              hat, and gloves replete with metal studding. The only element missing was
              chaps; the store didn’t have any, and it changed the look entirely. Wearing
              a vest, gloves, and a leather fedora on top of denim jeans, Dan looked like
              a grownup trying to fit in with emo teens at a my chemical romance concert.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={
                <div>
                  “This isn’t a phase, <i>mom</i>, it’s my life”
                </div>
              }
            />
            <p className="copytext">
              The costumes greatest ambition was actualized when we got back to Philly. We
              left the van at Dan’s parents house, and they used it to move furniture for
              friends. While making space in the back, they discovered the studded leather
              gloves and accompanying vestiary accoutrement in a gym bag. Until that point
              they tried really hard to accept Dan’s van lifestyle, but stumbling across
              BDSM paraphernalia was the straw that fucked the camel’s ass.
            </p>
            <p className="copytext">
              In their mind, not only does their son live in a van like a vagrant, but he
              uses it as a kinky sex wagon. I only wish I had bought more accessories for
              his costume. It would have provoked exceptionally titillating dinner table
              conversation for Dan if whips and buttplugs were in the bag.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“Honestly, I’m pretty vanilla”"}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The mic was on Sunday. Some of the people we met Friday and Saturday wanted
              to come and watch. If it had been a normal show or showcase we’d have said
              “hell yeah!”. But because this was an open mic, we said “if you’ve got
              absolutely nothing else to do, sure”.
            </p>
            <p className="copytext">
              Friends often gripe that we don’t invite them to enough shows, but the
              reason comes down to expectation vs. reality. When most think of comedy,
              they envision Netflix specials -- polished sets and beautiful theaters. By
              contrast, open mics are half-baked bits and smelly basements. Mics are
              practice. If your friends played in a band, you wouldn’t want to watch them
              play scales and tune instruments in a garage.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={
                "“This C scale goes out to that BITCH, Christy. You broke my heart!”"
              }
            />
            <p className="copytext">
              We walked into the bar and without missing a beat the bouncer said “you must
              be comics”. I’m not sure if it was a compliment or an insult. Although
              subtle, there <i>is</i> a difference between “you look like a funny person”
              and “you’re funny lookin”. We put our names on the list and waited for our
              turn. The comics before us ranged from ‘just starting out’ to ‘a few years
              in the game’ and they did well. Everyone was in a festive holiday mood.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“Festive”"}
            />
            <p className="copytext">
              I performed fourth that night. In attendance were comics and non-comics from
              Dorchester, Downtown, and South Boston among other neighborhoods. We share
              that East-Coast-Irish-Asshole vibe, so everything just worked. If I made
              jokes about being freckled, drunk, pasty, or from a rough family, etc. it
              brought the house down. In addition to locals, several people we met over
              the weekend came to the show and provided a lot of laughs, too.
            </p>
            <p className="copytext">
              When Dan or I go up first and crush, it’s good for both of us. It lights a
              fire under the next guys ass and forces him to manage a range of emotions,
              from “Fuck yeah, my boy just did great!” to “Oh shit, now I have to bring
              it” to “Alright, calm down, you got this” without anyone seeing the internal
              gears turning. Some nights Dan crushes and I eat shit. Sometimes I do great
              and Dan bombs. But this night we both went out and killed. It was a great
              way to finish a fun weekend in Boston.
            </p>
            <p className="copytext">
              The next morning we were on our way to{" "}
              <Link to={"/PortlandME"}>Portland</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
