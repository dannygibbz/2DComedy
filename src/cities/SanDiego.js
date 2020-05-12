import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image7 from "../images/SanDiego/image7.png"
import image1 from "../images/SanDiego/image1.gif"
import image4 from "../images/SanDiego/image4.png"
import image2 from "../images/SanDiego/image2.png"
import image5 from "../images/SanDiego/image5.gif"
import image3 from "../images/SanDiego/image3.png"
import image11 from "../images/SanDiego/image11.png"
import image12 from "../images/SanDiego/image12.png"
import image9 from "../images/SanDiego/image9.png"
import image6 from "../images/SanDiego/image6.gif"
import image10 from "../images/SanDiego/image10.png"
import image8 from "../images/SanDiego/image8.png"
import SanDiegoPic from "../images/SanDiego/SanDiegoPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={SanDiegoPic} width="100%" className="hideWhenBig" alt="San Diego" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"clj3lmoy3s"} />
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
              fontFamily: "Ranga, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            San Diego
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
            <h2 className="header">Letzzz hit the road</h2>
            <p className="copytext">
              The ride from <Link to="/LasVegas">Las Vegas</Link> to San Diego was a pedal
              to the metal affair. One of our headlights burned out so we had to arrive
              before nightfall. Our headlights were dim when we had two, so losing one
              made seeing anything in the dark nearly impossible. A candle would’ve
              provided more light. It’s amazing we didn’t get lost.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={
                "“That’s weird, I didn’t know San Diego was spelled T-I-J-U-A-N-A”"
              }
            />
            <p className="copytext">
              The ride itself really wasn’t particularly noteworthy except for a sign
              which announced a town named “Zzyzx”. That’s not a typo - that was the
              actual name.  We could only surmise that during the naming ceremony the
              towns founder was electrocuted mid-sentence.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={
                "“Hold on, I’ll name the town just after I get my toas…..ZZYZX!!!”"
              }
            />
            <p className="copytext">
              As Pennsylvanians, we’re no strangers to oddly named towns. Intercourse and
              Blue Ball are real towns located only 8 miles apart.
            </p>
            <MultiImageAndCaption
              imageUrls={[image4, image2]}
              imageHeight={340}
              captionText={""}
            />
            <p className="copytext">
              Honestly, the names don’t bother us at all. What bothers us is the enormous
              missed opportunity by the founders to space the towns <b>69</b> miles apart.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“It was right there, damnit!”"}
            />
            <p className="copytext">
              There’s another town in PA named Bird in Hand, and we hope it was so named
              to chide Intercourse and Blue Ball for missing a killer joke. Or perhaps
              it’s named for its own unique and intimate purpose.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“Remember son, a bird in the hand is worth two in her bush”"}
            />
            <h2 className="header">Make yourself at home</h2>
            <p className="copytext">
              The Panera in San Diego was much nicer than most we’ve visited across the
              country. It was clean and bright. All the furniture was made of whitewood.
              It looked like a fancy setting for wine tasting as opposed to what most look
              like (places for homeless people to charge their first-gen tablets). It was
              fitting that we had a unique experience in the unique Panera.
            </p>
            <p className="copytext">
              I went to use the restroom but the only stall was occupied. I came back to
              the table and said “Damn, I wish there was more than one stall in there.
              I’ve gotta go!” to which Dan replied “What? There’s a bunch of stalls in
              there”. I was pretty confident I only saw one, but I went back to double
              check. After looking around, I confirmed there was still just the one. Then
              I realized ...
            </p>
            <p className="copytext">
              It’s happened to every guy at one point or another - you walk into a
              restroom and don’t see any urinals -- just a bunch of stalls. Your first
              thought is “hmm that’s weird”. But before you finish that thought, your
              brain screams “FUCK! It’s because we’re in the ladies room!” and you rush
              out, embarrassed.
            </p>
            <p className="copytext">
              Not Dan. He went in, saw a bunch of stalls, and decided it was a luxury poop
              palace. I can only imagine the terrified expressions worn by women in
              adjacent stalls upon hearing the deep, guttural moans of a man squeezing out
              a greasy shit. I’d’ve paid to see the shock when women saw <i>this</i>{" "}
              emerge from within.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={"“Got an extra tampon?”"}
            />
            <h2 className="header">Flatlining</h2>
            <p className="copytext">
              We hoped the headlight was the only automotive issue we’d face in San Diego
              but luckily we also got a flat tire. We arrived at our friends house and she
              basically willed the flat into existence. We were trying to park in her
              narrow back alley (not a euphemism) when she came outside and said “You guys
              have a flat”. The tire was absolutely fine before - but the moment her
              sentence ended, the tire exploded. We pulled out of the alley and finished
              on the pillow, I mean parked on the street.
            </p>
            <ImageAndCaption imageUrl={image12} imageWidth={400} captionText={""} />
            <p className="copytext">
              Our friends took us out in the North Park area. It was awesome to grab food
              and catch up. We got on the topic of legal weed and mentioned the leftover
              edibles from Denver. When we got back to their house we walked to where the
              van was parked to retrieve what edibles remained.
            </p>
            <h2 className="header">Hey, neighbor!</h2>
            <p className="copytext">
              As we were getting out of the van, the man whose house we parked in front of
              came out and told us we couldn’t park there. Apparently shantytowns had been
              popping up in the neighborhood from so many people living out of their
              vehicles. The guy saw our flat tire and figured we were there to stay. He
              was not on board.
            </p>
            <p className="copytext">
              We had to convince this man that we were not shady characters, which was
              difficult considering we were carrying drugs out of our van/house. We
              assured him we were not trying to set down roots in front of his property --
              it was Easter Sunday and no tire shops were open. He agreed to let us tow
              the van out the following morning and was actually chill about the whole
              thing.
            </p>
            <ImageAndCaption imageUrl={image9} imageWidth={400} captionText={"“Chill”"} />

            <h2 className="header">Pre-game show ...</h2>
            <p className="copytext">
              We walked around the area before the show began, and saw a strange scene. A
              truck was blocking a car from exiting a parking lot. In the car sat a
              terrified man. The window was opened just a crack, and outside stood a woman
              pounding the door, screaming “Oh yeah?! You’re staying at home tonight, huh?
              WHY ARE YOU HERE THEN? WHO ARE YOU GOING TO SEE?!”. The man held his hands
              up above the steering wheel as if trying to surrender.
            </p>
            <p className="copytext">
              We walked into the venue to sign up. When we came back out, the scene from
              cheaters was still in full swing. The woman was now standing on the hood of
              the guys car and pounding on the roof.
            </p>
            <ImageAndCaption imageUrl={image6} imageWidth={400} captionText={""} />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The first show was a fucking nightmare (it was a mic). The website said
              signups were at 6:30 so we got there early to secure good spots. When we
              arrived at 5:45, numbers one through seventeen were already taken. Perfect.
              To make matters worse, a standup class was managed through this place and we
              got bumped by every single student.
            </p>
            <p className="copytext">
              We’ve done so many shitty mics that we’re not really phased - but for this
              particular mic Dan’s friends and family all came out to see us perform. We
              felt terrible that they had to sit through and often be part of the ‘crowd
              work’ for the 27 performers before us (because no one else was in the
              audience).
            </p>
            <MultiImageAndCaption
              imageUrls={[image10, image8]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              To add insult to injury, everyone made fun of us for choosing that
              particular spot afterwards. Apparently it was in a really boring area and a
              hassle to get to. When they had punched the address into their respective
              GPS’, it said the place was permanently closed. It was a shit experience but
              we all had drinks and laughed about it after.
            </p>
            <h2 className="header">Showtime part deux</h2>
            <p className="copytext">
              The next show was at the Comedy Store in La Jolla. We were excited to have a
              ‘good mic’ after the previous horrific one. What made the last one so
              unbearable was the abundance of people trying to riff without having any
              material. Even with nothing they’d pace the stage and ask “What else” as if
              they were cooking on some good bits.
            </p>
            <p className="copytext">
              To our astonishment, some of the same people from the previous mic got up
              and did the same time-wasting horseshit. Like “What’s in the news recently
              …. Uhm… let’s see … ahhh” and then have unfunny, mundane commentary on it.
            </p>
            <p className="copytext">
              We were so glad that the host, after a few of these ‘sets’, set everyone
              straight, saying “Guys, you’ve <i>gotta</i> makes jokes up here. You need to
              at least <i>try</i>. Don’t waste everyone's time”. It was good to see they
              have higher standards at the Store.
            </p>
            <p className="copytext">
              After the show we raced across the city to watch a standup show at Whistle
              Stop. Adam Ray was headlining and it was an awesome show. Dan's friends and
              family also came, so luckily they were able to see what real comedy looks
              like vs. open mic comedy.
            </p>
            <p className="copytext">
              The next stop was <Link to="/LosAngeles">LA</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
