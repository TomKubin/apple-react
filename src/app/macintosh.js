import React from "react"
import { Helmet } from 'react-helmet'
import '../css/macintosh.css'
import { Fade, Zoom } from 'react-reveal'

class Mac extends React.Component{
    render(){
        return(
        <div className="main">
            <Helmet>
                <title>Apple | MacIntosh</title>
            </Helmet>
            <section className="mainVid">
                <h1 className="title is-size-1 has-text-weight-normal"><Fade>MacIntosh</Fade></h1>
            </section>
            <section className="splitSection">
                <div className="propertiesSection">
                    <Fade top duration={2000}>
                            <h1 className="is-size-1 has-text-weight-semibold">1984 won't be like "1984"</h1>
                    </Fade>
                </div>
                    <div className="imgSection">
                        <Zoom duration={2000}><img src={"../img/mac1984.png"} alt="mac1984"/></Zoom>
                    </div>
            </section>
            <section className="cardSection">
                <div className="bigCard">
                    <h1 className="is-size-3 has-text-weight-semibold"><Fade top duration={2000}>Processor</Fade></h1>
                    <div className="cardBody">
                        <div className="imgCard">
                            <Zoom duration={2000}><img src={"../img/mac-motherboard.jpg"} alt="motherboard"/></Zoom>
                        </div>
                        <div className="cardText">
                            <p className="is-size-3 has-text-weight-semibold"><Fade duration={2000}>Motorola 68000 microprocessor running at 7.8336MHz</Fade></p>
                            <hr/>
                            <p className="is-size-3 has-text-weight-semibold"><Fade duration={2000}>128 KB RAM</Fade></p>
                            <hr/>
                            <p className="is-size-3 has-text-weight-semibold"><Fade duration={2000}>400KB storage</Fade></p>
                            <div className="bText">
                                <p className="is-size-5"><Fade top duration={2000}>Up to</Fade></p>
                                <h1 className="is-size-1 has-text-weight-semibold"><Fade duration={2000}>2x</Fade></h1>
                                <p className="is-size-5"><Fade bottom duration={2000}>faster performance</Fade></p>
                            </div>
                        </div>
                    </div>    
                </div>
                <div className="sCards">
                    <div className="sCard">
                    <h1 className="is-size-3 has-text-weight-semibold"><Fade top duration={2000}>macOS</Fade></h1>
                        <div className="sImg">
                            <Zoom duration={2000}><img src="../img/macos.png" alt="macOS"/></Zoom>
                        </div>
                        <div className="sText">
                            <p className="is-size-3 has-text-weight-semibold"><Fade duration={2000}>One Window... Two Windows!</Fade></p>
                            <p className="is-size-3 has-text-weight-semibold insideText"><Fade duration={2000}>The latest operating system, where you can have multiple windows open and take full advantage of multitasking</Fade></p>
                        </div>
                    </div>
                    <div className="sCard cardRight">
                    <h1 className="is-size-3 has-text-weight-semibold"><Fade top duration={2000}>Display</Fade></h1>
                        <div className="sImg">
                            <Zoom duration={2000}><img src="../img/macdisplay.png" width="350px;" alt="macDisplay"/></Zoom>
                        </div>
                        <div className="sText">
                            <p className="is-size-3 has-text-weight-semibold"><Fade duration={2000}>More colors!</Fade></p>
                            <p className="is-size-3 has-text-weight-semibold insideText"><Fade duration={2000}>The Best display ever created!</Fade></p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        );
    }
}

//<p className="is-size-3">512x342 resoultion</p>

export default Mac;