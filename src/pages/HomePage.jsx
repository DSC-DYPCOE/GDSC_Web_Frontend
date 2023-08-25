import React, { useEffect } from "react";
import HomeSection from "../components/HomeSection/HomeSection";

// import Chatbotfolder from "../components/common/chatbot/Chatbotfolder";

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <HomeSection />
    </>
  );
};

export default Homepage;
