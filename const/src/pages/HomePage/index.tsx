import React from "react";

import { Slider } from "../../components/Slider";
import { Services } from "../../components/Services";
import { WeProvide } from "../../components/WeProvide";
import { WhyChoseUs } from "../../components/WhyChoseUs";
import { Projects } from "../../components/Projects";
import { Help } from "../../components/Help";
import { Testimonials } from "../../components/Testimonials";
import { BlogList } from "../../components/BlogList";
import { Brands } from "../../components/Brands";

export const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <Slider />
      <Services items={3} viewMore={true} />
      <WeProvide />
      <WhyChoseUs />
      <Projects items={6} />
      <Help />
      <Testimonials />
      <BlogList items={2} viewMore={true} />
      <Brands />
    </React.Fragment>
  );
};
