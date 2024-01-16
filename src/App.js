import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./pages/Home";
import Weather from "./pages/Weather";
import OTP from "./pages/OTP";
import WeatherDetail from "./pages/WeatherDetail";
import CRUD from "./pages/CRUD/CRUD";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Switch>
        <Route path="/weather" exact>
          <Weather />
        </Route>
        <Route path="/weather/:locationName">
          <WeatherDetail />
        </Route>
        <Route path="/otp">
          <OTP />
        </Route>
        <Route path="/crud">
          <CRUD />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
