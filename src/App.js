import React from 'react';
import './App.css';


import HomePage from './HomePage';
import MainBlog from './MainBlog';

import FavoriteMovie from './FavoriteMovie';
//import FavoritFood from './FavoriteFood';
import AboutPage from './AboutPage';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

export default function App(){
  var prePath = "/Blog-Post-React-App";
  return(
    
    <Router>

        <nav>
          <Link to={prePath +"/"}>MainBlog</Link>{"  "}

          <Link to={prePath +"/homepage"}>Home Page</Link>{"  "}
          <Link to={prePath +"/favoritemovie"}>Favorite Movie</Link>{"  "}
          <Link to={prePath +"/aboutpage"}>About Page</Link>{"  "}
        </nav>
        <div>
          <Route exact path={prePath +"/"} component={MainBlog} />
          <Route path={prePath +"/homepage"} component={HomePage} />
          <Route path={prePath +"/favoritemovie"} component={FavoriteMovie} />

          <Route path={prePath +"/aboutpage"} component={AboutPage} />
        </div>
      </Router>
  )
}