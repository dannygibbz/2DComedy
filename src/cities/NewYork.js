import React from "react"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import { Link } from "react-router-dom"
// images
import battingCages from "../images/newyork/battingCages.png"
import clown from "../images/newyork/clown.png"
import comicScreaming from "../images/newyork/comicScreaming.png"
import dumpsterFire from "../images/newyork/dumpsterFire.png"
import germansWalking from "../images/newyork/germansWalking.png"
import hangingPlane from "../images/newyork/hangingPlane.png"
import newspaperFace from "../images/newyork/newspaperFace.png"
import skeletonWaiting from "../images/newyork/skeletonWaiting.png"
import streetTrash from "../images/newyork/streetTrash.png"
import dark from "../images/newyork/dark.gif"
import NewYorkPic from "../images/newyork/NewYorkPic.png"

import NewsletterEmail from "../NewsletterEmail"
import ImageAndCaption from "../ImageAndCaption.js"
// import MultiImageAndCaption from "../MultiImageAndCaption.js"
import BackButton from "../BackButton.js"
export default function NewYork(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={NewYorkPic} width="100%" className="hideWhenBig" alt="New York" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"fgw78zjdlo"} />
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
              fontFamily: "Lobster",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            New York
          </h1>
        </div>
        <div style={{ marginRight: "10%", marginLeft: "10%", marginTop: "60px" }}>
          <div
            style={{
              margin: "auto",
              maxWidth: "600px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <BackButton />
            <h2 className="header">Bright lights, big city</h2>
            <p className="copytext">
              After <Link to="/Asheville">Asheville</Link> we took two weeks to recharge
              in Philly. When that got stale we packed up the van and headed due North
              with sights set on New York City. As we pulled up outside Dan's sisters
              apartment in Brooklyn, we noticed a sign saying “no parking between 8 a.m.
              and 11 a.m. for street cleaning”. We found it strange, but figured there
              must be a sensible workaround for traffic. There wasn’t. Everyone moved
              their cars to the other side of the road, double or triple parking to create
              a masterpiece of gridlock. I guess it’s worth it, the streets sure do look
              great.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
              }}
            >
              <ImageAndCaption
                imageUrl={streetTrash}
                imageHeight={200}
                captionText={'"Before"'}
              />

              <ImageAndCaption
                imageUrl={streetTrash}
                imageHeight={200}
                captionText={'"After"'}
              />
            </div>

            <p className="copytext">
              I’m not trying to say Philly is cleaner than New York, not at all. We lived
              on Girard avenue in Philly - which was a swirling vortex of trash. Every
              time a breeze rolled through, it was like that windy movie scene where
              someone gets nailed in the face with a newspaper.
            </p>
            <ImageAndCaption
              imageUrl={newspaperFace}
              imageWidth={400}
              captionText={'"The DOW is down again"'}
            />
            <h2 className="header">Open Mic 101</h2>
            <p className="copytext">
              The first mic we hit was at a comedy club. There was a $5 cover and one
              drink minimum, which equates to paying $10 for stage time. Our non-comic
              friends are always surprised to hear that comics occasionally have to pay.
              They ask “Is there at least a good crowd?” Sometimes yes, sometimes no. Open
              mic seems to be a world unknown to most people, so we want to take a minute
              here to briefly explain what it’s like.
            </p>
            <ImageAndCaption
              imageUrl={hangingPlane}
              imageWidth={400}
              captionText={'"How interesting. Please tell me more"'}
            />
            <p className="copytext">
              In broad terms, open mic is a room of comics waiting for their turn to go
              up. Aspiring comedians perform in bars and clubs almost exclusively to other
              comedians (if any audience at all). Attendees are there primarily to
              practice material, not necessarily to laugh and enjoy as if it were a
              headliners show. It’s like practicing baseball at the batting cages. While
              waiting for your turn, you’re focused on your own swing more so than
              cheering batters on.
            </p>
            <ImageAndCaption
              imageUrl={battingCages}
              imageWidth={400}
              captionText={'"Your balls look great"'}
            />
            <p className="copytext">
              Sets typically range three to five minutes, and skill levels range from
              absolute novice to professional. On any given night you see people crush a
              room, bomb, work through new jokes, or ramble about their day. You may see
              musical comics, prop comics, and a smattering of crazy people who just want
              to speak into a microphone. Sometimes it’s great, sometimes it’s terrible.
              The point is, unpredictability causes relatively low non-comic attendance.
            </p>
            <p className="copytext">
              At professional shows, everyone pays good money and knows what to expect --
              a few openers and a headliner. The openers are all going to be good, at a
              minimum, if not great. The Headliner will usually tear the place down. All
              said and done, the show is an hour and a half of laughs. Open mic, on the
              other hand, has no headliner, no guaranteed laughs, and can run for three or
              more hours.
            </p>
            <ImageAndCaption
              imageUrl={skeletonWaiting}
              imageWidth={400}
              captionText={'"Is it over already??"'}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              This first mic was all comics, which is commonplace for New York as mics
              happen at all hours of the day and night. No one in their right mind would
              rush to mics at odd hours if they weren’t comics themselves. All-comic mics
              are great for determining what jokes will work in real shows. A small
              chuckle from a room of exhausted comics typically means a big laugh at an
              actual show.
            </p>

            <p className="copytext">
              Dan C went up third, I went up much later. This is par for the course when
              names are drawn at random. There’s some kind of universal cosmic balance
              that when one of us is selected in the first 5, the other is guaranteed to
              be selected in the last 5. We got chuckles on a few new jokes and connected
              with local comics after the show, so it was a success. We even met up with
              some of the comics from this show at other mics later in the week.
            </p>

            <p className="copytext">
              We only had fifteen minutes before the next show, so we zipped over to
              Dominos across the street and asked for the fastest item. About five minutes
              later we were handed a steaming cardboard box of garlic bread. With no
              dining room, we went outside to eat in the cold. We were a pitiful sight --
              two grown men huddled over a greasy box, ravenously devouring paper mâché
              that was both our dinner <i>and</i> heat source. When passersby made eye
              contact they quickly shifted their gaze or said “sorry, no change”. We
              should’ve lit the trash can next to us on fire to complete the picture.
            </p>
            <ImageAndCaption
              imageUrl={dumpsterFire}
              imageWidth={400}
              captionText={'"Things are going great mom!"'}
            />
            <p className="copytext">
              We ran back across the street and headed into the mic. Now we were just the
              weird, garlicky-smelling comics from Philly. It worked out though. Everyone
              at the next mic was strange. One guy talked about how he was raped in
              prison, another talked about how he farted on a grandmas face in the subway.
              A lot of the jokes were bad, and the comics pulled that shitty move where
              they scold the audience for ‘not getting it’. Challenging the audience can
              be really funny when done correctly, but this was just uncomfortable. We
              didn’t hang around after that show.
            </p>
            <ImageAndCaption
              imageUrl={comicScreaming}
              imageWidth={400}
              captionText={'"C’mon, I’m givin’ you GOLD!"'}
            />
            <h2 className="header">The real deal</h2>
            <p className="copytext">
              After doing a few mics the following day we decided to catch a show at the
              Comedy Cellar. We put our names on the standby ticket list and walked around
              the block a few times. We noticed a guy barking for another comedy club and
              went over to chat with him. We had a bunch of questions but it turns out he
              wasn’t even a comic. Barking was just his job.
            </p>
            <ImageAndCaption
              imageUrl={clown}
              imageWidth={400}
              captionText={
                <div>
                  “Oh, you just <i>assume</i>, I'm a clown?”
                </div>
              }
            />
            <p className="copytext">
              We managed to get tickets at the cellar and the show was amazing. After
              countless open mics, it was refreshing to see pro’s in action. We thoroughly
              enjoyed the sets, but we didn’t enjoy the constant echo of chatter from the
              people sitting next to us.
            </p>
            <p className="copytext">
              There were two Germans at our table. One of them spoke English, the other
              did not. So for the entire show we heard the comic deliver a joke, followed
              shortly thereafter by a German translation. Nothing says “funny” better than
              taking a joke, removing the cultural context, and translating it as fast as
              possible. Leave it to the Germans to engineer the most efficient method for
              humor extraction. They're just a barrel o’ laughs.
            </p>
            <ImageAndCaption
              imageUrl={germansWalking}
              imageWidth={400}
              captionText={'"Did you hear ze one about ze aborted baby with AIDS?"'}
            />
            <p className="copytext">
              What the hell were they thinking? Selecting a language comprehension
              activity without knowing what words are is like entering a math olympiad
              without knowing what numbers are. Maybe after the show they watched a
              book-on-tape in Chinese Braille.
            </p>
            <p className="copytext">
              They probably wanted to show that they’re hip. Germans have been working
              diligently to rebrand themselves. They were tired of the stereotypical
              global perception that they are serious, humorless, and brooding people, so
              they released a show on Netflix and called it … <b>Dark</b>. A dude hangs
              himself literally in the very first scene of the show. I wonder if in
              Germany it’s broadcast with a laugh track.
            </p>
            <ImageAndCaption
              imageUrl={dark}
              imageWidth={500}
              captionText={"“Don’t miss Germany's #1 New Comedy this Fall!!”"}
            />
            <p className="copytext">
              After New York we went to <Link to={"/Providence"}>Providence</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
