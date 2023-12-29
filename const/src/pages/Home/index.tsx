import React from "react";
import { Slider } from "../../components/Slider";
import { Services } from "../../components/Services";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Slider />
      <Services />
    </React.Fragment>
  );
};
