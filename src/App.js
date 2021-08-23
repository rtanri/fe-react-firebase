import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import AuthProvider from "./components/AuthProvider";
import PrivateRoute from "./components/PrivateRoute";
import GuestOnlyRoute from "./components/GuestOnlyRoute";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            <GuestOnlyRoute path="/login" component={LoginPage} />
            <Route path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
