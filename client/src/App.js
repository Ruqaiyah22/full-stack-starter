import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';

import {AuthContextProvider, AuthProtectedRoute} from './AuthContext';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Passwords from './Passwords';
import Register from './Register';
import SectionItems from './SectionItems';
import Components from './Components';
import Countdown from './Countdown';
import Sections from './Sections/Sections';
import Skills from './Skills/Skills';

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/components">
            <Components />
          </Route>
          <Route path="/countdown">
              <Countdown />
            </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/passwords">
            <Passwords />
          </Route>
          {process.env.REACT_APP_FEATURE_REGISTRATION === 'true' && (
            <Route path="/register">
              <Register />
            </Route>
          )}
          <Route path="/sections">
              <Sections />
          </Route>
          <Route path="/skills">
              <Skills />
          </Route>
          <AuthProtectedRoute path="/sectionItems">
            <SectionItems />
          </AuthProtectedRoute>
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
