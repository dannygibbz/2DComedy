import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
// import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import image1 from "../images/ChapelHill/image1.png"
import image2 from "../images/ChapelHill/image2.png"
import image4 from "../images/ChapelHill/image4.png"
import image3 from "../images/ChapelHill/image3.png"
import ChapelHillPic from "../images/ChapelHill/ChapelHillPic.png"
import BackButton from "../BackButton.js"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={ChapelHillPic} width="100%" className="hideWhenBig" alt="Chapel Hill" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"33gf21rdfi"} />
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
              fontFamily: "Fugaz One, cursive",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Chapel Hill
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
            <h2 className="header">Talk of the town</h2>
            <p className="copytext">
              It was a short ride from <Link to={"/Raleigh"}>Raleigh</Link> to Chapel
              Hill. We began checking out local spots to get a feel for the town and learn
              its history. We started at a restaurant that boasted serving ‘the best
              burger in America’. People voted. I guess we missed election day. Regardless
              - between handling the polls, tallying absentee ballots, and cooking
              burgers, they certainly had their hands full.
            </p>
            <p className="copytext">
              The veracity of a country's ‘best burger’ claim can be tough to verify, but
              when it came to ‘most flies’, this place was the <i>world's</i> best. By the
              end of the meal I felt like a water buffalo that doesn’t even flinch as
              flies tapdance across its eyeballs. I didn't even care -- the burgers{" "}
              <i>were</i> that good.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={
                <div>
                  “Actually, I asked for medium <i>well</i> ”
                </div>
              }
            />
            <p className="copytext">
              Next we went to a bar called <i>He’s Not Here</i>. It’s known for selling
              large cups of beer - basically the size of buckets - for $5 dollars. Large
              quantities of beer for low quantities of money? Count us in. Dan C wanted to
              buy a T-shirt to remember the place, and when he asked the employee for a
              large shirt the employee said “We might have that size but I’d have to dig
              through the boxes to find it. Are you sure?”. Yeah. Go do your job.
            </p>
            <p className="copytext">
              Time to be a crotchety old man -- I’m tired of people complaining about
              their job while on shift. The other day I was buying some stuff at a gas
              station and while my card was processing, the cashier let out an exhausted
              groan and was like “Psshh, this sucks. I’ve still got another two hours to
              go”. So I said “Oh, long day?” and he said “Yeah, been here two hours
              already”. I wanted to zing him with a sarcastic “You poor soul. How ever do
              you manage?” but I was afraid he’d take it in earnest and sigh “I just put
              one foot in front of the other”.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“Back to the salt mines”"}
            />
            <p className="copytext">
              If we were outside of a work setting, I’d be happy to commiserate over the
              drudgery of your day-to-day; but if I’m a customer, leave it out. I don’t
              want to feel like a pest for buying something. It’d be like if on stage I
              was constantly checking my watch and saying “Ugh, I could be at home
              relaxing, but you all just HAD to hear some jokes. Thanks a lot”.
            </p>
            <h2 className="header">Foodball</h2>
            <p className="copytext">
              We moved on to a restaurant called <i>Top of the Hill</i> for dinner.
              Unbeknownst to us there was a live podcast with players and staff from the
              UNC football team taking place. We knew people in the triangle were
              passionate about sports, but Jesus. We had been under the impression that
              eating and interviewing were mutually exclusive, but evidently not in Chapel
              Hill. Sports come first.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“Hold up, babe, the Heels just tied the game!”"}
            />
            <p className="copytext">
              Honestly, interviewing about football or basketball is stupid. Athletes want
              to win. Simple as that. Nothing profound or noteworthy has ever been
              uncovered in a pre or post game interview. It’s inane questions followed by
              boilerplate answers. Here’s literally every interview ever.
            </p>
            <h2 className="header">*Pre game</h2>
            <p className="copytext">
              <b>Interviewer:</b> What do you want to do tonight?
            </p>
            <p className="copytext">
              <b>Athlete:</b> We, uh, wanna win, y’know? And like, we’re working hard to
              do that.
            </p>
            <p className="copytext">
              <b>Interviewer:</b> How are you planning to do it?
            </p>
            <p className="copytext">
              <b>Athlete:</b> Well we, uh, are gonna get the ball movin’ and try to score
              as much as possible.
            </p>
            <p className="copytext">
              Meanwhile everyone is hypnotized, hanging on every word like “Yeah, you know
              what? I hope they DO win. They’re making a lot of sense here”.
            </p>
            <h2 className="header">*Post game, after a loss</h2>
            <p className="copytext">
              <b>Interviewer:</b> So how do you feel after that loss?
            </p>
            <p className="copytext">
              <b>Athlete:</b> Well, we ... uh … we’re pretty upset about that. It’s
              disappointing. But we’ll work harder for the next game, y’know?
            </p>
            <p className="copytext">
              <b>Interviewer:</b> How are you planning to do it?
            </p>
            <p className="copytext">
              <b>Athlete:</b> Well, y’know, we’ll go back to the drawing board and work
              harder.
            </p>
            <p className="copytext">
              Everyone watching is like ‘Yeah, you know what? They WILL work harder.
              You’ll see”.
            </p>
            <h2 className="header">Make me laugh, clown</h2>
            <p className="copytext">
              It was tough to leave dinner in the middle of such a captivating interview,
              but we somehow managed to do it.
            </p>
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <p className="copytext">
              We went from <i>Top O’</i> to the <i>People’s Improv Theater</i> (or PIT)
              for a set. PIT had recently been renovated and had a nice space. It was
              clean, well-lit, and still had the smell of paint and fresh cut wood.
            </p>
            <p className="copytext">
              The energy at PIT was great. There were college students and their friends,
              couples on a night out, and people randomly stopping in off the street. They
              also had unique twists on traditional standup. That night there was a bowl
              of Trump tweets that comics were encouraged to draw from and read aloud
              during their set.
            </p>
            <p className="copytext">
              Most comics selected a tweet and riffed at the beginning or end of their
              set, but some broke it up by choosing the middle. It definitely kept things
              interesting and real. Adding improv-esque comedic aspects into standup was a
              cool exercise in staying quick on your feet.
            </p>
            <p className="copytext">
              The show ended around 11 p.m. Our next city was{" "}
              <Link to={"/Atlanta"}>Atlanta</Link>. We decided to split up the long haul
              by driving a few hours before morning. We found a Walmart halfway between
              the two cities and managed to steal a few Z’s before sunrise. When rays of
              morning light began piercing the windshield we got up, wolfed our body
              weight in pancakes at IHOP, and hit the road.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
