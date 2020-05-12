import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image3 from "../images/Dallas/image3.gif"
import image9 from "../images/Dallas/image9.gif"
import image10 from "../images/Dallas/image10.png"
import image8 from "../images/Dallas/image8.png"
import image1 from "../images/Dallas/image1.png"
import image2 from "../images/Dallas/image2.png"
import image4 from "../images/Dallas/image4.png"
import image6 from "../images/Dallas/image6.png"
import image5 from "../images/Dallas/image5.png"
import image7 from "../images/Dallas/image7.png"
import DallasPic from "../images/Dallas/DallasPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={DallasPic} width="100%" className="hideWhenBig" alt="Dallas" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"uwtdxfnxd8"} />
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
            Dallas
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
            <h2 className="header">Gone with the wind</h2>
            <p className="copytext">
              We arrived in Dallas just after midnight. It took about five hours driving
              from <Link to="/Fayetteville">Fayetteville</Link>, and we were exhausted.
              All we wanted to do was pass out but the wind was incredibly strong. The van
              was getting <i>rocked</i>. It’s a tall vehicle, so wind really flows under
              and gives it some lift. Every time the van swayed, we felt it.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“Did you feel something?”"}
            />
            <p className="copytext">
              We tried to sleep, but it was impossible in the van. It began shaking so
              violently we had to grab a motel room, which was only slightly better.
            </p>
            <ImageAndCaption imageUrl={image9} imageWidth={400} captionText={""} />
            <p className="copytext">
              The next morning we went to Panera Bread to get some work done. When I went
              to buy a cup of coffee, the cashier told me transaction couldn’t be
              processed. I thought it was strange, but paid in cash and went back to my
              computer. After checking my online banking statement, I saw that a
              withdrawal had been made from an ATM in New York.
            </p>
            <p className="copytext">
              I was the victim of card fraud. I really didn’t care - my money would be
              replaced, but I felt bad for the thief; I’m so broke that he only got $40.
              The risk was definitely not worth the reward. He probably spent a lot of
              money on a card skimmer, then learned how to hack bank info and retrieve pin
              codes. He even risked felony charges and jail time with the actual theft,
              all for a paltry $40 dollars.
            </p>
            <p className="copytext">
              The poor guy. He laid out an intricate plan, but didn’t anticipate an adult
              having a net worth less than the contents of a 4th graders piggy bank.
              <i>He</i> must’ve been so embarrassed.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“Are you fucking kidding me?”"}
            />
            <p className="copytext">
              He could’ve got $60 dollars if he hadn’t checked the account balance. There
              <i>was</i> $61 dollars in my account (not bragging), but the inquiry fee
              cost him (me) $3 dollars -- bringing the available funds to $58. The poor
              sap should’ve chosen the quick $60 option off the bat. Honestly, I’m hoping
              he feels bad for me and starts depositing money into <i>my</i> account.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“Get yourself a hot meal, would’ja?”"}
            />
            <h2 className="header">Spare some change?</h2>
            <p className="copytext">
              With basically no money left and payday two days away, I needed to collect
              some loose change in the van and change it to cash. Going to Coinstar as a
              child was magical. After socking away change for months, your copper harvest
              finally yielded cold, hard cash. With a couple bucks in your pocket, you
              were flush. It was ice cream, bubble gum, and baseball cards for days.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“Barkeep! A round of Shirley Temples for the ladies”"}
            />
            <p className="copytext">
              The entire Coinstar experience was exhilarating. You’d lug a heavy sack of
              change to the machine with a smug grin of forthcoming wealth. After dumping
              the contents into the basket, the automated counter whirred to life in a
              sweet symphony of of cha-chings. Flashing lights and scrolling digits made
              you feel like a high roller at the casino. It even felt like winning a
              jackpot; in the end you’d redeem a ticket for cash.
            </p>
            <p className="copytext">
              When you’re an adult, it’s a different experience entirely. It’s
              embarrassing. You’re so broke that you’ve resorted to change. You try not to
              draw attention, but it’s impossible. You stand there, head down, staring at
              your shoes, and feel every eye in the store burning holes in your back. You
              can hear everyone thinking “Look at that broke piece of shit. Let’s kill
              him”.
            </p>
            <h2 className="header">Let’s do this</h2>
            <p className="copytext">
              The first mic we did was at a bar. The room was bisected into a bar area and
              a performance area. Acoustically, all the noise from the bar section carried
              over to the comics section, so we really had to fight for attention that
              night. The structure of this mic was 3 rounds, 8 comics per round. The
              winner of each round won a $10 bar tab. It was a cool show with a great
              host.
            </p>
            <p className="copytext">
              The next day we decided to do some sightseeing. We don’t mind doing touristy
              things when we’re out of town, because <i>we are tourists</i>. There are few
              people more annoying than the “I don’t want to do regular tourist things, I
              want to do what <i>locals</i> do”. Wow, look at you. You’re not just{" "}
              <i>any</i> traveler. I bet you’ve even been to Europe.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"*After one week* It’s actually pronounced pah-RHEE"}
            />
            <p className="copytext">
              Whenever people visited us in Philly and demanded to do ‘what locals do’, we
              wanted so badly to say “Ok, then. Get into your PJ’s and pop a seat on the
              couch -- we’re watching Netflix all weekend”.
            </p>
            <p className="copytext">
              When we tour new cities, we choose attractions based on personal
              recommendations or high Google ratings. It’s nice having a reference
              database for reviews, but if we’re being honest, not everything needs to be
              reviewed. For example - bodies of water. What’s there even to say?
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"Great Salt Lake: ★★Not salty enough."}
            />
            <p className="copytext">
              There are even prison reviews on there. Firstly, reviews are meant to steer
              people toward or away from a location, which is to say choice is involved.
              Not the case for prison (usually). Secondly, and shockingly, there were some
              decent reviews in there. We expected every review to read: 1 star - would
              NOT recommend.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={
                "Texas State Correctional Facility: ★★★★★ Soft sheets, tender lovers."
              }
            />
            <h2 className="header">Round 2</h2>
            <p className="copytext">
              The next show we did was in Fort Worth. The room was considerably larger and
              much calmer than the previous show. There was a large range of talent from
              new, to touring professionals, to local club openers. Overall the level of
              talent in Dallas/Fort Worth was high. There were a lot of good people
              putting on fun shows.
            </p>
            <MultiImageAndCaption
              imageUrls={[image5, image7]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              We typically hang with other comics after each show. It’s entertaining to
              exchange stories and get to know one another, and local comics always let us
              know about other shows. If our schedule isn’t tight, we sometimes stay a few
              extra days and hit those mics, but in this case we had to move on. Our
              schedule had us in <Link to="/Austin">Austin</Link> the next day.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
