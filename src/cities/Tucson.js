import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
// import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image7 from "../images/Tucson/image7.png"
import image6 from "../images/Tucson/image6.png"
import image2 from "../images/Tucson/image2.png"
import image8 from "../images/Tucson/image8.png"
import image3 from "../images/Tucson/image3.jpg"
import image5 from "../images/Tucson/image5.gif"
import image4 from "../images/Tucson/image4.png"
import image1 from "../images/Tucson/image1.gif"
import TucsonPic from "../images/Tucson/TucsonPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={TucsonPic} width="100%" className="hideWhenBig" alt="Tucson" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"27rowrr17b"} />
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
              fontFamily: "Akronim, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Tucson
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
            <h2 className="header">Buckle up</h2>
            <p className="copytext">
              It was a beautiful ride from <Link to="/Austin">Austin</Link> to Tucson.
              Throughout the 13-hour drive, the landscape continually transformed. What
              began with green trees became red rock and finally desert. The
              transformation even extended to our van. Every winged insect in the
              Southwest kamikaze’d us, transforming our windshield from a protective plate
              of glass into an abstract impressionist canvas.
            </p>
            <p className="copytext">
              If we had still been in still Austin, corduroy-clad hipsters would’ve
              considered it a masterpiece of modern art. We can just hear their
              pretentious interpretations now.
            </p>
            <ImageAndCaption imageUrl={image7} imageWidth={400} captionText={""} />
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={
                "“Wow. The juxtaposition of chaos and order is simply sublime”"
              }
            />
            <h2 className="header">Sign, sign, everywhere a sign</h2>
            <p className="copytext">
              You can tell how crazy a state is by looking at its billboards. Texas and
              Arizona were neck-and-neck. The first signs that struck us were construction
              zone signs warning not to hit the workers. Not because you’d end a human
              life, but because it would cost you $10,000 dollars.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={
                "“AND i’ll lose my license? Forget it, i’ll drive between the lines”"
              }
            />
            <p className="copytext">
              We just loved that it was a <i>financial</i> deterrent -- not a <i>moral</i>{" "}
              issue for murdering someone with your car. The next sign that caught our
              attention cautioned motorists not to pick up hitchhikers, as they could be
              escaped prisoners. Thanks for the warning - we’d never have been able to
              identify prisoners without it.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={
                "“That shackled man in the orange jumpsuit sure looks like he could use a ride”"
              }
            />
            <p className="copytext">
              Here’s a crazy thought: maybe they could just <i>not let inmates escape</i>.
              How lazy do the guards have to be? It’s not like there's anywhere for
              prisoners to hide. There’s only one road and it stretches into eternity. In
              any direction, you’ve got 100 miles of visibility. They must spot escapees
              from the watchtower and sigh “Well, we put signs up”.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“He’s over there, now. He’s … he’s gone”."}
            />
            <p className="copytext">
              The last noteworthy sign alerted motorists to wind, and it was a roadside
              warning we could actually heed. Our van is the least aerodynamic vehicle in
              existence and tall vehicles get blown over all the time.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"“License and registration”"}
            />
            <p className="copytext">
              The sign was memorable due to its theoretical nature. It didn’t say
              “Caution: High Wind Zone” or “Warning: Severe Wind Gusts”. It read “High
              Winds May Exist”. We liked that the sign maker treated the existence of wind
              with the conviction of an agnostic. It’s nice that their philosophy degree
              was finally put to use.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={
                "“If wind blows a tree and no one is around to see it, does it even rustle?”"
              }
            />
            <h2 className="header">Hot hot heat</h2>
            <p className="copytext">
              Weather wise, we got to Arizona just in time -- right before the summer heat
              &nbsp;<i>really</i> kicked in. You probably know Arizona is hot, but what
              you may not know is it’s a <b>‘dry heat’</b>. We know this, because it’s the{" "}
              <i>only</i> thing people in Arizona talk about. You could meet someone and
              ask “What are some good hikes out here?” and they’d reply “Haha yeah, it
              really is a dry heat”.
            </p>
            <p className="copytext">
              At our first show, I decided to open my set with “Do you guys like dry heat
              out here?” and the audience exploded. They loved it. I followed up with
              “That was a joke, I know you love it - it’s all you fuckin’ talk about” and
              the room deflated. They were <i>hurt</i>. It was like they opened up about a
              deep, dark secret and I spat in their face. In the end I won them back, but
              only with concentrated effort.
            </p>
            <p className="copytext">
              The next night I was planning to fuck with the crowd by saying “Man, it’s
              humid as hell out here!”, but after witnessing the anguish caused by the
              last joke, I feared the audience might have a seizure.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“NOOOOO!!!”"}
            />
            <p className="copytext">
              The show was a lot of fun. It was a two parter - the first half was regular
              old comedy, the second half cat-themed comedy (once a month they hold shows
              that have a specific comedic theme, and this time it happened to be cats).
            </p>
            <p className="copytext">
              We saw another cool thing at the show that was a testament to the
              therapeutic value of comedy. One of the comedians had been involved in a
              terrible a car accident and suffered a traumatic brain injury. It impaired
              his speech and made it difficult to get around. Despite the challenges, he
              got on stage, talked about it, and was hilarious. He made light of the
              situation and found a positive way to deal with it. It was inspiring to see
              this guy making the best of a bad situation.
            </p>
            <p className="copytext">
              Overall there was a great comedy scene in Tucson. Good shows and friendly,
              welcoming people. Highly recommended for any traveling comics!
            </p>
            <p className="copytext">
              The next day we had a show in <Link to="/Phoenix">Phoenix</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
