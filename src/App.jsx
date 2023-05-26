import React, { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  EventsPage,
  ContactPage,
  LoginSignupPage,
<<<<<<< HEAD
  // NotFoundPage,
=======
>>>>>>> 930ac2beee3b8c88d26c503f2d88359f9fe00345
  ProjectsPage,
  TeamPage,
  IndividualProjectPage,
  TestingPage,
  AboutPage,
  // Page404,
} from "./pages";
import Page404 from "./pages/Page404";
import { Navbar, Footer } from "./components/index";
<<<<<<< HEAD
import Page404  from "./pages/Page404";
=======
>>>>>>> 930ac2beee3b8c88d26c503f2d88359f9fe00345
import Chatbotfolder from "./components/common/chatbot/Chatbotfolder";

export const ThemeContext = createContext("light")
<<<<<<< HEAD


=======
>>>>>>> 930ac2beee3b8c88d26c503f2d88359f9fe00345
const App = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? "dark" : "light"))
  }
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Navbar />
<<<<<<< HEAD
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
=======
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
>>>>>>> 930ac2beee3b8c88d26c503f2d88359f9fe00345
        <Footer />
      </ThemeContext.Provider>
    </>
  );
};

export default App;
