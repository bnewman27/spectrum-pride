// Path: client/src/components/about.js
// import the react library
import React from "react";
// import the css file for the page
import "./about.css";

// create the About function that will be exported to the App.js file
function About() {
  // return the html for the page
  return (
    <div className="about">
      <h1>Our Mission</h1>
      <h2>Achieve elite clinical outcomes by recruiting the best team members to provide the highest quality care.</h2>
    </div>
  );
}

// export the About function
export default About;