import React, { Component } from 'react'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'


export default class App extends Component {
render() {
return (
<>
    <Router>
        <Switch>
            <Route path='/'>
                <p>index</p> 
            </Route>
        </Switch>

    </Router>
</>
)
}
}