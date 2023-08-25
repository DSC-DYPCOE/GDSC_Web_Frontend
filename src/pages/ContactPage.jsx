import React, { useEffect } from "react";
import ContactUs from "../components/ContactUs/ContactUs";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return <ContactUs/>;
};

export default ContactPage;
