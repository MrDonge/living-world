import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    NavLink,
} from 'react-router-dom'

import TabBarNav from './components/tabbar/TabBarNav';
import Creation from './views/creation/Creation'
import Personal from './views/personal/Personal'
import Register from './views/register/Register'
import Login from './views/login/Login';
import Home from './views/homepage/Home'

import 'normalize.css'
import 'antd-mobile/dist/antd-mobile.css'
import './app.scss'
import Article from './views/article/Article';

class App extends React.Component {


    render() {
        return (
            <Router>
                <div className="App">
                    <main className="main-view">
                        {/* <Switch> */}
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/homepage" component={Home} />
                        <Route path="/article/:id" component={Article} />
                        <Route path="/creation" component={Creation} />
                        <Route path="/personal" component={Personal} />
                        <Route exact path="/homepage" component={TabBarNav} />
                        <Route exact path="/personal" component={TabBarNav} />
                        {/* <Redirect from="/" to="/homepage" />
                            <Route component={Home} /> */}
                        {/* </Switch> */}
                        {/* <Switch>
                            <Route path="/" component={TabBarNav}>
                                <Route path="/homepage" component={Home} />
                                <Route path="/personal" component={Personal} />
                            </Route>
                            <Route path="/login" component={Login} />
                            <Route path="/register" component={Register} />
                            <Route path="/homepage" component={Home} />
                            <Route path="/creation" component={Creation} />
                            <Route path="/article/:id" component={Article} />
                        </Switch> */}
                    </main>
                </div>
            </Router>
        );
    }
}

export default App;
