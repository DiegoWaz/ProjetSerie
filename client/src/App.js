import React, { Component } from 'react';
import './App.css';
import SecurityContainer from './container/SecurityContainer';
import MovieContainer from './container/MovieContainer';
import ActorContainer from './container/ActorContainer';
import SerieContainer from './container/SerieContainer';
import CreateSerieContainer from './container/CreateSerieContainer';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Menu from './components/menu';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
              <React.Fragment>
                <Menu />
              </React.Fragment>
              <div className="container">
                <React.Fragment>
                  <Switch>
                    <Route path="/security" component={SecurityContainer} />
                    <Route path="/movie" component={MovieContainer} />
                    <Route path="/serie" component={SerieContainer} />
                    <Route path="/createSerie" component={CreateSerieContainer} />
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
