import React from "react"
import { Link } from "react-router-dom"
import SkinnyHeader from "../Headers/SkinnyHeader"
import WistiaEmbed from "../WistiaEmbed"
import ImageAndCaption from "../ImageAndCaption.js"
import MultiImageAndCaption from "../MultiImageAndCaption.js"
import NewsletterEmail from "../NewsletterEmail"
import BackButton from "../BackButton"
import image4 from "../images/Fayetteville/image4.gif"
import image5 from "../images/Fayetteville/image5.png"
import image7 from "../images/Fayetteville/image7.png"
import image2 from "../images/Fayetteville/image2.png"
import image6 from "../images/Fayetteville/image6.png"
import image8 from "../images/Fayetteville/image8.png"
import image3 from "../images/Fayetteville/image3.png"
import image1 from "../images/Fayetteville/image1.png"
import image9 from "../images/Fayetteville/image9.png"
import FayettevillePic from "../images/Fayetteville/FayettevillePic.png"

export default function ThisCity(props) {
  return (
    <div>
      <SkinnyHeader />
      <div style={{ position: "relative" }}>
        <img
          src={FayettevillePic}
          width="100%"
          className="hideWhenBig"
          alt="Fayetteville"
        />
        <div className="hideWhenSmall">
          <WistiaEmbed hashedId={"jwz78f15ey"} />
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
              fontFamily: "bungee, cursive",
              fontSize: "9vw",
              textAlign: "center",
            }}
          >
            Fayetteville
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
            <h2 className="header">Primetime</h2>
            <p className="copytext">
              Leaving <Link to="/Tulsa">Tulsa</Link>, we were excited for Fayetteville. We
              primarily do open mics and showcases, but this show got our blood pumping
              because it was a real gig. Along with two Fayetteville-based comics, we were
              opening for a headliner out of Des Moines. Real gigs are the light at the
              end of the tunnel, and the journey to get there is a long slog through a
              shit tunnel.
            </p>
            <ImageAndCaption imageUrl={image4} imageWidth={400} captionText={""} />
            <p className="copytext">
              The longer we’ve been on the road, the better things have become. Not only
              comedically (getting on better shows, becoming more comfortable on stage,
              etc.) but also in terms of living more comfortably in the van. It’d be great
              to say the improvements <i>just happened</i>, but the reality is every
              lesson learned came through a (sometimes painful) process of trial and
              error.
            </p>
            <p className="copytext">
              We’re not the brightest guys or the quickest learners, but when we learn
              little tips or tricks, we’re happy to pass them along. A lot of beginning
              comics, ourselves included, have asked “How can I get on better shows?”.
              We’ll attempt answer that question but before doing so, let’s rewind a bit.
            </p>
            <h2 className="header">Throwback</h2>
            <p className="copytext">
              If you’ve been reading since the beginning then you know our first mics and
              shows were far from ‘dream gigs’. They were the kind of shows every comic
              reading this article knows all too well. The shows where you arrive hours
              early to sign up for a good spot, only to be told “There’s actually a
              showcase first” and then “we’re not going to follow the order”. Eventually,
              at 2 a.m., you get to perform to no one. Those shows are rough, but you take
              whatever stage time you can get.
            </p>
            <MultiImageAndCaption
              imageUrls={[image5, image7]}
              imageHeight={380}
              captionText={"Check out these PACKED HOUSES"}
            />
            <p className="copytext">
              We recently started doing something which landed us better shows and we’ll
              tell you what that is -- but before that, we just want to say we’re far from
              experts. We’re still anonymous mic’ers. We’re figuring shit out on the fly
              just like everyone else. All we can do is share our experience and hope our
              failings can save you some suffering. If you can wring even a drop of
              motivation or inspiration out of our experience, awesome.
            </p>
            <p className="copytext">
              As far as we can tell, there’s no linear path to success in comedy. If there
              was, we’d be staying in fancy hotels instead of a leaky van. Either way we
              love the process and want every fellow aspiring comic to live their dream
              too. We’re happy to share any small bits of knowledge, but remember -- our
              approach to getting better could be terrible. So take what we say with a
              grain of salt.
            </p>
            <ImageAndCaption
              imageUrl={image2}
              imageWidth={400}
              captionText={"“Keep going!”"}
            />
            <h2 className="header">Ask and ye shall receive</h2>
            <p className="copytext">
              To get on real shows, our suggestion is simple: just ask. If you see gigs
              you want to be a part of, contact the host and ask to get on. You may get
              rejected 9 out of 10 times, but try anyway. Who cares? If you’re worried
              about rejection, you may want to consider doing something else.
            </p>
            <p className="copytext">
              It’s hard to imagine an endeavor more flirtatious with rejection than
              standup. Every single joke puts you on the razors edge between rejection
              (silence) and approval (laughter) — and even when you get approval, you have
              mere seconds until you’re back on the chopping block.
            </p>
            <ImageAndCaption
              imageUrl={image6}
              imageWidth={400}
              captionText={"“That was great! Now do it again, or else”"}
            />
            <p className="copytext">
              In the beginning we thought if we grinded it out and waited hours upon
              hours, we’d magically be tapped on the shoulder and told “You’ve been
              selected for the big show. You’re the best! Can I suck your dick?”. That may
              happen for some people, but most of us need to make our own luck.
            </p>
            <p className="copytext">
              <b>*Disclaimer*</b> Asking for and getting on better shows hasn’t removed us
              from open mic. We still do several per week -- some great, others
              nightmarish. We still face rejection when asking to be on shows. The point
              isn’t to never get rejected, it’s to be rejected less and less.
            </p>
            <h2 className="header">That’s all!</h2>
            <p className="copytext">
              People are nicer than you think. Will you encounter dickheads who rule their
              scene like tin-pot dictators and revel in the failure of others? Sure. Are
              there jerks out there with narrow views of what’s funny, and who think
              everyone <i>else</i> is a hack? No doubt. But here’s the thing: fuck those
              people. Don’t worry about assholes. There are far more friendly, supportive
              comics out there than jerks.
            </p>
            <p className="copytext">
              That’s our humble suggestion. Ask. Network. Meet new comedians. It’s been
              helpful for us, and it may work for you. Try it out if you please. Or, if
              you’ve got a better method, let us know - we’ve still got a lot to learn,
              too! And for those who are happy as-is, keep on keeping on. Who knows -
              maybe someone will come along and give you that magical tap on the shoulder.
            </p>
            <ImageAndCaption
              imageUrl={image8}
              imageWidth={400}
              captionText={"“You’ve been selected. Can you suck my dick?”"}
            />
            <h2 className="header">Showtime</h2>
            <p className="copytext">
              The show was a blast, and not to beat a dead horse but we only got on
              because we sought it out and asked.
            </p>
            <ImageAndCaption
              imageUrl={image3}
              imageWidth={400}
              captionText={"“OK we’ll put you on, goddamnit, just shut up”"}
            />
            <p className="copytext">
              The show was at a bar/restaurant that had an artsy feel to it with
              paintings, instruments, and albums coating the walls. The stage was set in
              the back corner and used for hosting various live performances. We were
              introduced to the other comedians when we arrived and spent a lot of time
              chatting. Hanging out and shooting the shit with other comedians is equally
              as fun as shows themselves.
            </p>
            <MultiImageAndCaption
              imageUrls={[image1, image9]}
              imageHeight={380}
              captionText={""}
            />
            <p className="copytext">
              All openers had 12 minutes each. Dan and I used our time to test new
              material and tweak old jokes. It was a great show and it was truly enjoyable
              to sit back and watch all the other comics shine too. Doing a real show like
              that reminded us why it’s so important to bust our humps at mics, even if
              they are ‘bad’ and we don’t feel like doing them.
            </p>
            <p className="copytext">
              When it was finished we thanked the host for putting us on, exchanged
              information with the other comics, and prepared to hit the road. Our next
              stop was <Link to="/Dallas">Dallas</Link>, a mere six hours away.
            </p>
            <NewsletterEmail />
          </div>
        </div>
      </div>
    </div>
  )
}
