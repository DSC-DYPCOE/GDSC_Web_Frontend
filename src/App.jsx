import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  EventsPage,
  ContactPage,
  LoginSignupPage,
  ProjectsPage,
  TeamPage,
  IndividualProjectPage,
  TestingPage,
  AboutPage,
  // Page404,
} from "./pages";
import Page404 from "./pages/Page404";
import { Navbar, Footer } from "./components/index";
import Chatbotfolder from "./components/common/chatbot/Chatbotfolder";
import classes from "./App.module.css"

export const ThemeContext = createContext("light")
const App = () => {
  const [theme, setTheme] = useState("light");
  // const [color, setColor] = useState("#fff");
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? "dark" : "light"))
    // setColor(theme.theme==="dark" ? "#151515" : "#fff");
  }
  // const them1 = "";
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {console.log("The theme is " + theme)}
        <div className={theme === "dark" ? classes.dark : ""}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login-signup" element={<LoginSignupPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/projects/:projectId"
              element={<IndividualProjectPage />}
            />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/testing" element={<TestingPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Chatbotfolder />
          <Footer />
        </div>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
