import React, { Component } from "react";
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";

import Vote from "./vote";
import history from './history';
export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Vote" component={Vote} />
                </Switch>
            </Router>
        )
    }
}