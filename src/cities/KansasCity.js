import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
// import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image4 from "../images/KansasCity/image4.png"
import image5 from "../images/KansasCity/image5.gif"
import image1 from "../images/KansasCity/image1.gif"
import image6 from "../images/KansasCity/image6.png"
import image7 from "../images/KansasCity/image7.gif"
import image9 from "../images/KansasCity/image9.gif"
import image3 from "../images/KansasCity/image3.png"
import image2 from "../images/KansasCity/image2.png"
import image8 from "../images/KansasCity/image8.gif"
import KansasCityPic from "../images/KansasCity/KansasCityPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={KansasCityPic} width="100%" className="hideWhenBig" alt="Kansas City" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"jdj204mprx"} />
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
              fontFamily: "Open Sans Condensed, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Kansas City
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
            <h2 className="header">Mizzura</h2>
            <p className="copytext">
              Blinding red and blue lights beamed through the rear view mirror the moment
              we crossed from <Link to="/DesMoines">Iowa</Link> into Missouri. For the
              first time in 6 months we were getting pulled over. We were actually pretty
              impressed with ourselves - we had driven through 36 states without so much
              as a parking ticket until that point (and we could’ve had many). Our
              despicable infraction? Doing 80 in a 70.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“Watch out for Lead Foot!”"}
            />
            <p className="copytext">
              It’s strange we were stopped for a mere 10 mph over, but stranger yet was
              the cop asking Dan to join him in his squad car to work out the fine.
              Usually after giving your license and registration, the cop fills out and
              returns with a ticket. Not in Missouri. You hang out and pal around in the
              squad car with ‘em.
            </p>
            <ImageAndCaption imageUrl={image5} imageWidth={400} captionText={""} />
            <h2 className="header">Heat Wave</h2>
            <p className="copytext">
              We got into Kansas City during a terrible heat wave - the coldest it got was
              85 degrees. The extreme temperatures made it nearly impossible to sleep in
              the van. It was seriously like trying to sleep in a sauna. We’d hydrate all
              day just so we could survive the night. Exiting the van felt like being born
              all over again.
            </p>
            <ImageAndCaption imageUrl={image1} imageWidth={400} captionText={""} />
            <p className="copytext">
              Our solution was extremely redneck. We blew fans over trays filled with ice.
            </p>
            <ImageAndCaption imageUrl={image6} imageWidth={400} captionText={""} />
            <p className="copytext">
              The above setup is vastly superior to the vans setup. Instead of a table, we
              balanced our trays precariously wherever we could find space. Instead of
              sturdy, glass trays, we bought flimsy tin-foil trays that bent constantly.
              Whenever we shifted throughout the night, water spilled everywhere. It
              looked like we booby trapped ourselves. By morning the rug was soaked and
              already beginning to smell moldy. It was a really fun week.
            </p>
            <ImageAndCaption imageUrl={image7} imageWidth={400} captionText={""} />
            <h2 className="header">Pro Show</h2>
            <p className="copytext">
              Midway through our stay we got to see Tom Segura perform at the Arvest Bank
              Theater at The Midland. He tore the roof off the place.
            </p>
            <p className="copytext">
              The biggest crowd Dan and I have performed in front of was 250-300. This
              place must’ve had 1,500 people at a minimum. We can only imagine what it’s
              like to get a laugh that big and feel the power of it.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The first mic was bucket style at a local comedy club. Some guys got 10 or
              15 minutes, but most got 5. If you’d never been there before, you got 3
              minutes. When the list came out, there were <b>45</b> comics on it. Dan and
              I were numbers 31 and 38. Even if everyone before did 3 minutes, we wouldn’t
              go up for hours. We crossed our names off the list and left.
            </p>
            <ImageAndCaption imageUrl={image9} imageWidth={400} captionText={""} />
            <p className="copytext">
              People may think we’re spoiled or ‘not embracing the grind’ but we’re simply
              making better use of our time. It’s not worth waiting four hours to do three
              minutes. It’s just not. Our time is better spent writing, shooting video
              content, and reaching out to bookers.
            </p>
            <p className="copytext">
              There’s no benefit in performing at a mic (or anywhere, really) 3+ hours
              into a show. The audience is shot. You’ll probably end up performing to two
              people - your friend, and the tired host. We used to do these shows all the
              time.
            </p>
            <p className="copytext">
              An hour to an hour and a half should be the limit on any comedy show. Any
              longer and audiences become restless. Viewers of Netflix comedy specials
              only tune in for 30 minutes on average. That says something. That means even
              when watching the very best comedians, comedy fans are still like “Meh,
              let’s move on” after a half hour. And that's from the comfort of their own
              homes. How enthused do you think they’ll be to see amateur material 3{" "}
              <b>hours</b> into a show from the relative discomfort of a club?
            </p>
            <h2 className="header">Improv</h2>
            <p className="copytext">
              There was an improv mic the following day. We had seen pros doing improv
              standup in a series called ‘Standup Without a Net’ and wanted to give it a
              try ourselves. As you probably guessed, it’s much harder than traditional
              standup. We wanted to challenge ourselves.
            </p>
            <p className="copytext">
              For anyone unsure of what an improv mic entails, it works like this: a bowl
              is filled with random words or topics written on slips of paper. Every
              comedian picks three topics during their 5-minute set. Whatever the topic
              is, the comedian has to improvise jokes on the spot. No written or old
              material can be used.
            </p>
            <h2 className="header">Report Cards</h2>
            <p className="copytext">
              <b>Dan G:</b> I did NOT do well. If my set were a pop quiz in school, I’d’ve
              got a 33%. I could only make 1 of the 3 topics funny. My first topic was{" "}
              <i>cottage cheese</i>. I talked about how stupid it is that people use
              cottage cheese to describe cellulite, like "look at those cottage cheese
              legs". I made some jokes questioning how and why cheese ever became the
              object to compare people to and questioned what other cheeses might make
              good descriptions. It got a few chuckles - which is a nice way of saying it
              failed.
            </p>
            <p className="copytext">
              The second topic I got was <i>dead celebrities</i>. I could’ve gone with
              some cheap Michael Jackson jokes but decided instead to go for the ‘higher
              ground’, and talk about how this year has been relatively good in terms of
              celebrity deaths as there haven't been many. I died upon that ‘high’ hill. I
              got no laughs.
            </p>
            <p className="copytext">
              The third topic was <i>homeless people</i>. This one finally worked. I made
              jokes about donating bluetooth headsets to the homeless because it would
              make them look less insane when talking to themselves. It was the only topic
              that worked.
            </p>
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <p className="copytext">
              <b>Dan C:</b> If I had to grade myself. I’d give myself a firm 15%, and then
              call my parents and tell them that little Danny probably isn’t going to
              college. I started strong with some decent crowdwork that worked off the
              weirdness of the previous comics (one stated that he wanted to fuck a dog,
              and the audience cheered). But then I started drawing topics.
            </p>
            <p className="copytext">
              First topic: <i>Awkward Sexual Encounter</i>
            </p>
            <p className="copytext">
              I relayed a story about trying to get laid in my girlfriend’s car in a park
              after hours. And when I took my pants off, a police light shot through the
              window and illuminated my ass in full glory. Every cop has a dashcam, and
              I’m positive that in some police vault there is a video of my 17-year old
              white ass. I did not get laid that night.
            </p>
            <p className="copytext">
              Second topic: <i>Drugs</i>
            </p>
            <p className="copytext">
              I rarely do drugs. But I riffed on using Adderal once when I worked in
              finance, and then instead of getting any work done, and decided to run the
              Brooklyn Bridge and talk to strangers for 4 hours.
            </p>
            <p className="copytext">
              Third Topic: <i>Deer Crossing</i>
            </p>
            <p className="copytext">
              I talked about driving through Wyoming and hitting the world’s largest bird,
              leaving a huge dent in the van. The van, as our 6 readers will know, already
              looks terrifying, it being an unmarked white van and all. But the red blood
              smeared across the front adds a new layer to our friendly van vibe.
            </p>
            <p className="copytext">None of these were particularly funny.</p>
            <ImageAndCaption imageUrl={image2} imageWidth={400} captionText={""} />
            <h2 className="header">Grounded</h2>
            <p className="copytext">
              Our report cards were lousy. We could FORGET about a congratulatory trip to
              Dairy Queen.
            </p>
            <ImageAndCaption imageUrl={image8} imageWidth={400} captionText={""} />
            <p className="copytext">
              Although we ate it, the improv mic was a good experience. It was like doing
              a new workout that leaves you sore in places you didn’t know could get sore.
              It was a painful yet important reminder that an improv muscle lurks
              somewhere, and it demands to be strengthened.
            </p>
            <p className="copytext">
              After having our fun in Kansas City, we headed East for{" "}
              <Link to="/StLouis">St. Louis</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
