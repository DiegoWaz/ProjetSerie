import React from "react";
import Connection from '../components/connection';
import Link from 'react-router-dom/Link';
import logo from '../logo.svg';

export default class Menu extends React.Component {
    render() {
        const style = {
            maxHeight: 50
        }

        return <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                  <Link className="navbar-brand" to="/">
                    <img src={logo} className="App-logo" alt="logo" style={style} />
                  </Link>
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link className="nav-item nav-link" to="/movie">Movie</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-item nav-link" to="/serie">Serie</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-item nav-link" to="/createSerie">Create serie</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-item nav-link" to="/actor">Actor</Link>
                      </li>
                    </ul>
                    <span className="navbar-text">
                      <Connection />
                    </span>
                  </div>
            </nav>;
    }
}