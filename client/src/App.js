// build an app.js file that will be the main entry point for the application with routes to the different pages
// import the react and react-router-dom libraries
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import the pages that will be used in the application
import Home from "./components/home";
import Services from "./components/services";
import About from "./components/about";
import Contact from "./components/contact";
// import the components that will be used in the application
import Navbar from "./components/navbar";
import Footer from "./components/footer";
// import the css file for the application
import "./App.css";

// create the App function that will be exported to the index.js file
function App() {
  // return the Router component that will be used to route the different pages of the application
  // the Router component will have the Nav component and the Footer component as children
  // the Router component will have the Switch component as a child
  // the Switch component will have the Route components as children
  // the Route components will have the different pages as children
  return (
    <Router>
      <div>
        <Navbar />
        <Router>
          <Route exact path={["/home"]}>
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Router>
        <Footer />
      </div>
    </Router>
  );
}

// export the App function
export default App;