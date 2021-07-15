import React from "react"
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Fade, Slide } from 'react-reveal'
import Mac from './macintosh'
import ContactSite from './contact'
import AboutSite from './about'

const MacIntosh = () => {
    return ReactDOM.render(<Mac/>, document.getElementById('root'));
};

const Contact = () => {
  return ReactDOM.render(<ContactSite/>, document.getElementById('root'));
};

const About = () => {
  return ReactDOM.render(<AboutSite/>, document.getElementById('root'));
}

class MainSite extends React.Component{
    render(){
        return(
    <Router>
    <section className="hero is-large img-hero">
        <div className="hero-body">
            <p className="title is-size-1 has-text-weight-normal">
                <Fade duration={2000}>MacIntosh</Fade>
            </p>
            <p className="subtitle is-size-4 has-text-weight-semibold">
                <Slide left>Lots to love.</Slide>
                <Slide right>Less to spend.</Slide>
            </p>
            <Fade duration={2000}><a className="is-size-5 linkTo" href="/macintosh">More{">"}</a></Fade>
        </div>
    </section>
    <div className="aboutText">
        <div className="aboutBody">
          <Slide left duration={2000}>
            <h1 className="is-size-2">Apple Computer Inc.</h1>
            <p className="is-size-5">Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services. It is considered one of the Big Five companies in the U.S. information technology industry, along with Amazon, Google, Microsoft, and Facebook. Its hardware products include the iPhone smartphone, the iPad tablet computer, the Mac personal computer, the iPod portable media player, the Apple Watch smartwatch, the Apple TV digital media player, the AirPods wireless earbuds, the AirPods Max headphones, and the HomePod smart speaker line. Apple's software includes iOS, iPadOS, macOS, watchOS, and tvOS operating systems, the iTunes media player, the Safari web browser, the Shazam music identifier, and the iLife and iWork creativity and productivity suites, as well as professional applications like Final Cut Pro X, Logic Pro, and Xcode. Its online services include the iTunes Store, the iOS App Store, Mac App Store, Apple Arcade, Apple Music, Apple TV+, Apple Fitness+, iMessage, and iCloud. Other services include Apple Store, Genius Bar, AppleCare, Apple Pay, Apple Pay Cash, and Apple Card.</p>
          </Slide>
          <Slide right duration={2000}>
            <p className="is-size-5">Apple was founded by Steve Jobs, Steve Wozniak, and Ronald Wayne in April 1976 to develop and sell Wozniak's Apple I personal computer, though Wayne sold his share back to Jobs and Wozniak within 12 days. It was incorporated as Apple Computer, Inc., in January 1977, and sales of its computers, including the Apple II, grew quickly.</p>
          </Slide>
          <Slide left duration={2000}>
            
            <p className="is-size-5">Jobs and Wozniak hired a staff of computer designers and had a production line starting in Jobs' garage. Apple went public in 1980 to instant financial success. Over the next few years, Apple shipped new computers featuring innovative graphical user interfaces, such as the original Macintosh in 1984, and Apple's marketing advertisements for its products received widespread critical acclaim. However, the high price of its products and limited application library caused problems, as did power struggles between executives. In 1985, Wozniak departed Apple amicably and remained an honorary employee, while Jobs resigned to found NeXT, taking some Apple co-workers with him.</p>
          </Slide>
        </div>
      <Fade duration={2000}>
      <div className="quote">
          <h1 className="is-size-3">“Your time is limited, so don’t waste it living someone else’s life.”</h1>
          <p className="is-size-5">Steve Jobs</p>
      </div>
      </Fade>
    </div>
  <div className="founders">
  <Fade duration={3000}>
    <div className="founder">
      <img src={process.env.PUBLIC_URL + "/img/steve.jpg"} alt="steve"/>
    <div>
      <h1 className="is-size-5">“Don’t let the noise of others’ opinions drown out your own inner voice.”</h1>
      <p className="is-size-6">Steve Jobs</p>
  </div>
    </div>
    </Fade>
    <Fade duration={3000}>
    <div className="founder">
      <img src={process.env.PUBLIC_URL + "/img/wozniak.jpg"} alt="steve"/>
      <div>
      <h1 className="is-size-5">“My goal wasn't to make a ton of money. It was to build good computers.”</h1>
      <p className="is-size-6">Steve Wozniak</p>
      </div>
    </div>
    </Fade>
  </div>
  <div id="map">
    <iframe width="100%" height="100%" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=-122.01600551605225%2C37.331069888042464%2C-122.00184345245363%2C37.3388667970175&amp;layer=mapnik&amp;marker=37.33496844369274%2C-122.00892448425293"></iframe>
  </div>
        <Switch>
            <Route path="/macintosh">
                <MacIntosh/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Route path="/about">
                <About/>
            </Route>
        </Switch>
    </Router>
        );
    }
}

export default MainSite;