import React, { useEffect } from "react";
import AboutUs from "../components/AboutUs/AboutUs";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return <AboutUs/>;
};

export default AboutPage;
