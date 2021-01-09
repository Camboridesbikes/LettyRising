import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import NavBar from '../components/NavBar/NavBar'
import {Footer, Navigation, ContactInfo, Newsletter} from '../components/Footer/Footer'

import Index from '../pages/Index/Index'
import Connect from '../pages/Connect/Connect'


export default class App extends Component {
render() {
return (
<>
    
    <Router>
    <NavBar/>
        <Switch>
            <Route path='/connect'><Connect/></Route>
            <Route path='/'><Index/></Route>
        </Switch>
    <Footer>
        <Navigation title="Letty Rising">
            <Link to='/' style={{ color: `white`}}><p>Who We Are</p></Link>
            <Link to='/' style={{ color: `white`}}><p>What We Do</p></Link>
            <Link to='/' style={{ color: `white`}}><p>Explore</p></Link>
            <Link to='/connect' style={{ color: `white`}}><p>Connect</p></Link>
        </Navigation>
        <ContactInfo email="email@email.com" phone="(###) ###-####"/>
        <Newsletter/>
    </Footer>
    </Router>
</>
)
}
}