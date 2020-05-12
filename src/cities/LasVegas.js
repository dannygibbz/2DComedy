import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image1 from "../images/LasVegas/image1.gif"
import image7 from "../images/LasVegas/image7.png"
import image8 from "../images/LasVegas/image8.png"
import image6 from "../images/LasVegas/image6.png"
import image3 from "../images/LasVegas/image3.png"
import image4 from "../images/LasVegas/image4.png"
import image2 from "../images/LasVegas/image2.png"
import image5 from "../images/LasVegas/image5.png"
import teamAmerica from "../images/LasVegas/teamAmerica.gif"
import LasVegasPic from "../images/LasVegas/LasVegasPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={LasVegasPic} width="100%" className="hideWhenBig" alt="LasVegas" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"xzd5jutdmr"} />
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
              fontFamily: "Arvo, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Las Vegas
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
            <h2 className="header">Bright lights</h2>
            <p className="copytext">
              Coming from <Link to="/SaltLakeCity">Salt Lake City</Link>, it was cool to
              see in person the places we’ve always seen on TV. As big UFC fans, it was
              cool to see the MGM Grand up close. There was an upcoming event and a bunch
              of MMA fans were hanging around outside. We overheard the following
              conversation.
            </p>
            <p className="copytext">
              <b>Guy 1:</b> How long do you think you’d last with Anderson Silva?
            </p>
            <p className="copytext">
              <b>Guy 2:</b> A few minutes, at least.
            </p>
            <p className="copytext">
              The answer was utterly insane, yet not surprising. Despite what some people
              may think, <b>fighting ability</b> is the thing dudes most egregiously
              overestimate.
            </p>
            <ImageAndCaption imageUrl={image1} imageWidth={400} captionText={""} />
            <p className="copytext">
              We’re being completely serious. As an example - if someone was invited
              bowling and and cautioned “just fair warning, I bowl three times a week and
              I’m pretty good”, most dudes would be like “Damn, you’re gonna crush me! I
              never bowl”. But if someone was invited to spar and told “just fair warning,
              I box three times a week and do jiu jitsu the other days” most dudes would
              be like “Cool, I hope you’re ready to die”.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"“You hungry? Cause here comes a knuckle sandwich”"}
            />

            <p className="copytext">
              It’s always the guy who’s been in the fewest fights that’s the most
              confident about how he’d vanquish his opponent. It’s the fattest guy at the
              tailgate that boasts about how he’d leap for the catch. Ridiculous claims of
              athleticism follow one simple rule:{" "}
              <b>
                the lower the likelihood of having to prove it, the higher the likelihood
                you’d nail it.
              </b>
            </p>
            <MultiImageAndCaption
              imageUrls={[image8, image6]}
              imageHeight={380}
              captionText={"“I’d’ve jumped the pile!!!”"}
            />
            <p className="copytext">
              Wild claims exist beyond sports, too. We’ve all met people who brag “I
              coulda been a CEO!” or “I coulda been a doctor”. The rule here is: once
              someone’s window of opportunity has closed, it’s amazing what they{" "}
              <b>could have done</b>. The Navy SEAL’s have an age cutoff of 30, so every
              dude on his &nbsp;
              <i>31st</i> birthday is like “DAMNIT! I just missed it. I coulda been the
              best. Rambo who?”
            </p>
            <h2 className="header">Cruisin</h2>
            <p className="copytext">
              We hit the strip and saw the bright lights and shiny buildings that everyone
              talks about -- but no one ever mentions the glut of tacky billboards
              littered along the way. Every cheesy slogan either rhymed or employed a
              horrific pun. For the rhyming portion, we saw a billboard that read “In a
              wreck? Oh my heck! Call Tom for representation”. The pun billboard made us
              wince - it was from a roof company with a picture captioned ‘hot shingles in
              your area looking to get nailed’.
            </p>
            <ImageAndCaption imageUrl={teamAmerica} imageWidth={400} captionText={""} />

            <p className="copytext">
              The most cringey billboards were the ones where people seemingly picked a
              profession based on the mileage they could get out of their name. One
              billboard was for a lawyer with the last name ‘Su’. The billboard assured
              passing motorists that he would SUe the big corporations in class action
              suits. Another was a woman with the last name ‘Taylor’, and she would sew
              your clothes to fit you just right. In Vegas, if you have a trash name, you
              simply can’t work.
            </p>
            <h2 className="header">Cleanin up</h2>
            <p className="copytext">
              It had been a while since we did laundry and our clothes smelled like shit.
              We had probably worn everything two or three times over by the time we hit
              the laundromat. As we were walking in, a guy with half his face missing rode
              by casually on a bike. He was drenched in blood but completely nonplussed.
              We got outta there as quickly as humanly possible.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The show was at a place called ‘The Center for Science & Wonder’. Before
              arriving, we envisioned it as a fancy, glassed-out architectural wonder but
              discovered it was more so a broom closet in a strip mall. It looked like a
              place where science and wonder go to commit suicide. The owners must’ve had
              a keen sense of irony.
            </p>
            <p className="copytext">
              On the inside, the only thing to signify it was a center for science was the
              outer-space themed paint job. Basically, glittering stars = science.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"*Rips blunt* “The truth is out there”"}
            />
            <p className="copytext">
              There was also a lone picture of Charles Darwin on the wall, and he probably
              isn’t the best example of a good researcher. I read several articles which
              stated he ate every animal he studied. I thought he was this great scientist
              but it turns out he was just a foodie.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={
                "“We have to visit the Galapagos - I heard the tortoise species are deliciou… I mean diverse”"
              }
            />

            <MultiImageAndCaption
              imageUrls={[image2, image5]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              We met another guy from PA doing the same thing as we are - living in a van,
              traveling around and doing comedy. Here we thought we had a novel idea, but
              there have been plenty of people who did what we did before - and people are
              doing now, and will in the future. We’re unique flowers.
            </p>
            <p className="copytext">
              The show was a lot of fun. There were two guys hosting the mic and they did
              a great two-man thing. We tried out new jokes that were, to put mildly,
              dark. It felt really good. Got a lot of groans from the audience, which was
              basically the intended result. We’re still finding our voices, so it feels
              good getting darker and more natural.
            </p>
            <p className="copytext">
              After the show headed to <Link to="/SanDiego">San Diego</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
