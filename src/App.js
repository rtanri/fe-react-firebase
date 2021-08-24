import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import AuthProvider from "./components/AuthProvider";

import PrivateRoute from "./components/PrivateRoute";
import GuestOnlyRoute from "./components/GuestOnlyRoute";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import { getFirebaseInstance } from "./services/firebase/firebase";

// init firebase instance
getFirebaseInstance();

function App() {
  return (
    <CookiesProvider>
      <div>
        <AuthProvider>
          <Router>
            <div className="App">
              <Switch>
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <GuestOnlyRoute path="/register" component={RegisterPage} />
                <GuestOnlyRoute path="/login" component={LoginPage} />

                <Route path="/">
                  <Redirect to="/login" component={LoginPage} />
                </Route>
              </Switch>
            </div>
          </Router>
        </AuthProvider>
      </div>
    </CookiesProvider>
  );
}

export default App;
