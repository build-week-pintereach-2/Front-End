import React from 'react';
import NavBar from "./components/NavBar";
// import ArticleList component
import Profile from "./components/Pages/Profile";
import ContactForm from "./components/Pages/Contact";
import Footer from "./components/Footer";
import { Route } from 'react-router-dom';
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
    
      <Route path="/profile" component = {Profile} />
      <Route path="/contact" component = {ContactForm} />
      {/* Route exact to Dashboard -- maybe website.com/Dashboard
      Route to Search -- website.com/Search
      Route to Profile -- website.com/Profile
      Route on bottom to Contact -- website.com/Contact */}
      <Footer />
      
    </div>
  );
}
export default App;
