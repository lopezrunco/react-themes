import React from "react";

import { RecentNews } from "../RecentNews";
import { OurProjects } from "../OurProjects";
import { Archives } from "../Archives";
import { ContactInfo } from "../ContactInfo";

export const SideBar: React.FC = () => {
  return (
    <aside className="col-lg-3 sidebar">
      <RecentNews items={3} />
      <OurProjects items={4} />
      <Archives />
      <ContactInfo />
    </aside>
  );
};
