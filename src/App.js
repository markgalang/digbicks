import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/home/home.jsx";
import TermsAndCondition from "pages/termsAndCondition/TermsAndCondition.jsx";
import ScrollToTop from "components/ScrollTotop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/terms-and-condition">
          <TermsAndCondition />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
