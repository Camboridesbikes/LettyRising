import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import NavBar from '../components/NavBar/NavBar'
import {Footer, Navigation, Contact, Newsletter} from '../components/Footer/Footer'

import Index from '../pages/Index/Index'


export default class App extends Component {
render() {
return (
<>
    
    <Router>
    <NavBar/>
        <Switch>
            <Route path='/'>
                <Index/>
            </Route>
        </Switch>
    <Footer>
        <Navigation title="Letty Rising">
            <Link to='/' style={{ color: `white`}}>Who We Are</Link>
            <Link to='/' style={{ color: `white`}}>What We Do</Link>
            <Link to='/' style={{ color: `white`}}>Explore</Link>
            <Link to='/' style={{ color: `white`}}>Connect</Link>
        </Navigation>
        <Contact email="email@email.com" phone="(###) ###-####"/>
        <Newsletter/>
    </Footer>
    </Router>
</>
)
}
}