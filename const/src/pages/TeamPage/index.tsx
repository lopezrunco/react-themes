import React from "react";

import { TeamList } from "../../components/TeamList";
import { Brands } from "../../components/Brands";
import { Breadcrumbs } from "../../components/Breadcrumbs";

export const TeamPage: React.FC = () => {
  return (
    <React.Fragment>
      <Breadcrumbs
        imgSrc="./assets/slide-2.png"
        title="Teams"
        subtitle="Meet our amazing people"
      />
      <TeamList />
      <Brands />
    </React.Fragment>
  );
};
