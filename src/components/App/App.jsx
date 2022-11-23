import React, { useEffect } from 'react';
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import './App.css';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
//NEW
import LeaguePage from '../LeaguePage/LeaguePage';
import ResultsPage from '../ResultsPage/ResultsPage';
import EditPage from '../EditPage/EditPage';



function App() {
  const dispatch = useDispatch();

  const user = useSelector(store => store.user);

  useEffect(() => {
    dispatch({ type: 'FETCH_USER' });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          <Redirect exact from="/" to="/home" />

          {/* Visiting localhost:3000/about will show the about page. */}
          <Route
            // shows AboutPage at all times (logged in or not)
            exact
            path="/about"
          >
            <AboutPage />
          </Route>

          {/* //Had to add this, to get the page accessible when logged in and out. BELOW */}
          <Route exact path = "/home"> 
            <LandingPage/>
          </Route>
          
          <Route exact path = "/league/:id">
            <LeaguePage/>
          </Route>
          <ProtectedRoute 
                    exact
                    path="/league/:id/edit"
                >
                    <EditPage />
                </ProtectedRoute>

          <Route exact path = "/results">
            <ResultsPage/>
          </Route>
          

          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/user will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
          <ProtectedRoute
            // logged in shows UserPage else shows LoginPage//
            exact
            path="/user"
          >
            <UserPage />
          </ProtectedRoute>

          <ProtectedRoute
            // logged in shows InfoPage else shows LoginPage
            exact
            path="/info"
          >
            <InfoPage />
          </ProtectedRoute>

          

          <Route
            exact
            path="/login"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the login page
              <LoginPage />
            }
          </Route>

          <Route
            exact
            path="/registration"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />
              :
              // Otherwise, show the registration page
              <RegisterPage />
            }
          </Route>

          <Route
            exact
            path="/home"
          >
            {user.id ?
              // If the user is already logged in, 
              // redirect them to the /user page
              <Redirect to="/user" />               //This means it can say /user at the url and but be at /home, because of this redirect and etc for the above pages^^
              :                                    //This also means when you're logged in and go to the /registration and /login route it'll direct you to the /user route, which they coded above.
              // Otherwise, show the Landing page
              <LandingPage />
            }
          </Route>

          

          {/* If none of the other routes matched like /home, we will show a 404. */}
          <Route>
            <h1>We can't seem to find what you're looking for, sorry!</h1>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

//<Route> can be see by everyone, while <ProtectedRoute> can only been see when a user is authenticated.