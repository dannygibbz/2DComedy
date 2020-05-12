import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image3 from "../images/Anchorage/image3.png"
import image11 from "../images/Anchorage/image11.png"
import image1 from "../images/Anchorage/image1.png"
import image9 from "../images/Anchorage/image9.png"
import image7 from "../images/Anchorage/image7.png"
import image8 from "../images/Anchorage/image8.png"
import image13 from "../images/Anchorage/image13.png"
import image5 from "../images/Anchorage/image5.png"
import image15 from "../images/Anchorage/image15.png"
import image2 from "../images/Anchorage/image2.png"
import image12 from "../images/Anchorage/image12.png"
import image17 from "../images/Anchorage/image17.png"
import image10 from "../images/Anchorage/image10.png"
import image18 from "../images/Anchorage/image18.png"
import image6 from "../images/Anchorage/image6.png"
import image14 from "../images/Anchorage/image14.png"
import image4 from "../images/Anchorage/image4.png"
import image16 from "../images/Anchorage/image16.png"
import AnchoragePic from "../images/Anchorage/AnchoragePic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={AnchoragePic} width="100%" className="hideWhenBig" alt="Anchorage" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"3lazhfcs0y"} />
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
              fontFamily: "'Dancing Script', sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Anchorage
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
            <h2 className="header">The last frontier</h2>
            <p className="copytext">
              Alaska: Land of moose, bear, and mountains. Everyone expects eskimo or dog
              sledding jokes, but those are corny. We are ARTISTS. Dad humor and puns are
              beneath us.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“This joke always sleighs”"}
            />
            <h2 className="header">Day drinkin’?</h2>
            <p className="copytext">
              We left <Link to="/Seattle">Seattle</Link> at 8:30PM, and the sun was still
              blazing when we arrived in Anchorage at 11:30 p.m. It’s only dark for about
              two hours a day during the summer, and it’s incredibly disorienting.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={"“Who’s tired?”"}
            />
            <p className="copytext">
              There’s an old saying “the crazies come out at night”, but when night time
              is light time and you actually <i>see</i> all the craziness, you truly begin
              to appreciate how accurate that statement is.
            </p>
            <p className="copytext">
              Around 12:30 a.m. we were walking around our hotel when an overweight native
              man came prancing out of an alley wearing nothing but lacy underwear. He
              gummed a lollipop suggestively and raised an eyebrow as if to say “want a
              piece of this?”. We quickly darted across the street, but of course the guy
              could see our every move. It’s impossible to slink away when it’s high noon.
              It was at that <i>exact</i> moment we realized how much debauchery
              needs darkness.
            </p>
            <p className="copytext">
              There’s just something undignified about being wasted in the sunlight.
              Ideally, it’s black out when you’re blackout. When we saw dudes stumbling
              around that first night, our gut reaction was “Damn, how’d they get{" "}
              <i>trashed</i> so early?” but then we’d remember it was nearly 2 a.m. It’s
              even worse for comedians. If we bomb at a show, we can’t just disappear into
              the night. We can’t even walk off into the sunset. We walk straight into the
              spotlight.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={"“Hey, look! It’s that guy who SUCKED!”"}
            />
            <h2 className="header">Short on time</h2>
            <p className="copytext">
              The total duration of our trip was 48 hours, so we had to pack a lot of
              activities into a little time. The drive would’ve taken 43 hours each way,
              so we of course said “Nuh thank you” and bought plane tickets instead. We
              flew in Thursday night and left Saturday night.
            </p>
            <p className="copytext">
              We awoke on Friday the same way we went to sleep: bathed in sunlight. After
              the previous nights weirdness we were ready to see things in a NEW LIGHT. We
              first hit some local landmarks to get a feel for the history.
            </p>
            <MultiImageAndCaption
              imageUrls={[image9, image7]}
              imageHeight={280}
              captionText={"“Yep, Alaska’s been here a while”"}
            />
            <p className="copytext">
              We then moved on to a farmers market to try out the local cuisine.
            </p>
            <MultiImageAndCaption
              imageUrls={[image8, image13, image5]}
              imageHeight={180}
              captionText={""}
            />
            <p className="copytext">
              After eating, we ubered out of town to actually get a look at nature. Our
              Uber driver’s energy was one atom above comatose. It was as if he himself
              had just awoken from winter hibernation.
            </p>
            <p className="copytext">
              All of his local ‘fun facts’ were depressing. When we asked about hiking
              trails, he warned “There are homeless camps in the mountains and a lot of
              murders happen out there”. When we asked about hiking and biking, he said
              “the homeless people steal bikes and stockpile them. Maybe 300 or more. I
              don’t even know what they do with them”. We were really excited.
            </p>
            <h2 className="header">The Great Outdoors</h2>
            <p className="copytext">
              Alaska’s natural beauty <i>is</i> stunning. We went to the Potter Marsh Bird
              Sanctuary and saw grand mountain views and closeups of wildlife.
            </p>
            <MultiImageAndCaption
              imageUrls={[image2, image15]}
              imageHeight={280}
              captionText={""}
            />
            <p className="copytext">
              A nice middle aged couple started chatting us up on the boardwalk. They were
              super friendly and knowledgeable about Alaskan wildlife. They pointed out
              moose tracks, showed us where bears roam, and named just about every bird in
              the state. And then they began to descend into weirdness.
            </p>
            <p className="copytext">
              The husband would be telling a story and all of a sudden stop, jerk
              binoculars to his face, and shout “Babe, look! It’s a (insert bird name)!!”.
            </p>
            <ImageAndCaption
              imageUrl={image12}
              imageWidth={400}
              captionText={"“Wow! Two Blueball Warblers!”"}
            />
            <p className="copytext">
              The guy would also hock huge loogies in the middle of stories. One was so
              powerful he gripped the railing, leaned back, and lunged forward to spit it
              out (with quite an impressive arc). He then dusted himself off and strolled
              back over, casually farting with each step. We’re curious at what age we’ll
              begin doing old guy shit like that.
            </p>
            <p className="copytext">
              At a certain point, behaviors better define mens age than numbers. Saying
              “He’s in his 70’s” is vague. But saying “He keeps a bowl of butterscotch
              hard candies on the coffee table” is as precise as carbon dating. So, next
              time someone asks about age, answer with behaviors instead of numbers.
            </p>
            <ImageAndCaption
              imageUrl={image17}
              imageWidth={400}
              captionText={
                <div>
                  <b>Age</b>: Socks and sandals years old
                </div>
              }
            />
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={
                <div>
                  <b>Age</b>: Spouting racial slurs willy nilly years old
                </div>
              }
            />
            <p className="copytext">And last, but not least.</p>
            <ImageAndCaption
              imageUrl={image18}
              imageWidth={400}
              captionText={
                <div>
                  <b>Age</b>: Permanently naked in the locker room years old
                </div>
              }
            />
            <h2 className="header">Animal Lovers</h2>
            <p className="copytext">
              People had immense affection for animals and the outdoors in Alaska … but
              they seemed to love <i>dead</i> animals. We mentioned going whale watching
              and someone excitedly yelled “Oh! I heard one washed up on the beach in
              Juneau!”. They yearned with all their being to journey 850 miles for a
              rotten carcass.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“It’s …*sniffs*    it’s beautiful *sobs*”"}
            />
            <p className="copytext">
              You may think we’re joking about joy in seeing animal remains, but we’re
              not. The couple we met earlier wouldn’t stop talking about “calf kills”
              (bears killing young moose). Apparently, these are recorded events and if
              you witness one, it’s like winning the lottery. While telling the stories,
              they could scarcely contain their excitement. Their enthusiasm was bubbling
              over so vigorously we thought they were becoming aroused.
            </p>
            <p className="copytext">
              They even escorted us to the end of the boardwalk where the remains of a
              moose lay. With the pride of a child showing off a new bike, the guy pointed
              and beamed “See there? That was a moose. It got killed earlier in winter”.
              All that remained were clumps of hair with dirty bones strewn about.
            </p>
            <p className="copytext">
              The guy continued “We come often to check it out. Even in the winter when it
              was just 10 degrees we’d see it change. We even saw a hawk fly away with
              part of a limb once!”. For us, ‘watching the gradual decomposition of a
              moose’ is last on our ideas for romantic dates,  but for this couple it was
              the height of marital bliss.
            </p>
            <ImageAndCaption
              imageUrl={image14}
              imageWidth={450}
              captionText={"“I’m so HORNY. Take me now, babe”"}
            />

            <h2 className="header">The comedy scene</h2>
            <p className="copytext">
              The Anchorage scene was small and tight. Then again, the comedy world in
              general is smaller than you'd think. We had just done shows in Portland and
              Seattle, and some of those comics already knew the Anchorage comics. It’s
              always awesome to have a warm welcome because everyone's a friend of a
              friend.
            </p>
            <p className="copytext">
              In terms of shows, they have weekly and monthly mics/showcases in Anchorage
              and the audiences vary by season. During winter, the locals come to all of
              the shows. During summer, the locals stay home to avoid all the tourists and
              the tourists go to all the shows.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The show was on Friday night at the Hard Rock Cafe. The audience was fun - a
              lot of tourists pop in and fill the place up during summer. There were 3
              Matt’s, 2 Dan’s, and one Kass on the show. We now book shows exclusively
              based on the repetition of performers names.
            </p>
            <MultiImageAndCaption
              imageUrls={[image4, image16]}
              imageHeight={200}
              captionText={""}
            />
            <p className="copytext">
              We and the Matt’s did 15 minutes apiece, the host (Matt) and Kass knocked
              out 5 apiece. We really enjoyed sharing the stage and spending time with the
              Alaskan comics before/after the show. As always we were thankful for the
              hospitality and being treated so well by our local hosts.
            </p>
            <h2 className="header">Until next time</h2>
            <p className="copytext">
              Coming into Alaska, the plane was packed. Going out of Alaska, the plane was
              empty. The math simply didn’t add up. New arrivals were either starting
              fresh lives off the grid or getting killed by bike hoarding murderers in the
              woods.
            </p>
            <p className="copytext">
              Our flight departed at 12:40 a.m. Although there were enough empty seats for
              every passenger to have their own row to themselves, I was lucky enough to
              sit next to a guy who smelled like a medley of stale budweiser and ashtray.
              I excused myself to ‘use the restroom’ before takeoff and never returned to
              that seat.
            </p>
            <p className="copytext">
              We got back to Seattle around 5 a.m. and picked up the van from long-term
              parking. After catching a few winks, we fueled up at IHOP and hit the road
              for <Link to="/Missoula">Missoula, Montana</Link> - where we did our first
              two-man show.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
