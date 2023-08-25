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
  Page404,
} from "./pages";
// import Page404 from "./pages/Page404";
import { Navbar, Footer } from "./components/index";
// import Page404  from "./pages/Page404";
import Chatbotfolder from "./components/common/chatbot/Chatbotfolder";
import Preloader from "./components/Preloader/Preloader";
import { useEffect } from "react";
// import { getTeamsData } from './getData/getTeamsData'
// import { getEventsData } from "./getData/getEventsData";
// import LandingBG from "./components/common/LandingBackground/LandingBG";

export const ThemeContext = createContext(null)


const App = () => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  const [theme, setTheme] = useState(systemTheme);
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? "dark" : "light"))
  }

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }, [])

  return (
    <>

      {loading && <Preloader loaderTime={"2s"} />}

      {!loading && <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Navbar />
        <Routes>
          {theme !== "light" ? document.body.style.backgroundColor = "#151515" : document.body.style.backgroundColor = "white"}
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
      </ThemeContext.Provider>}
    </>
  );
};

export default App;
