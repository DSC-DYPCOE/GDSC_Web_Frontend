import React, { useEffect } from "react";
// import EventCard from "../components/common/EventCard/EventCard";
import Events from "../components/EventsSection/Events";

const EventsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return(
    <Events />
  )
};

export default EventsPage;
