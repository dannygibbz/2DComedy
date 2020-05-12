import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image3 from "../images/Minneapolis/image3.gif"
import image8 from "../images/Minneapolis/image8.gif"
import image2 from "../images/Minneapolis/image2.png"
import image5 from "../images/Minneapolis/image5.png"
import image9 from "../images/Minneapolis/image9.png"
import image4 from "../images/Minneapolis/image4.png"
import image6 from "../images/Minneapolis/image6.png"
import image7 from "../images/Minneapolis/image7.png"
import image1 from "../images/Minneapolis/image1.png"
import MinnesotaPic from "../images/Minneapolis/MinnesotaPic.png"
import MinneapolisPic from "../images/Minneapolis/MinneapolisPic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img
          src={MinneapolisPic}
          width="100%"
          className="hideWhenBig"
          alt="Minneapolis"
        />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"aksifb3nym"} />
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
              fontFamily: "Righteous, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Minneapolis
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
            <h2 className="header">Buh-bye</h2>
            <p className="copytext">
              After witnessing bingo at a college bar in <Link to="/Fargo">Fargo</Link>,
              we decided to get the hell outta town before dying of boredom. Fargo is a
              fine place - the cost of living is cheap, the crime is low, and the people
              are friendly, but it just didn’t get our blood pumping. On top of that,
              there wasn’t a hell of a lot going on comedy wise.
            </p>
            <ImageAndCaption imageUrl={image3} imageWidth={400} captionText={""} />
            <p className="copytext">
              We heard Minneapolis had a lot of places to get stage time, so we hopped in
              the van and knocked out the 3.5 hour drive.
            </p>
            <h2 className="header">No hard feelings</h2>
            <p className="copytext">
              We were worried about how we’d be received in Minnesota. After the Eagles
              beat the Vikings in the NFC Championship last year, just about every
              Minnesotan went home and trashed Philly on the news.
            </p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img src={MinnesotaPic} width={600} alt="Article Philly/Minneapolis" />
            </div>
            <p className="copytext">
              Stories began flooding in about how horrible they were treated by Eagles
              fans. Besides facing non stop verbal harassment, Minnesota fans were
              physically assaulted and had full beer cans thrown at them - which was
              really uncharacteristic for Philly fans as they almost <i>never</i> waste
              beer.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"Smash ‘em up!"}
            />
            <p className="copytext">
              Their complaints were well founded. Philly can be rough. Vikings fans found
              out firsthand that it’s not the City of Brotherly Love but the City of
              Brotherly <i>Shove</i>. It’s a reputation that precedes us on the road. In
              Portland a comic remarked “You guys can’t be from Philly. You haven’t
              started any fights or called dudes gay for eating pussy”.
            </p>
            <p className="copytext">
              In defense of Philly, Minnesotans decorated the Rocky statue with Vikings
              gear. That doesn't justify violence but they knew it would stir the hive.
              Watching them drape gear on Rocky was like watching someone hand feed steak
              to a pet tiger - you hope they don’t get mauled but you’re not surprised if
              it happens.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={
                "“You mean to tell me that wild, 800 pound carnivorous killing machine attacked?!”"
              }
            />
            <p className="copytext">
              Luckily there was no lingering animosity - probably because the comics
              weren’t even aware of the game. <i>Most</i> comedians couldn't care less
              about sports. They enjoy sports as much as vampires enjoy sunlight.
            </p>
            <h2 className="header">The city</h2>
            <p className="copytext">
              Minneapolis is an interesting city. It’s full of Scandinavians and Somalis,
              aka vikings and pirates. We’re not sure how or why a frozen, landlocked
              North American city became the chosen land for European and African
              seafaring plunderers, but it works.
            </p>
            <p className="copytext">
              We were happy to discover the rumors were true - Minneapolis had a great
              comedy scene. It was full of killer comics and ample venues to do spots.
               Every mic or showcase was packed to the rafters with comedians - not only
              locals but traveling comics too.
            </p>
            <p className="copytext">
              It was great connecting with so many comics. It was in South Dakota that we
              first learned how strongly interconnected the comedy scenes are in the
              Midwest. We saw it firsthand in Minneapolis -- everyone knew everyone.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The first show was at a bar and was by far the loudest mic we’ve ever done.
              The place was packed and the people were rowdy. There weren’t any hecklers;
              many simply didn’t know a comedy show was happening. Regular bar patrons
              (folks not there for comedy specifically) would hear noise coming from the
              corner of the room and try to talk over it. Every single comic that went up
              had to battle to be heard.
            </p>
            <MultiImageAndCaption
              imageUrls={[image5, image9]}
              imageHeight={180}
              captionText={""}
            />
            <p className="copytext">
              The second show was at a brewery with an amazing comedy room. A lot of
              breweries put on standup shows in makeshift space -- meaning a tiny stage in
              a corner with a portion of the room curtained off.
            </p>
            <p className="copytext">
              This brewery, on the other hand, had half its total space walled off and
              dedicated solely to comedy. It looked and felt like a setup you’d see at a
              full-time comedy club.
            </p>
            <ImageAndCaption imageUrl={image4} imageWidth={400} captionText={""} />
            <p className="copytext">
              The show was great. Most of the comedians on the show were experienced and
              crushed … but there were a few newbies who didn't fare so well. One guy in
              particular really got put through the wringer.
            </p>
            <p className="copytext">
              The dude had nervous energy on stage and became visibly rattled when his
              jokes missed the mark. He began stumbling through setups, botching
              punchlines, and getting progressively more uneasy as the set went on. He got
              off stage early and learned the hard way that you’re not supposed to leave
              the stage unattended.
            </p>
            <p className="copytext">
              The host, unprepared to return so quickly, threw his drink down and rushed
              up to the stage. He got to the mic and with a scowl said “What the hell was
              that?” to audience laughter. He then cupped his hand over his eyes and
              scanned the audience to find the comic who ditched early. When he spotted
              the guy, he pointed and commanded “YOU! Get back up here”.
            </p>
            <ImageAndCaption imageUrl={image6} imageWidth={400} captionText={"Busted"} />
            <p className="copytext">
              Through giggles and titters the comic trudged back to the stage. He looked
              like a man being marched to the gallows. The host said “Take the mic. Thank
              the audience for their time. And say goodnight!”. After doing as he was
              told, the comic began to walk away.
            </p>

            <p className="copytext">
              Before he could make it off stage, the host hollered “Where are you going?!”
              and the audience roared with laughter. The comic dragged himself back to the
              mic looking like a beaten dog. The host said “Shake my hand, and then leave
              the stage”. He did and slunk back to his seat.
            </p>
            <p className="copytext">
              Everyone in the audience was cracking up but we couldn’t help but cringe on
              the inside thinking about how embarrassing that would’ve been. We didn’t see
              the guy after the show but if we had, we’d’ve told him to keep his chin up.
              This shit happens. Hell, even Tom Segura talked on his podcast about bombing
              a week after filming a Netflix special.
            </p>
            <p className="copytext">
              Dan and I went midway through the show and did great. It was an awesome room
              and a fun audience. As we finished, we made sure to stay on the stage and
              shake hands with the host before leaving.
            </p>
            <MultiImageAndCaption
              imageUrls={[image7, image1]}
              imageHeight={280}
              captionText={""}
            />
            <h2 className="header">Thank you, next</h2>
            <p className="copytext">
              We really enjoyed Minneapolis but as is always the case (until we reach all
              50 states), we had to move on to the next city. The following day we began
              driving South for <Link to="/DesMoines">Des Moines</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
