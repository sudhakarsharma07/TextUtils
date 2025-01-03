import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type: type });
    setTimeout(() => setAlert(null), 1500);
  };

  // const toggleMode = () => {
  //   if (mode === "dark") {
  //     setMode("light");
  //     document.body.style.background =
  //       "linear-gradient(45deg, #f1f1f1 50%, #9ee8ff 50%)";
  //     showAlert("Light mode has been enabled", "success");
  //   } else {
  //     setMode("dark");
  //     document.body.style.background =
  //       "linear-gradient(45deg, #5c5c5c 50%, #1b1b1b 50%)";
  //     showAlert("Dark mode has been enabled", "success");
  //   }
  // };


  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.classList.remove("dark");
      document.body.classList.add("light");
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.classList.remove("light");
      document.body.classList.add("dark");
      showAlert("Dark mode has been enabled", "success");
    }
  };
  

  

  return (
    <Router>
      <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route
          path="/"
          element={
            <TextForm
              heading="TextUtils - Word Counter, Character Counter, Remove Extra Space"
              summaryHead="Summary of Your Text"
              mode={mode}
              showAlert={showAlert}
            />
          }
        />
        <Route path="/about" element={<About mode={mode} />} />
        <Route path="/contact" element={<Contact mode={mode} />} />
      </Routes>
      <Footer creatorName="Your Name" />
    </Router>
  );
}

export default App;
