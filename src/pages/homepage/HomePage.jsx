import React from "react";
import Showcase from "../../components/showcase/Showcase";
import Directory from "../../components/directory/Directory";
import Section from "../../components/section-footer/Section";

const HomePage = () => {
  return (
    <div>
      <Showcase />
      <Directory />
      <Section />
    </div>
  );
};

export default HomePage;
