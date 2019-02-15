import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SecurityContainer from './container/SecurityContainer';
import MovieContainer from './container/MovieContainer';
import ActorContainer from './container/ActorContainer';
//import Banner from './components/banner';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Link from 'react-router-dom/Link';
import Menu from './components/menu';

class App extends Component {

  render() {
    const style = {
      maxHeight: 50
    }

    return (
      <BrowserRouter>
        <div className="App">
          <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <Link className="navbar-brand" to="#">
                    <img src={logo} className="App-logo" alt="logo" style={style} />
                  </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">
                        <Link className="nav-item nav-link" to="/movie">Movie</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-item nav-link" to="/actor">Actor</Link>
                      </li>
                    </ul>
                    <span className="navbar-text">
                      <Menu />
                    </span>
                  </div>
                </nav>
              </React.Fragment>
              <div className="container">
                <React.Fragment>
                  <Switch>
                    <Route path="/security" component={SecurityContainer} />
                    <Route path="/movie" component={MovieContainer} />
                    <Route path="/actor" component={ActorContainer} />
                  </Switch>
                </React.Fragment>
              </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
