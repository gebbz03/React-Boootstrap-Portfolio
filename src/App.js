import React from "react";
import logo from "./logo.svg";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import NavigationHeader from "./components/NavigationHeader";
import WelcomeHeader from "./components/WelcomeHeader";
import About from "./components/About";
import Team from "./components/Team";
import ContactInfo from "./components/ContactInfo";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const portfolioLinks = [
    {
      title: "Threads",
      caption: "Illustration"
    },
    {
      title: "Explore",
      caption: "Graphic Design"
    },
    {
      title: "Finish",
      caption: "Identity"
    },
    {
      title: "Lines",
      caption: "Branding"
    },
    {
      title: "Southwest",
      caption: "Website Design"
    },
    {
      title: "Window",
      caption: "Photography"
    },
    {
      title: "Pizza",
      caption: "I love pizza!"
    }
  ];

  return (
    <div classNameName="App">
      <NavigationHeader></NavigationHeader>
      <WelcomeHeader></WelcomeHeader>
      <Services></Services>
      <Portfolio portfolioLinks={portfolioLinks}></Portfolio>
      <About></About>
      <Team></Team>

      <ContactInfo></ContactInfo>
      <Footer></Footer>
    </div>
  );
}

export default App;
