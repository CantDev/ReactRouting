import React, { Component, Fragment } from 'react'
import People from './People';
import Films from './Films';
import SingleFilm from "./SingleFilm"
import Nav from "./Nav"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';


class App extends Component {



    render() {
        return (
            <Router>
                <Fragment>
                    <div className='App'>
                        <Nav />
                        <Switch>
                            <Route path="/Films/:id" component={SingleFilm} />
                            <Route path="/People" component={People} />
                            <Route path="/Films" component={Films} />
                            <Route path="/" component={Home} />
                        </Switch>
                    </div>
                </Fragment>

            </Router>

        )

    };
}

const Home = () => (
    <div>
        <h1>Home</h1>
    </div>
)
export default App
