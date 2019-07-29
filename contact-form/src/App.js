import React from 'react';
import './App.css';
import ContactForm from "./components/Contact";
import { bounce } from "react-animations";

// const Bounce = style.div`animation: 2s ${keyframes `${bounce}`} infinite`;

function App() {
  return (
    <div className="App">
      {/* <Bounce><h1>Contact Us</h1></Bounce> */}
      <ContactForm />
    </div>
  );
}

export default App;
