import React, { useEffect } from "react";
// import ProjectCard from "../components/common/ProjectCard/ProjectCard";
import ProjectSection from "../components/ProjectSection/ProjectSection";
const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <>
      <ProjectSection />
    </>
  );
};

export default ProjectsPage;
