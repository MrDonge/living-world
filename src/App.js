import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    NavLink
} from 'react-router-dom'

import Home from './views/homepage/Home'
import Creation from './views/createion/Creation'
import Personal from './views/personal/Personal'

import 'normalize.css'
import './app.scss'
function App() {
    return (
        <Router>
            <div className="App">
                <main className="main-view">
                    <Switch>
                        <Route path="/homepage" component={Home} />
                        <Route path="/creation" component={Creation} />
                        <Route path="/personal" component={Personal} />
                        <Redirect from="/" to="/homepage" />
                        <Route component={Home} />
                    </Switch>
                </main>
                <footer className="nav-tabs">
                    <div className="tab-item">
                        <NavLink className="nav-link" to="/homepage">
                            <i className="iconfont icon-home"></i>
                            <span>主页</span>
                        </NavLink>
                    </div>
                    <div className="tab-item">
                        <NavLink className="nav-link" to="/creation">
                            <i className="iconfont icon-createicon"></i>
                            <span>创作</span>
                        </NavLink>
                    </div>
                    <div className="tab-item">
                        <NavLink className="nav-link" to="/personal">
                            <i className="iconfont icon-caidaniconwodehui"></i>
                            <span>我的</span>
                        </NavLink>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;
