export interface AboutInfoI {
  aboutText: string[];
  relatedLinks: RelatedLinkI[];
  copyrightText: string;
  developer: developerI;
}

interface RelatedLinkI {
  title: string;
  link: string;
}

interface developerI {
  title: string;
  link: string;
}

export const about: AboutInfoI = {
  aboutText: [
    "Claritas est etiam processus dynamicus, il qui sequitur mutationem consuetudium sit lectorum.",
    "Processus dynamicus, qui sequitur lorims mutationem.",
  ],
  relatedLinks: [
    { title: "Unique Experience", link: "#" },
    { title: "Strategic Planning", link: "#" },
    { title: "Global Solutions", link: "#" },
    { title: "Unlimited Features", link: "#" },
    { title: "Stair Communication", link: "#" },
    { title: "Fully Responsive", link: "#" },
  ],
  copyrightText: "Const web - Copyright 2020.",
  developer: { title: " membrillo", link: "https://lopezrunco.com" },
};
