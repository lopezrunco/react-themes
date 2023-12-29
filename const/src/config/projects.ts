interface ProjectsI {
  link: string;
  imgSrc: string;
}

export interface ProjectCategoriesI {
  isActive: boolean;
  text: string;
}

export const projects: ProjectsI[] = [
  {
    link: "/projects/projectdetail",
    imgSrc: "./assets/construction-project-1.png",
  },
  {
    link: "/projects/projectdetail",
    imgSrc: "./assets/construction-project-2.png",
  },
  {
    link: "/projects/projectdetail",
    imgSrc: "./assets/construction-project-3.png",
  },
  {
    link: "/projects/projectdetail",
    imgSrc: "./assets/construction-project-4.png",
  },
  {
    link: "/projects/projectdetail",
    imgSrc: "./assets/construction-project-5.png",
  },
  {
    link: "/projects/projectdetail",
    imgSrc: "./assets/construction-project-6.png",
  },
  {
    link: "/projects/projectdetail",
    imgSrc: "./assets/construction-project-7.png",
  },
  {
    link: "/projects/projectdetail",
    imgSrc: "./assets/construction-project-8.png",
  },
  {
    link: "/projects/projectdetail",
    imgSrc: "./assets/construction-project-9.png",
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
