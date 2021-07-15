import React from "react"

class FooterElement extends React.Component{
    render(){
        let year = new Date().getFullYear();
        return(
            <p>&copy;{year} Tomáš Kubín</p>
        );
    }
}

export default FooterElement