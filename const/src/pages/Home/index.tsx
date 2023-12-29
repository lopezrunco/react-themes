import React from "react";

import { Slider } from "../../components/Slider";
import { Services } from "../../components/Services";
import { WeProvide } from "../../components/WeProvide";
import { WhyChoseUs } from "../../components/WhyChoseUs";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Slider />
      <Services />
      <WeProvide />
      <WhyChoseUs />
    </React.Fragment>
  );
};
