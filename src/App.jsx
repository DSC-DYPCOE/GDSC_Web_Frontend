import React from "react";
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
} from "./pages";
import { Navbar, Footer } from "./components/index";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login-signup" element={<LoginSignupPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/" element={<ProjectsPage />} />
        <Route path="/" element={<IndividualProjectPage />} />
        <Route path="/" element={<TeamPage />} />
        <Route path="/" element={<ContactPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
