import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image5 from "../images/Chicago/image5.png"
import image4 from "../images/Chicago/image4.gif"
import image11 from "../images/Chicago/image11.gif"
import image6 from "../images/Chicago/image6.png"
import image7 from "../images/Chicago/image7.png"
import image10 from "../images/Chicago/image10.png"
import image8 from "../images/Chicago/image8.png"
import image12 from "../images/Chicago/image12.png"
import image9 from "../images/Chicago/image9.png"
import image1 from "../images/Chicago/image1.png"
import image3 from "../images/Chicago/image3.png"
import image2 from "../images/Chicago/image2.png"
import ChicagoPic from "../images/Chicago/ChicagoPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={ChicagoPic} width="100%" className="hideWhenBig" alt="Chicago" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"mfrmn6t7zz"} />
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
              fontFamily: "IM Fell Great Primer SC, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Chicago
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
            <h2 className="header">The Second City</h2>
            <p className="copytext">
              With the show in <Link to="/Casper">Casper</Link> behind us, we returned to
              Philly for a week to recharge. Our next city was Chicago - a city with a
              great reputation not only for standup but also improv and sketch. We arrived
              on the first day of Lollapalooza - meaning it was a goddamn shit show.
              Traffic was atrocious and we absolutely could not find parking anywhere.
            </p>
            <p className="copytext">
              First on our agenda was meeting one of Dan’s friends who worked in the
              center of the city, which made traditional parking impossible. To achieve
              our goal we had to exploit the van’s look. Spotting a side alley full of
              Amazon, USPS, and various other delivery trucks unloading items, we figured
              we could act like we were one of them.
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={
                "“Hello fellow delivery man. Another day another dollar, amirite?!”"
              }
            />
            <p className="copytext">
              Multiple signs were plastered to the walls all cautioning ‘loading zone -
              all other vehicles towed at owners expense’, but we took the gamble. We came
              back 45 minutes later and there stood the van - unticketed. Nothing happened
              at all. At least if comedy doesn’t work out we’re set up for our next job.
            </p>
            <h2 className="header">Crazy insults</h2>
            <p className="copytext">
              Parking in Chicago sucks so bad. After leaving the loading/unloading zone,
              we had to drive several miles into the suburbs, park the van, and uber back
              into the city. When we finally hopped out of the van a crazy, incoherent
              homeless man started jabbering at us.
            </p>
            <p className="copytext">
              He was babbling at a frenetic pace and was utterly unintelligible. We had
              zero hope of understanding what he was saying. He had a 1,000 yard stare and
              when he spoke (screamed), his pupils bounced around his eyes like those old
              dvd screensavers.
            </p>
            <ImageAndCaption imageUrl={image4} imageWidth={400} captionText={""} />
            <p className="copytext">
              He realized, somehow, at the end of his diatribe that we hadn’t understood a
              single word. In that moment his cloudy eyes became crystal clear and he said
              to Dan with perfect enunciation “Allahu akbar lookin muhfucka’ and walked
              away.
            </p>
            <p className="copytext">
              The guy only had one remaining brain cell and he used it to roast Dan. He
              choked out one last coherent thought; one final burn. It was like the good
              guy in a movie who you think is dead, but when the villain turns him over
              he’s holding a grenade with the pin pulled out.
            </p>
            <ImageAndCaption imageUrl={image11} imageWidth={400} captionText={""} />
            <h2 className="header">Body Negativity</h2>
            <p className="copytext">
              As it was Lollapalooza, tons of young people were littered about the city --
              many wearing little more than a handkerchief. Some had fit bodies and could
              pull off the skimpy look, but the rest should’ve put a shirt on. I’m getting
              sick and tired of young people's happiness and confidence.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“God damn kids”"}
            />
            <p className="copytext">
              Young people have grown up without shame. They’ve been told how great and
              beautiful they are for their whole lives, when in reality they suck. Back in
              the day if you weren’t good enough, people told you about it. I grew up fat
              and there was never any shortage of people reminding me. See below.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={300}
              captionText={"Clearly my body was not a temple"}
            />
            <p className="copytext">
              Everyone would tease me - even adults. When I walked down streets or rode my
              bike, people driving by would shout from their vehicles “FATASS!” or
              something similar. Crossing the street in front of cars was always the worst
              - it felt like walking directly into a snipers crosshair. I’d try to cross
              quickly before they could bark out a cutting insult.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“Tub of lard dead ahead. Take the shot”"}
            />
            <p className="copytext">
              Now don’t say “Awww, you poor thing”. Criticism forced me to make changes
              and lose weight. It solidified a habit of exercise that I'll have for life
              and ultimately made me stronger. Aside from unending feelings of shame,
              inadequacy, and drinking obscene amounts of hard liquor to suppress tides of
              rage, I’m TOTALLY FINE, STOP ASKING ME ABOUT IT.
            </p>
            <p className="copytext">
              Seriously though - the point of that story was not to gain sympathy; it was
              to talk shit on people with unearned confidence and positive body image.
              When they cross in front of cars they not only walk slowly, but waddle along
              with this smug attitude of “I’m the hottest motherfucker on the planet”.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“There’s just more to love!”"}
            />
            <p className="copytext">
              Being severely overweight and still thinking you’re hot shit is completely
              delusional, yet it’s totally accepted -- probably because beauty is
              subjective (not really). If people showed that level of delusion in anything
              objective, It’d be a totally different story. Imagine someone strolling into
              a calculus class saying “My math is beautiful. 4 + 4 is 11. I don’t care if
              you like it, it’s still great. My math my business”. You’d think the person
              was insane.
            </p>
            <p className="copytext">
              It’s just a whole generation of people that refuse to face reality. I saw an
              interview with a popular female rapper that really drove this point home.
              She was criticised for her semiliterate tweets and moronic speaking voice.
              Her response was something like “Juz becuz I cain’t talk guud or read guud
              or spell guud don’t mean I’m stupit”. YES IT DOES. That’s EXACTLY what that
              means.
            </p>
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={300}
              captionText={"“No it don’t”"}
            />
            <p className="copytext">
              I digress. Let me end the rant on a funny note. When I revealed my fat
              picture to friends who didn’t know I used to be fat, I was immediately
              roasted for it. See what my artistic friends did below.
            </p>
            <ImageAndCaption imageUrl={image9} imageWidth={300} captionText={""} />
            <h2 className="header">Back to basics</h2>
            <p className="copytext">
              We did a bar mic in Chicago and it was a stark reminder of a little-known
              facet of standup: It’s extremely variable. You can run the same set to two
              different audiences and have entirely different reactions. Comedians can
              slaughter a crowd at 8 p.m. and bomb at 10 p.m. with the exact same
              material.
            </p>
            <p className="copytext">
              This shit doesn’t happen in music. When Queen played ‘We Will Rock You’,
              energy crackled through the room as everyone chanted and stomped along. But
              in comedy you sometimes get audiences that seem like they don’t even want to
              be there (e.g. every single all-comic mic).
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“Weeee arrree the championsssss!”"}
            />
            <p className="copytext">
              Our last show was in Casper and we crushed a room with 200 + people. Now at
              a comics mic in Chicago using the exact same material, we barely raised a
              pulse.
            </p>
            <h2 className="header">Hey, that’s your job!</h2>
            <p className="copytext">
              Some may say “There’s no such thing as a bad audience. Any comedian worth
              his salt can turn a room”. That’s an idealistic notion, but it’s not always
              possible. Some crowds just don’t laugh regardless of how good your material
              is. Top-level comics face this shit too.
            </p>
            <p className="copytext">
              We saw Hannibal Burress perform once to a crowd that really sucked. He was
              nailing them with his surefire bits and getting nothing. After a while he
              just said “Y’all not laughing is your own fault. This shit works. It’s
              tested”. It was hilarious to see a pro deal with something that every comic
              has gone through.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              We tried some new and old stuff, got a few laughs, and got out of there. To
              comics, we did well. To outsiders, we bombed horribly.
            </p>
            <MultiImageAndCaption
              imageUrls={[image3, image2]}
              imageHeight={180}
              captionText={""}
            />
            <p className="copytext">
              We had a busy week ahead of us. In seven days we had yet to cover{" "}
              <Link to="/Madison">Madison</Link>, <Link to="/Detroit">Detroit</Link>, and{" "}
              <Link to="/Burlington">Burlington</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
