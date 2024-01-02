import React from "react";

import { Slider } from "../../components/Slider";
import { Services } from "../../components/Services";
import { WeProvide } from "../../components/WeProvide";
import { WhyChoseUs } from "../../components/WhyChoseUs";
import { Projects } from "../../components/Projects";
import { Help } from "../../components/Help";
import { Testimonials } from "../../components/Testimonials";
import { LatestBlog } from "../../components/LatestBlog";
import { Brands } from "../../components/Brands";

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
      <LatestBlog />
      <Brands />
    </React.Fragment>
  );
};
