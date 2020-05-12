import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image3 from "../images/Honolulu/image3.gif"
import image2 from "../images/Honolulu/image2.png"
import image21 from "../images/Honolulu/image21.png"
import image1 from "../images/Honolulu/image1.png"
import image20 from "../images/Honolulu/image20.png"
import image17 from "../images/Honolulu/image17.png"
import image14 from "../images/Honolulu/image14.png"
import image8 from "../images/Honolulu/image8.png"
import image6 from "../images/Honolulu/image6.gif"
import image10 from "../images/Honolulu/image10.png"
import image7 from "../images/Honolulu/image7.png"
import image18 from "../images/Honolulu/image18.png"
import image16 from "../images/Honolulu/image16.png"
import image9 from "../images/Honolulu/image9.png"
import image4 from "../images/Honolulu/image4.png"
import image12 from "../images/Honolulu/image12.png"
import image15 from "../images/Honolulu/image15.png"
import image5 from "../images/Honolulu/image5.png"
import image13 from "../images/Honolulu/image13.png"
import image11 from "../images/Honolulu/image11.png"
import image19 from "../images/Honolulu/image19.png"
import HonoluluPic from "../images/Honolulu/HonoluluPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={HonoluluPic} width="100%" className="hideWhenBig" alt="Honolulu" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"mle3n3fimd"} />
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
              color: "#EDC9AF",
              fontFamily: "Courgette, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Honolulu
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
            <h2 className="header">You got jokes, huh?</h2>
            <p className="copytext">
              After a few shows in <Link to="/LosAngeles">LA</Link> it was time to hit
              Hawaii. Hawaii was the first state we couldn’t reach by driving. Everyone
              kept asking “how are you gonna get the van to Hawaii?” and we’d take turns
              answering “We’ve gotta drive really fast”. When Dan C said it, it brought
              down the house. Whenever I said it, everyone <i>hated</i> it.
            </p>
            <p className="copytext">
              It was a reversal from younger days. I was always the kid with a sharp joke
              that would go unnoticed … until a more popular kid, realizing it was
              hilarious and no one heard it, would repeat the joke and send everyone into
              a fit of laughter.
            </p>
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <h2 className="header">Bon Voyage</h2>
            <p className="copytext">
              People are far more concerned with the van than they are with us. Whenever
              we fly somewhere, the first question we get is never “How was your flight?”
              or “What’s new?” - it’s always “WHAT’D YOU DO WITH THE VAN?”. Everyone gets
              super worried for some reason - as if it’s a glittering Lamborghini full of
              diamonds and rubies.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“We’ve struck gold, boys!”"}
            />
            <p className="copytext">
              The flight was great - the plane was an unshakable sky fortress that blasted
              through clouds and turbulence like an object that easily blasts through
              things.
            </p>
            <p className="copytext">
              Dan C is a nervous flyer, but he discovered that a bit of pre-flight
              drinking helped mitigate his anxiety. You heard it here first: alcohol helps
              you relax. Let’s keep that little secret between us. Who knows what would
              happen if word got out.
            </p>
            <MultiImageAndCaption
              imageUrls={[image21, image1, image20]}
              imageHeight={170}
              captionText={""}
            />
            <h2 className="header">Aloha</h2>
            <p className="copytext">
              We may be the first to say this, but Hawaii is beautiful. Truly. You can see
              the crystal blue water even before you land. As soon as you step off the
              plane, you’re no more than 10 minutes from a beach.
            </p>
            <p className="copytext">
              We were pressed for time on our first day. We got into Honolulu around 5 pm
              and had a show at 8. We had to zip across town to leave our stuff at the
              hotel, then dash back to the comedy club.
            </p>
            <p className="copytext">
              The first hotel was incredible. It was in an area called Ko Olina that had
              private lagoons, white sand beaches, fancy restaurants, and Cabana’s.
              Phrased another way, it was a place not at all suited for riff raff like us.
            </p>
            <ImageAndCaption
              imageUrl={image17}
              imageWidth={400}
              captionText={'"Not for riff raff"'}
            />
            <p className="copytext">
              Unfortunately we could only afford to stay one night. Under normal
              circumstances even that would’ve been impossible, but we had a friend who
              worked for the hotel and got us a deal. The very next day we were back to
              our usual dingy hovel.
            </p>
            <ImageAndCaption
              imageUrl={image14}
              imageWidth={400}
              captionText={'"Home sweet home"'}
            />
            <h2 className="header">No worries</h2>
            <p className="copytext">
              Everything was more chill in Hawaii. The pace was slow and ‘rules’ were more
              so a theoretical framework than something to be enforced. If they existed,
              no one paid attention. As an example, if you were to park in a ‘No Parking’
              zone in Philly for a fraction of a second, you’d get a ticket. If you did
              the same thing in Hawaii, it’d be no stress. Move the car when you feel like
              it.
            </p>
            <p className="copytext">
              I don’t know why I’m circling back to parking but one time in Philly I found
              my car window busted and everything inside stolen. I then parked the car in
              front of my house to grab a trash bag and clean the broken glass. I was
              inside for MAYBE one minute and by the time I came back out, some hump was
              already writing me a ticket. That would never happen in Hawaii.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“Fuck you very much”"}
            />
            <h2 className="header">The hang</h2>
            <p className="copytext">
              We said it before but we’ll say it again - hanging out with other comedians
              is one of the best parts of doing standup. We can’t explain why, but
              comedians develop a level of comfortability that takes months in any other
              relationship.
            </p>
            <p className="copytext">
              With comedians, it’d be a miracle to last a few hours before vicious barbs
              begin to fly. Comedians insult each other with impunity, and it’s so much
              fun. Anyone on the outside would interpret the digs as genuine malice, but
              it’s how comedians show affection.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“Holy shit, those guys must be besties”"}
            />
            <p className="copytext">
              We met several comics over the course of 5 days, and exchanging stories and
              finding commonalities was as fun as the shows themselves. One of the
              comedians we met had also done a US road trip, though smaller in scale. He
              and his brother made it through 20 states in a Honda Minivan before they
              were ready to kill each other.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={"“Is that the comedy club over there? I can’t quite see.”"}
            />
            <p className="copytext">
              People ask all the time “Aren’t you and Dan sick of each other?”, or say
              “You must be at each others throats”. Another comic even said "I'd bury my
              friend in a ditch in the desert if we spent that much time with together!".
              She was totally sane.
            </p>
            <ImageAndCaption imageUrl={image7} imageWidth={400} captionText={""} />
            <h2 className="header">Close Quarters</h2>
            <p className="copytext">
              It’s reasonable to assume we’d hate each other after spending so much time
              in close quarters, but the thing is this: we don’t spend any more time than
              necessary in the van. The van is basically for sleeping and transportation
              only - we rarely hang around inside. A typical day is: wake up, work at
              Panera or Starbucks until the afternoon, work out/shower at the gym, go to a
              comedy club, go to bed.
            </p>
            <p className="copytext">
              If we were confined to our 12’ x 7’ space 24 hours a day, we’d have murdered
              each other long ago. But we have our own space and solitude throughout most
              of the day, so it’s all good.
            </p>
            <MultiImageAndCaption
              imageUrls={[image18, image16]}
              imageHeight={220}
              captionText={""}
            />
            <h2 className="header">Stay a while</h2>
            <p className="copytext">
              Another awesome thing about comedians is how open they are - especially when
              it comes to hospitality. When we were looking for a new place (after a night
              at the fleapit hotel), one of the comics immediately jumped in and offered
              her place. We barely knew each other, but the comedian bond was instant.
            </p>
            <p className="copytext">
              Staying with a fellow comic was a great stroke of luck -- not only could we
              talk comedy, but we got to tour the entire island and see places we’d’ve
              never visited on our own. She even took us to a local market with food
              trucks to try the local specialties. We tried garlic shrimp, stew, and all
              manner of SPAM dishes.
            </p>
            <p className="copytext">
              There were a lot of Japanese people in Oahu, and it’s always fun to hit them
              with some Japanese language. The shocked expressions never get old. I look
              like I only speak in ‘drunken sea chantey’, so when they hear Japanese
              coming out of my face, their minds explode.
            </p>
            <p className="copytext">
              After we got our food, we went to a picnic bench to eat. There were Japanese
              people on one side, and I asked “Do you mind if we sit at this table with
              you?” in Japanese and they looked like they literally saw a leprechaun ride
              a rainbow into a pot of gold.
            </p>
            <p className="copytext">
              The first thing people say when they find out I worked in China and Japan
              and speak the languages is “You must be a spy!”. Yep, of course. No one
              would know - I’d blend right in.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={"“If only they knew I was white!”"}
            />
            <p className="copytext">
              Can you imagine how conspicuous I would be as a <i>spy in Asia</i>? I think
              rule number one in the spy handbook is ‘blend in’. I stand out in a room
              full of pale people. I’d be as subtle as a samurai warrior trying to
              infiltrate the NSA.
            </p>
            <ImageAndCaption
              imageUrl={image4}
              imageWidth={400}
              captionText={"“Sumimasen. May I habu za nucleah code-o? “"}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              We checked out the comedy scenes in various islands and were most impressed
              by the shows put on by Comedy U in Oahu. Comedy U is run by two comedians
              who have awesome shows and also offer standup classes to newcomers. We
              contacted them a few weeks in advance and they invited us out for three
              shows.
            </p>
            <MultiImageAndCaption
              imageUrls={[image12, image15]}
              imageHeight={140}
              captionText={""}
            />
            <p className="copytext">
              We had a blast. At 15 minutes a pop, each set gave us the opportunity to
              stretch and explore new material. When we started doing standup, we only had
              3 minute sets. Then 5 minutes, 7 minutes, 10 minutes, and so on. We were
              really grateful for the opportunity to push ourselves. The goal for any
              comedian is to do an hour - so whenever we have an opportunity to build
              toward that, we jump at it.
            </p>
            <MultiImageAndCaption
              imageUrls={[image5, image13]}
              imageHeight={180}
              captionText={""}
            />
            <p className="copytext">
              If you’re a comedy fan, you should definitely check out shows put on by
              Comedy U. They are in fun, lively environments with great local and
              traveling comedians. If you’re a comic looking to get some time, reach out
              to them. The guys who run it are are top notch fellas and they treat
              comedians right.
            </p>
            <MultiImageAndCaption
              imageUrls={[image11, image19]}
              imageHeight={180}
              captionText={""}
            />
            <h2 className="header">It’s been real</h2>
            <p className="copytext">
              The first three days were dedicated to shows, but the last two days were
              strictly for beach bumming. When it was time to leave, we weren’t remotely
              ready. We sat on the beach until the last minute, nearly missing our flight
              in the process. We flew back into California and prepared for our next show
              in <Link to="/SanJose">San Jose</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
