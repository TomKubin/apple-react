import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './app/navbar'
import MainSite from './app/mainSite'
import FooterElement from './app/footer'
import './menu.js'
import 'bulma/css/bulma.css'
import './css/index.css'

ReactDOM.render(
    <Menu/>,
    document.getElementById('navMenu'),
);

ReactDOM.render(
    <MainSite/>,
    document.getElementById('root')
);

ReactDOM.render(
    <FooterElement/>,
    document.getElementById('ftr')
);