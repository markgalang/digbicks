import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "pages/home/home.jsx";
import TermsAndCondition from "pages/termsAndCondition/TermsAndCondition.jsx";
import ScrollToTop from "components/ScrollTotop/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBHD0R3XwxC2A7cmogyNeOPVfXO5t6N2iQ",
  authDomain: "digb-prod-1.firebaseapp.com",
  projectId: "digb-prod-1",
  storageBucket: "digb-prod-1.appspot.com",
  messagingSenderId: "215038037266",
  appId: "1:215038037266:web:5185faf370faaec8cf77cb",
  measurementId: "G-3FNM0497LQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

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
