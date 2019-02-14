import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleButtonContainer from './container/ToggleButtonContainer';
import SecurityContainer from './container/SecurityContainer';
import MovieContainer from './container/MovieContainer';
import Banner from './components/banner';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Link from 'react-router-dom/Link';
import ProfileBanner from './container/ProfileBanner';
import Menu from './components/menu';

class App extends Component {

  render() {
    const style = {
      maxHeight: 50
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" style={style} />
          <ProfileBanner />
          <Banner content={"Test"} />
          <BrowserRouter>
            <React.Fragment>
              <Menu />
              <Link to="/movie">Movie</Link>
              <ToggleButtonContainer />
              <Switch>
                <Route path="/security" component={SecurityContainer} />
                <Route path="/movie" component={MovieContainer} />
              </Switch>
            </React.Fragment>
          </BrowserRouter>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
