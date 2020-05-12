import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image9 from "../images/Wilmington/image9.png"
import image4 from "../images/Wilmington/image4.png"
import image7 from "../images/Wilmington/image7.png"
import image5 from "../images/Wilmington/image5.png"
import image10 from "../images/Wilmington/image10.png"
import image8 from "../images/Wilmington/image8.gif"
import image11 from "../images/Wilmington/image11.gif"
import image3 from "../images/Wilmington/image3.gif"
import image1 from "../images/Wilmington/image1.gif"
import image2 from "../images/Wilmington/image2.png"
import image6 from "../images/Wilmington/image6.gif"
import image12 from "../images/Wilmington/image12.png"
import WilmingtonPic from "../images/Wilmington/WilmingtonPic.png"
import WilmingtonDgibbs from "../images/Wilmington/WilmingtonDgibbs.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={WilmingtonPic} width="100%" className="hideWhenBig" alt="Wilmington" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"4hbszapatr"} />
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
              textShadow: `-1px -1px 0 #000,
                            1px -1px 0 #000,
                            -1px 1px 0 #000,
                             1px 1px 0 #000`,
              fontFamily: "News Cycle, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Wilmington
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
            <h2 className="header">Curtain call</h2>
            <p className="copytext">
              After <Link to="/JerseyCity">Jersey City</Link> we prepared for the final
              state in our tour - Delaware. We didn’t plan to do ‘The First State’ last -
              it just happened. Apparently the universe has a corny sense of humor.
            </p>
            <ImageAndCaption imageUrl={image9} imageWidth={400} captionText={"“Ugh”"} />
            <p className="copytext">
              Reaching our 50th state and doing our last show of the trip was a big moment
              for us. Only a year ago we had been chugging coffee and dreaming up this
              crazy scheme, and now we were about to achieve our goal. It was a good
              feeling.
            </p>
            <h2 className="header">Ridin dirty</h2>
            <p className="copytext">
              The van was a faithful vehicle (and house) for the entirety of the trip.
              Through thick and thin it always did its job. Aside from routine maintenance
              and the occasional part replacement, we really didn’t have many issues.
            </p>
            <MultiImageAndCaption
              imageUrls={[image4, image7, image5, image10]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              When we first started out on our tour we were quick to address any needs. If
              the tires looked low, we filled ‘em up right away. If we heard a weird
              sound, we’d pop the hood and tool around until it was fixed. And if a
              service light came on, we took it to the shop immediately. By this point of
              our journey, we didn’t do shit. We literally drove til the wheels came off.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“Home sweet home”"}
            />
            <p className="copytext">
              Seriously, though - the van had major problems that were swiftly brushed
              under the rug. We could only focus on getting home - nothing else mattered.
              If a service light came on, we’d place bets on how long it’d take until the
              notification light gave up and shut off. We knew we were rolling the dice
              but decided to keep on truckin’.
            </p>
            <ImageAndCaption imageUrl={image11} imageWidth={400} captionText={""} />
            <p className="copytext">
              Ignoring the problems made everything worse, of course. The vans
              transmission doesn’t have ‘park’. It’s held still in neutral with the
              emergency brake - which had long since stopped working. This gave us two
              choices: only park on perfectly level surfaces or watch as the van rolled
              away. Most people never have to worry about this but take it from us -
              almost no streets are perfectly level.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“Shit. I forgot quarters for the meter”"}
            />
            <p className="copytext">
              By the time we reached Delaware we were driving on hopes and prayers.
            </p>
            <h2 className="header">Dive Bar</h2>
            <p className="copytext">
              The show was at The Jackson Inn in Wilmington. It was a cozy dive bar that
              had all the ingredients for a great comedy show: dim lighting, cheap beer,
              and drunk people. We got in and chatted with the host of the show -- a
              really chill dude who was awesome to give us spots on his showcase at the
              last minute.
            </p>
            <p className="copytext">
              After a while, Dan went to use the restroom but quickly returned to our
              table. He told us there was a huge shit blocking the toilet. One of the
              comics asked why he didn’t simply flush it. That sounds like a logical thing
              to do but it’s actually a huge risk.
            </p>
            <p className="copytext">
              If you flush a massive turd and clog the toilet, you get all the blame
              whether its your turd or not. Worse yet, you’re now splashing through shit
              water and will forever be known as the guy who dropped a huge deuce and
              created a revolting mess. It’s all over for you at that point - you just
              have to lean into your new identity.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“Thanks, that’s my time!”"}
            />

            <p className="copytext">
              I ended up using that very toilet later on that night and it proved
              embarrassing ... not for me, though. If you’ve ever been to a dive bar then
              you know the toilet situation is abysmal. Most stalls don’t have doors, and
              those that do are always hideously misshapen. They resemble swinging doors
              at a saloon and reveal way too much of the person within.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“Nothin’ like a little privacy”"}
            />
            <p className="copytext">
              This particular stall started at about chin-level, so I assumed anyone
              entering the restroom would see my feet (and entire body) under the door and
              not enter. I was wrong. Mid-shit, someone opened the door. Horror washed
              across this dudes face as he saw me squeezing one out. He screamed “Oh, god!
              I’m so sorry!” and ran out.
            </p>
            <ImageAndCaption imageUrl={image6} imageWidth={400} captionText={""} />
            <p className="copytext">
              He was far more embarrassed than I was. With the design of the stall, I
              already assumed people could see me shitting. This dude was so embarrassed
              that he left the bar. Didn’t see him again for the rest of the night - which
              was probably a good thing. The comedian-audience dynamic has to shift in
              some weird way once you’ve seen each others assholes.
            </p>
            <h2 className="header">Showtime</h2>
            <ImageAndCaption imageUrl={image12} imageWidth={400} captionText={""} />
            <ImageAndCaption
              imageUrl={WilmingtonDgibbs}
              imageWidth={400}
              captionText={""}
            />
            <p className="copytext">
              The show was awesome. Again, the host really pulled through by putting us up
              on his showcase on short notice. The host asked if we wanted to do 10, we
              said we were working on new stuff and would do 7, and then we both ended up
              doing 9. It was weird pacing but it seemed to work really well. We had a
              great audience response and it felt awesome to finish the tour with a killer
              set.
            </p>
            <h2 className="header">That’s all, folks!</h2>
            <p className="copytext">
              The trip was amazing in so many ways - far more than can be conveyed in a
              single summary-paragraph. We’re working on a recap article to discuss our
              experiences, reflections, and what we learned. Keep an eye out for it!
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
