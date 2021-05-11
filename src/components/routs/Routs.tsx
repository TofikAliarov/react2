import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {About} from "../about/About"
import { OneFilm } from '../main/filmsMain/filmsItem/oneFilm/OneFilm';
import {Main} from "../main/Main"
import styles from "./Routs.module.css"

function Routs() {
  return (
      <Router>
      <div >
        <nav className={styles.navigation}>
          <ul className={styles.navigationList}>
            <li className={styles.navigationItem}>
              <Link  to="/" >Home</Link>
            </li>
            <li className={styles.navigationItem} >
              <Link to="/about">About</Link>
            </li>

          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route exact path="/">
            <Main />
          </Route>
            <Route exact path="/:id">
            <OneFilm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routs;
