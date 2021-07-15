import React from "react"
import { Helmet } from 'react-helmet'
import { Slide } from 'react-reveal'

class AboutSite extends React.Component{
    render(){
        return(
            <div className="aboutText">
                <Helmet>
                    <title>Apple | About</title>
                </Helmet>
            <div className="aboutBody">
              <Slide left duration={2000}>
                <h1 className="is-size-2">Story Behind Apple Computer Inc.</h1>
                <p className="is-size-5">Apple Computer Company was founded on April 1, 1976, by Steve Jobs, Steve Wozniak, and Ronald Wayne as a business partnership. The company's first product is the Apple I, a computer designed and hand-built entirely by Wozniak. To finance its creation, Jobs sold his only motorized means of transportation, a VW Microbus, for a few hundred dollars, and Wozniak sold his HP-65 calculator for US$500 (equivalent to $2,246 in 2019). Wozniak debuted the first prototype at the Homebrew Computer Club in July 1976. The Apple I was sold as a motherboard with CPU, RAM, and basic textual-video chips—a base kit concept which would not yet be marketed as a complete personal computer. It went on sale soon after debut for US$666.66 (equivalent to $2,995 in 2019). Wozniak later said he was unaware of the coincidental mark of the beast in the number 666, and that he came up with the price because he liked "repeating digits".</p>
              </Slide>
              <Slide right duration={2000}>
                <p className="is-size-5">Apple Computer, Inc. was incorporated on January 3, 1977, without Wayne, who had left and sold his share of the company back to Jobs and Wozniak for $800 only twelve days after having co-founded Apple. Multimillionaire Mike Markkula provided essential business expertise and funding of US$250,000 (equivalent to $1,054,778 in 2019) to Jobs and Wozniak during the incorporation of Apple. During the first five years of operations, revenues grew exponentially, doubling about every four months. Between September 1977 and September 1980, yearly sales grew from $775,000 to $118 million, an average annual growth rate of 533%.</p>
              </Slide>
              <Slide left duration={2000}> 
                <p className="is-size-5">The Apple II, also invented by Wozniak, was introduced on April 16, 1977, at the first West Coast Computer Faire. It differs from its major rivals, the TRS-80 and Commodore PET, because of its character cell-based color graphics and open architecture. While early Apple II models use ordinary cassette tapes as storage devices, they were superseded by the introduction of a ​5 1⁄4-inch floppy disk drive and interface called the Disk II in 1978. The Apple II was chosen to be the desktop platform for the first "killer application" of the business world: VisiCalc, a spreadsheet program released in 1979. VisiCalc created a business market for the Apple II and gave home users an additional reason to buy an Apple II: compatibility with the office. Before VisiCalc, Apple had been a distant third place competitor to Commodore and Tandy.</p>
              </Slide>
              <Slide right duration={2000}>
                  <p className="is-size-5">By the end of the 1970s, Apple had a staff of computer designers and a production line. The company introduced the Apple III in May 1980 in an attempt to compete with IBM in the business and corporate computing market. Jobs and several Apple employees, including human–computer interface expert Jef Raskin, visited Xerox PARC in December 1979 to see a demonstration of the Xerox Alto. Xerox granted Apple engineers three days of access to the PARC facilities in return for the option to buy 100,000 shares (5.6 million split-adjusted shares as of March 30, 2019) of Apple at the pre-IPO price of $10 a share.</p>
              </Slide>
              <Slide left duration={2000}>
                <p className="is-size-5">Jobs was immediately convinced that all future computers would use a graphical user interface (GUI), and development of a GUI began for the Apple Lisa. In 1982, however, he was pushed from the Lisa team due to infighting. Jobs then took over Wozniak's and Raskin's low-cost-computer project, the Macintosh, and redefined it as a graphical system cheaper and faster than Lisa. In 1983, Lisa became the first personal computer sold to the public with a GUI, but was a commercial failure due to its high price and limited software titles, so in 1985 it would be repurposed as the high end Macintosh and discontinued in its second year.</p>
              </Slide>
              <Slide right duration={2000}>
                <p className="is-size-5">On December 12, 1980, Apple (ticker symbol "AAPL") went public selling 4.6 million shares at $22 per share ($.39 per share when adjusting for stock splits as of March 30, 2019), generating over $100 million, which was more capital than any IPO since Ford Motor Company in 1956. By the end of the day, 300 millionaires were created, from a stock price of $29 per share and a market cap of $1.778 billion.</p>
              </Slide>
            </div>
            </div>
        );
    }
}

export default AboutSite;