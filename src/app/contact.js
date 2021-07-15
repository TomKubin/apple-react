import React from "react"
import { Helmet } from 'react-helmet'
import '../css/contact.css'
import { Fade, Zoom, Slide } from 'react-reveal'

class ContactSite extends React.Component{
    render(){
        return(
            <div className="bg">
                <Helmet>
                    <title>Apple | Contact</title>
                </Helmet>
                <section className="contacts">
                    <h1 className="is-size-3"><Slide left>Apple Computer Leadership</Slide></h1>
                    <Fade duration={2000}><hr/></Fade>
                    <div className="insideContacts">
                    <div className="contact">
                        <Zoom duration={2000}><img src="./img/steve-contact.jpg" alt="steve" /></Zoom>
                        <Fade duration={2000}><h1 className="is-size-4">Steve Jobs</h1></Fade>
                    </div>
                    <div className="contact midContact">
                    <Zoom duration={2000}><img src="./img/wozniak-contact.jpg" alt="steveWozniak" /></Zoom>
                        <Fade duration={2000}><h1 className="is-size-4">Steve Wozniak</h1></Fade>
                    </div>
                    <div className="contact">
                    <Zoom duration={2000}><img src="./img/markula-contact.jpg" alt="mike" /></Zoom>
                        <Fade duration={2000}><h1 className="is-size-4">Mike Markula</h1></Fade>
                    </div>
                    </div>
                    <Fade duration={2000}>
                    <div className="contactBoard">
                    <Zoom duration={3000}><h1 className="is-size-3">Apple Computer Contact</h1></Zoom>
                    <Slide left duration={3000}><p className="is-size-6">(111) 111-1111</p></Slide>
                    <Slide right duration={3000}><p className="linkEmail has-text-weight-semibold is-size-6">apple@apple.com</p></Slide>
                </div>
                </Fade>
                </section>
            </div>
        );
    }
}

export default ContactSite;