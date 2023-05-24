import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  EventsPage,
  ContactPage,
  LoginSignupPage,
  NotFoundPage,
  ProjectsPage,
  TeamPage,
  IndividualProjectPage,
  TestingPage,
  AboutPage,
} from "./pages";
import { Navbar, Footer } from "./components/index";
import { Page404 } from "./pages/Page404";
import Chatbotfolder from "./components/common/chatbot/Chatbotfolder";
import LogoSVG from "./components/common/chatbot/logosvg";

export const ThemeContext = createContext("light")


const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? "dark" : "light"))
  }
  return (
    <>
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
      <Footer />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Chatbotfolder />
        <Footer />
        <LogoSVG />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
