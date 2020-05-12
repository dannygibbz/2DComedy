import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image2 from "../images/Madison/image2.gif"
import image3 from "../images/Madison/image3.gif"
import image1 from "../images/Madison/image1.png"
import image5 from "../images/Madison/image5.png"
import image6 from "../images/Madison/image6.png"
import image4 from "../images/Madison/image4.gif"
import MadisonPic from "../images/Madison/MadisonPic.png"
import DanGibbs from "../images/Madison/DanGibbs.png"
import DCrescimanno from "../images/Madison/Dcrescimanno.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={MadisonPic} width="100%" className="hideWhenBig" alt="Atlanta" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"ch90h0z14l"} />
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
              fontFamily: "Livvic, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Madison
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
            <h2 className="header">On the move</h2>
            <p className="copytext">
              We reached Madison in the middle of a packed week. We did{" "}
              <Link to="/Chicago">Chicago</Link> on Tuesday, Madison Wednesday,{" "}
              <Link to="/Detroit">Detroit</Link> on Thursday, and{" "}
              <Link to="/Burlington">Burlington</Link> on Saturday. We had very little
              time to explore - even on stage it felt like we had to sprint just to make
              it to the next city.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={
                "“My girlfriend wanted to try anal and BOY is my ass sore! Bye bye!”"
              }
            />
            <p className="copytext">
              We were excited for Madison - it kept popping up whenever we talked to other
              road comics about what cities they enjoyed. Of course the usual suspects
              popped up (New York, LA, Chicago, etc) but there was a lot of buzz around
              Madison. It’s Chris Farley’s hometown and a lot of talented comedians come
              out of there.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={
                "You can't even begin to imagine how many people have made this joke at us"
              }
            />
            <h2 className="header">Living up to the rep</h2>
            <p className="copytext">
              When we arrived in Madison we weren’t let down. The entire city was buzzing
              as it was college move-in day. People were out and about and there was live
              music in the streets. We first knew Madison was going to be cool when a
              drunk guy in Portland wouldn’t stop talking about it. Then we got there and
              realized he was right.
            </p>
            <p className="copytext">
              The Midwest as a whole is a hotbed of comedy. When you live in a place
              that’s inhospitably cold you either learn to make jokes about it or drink
              yourself to death. Just kidding about that last sentence - being a comedian
              and boozing hardcore are by no means mutually exclusive.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"Some would say it’s the norm"}
            />
            <p className="copytext">
              And just because you’re from somewhere cold doesn’t mean you’re funny
            </p>
            <ImageAndCaption
              imageUrl={image5}
              imageWidth={400}
              captionText={"We’re looking at YOU, Russia"}
            />
            <p className="copytext">
              People from Wisconsin really are a fun, awesome bunch. We’ll put it this
              way: anyone who’s willing to get drunk and hang out in the blistering cold
              with a cheese hat is crazy in the best way.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“8 degrees? When will this damn heat wave end?”"}
            />
            <h2 className="header">‘Open Mic’</h2>
            <p className="copytext">
              The show in Madison (at Comedy on State) was very much like the show in
              Minneapolis at Sisyphus Brewing. It was technically an open mic, but was
              much better than most booked shows. In both cities, anywhere from 30-60
              comedians sign up to get on these mics and only 10-20 get on. Real audiences
              come to these shows and turnouts are usually huge.
            </p>
            <p className="copytext">
              In both instances we reached out to the hosts beforehand to get spots on the
              show, otherwise we never would’ve got on. These shows usually run on a
              lottery system and it could’ve taken weeks to finally be picked. Luckily the
              hosts at both were really accomodating to traveling comics.
            </p>
            <p className="copytext">
              Comedy on State was a great venue. The showroom had awesome acoustics and
              there was a live feed of every performer piped into the bar, lobby, and even
              the bathrooms.
            </p>
            <h2 className="header">Weirdness witnessed</h2>
            <p className="copytext">
              At this point we’ve seen all manner of bizarre acts. Here are but a few
              things we’ve witnessed at open mics.
            </p>
            <p className="copytext">
              That night we added a new one to the list. A guy got up and sang the entire
              song ‘Hallelujah’ but at the chorus instead of saying ‘Hallelujah’, he sang
              ’Tony Shal-houb’. It fucking crushed so hard. Between verses, everyone knew
              what was coming and it still killed.
            </p>
            <p className="copytext">
              The guy who followed him said “What the fuck was that? How can I follow that
              freak?” but he actually did really well. I was talking to him after the show
              when the host approached him and said “Hey, man, I wasn’t trying to sail you
              down the river on that one. I’ve seen that bit obliterate crowds and I knew
              you’d be able to follow it”. It was a sign of respect.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“Thanks. Thanks so much”"}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The show was broken into two halves - each half featuring 10 comics and
              lasting about an hour. I kicked off the second half and Dan went on two
              comics later. The crowd was awesome and we both did really well.
            </p>
            <MultiImageAndCaption
              imageUrls={[DCrescimanno, DanGibbs]}
              imageWidth={600}
              captionText={""}
            />
            <p className="copytext">
              After the show, the comedians all went to a bar next door to hang out. It
              seemed like the Madison comedy scene had a really supportive, tight-knit
              culture. The city as a whole seemed like a great city to grow and get good.
            </p>
            <p className="copytext">
              If we didn’t have to drive straight to <Link to="/Detroit">Detroit</Link> we
              definitely would have hung around and got to know the comics more. We’re
              looking forward to coming back!
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
