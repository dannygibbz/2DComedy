import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"

import image1 from "../images/Medellin/image1.png"
import image10 from "../images/Medellin/image10.png"
import image15 from "../images/Medellin/image15.png"
import image2 from "../images/Medellin/image2.png"
import image3 from "../images/Medellin/image3.png"
import image9 from "../images/Medellin/image9.png"
import image13 from "../images/Medellin/image13.png"
import image12 from "../images/Medellin/image12.png"
import image4 from "../images/Medellin/image4.png"
import image8 from "../images/Medellin/image8.png"
import image11 from "../images/Medellin/image11.png"
import image14 from "../images/Medellin/image14.png"
import image6 from "../images/Medellin/image6.png"
import image7 from "../images/Medellin/image7.png"
import image5 from "../images/Medellin/image5.png"
import MedellinPic from "../images/Medellin/MedellinPic.png"

import BackButton from "../BackButton"
export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img src={MedellinPic} width="100%" className="hideWhenBig" alt="Medellin" />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"okvqm3rzww"} />
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
              fontFamily: "Domine, sans-serif",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Medellin
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
            <h2 className="header">English standup - in South America?</h2>
            <p className="copytext">
              We didn’t go to Colombia with the express intent of doing standup - it just
              happened. The seed for the trip was actually planted two years earlier, back
              when I hadn't even stepped on stage. I was working in clinical research and
              one of the international offices was in Medellin. Staff from the Colombian
              team routinely visited the U.S. for meetings and we built a good rapport.
            </p>
            <ImageAndCaption
              imageUrl={image1}
              imageWidth={400}
              captionText={
                "“The efficacy has been clinically proven, we’re just waiting on DEA… er, FDA approval”"
              }
            />
            <p className="copytext">
              The idea for this trip was hatched when one of the guys from the Medellin
              office was visiting the states. His name was -- you’ll never guess -- Dan.
              We’re all Dan’s here. Even you can be a Dan if you try hard enough.
            </p>
            <p className="copytext">
              We were at Dave and Busters for team building when Dan (Danny from here on
              out to avoid confusion) and I decided to grab some drinks. It was a chill
              Saturday and we were off the clock. We bought a huge beer tower thinking
              everyone would want some, but we thought wrong. Everyone was being fucking
              boring, so Danny and I were stuck with a huge vat of beer to ourselves.
            </p>
            <ImageAndCaption
              imageUrl={image10}
              imageWidth={400}
              captionText={
                "“It’s technically one drink. I don’t have a problem, YOU DO!”"
              }
            />
            <p className="copytext">
              There was a moment of “Maybe we shouldn’t drink all of this. We’re outside
              of work but we should probably maintain a modicum of professional behavior”,
              but as soon as Danny and I locked eyes, that thought was replaced by “Fuck
              these pussies. If they don’t want to drink, good. More for us. Buncha
              goddamn Sober Sallies”. With a clink of glasses our friendship was born.
            </p>
            <h2 className="header">Origins</h2>
            <p className="copytext">
              Sometimes the best friendships are born of conspiratorial or mischievous
              beginnings. This instance with Danny was one in a line of similar
              friendships for me. The first happened in late 2012. I had just finished
              college and moved to China for work. My new coworkers came from all over the
              globe and had the varied personalities and accents to prove it.
            </p>
            <p className="copytext">
              One day early on, I entered the staff lounge to find a large contingent of
              the new group embroiled in a debate about cultural appropriation. Who better
              to weigh in on such an issue than me?
            </p>
            <ImageAndCaption
              imageUrl={image15}
              imageWidth={400}
              captionText={"The very portrait of racial and cultural diversity"}
            />
            <h2 className="header">What do you think?</h2>
            <p className="copytext">
              I missed 95% of the discussion but found out a sorority in the U.S. was in
              hot water over a Mexican-themed party where people wore ponchos, sombreros,
              and fake moustaches. A former sorority girl from Texas, and thus closer to
              the whole debacle, asked me to weigh in.
            </p>
            <ImageAndCaption imageUrl={image2} imageWidth={500} captionText={""} />
            <p className="copytext">
              I could have (should have) politely remarked something equivocal like “If
              something could potentially offend someone, it’s best to err on the side of
              caution and not do it”. But I had a whole year with these people ahead of
              me. We still were all getting to know one another, and I didn’t want people
              to like me under the false pretense of being nice.
            </p>
            <p className="copytext">
              I wanted to find out who did and didn’t have a sense of humor. When I was
              hit with “What do you think?” I replied “That sounds like Juan hell of a
              party” and instantly divided the room -- hard. Most sat goggle-eyed in
              stunned silence, appalled that I could be such a cretin. But a small group
              laughed out loud and I knew I just made some tight friends.
            </p>
            <h2 className="header">Dividing the room</h2>
            <p className="copytext">
              A similar watershed moment happened again two years later in Tokyo, Japan.
              It was day one of a two-week training program for my new job. I was teaching
              English to business professionals and the company had a reputation as an
              industry leader for their use of technology and sophisticated instructional
              aids. Classes cost a small fortune and students expected the best.
            </p>
            <p className="copytext">
              One of the main instructional aids at our disposal was an illustration book
              that provided drawings of everyday situations. The illustrations were meant
              to help students use target language from the lesson. For example, if the
              lesson was about giving directions, the illustration book had a
              corresponding street map drawing so the student could ask where things were.
              Sounds great - only the illustrations were fucking horrific. They looked
              like the scribblings of a lobotomized four year old with parkinson's. Every
              illustration looked like photocopy of a polaroid of hieroglyph.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“Using todays vocab, explain what’s happening here”"}
            />
            <p className="copytext">
              At the end our first day of training, everyone was in the elevator talking
              about how impressed they were with the training and the company in general.
              They were still in that artificial “I’m a go-getter, a real company man!”
              mindset that comes with being new at a job and fizzles out after a week.
              Listening to all this shit, I couldn’t help but roll my eyes internally
              (probably externally, too).
            </p>
            <p className="copytext">
              When the nauseating wave of positivity found my corner of the elevator,
              someone said “this company is great, don’t you think?” and I said “Yeah, you
              can clearly tell they’re committed to excellence. I mean just look at that
              illustration book -- clearly they spared no expense commissioning the very
              best artists”.
            </p>
            <p className="copytext">
              Most clammed up immediately, shocked that I had the gall to talk shit on day
              one. Others appeared to be stifling laughter -- as if someone would tell on
              them for laughing and they’d lose their job. Three people laughed out loud
              and we’re still good friends to this day.
            </p>
            <h2 className="header">Back to the beginning</h2>
            <p className="copytext">
              When the group at Dave and Busters split and it was just Danny and I, it was
              a familiar feeling. After taking down the beer tower, I knew he was cool.
              After taking down a second tower, we were already planning a trip to
              Colombia. It took two years for everything to line up and actually go, but
              we were going, goddammit.
            </p>
            <h2 className="header">Strangers in a strange land</h2>
            <p className="copytext">
              This was Dan C’s first time leaving the country and he was especially
              excited to be an exotic bird in a faraway land. He imagined being an
              American force of nature; a sexual magnet that women couldn’t keep their
              hands off of.
            </p>

            <p className="copytext">
              It didn't shake out that way. When we stepped out of the taxi and onto the
              crowded street, I lost him immediately. I’ve never seen anyone blend into a
              crowd that quickly. He was like a hairy chameleon. When we walked into
              shops, staff addressed him in Spanish.
            </p>
            <p className="copytext">
              Not only did Dan look the same as every other dude, he bore striking
              resemblance to figures that provoked negative feelings in the general
              populace. The first unfortunate resemblance was to a famous mathematician
              named Baldor. Apparently this dude wrote the standard algebra textbook used
              by everyone in South America - which meant whenever ANY women looked at Dan,
              they had immediate, instinctive dislike. There’s no quicker method of
              unsexification than looking at someone and immediately recalling your dry,
              wrinkly old math teacher in the sack.
            </p>
            <ImageAndCaption
              imageUrl={image9}
              imageWidth={400}
              captionText={"“I wanna lie tangent to your curves… Where ya going?!”"}
            />
            <p className="copytext">
              We figured a worse lookalike couldn’t exist, and we were wrong. Danny
              informed us that having a big beard in Colombia is associated with left-wing
              extremism. As soon as Danny said this, his friend who barely spoke English
              and had been quiet all day shouted “Ohhh ja, he look like Hipster Fidel
              Castro!” Danny’s girlfriend laughed so hard I worried we might have to call
              for an ambulance.
            </p>
            <MultiImageAndCaption
              imageUrls={[image13, image12, image4]}
              imageHeight={240}
              captionText={""}
            />
            <p className="copytext">
              I, on the other hand, drew every eyeball everywhere we went. I was an utter
              spectacle to behold. I was easily the palest person in the country and no
              one had ever seen such a fiery red beard. People walking and talking with
              their friends literally stopped dead in their tracks and stared when I
              walked by. At one point we passed a street food vendor making pancakes and
              when his eyes fell upon me, he froze like a statue and I swear to God even
              the pancake stopped flipping and hung mid-air.
            </p>
            <h2 className="header">¿How did you find it?</h2>
            <p className="copytext">
              We searched Google and Facebook for shows but weren’t having any luck --
              English comedy nights were few and far between. We either found shows that
              had happened long ago or were scheduled well after our departure. We were
              about to give up when suddenly an event popped up like a lightning strike.
              It was held once every six months and happened to coincide with our visit.
            </p>
            <p className="copytext">
              Danny, being a native Spanish speaker, called the venue to ask about the
              show and confirm the details. Although Dan and I studied spanish for six
              weeks prior to the trip, we hadn’t quite mastered the language.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“Me llamo Nacho. Yo quiero … Nachos”"}
            />
            <p className="copytext">
              Luckily the owner of the bar was from England, so communication was really
              easy.
            </p>
            <ImageAndCaption
              imageUrl={image11}
              imageWidth={400}
              captionText={
                "“Pip pip cheerio, guv’na. Utter’ly chuffed to bits. Come in and we’ll ‘ave a chinwag!”"
              }
            />
            <p className="copytext">
              We were put in contact with the host - a Venezuelan comedian that was
              surprised and excited that we found the show. He joked that we must be CIA
              -- how else would two random Americans find him and request to be on the
              show. It was a funny joke, but it couldn't be further from the truth.
            </p>
            <ImageAndCaption
              imageUrl={image14}
              imageWidth={400}
              captionText={"“To the black cells with this one”"}
            />
            <p className="copytext">
              The host said he could definitely put us on the show but he couldn’t pay us.
              He was super apologetic, explaining that the other performers on the show
              had been booked in advance and thus the budget was already spent. We really
              didn't care - a lot of shows we do are unpaid. We're just grateful for stage
              time.
            </p>
            <p className="copytext">
              Having said that, a part of us wanted to fuck with the guy a li’l bit and
              say something like “We are famous American comedians! We don’t get out of
              bed for anything less than ten grand!” but of course we didn’t. As anonymous
              mic'ers, we're happy to just get on shows and meet other comedians.
            </p>
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              All acts were performed exclusively in English and the bill was diverse.
              There were two Venezuelans, two Colombians, one Nepalese woman, and one
              American in addition to Dan and I. We were worried about our jokes getting
              lost in translation, but the audience comprehended almost everything --
              everything except what they should have understood.
            </p>
            <p className="copytext">
              All week long, Dan C had been introduced to Danny’s Colombian friends as
              Baldor, and it brought the house down every single time. It was an
              insta-laugh. Dan was sure that if nothing else, the Baldor joke would crush
              on stage. The whole week he looked forward to cashing that check at the show
              and when he finally did, it bounced. When he mentioned looking like Baldor,
              it got squat. Crickets. Everyone looked at him like “Ok … good one, I guess.
              Who the hell is that?”.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={
                " “I thought this laugh was a constant, not a variable. Where ya going??”"
              }
            />
            <p className="copytext">
              Inexplicably, the crowd represented the 0.00000001% of the population that
              didn’t know who Baldor was but aside from that, Dan did great and the
              material translated seamlessly.
            </p>
            <h2 className="header">Adios</h2>
            <p className="copytext">
              We got one final nights ‘rest’ at our hostel before flying home. Rest is a
              relative term. Our hostel was under construction, so basically it was
              perfect if you hate sleeping. Beginning at 7 a.m. every day - even on
              Saturday - a symphony of belt sanders, table saws, and bench grinders roared
              to life - ensuring we didn’t waste ANY time in bed.
            </p>
            <p className="copytext">
              Heavy bamboo stalks were dropped at random each morning, sending thunderous
              reverberations throughout the entire hostel. Nail guns filled brief
              interludes with a staccato “pop!-pop!-pop!” and screaming workers rounded
              out the chorus. Right when we thought it possible to steal a single wink,
              the cement-footed foreman clomped around on the tin roof dropping paint cans
              and bocce balls.
            </p>
            <ImageAndCaption
              imageUrl={image7}
              imageWidth={400}
              captionText={"“Alright boys, on 3”"}
            />
            <p className="copytext">
              We flew home bleary eyed and delirious but once we saw the van, a sense of
              calm washed over us. With the van parked in a secluded long-term lot at the
              Miami Marriott, we knew that rest and refuge awaited us.
            </p>
            <ImageAndCaption imageUrl={image5} imageWidth={400} captionText={""} />
            <h2 className="header">Something's not right ...</h2>
            <p className="copytext">
              When we got to the van, those good feelings were dashed immediately. The
              moment the door slid open just a crack, our nostrils were assaulted by an
              atrocious stench. Words like ‘putrid’ and ‘vomit-inducing’ fail to convey
              just how foul this odor was. After ten sleepless nights in Colombia and a
              long day traveling back, the last thing we wanted to do was tear the van
              apart.
            </p>
            <p className="copytext">
              We tried to lie to ourselves like “I don’t smell anything weird. It’s
              probably coming from outside ... I think there’s a dumpster nearby”. We
              didn’t even acknowledge it. To acknowledge it would make it real. We tossed
              our bags in the back of the van and decided to drive somewhere for food. We
              drove with the windows down to get some fresh air but the odor was like
              fire; oxygen made it stronger.
            </p>
            <p className="copytext">
              After driving around for 30 minutes it was clear not only did the smell
              exist, but it was here to stay. Both of us were still unwilling to bring it
              up - it was like playing a game of chicken. Neither wanted to be the one to
              make it real.
            </p>
            <h2 className="header">Breaking point</h2>
            <p className="copytext">
              I could take no more. I finally broke, but did so in a way where I could
              worm my way out of identifying it. “Do you smell something?” I asked. “Yeah,
              it’s fucking awful” Dan answered.
            </p>
            <p className="copytext">
              We pulled into a Walmart to finally identify what we were up against. We
              slid the side door open and as soon as we hopped in, a sickening squish
              sounded beneath our feet. The rug was fucking <i>soaked</i>. Every step
              unleashed a toxic cloud of rancid meat essence.
            </p>
            <p className="copytext">
              We don’t have a refrigerator in the van -- we use(d) a cooler and ice to
              keep food cold. We forgot to empty it before our trip - leaving lunchmeat
              and milk to rot away. During our absence, every bit of ice melted and blew
              the lid off. The noxious fluid soaked into the rug, and the powerful Miami
              sun baked it in good and deep.
            </p>
            <p className="copytext">
              Drying the rug was out of the question. Even we got it bone-dry, the odor
              was too deeply ingrained in the carpet fibers to ever come out. Our only
              course of action was to treat it like cancer and cut out the malignance.
            </p>
            <h2 className="header">A rare honor</h2>
            <p className="copytext">
              Walmart is known for having crazy clientele. People screaming, fighting, and
              walking around half naked are daily occurrences. To win the Craziest
              Customer Contest is no easy feat but on that night, we took it home.
            </p>
            <p className="copytext">
              We looked insane. Here were two sleep deprived guys with feral hair,
              bloodshot eyes, and exacto blades violently cutting strips of rug out of a
              van. It didn't help that from within the van wafted the odor of a
              decomposing walrus carcass. People probably thought were cutting out a
              carpet coffin to dispose of a corpse we just Eiffel Towered.
            </p>
            <p className="copytext">
              Our next stop was <Link to={"/NewOrleans"}>New Orleans</Link>.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
