import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import "./App.css"
import Cities from "./Cities.js"
import Contact from "./Contact.js"
import ScrollToTop from "./ScrollToTop.js"
// import Random from "./Random.js"
// import Videos from "./Videos.js"

import WashingtonDC from "./cities/WashingtonDC.js"
import Boston from "./cities/Boston.js"
import NewYork from "./cities/NewYork.js"
import Pittsburgh from "./cities/Pittsburgh.js"
import Asheville from "./cities/Asheville.js"
import Atlanta from "./cities/Atlanta.js"
import Baltimore from "./cities/Baltimore.js"
import ChapelHill from "./cities/ChapelHill.js"
import Providence from "./cities/Providence.js"
import PortlandME from "./cities/PortlandME.js"
import Raleigh from "./cities/Raleigh.js"
import Concord from "./cities/Concord.js"
import Richmond from "./cities/Richmond.js"
import VirginiaBeach from "./cities/VirginiaBeach"
import Savannah from "./cities/Savannah"
import Orlando from "./cities/Orlando"
import Medellin from "./cities/Medellin"
import Miami from "./cities/Miami"
import Hattiesburg from "./cities/Hattiesburg"
import NewOrleans from "./cities/NewOrleans"
import Mobile from "./cities/Mobile"
import Nashville from "./cities/Nashville"
import Memphis from "./cities/Memphis"
import Tulsa from "./cities/Tulsa"
import Dallas from "./cities/Dallas"
import Austin from "./cities/Austin"
import Fayetteville from "./cities/Fayetteville"
import Phoenix from "./cities/Phoenix"
import Tucson from "./cities/Tucson"
import Albuquerque from "./cities/Albuquerque"
import SaltLakeCity from "./cities/SaltLakeCity"
import Denver from "./cities/Denver"
import LasVegas from "./cities/LasVegas"
import LosAngeles from "./cities/LosAngeles"
import SanDiego from "./cities/SanDiego"
import Honolulu from "./cities/Honolulu"
import SanJose from "./cities/SanJose"
import PortlandOR from "./cities/PortlandOR"
import Seattle from "./cities/Seattle"
import Anchorage from "./cities/Anchorage"
import Missoula from "./cities/Missoula"
import Boise from "./cities/Boise"
import SiouxFalls from "./cities/SiouxFalls"
import Minneapolis from "./cities/Minneapolis"
import Fargo from "./cities/Fargo"
import DesMoines from "./cities/DesMoines"
import KansasCity from "./cities/KansasCity"
import Louisville from "./cities/Louisville"
import Huntington from "./cities/Huntington"
import Greenville from "./cities/Greenville"
import Indianapolis from "./cities/Indianapolis"
import Cincinnati from "./cities/Cincinnati"
import OverlandPark from "./cities/OverlandPark"
import Omaha from "./cities/Omaha"
import Gillette from "./cities/Gillette"
import Casper from "./cities/Casper"
import Chicago from "./cities/Chicago"
import Madison from "./cities/Madison"
import Detroit from "./cities/Detroit"
import Burlington from "./cities/Burlington"
import Fairfield from "./cities/Fairfield"
import JerseyCity from "./cities/JerseyCity"
import Wilmington from "./cities/Wilmington"

import { USCities as cities } from "./allCities.js"
import About from "./About.js"
import NoCity from "./NoCity.js"
import withGATracker from "./withGATracker"
import NoMatch from "./NoMatch"
// import Breweries from "./Breweries"
// import ComedySearch from "./ComedyClubs.js"

function App() {
  let citiesToGoTo = cities.filter((el) => el.cityState !== "ready")
  return (
    <BrowserRouter>
      <ScrollToTop>
        <div>
          <Switch>
            <Route path="/" exact component={withGATracker(Cities)} />
            <Route path="/about" component={withGATracker(About)} />
            <Route path="/contact" component={withGATracker(Contact)} />
            <Route path="/WashingtonDC" component={withGATracker(WashingtonDC)} />
            <Route path="/Asheville" component={withGATracker(Asheville)} />
            <Route path="/Atlanta" component={withGATracker(Atlanta)} />
            <Route path="/ChapelHill" component={withGATracker(ChapelHill)} />
            <Route path="/Raleigh" component={withGATracker(Raleigh)} />
            <Route path="/Richmond" component={withGATracker(Richmond)} />
            <Route path="/Baltimore" component={withGATracker(Baltimore)} />
            <Route path="/Concord" component={withGATracker(Concord)} />
            <Route path="/Providence" component={withGATracker(Providence)} />
            <Route path="/PortlandME" component={withGATracker(PortlandME)} />
            <Route path="/Boston" component={withGATracker(Boston)} />
            <Route path="/Pittsburgh" component={withGATracker(Pittsburgh)} />
            <Route path="/NewYork" component={withGATracker(NewYork)} />
            <Route path="/VirginiaBeach" component={withGATracker(VirginiaBeach)} />
            <Route path="/Savannah" component={withGATracker(Savannah)} />
            <Route path="/Orlando" component={withGATracker(Orlando)} />
            <Route path="/Medellin" component={withGATracker(Medellin)} />
            <Route path="/Miami" component={withGATracker(Miami)} />
            <Route path="/Hattiesburg" component={withGATracker(Hattiesburg)} />
            <Route path="/NewOrleans" component={withGATracker(NewOrleans)} />
            <Route path="/Mobile" component={withGATracker(Mobile)} />
            <Route path="/Nashville" component={withGATracker(Nashville)} />
            <Route path="/Memphis" component={withGATracker(Memphis)} />
            <Route path="/Tulsa" component={withGATracker(Tulsa)} />

            <Route path="/Fayetteville" component={withGATracker(Fayetteville)} />
            <Route path="/Austin" component={withGATracker(Austin)} />
            <Route path="/Dallas" component={withGATracker(Dallas)} />

            <Route path="/Tucson" component={withGATracker(Tucson)} />
            <Route path="/Phoenix" component={withGATracker(Phoenix)} />
            <Route path="/Albuquerque" component={withGATracker(Albuquerque)} />

            <Route path="/Denver" component={withGATracker(Denver)} />
            <Route path="/LasVegas" component={withGATracker(LasVegas)} />

            <Route path="/SaltLakeCity" component={withGATracker(SaltLakeCity)} />

            <Route path="/SanDiego" component={withGATracker(SanDiego)} />
            <Route path="/LosAngeles" component={withGATracker(LosAngeles)} />
            <Route path="/Honolulu" component={withGATracker(Honolulu)} />
            <Route path="/SanJose" component={withGATracker(SanJose)} />
            <Route path="/PortlandOR" component={withGATracker(PortlandOR)} />
            <Route path="/Seattle" component={withGATracker(Seattle)} />
            <Route path="/Anchorage" component={withGATracker(Anchorage)} />
            <Route path="/Missoula" component={withGATracker(Missoula)} />
            <Route path="/Boise" component={withGATracker(Boise)} />
            <Route path="/SiouxFalls" component={withGATracker(SiouxFalls)} />
            <Route path="/Minneapolis" component={withGATracker(Minneapolis)} />
            <Route path="/Fargo" component={withGATracker(Fargo)} />
            <Route path="/DesMoines" component={withGATracker(DesMoines)} />
            <Route path="/KansasCity" component={withGATracker(KansasCity)} />
            <Route path="/Louisville" component={withGATracker(Louisville)} />
            <Route path="/Huntington" component={withGATracker(Huntington)} />
            <Route path="/Greenville" component={withGATracker(Greenville)} />
            <Route path="/Indianapolis" component={withGATracker(Indianapolis)} />
            <Route path="/Cincinnati" component={withGATracker(Cincinnati)} />
            <Route path="/OverlandPark" component={withGATracker(OverlandPark)} />
            <Route path="/Omaha" component={withGATracker(Omaha)} />
            <Route path="/Gillette" component={withGATracker(Gillette)} />
            <Route path="/Casper" component={withGATracker(Casper)} />
            <Route path="/Chicago" component={withGATracker(Chicago)} />
            <Route path="/Madison" component={withGATracker(Madison)} />
            <Route path="/Detroit" component={withGATracker(Detroit)} />
            <Route path="/Burlington" component={withGATracker(Burlington)} />
            <Route path="/Fairfield" component={withGATracker(Fairfield)} />
            <Route path="/JerseyCity" component={withGATracker(JerseyCity)} />
            <Route path="/Wilmington" component={withGATracker(Wilmington)} />

            {/*<Route path="/Breweries" component={withGATracker(Breweries)} />*}

            {/*<Route path="/ComedySearch" component={withGATracker(ComedySearch)} />*/}

            {citiesToGoTo.map((el) => (
              <Route
                key={el.name}
                path={"/" + el.url}
                component={() => <NoCity cityName={el.name} cityState={el.cityState} />}
              />
            ))}
            <Route path="/404" component={NoMatch} />

            <Route component={NoMatch} />
          </Switch>
        </div>
      </ScrollToTop>
    </BrowserRouter>
  )
}

export default App
