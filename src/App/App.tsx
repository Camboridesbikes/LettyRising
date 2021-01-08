import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'

import NavBar from '../components/NavBar/NavBar'

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

    </Router>
</>
)
}
}