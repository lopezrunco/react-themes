interface SlideItemI {
  isActive: boolean;
  imgSrc: string;
  imgAlt: string;
  captionLead: string;
  captionTitle: string;
  captionSubtitle: string;
  link: string;
  linkText: string;
}

export const slides: SlideItemI[] = [
  {
    isActive: true,
    imgSrc: "./assets/slide-1.png",
    imgAlt: "First slide",
    captionLead: "Lorem ipsum dolor sit amet.",
    captionTitle: "Slide 1",
    captionSubtitle: "Construction group of industry",
    link: "/projects",
    linkText: "View proyects",
  },
  {
    isActive: false,
    imgSrc: "./assets/slide-2.png",
    imgAlt: "First slide",
    captionLead: "Lorem ipsum dolor sit amet.",
    captionTitle: "Slide 2",
    captionSubtitle: "Construction group of industry",
    link: "/projects",
    linkText: "View proyects",
  },
  {
    isActive: false,
    imgSrc: "./assets/slide-3.png",
    imgAlt: "First slide",
    captionLead: "Lorem ipsum dolor sit amet.",
    captionTitle: "Slide 3",
    captionSubtitle: "Construction group of industry",
    link: "/projects",
    linkText: "View proyects",
  },
];
