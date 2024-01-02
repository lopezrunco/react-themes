import React from "react";

import { Slider } from "../../components/Slider";
import { Services } from "../../components/Services";
import { WeProvide } from "../../components/WeProvide";
import { WhyChoseUs } from "../../components/WhyChoseUs";
import { Projects } from "../../components/Projects";
import { Help } from "../../components/Help";
import { Testimonials } from "../../components/Testimonials";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Slider />
      <Services />
      <WeProvide />
      <WhyChoseUs />
      <Projects />
      <Help />
      <Testimonials />
    </React.Fragment>
  );
};
