interface ProjectsI {
  title: string;
  link: string;
  imgSrc: string;
}

export interface ProjectCategoriesI {
  isActive: boolean;
  text: string;
}

export const projects: ProjectsI[] = [
  {
    title: "It has roots in a piece of",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-1.png",
  },
  {
    title: "Madri cal alaa",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-2.png",
  },
  {
    title: "Madri cal alaa",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-3.png",
  },
  {
    title: "Build The House Of Your Dreams",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-4.png",
  },
  {
    title: "Sapien nec ante sollicitudin",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-5.png",
  },
  {
    title: "Lorem ipsum dolor",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-6.png",
  },
  {
    title: "Ante sollicitudin luctus",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-7.png",
  },
  {
    title: "Dolores dellano",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-8.png",
  },
  {
    title: "Matrosko ver",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-9.png",
  },
  {
    title: "Ante sollicitudin luctus",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-1.png",
  },
  {
    title: "Matrosko ver",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-2.png",
  },
  {
    title: "Ante sollicitudin luctus",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-3.png",
  },
];

export const projectCategories: ProjectCategoriesI[] = [
  {
    isActive: true,
    text: "All",
  },
  {
    isActive: false,
    text: "Building",
  },
  {
    isActive: false,
    text: "Interior",
  },
  {
    isActive: false,
    text: "Design",
  },
  {
    isActive: false,
    text: "Plumbing",
  },
  {
    isActive: false,
    text: "Tilling",
  },
];
