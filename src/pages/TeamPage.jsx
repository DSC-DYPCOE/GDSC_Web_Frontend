import React, { useEffect } from "react";
import TeamsPage from "../components/TeamsPage/TeamsPage";

const TeamPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return <TeamsPage />;
};

export default TeamPage;
