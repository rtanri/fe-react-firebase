import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import AuthProvider from "./components/AuthProvider";
import { getFirebaseInstance } from "./services/firebase/firebase";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import SiteHeader from "./components/SiteHeader";
import PrivateRoute from "./components/PrivateRoute";
import GuestOnlyRoute from "./components/GuestOnlyRoute";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import SubmitProposalPage from "./pages/SubmitProposalPage";
import ProposalPage from "./pages/ProposalPage";


// init firebase instance
getFirebaseInstance();
const stripePromise = loadStripe('pk_live_51JV3iNClfg6uxQbCi4dfHITzrkp50ATB3OQ4K5QFOq0QgloAhmJVnhs7iSBCRudVOgiHhY3omF80K83sT7K10LlH00hm2qR7z6');

function App() {
  return (
    <Elements stripe={stripePromise}>
      <CookiesProvider>
        <div>
          <AuthProvider>
            <Router>
              <div className="App">
                <SiteHeader />
                <Switch>
                  <PrivateRoute
                    path="/submit-proposal"
                    component={SubmitProposalPage}
                  />
                  <PrivateRoute
                    path="/proposal"
                    component={ProposalPage}
                  />
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
    </Elements>
  );
}

export default App;
