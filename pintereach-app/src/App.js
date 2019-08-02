import React from 'react';
import NavBar from "./components/NavBar";
import ArticleList from "./components/Articles/ArticleList";
import Profile from "./components/Pages/Profile";
import ContactForm from "./components/Pages/Contact";
import Footer from "./components/Footer";
import { Route } from 'react-router-dom';
import "./styles.scss";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Route exact path ="/" component = {ArticleList} />
      <Route path="/profile" component = {Profile} />
      <Route path="/contact" component = {ContactForm} />
      <Footer />
    </div>
  );
}
export default App;
