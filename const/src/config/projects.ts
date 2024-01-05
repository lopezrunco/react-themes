interface ProjectsI {
  title: string;
  subtitle: string;
  client: string;
  area: string;
  value: string;
  location: string;
  year: number;
  architect: string;
  link: string;
  imgSrc: string;
}

export interface ProjectCategoriesI {
  isActive: boolean;
  text: string;
}

export const projects: ProjectsI[] = [
  {
    title: "It has roots in a piece of side",
    subtitle: "Lorem ipsum damal solar",
    client: "A Big Company",
    area: "100,000 m2",
    value: "$150.000",
    location: "Montevideo, Uruguay",
    year: 2021,
    architect: "Jack Deripper",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-1.png",
  },
  {
    title: "Madri cal alaa",
    subtitle: "Lorem ipsum damal",
    client: "A Big Company",
    area: "100,000 m2",
    value: "$150.000",
    location: "Montevideo, Uruguay",
    year: 2021,
    architect: "Jack Deripper",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-2.png",
  },
  {
    title: "Madri cal alaa",
    subtitle: "Lorem ipsum damal",
    client: "A Big Company",
    area: "100,000 m2",
    value: "$150.000",
    location: "Montevideo, Uruguay",
    year: 2021,
    architect: "Jack Deripper",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-3.png",
  },
  {
    title: "Build The House Of Your Dreams",
    subtitle: "Lorem ipsum damal",
    client: "A Big Company",
    area: "100,000 m2",
    value: "$150.000",
    location: "Montevideo, Uruguay",
    year: 2021,
    architect: "Jack Deripper",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-4.png",
  },
  {
    title: "Sapien nec ante sollicitudin",
    subtitle: "Lorem ipsum damal",
    client: "A Big Company",
    area: "100,000 m2",
    value: "$150.000",
    location: "Montevideo, Uruguay",
    year: 2021,
    architect: "Jack Deripper",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-5.png",
  },
  {
    title: "Lorem ipsum dolor",
    subtitle: "Lorem ipsum damal",
    client: "A Big Company",
    area: "100,000 m2",
    value: "$150.000",
    location: "Montevideo, Uruguay",
    year: 2021,
    architect: "Jack Deripper",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-6.png",
  },
  {
    title: "Ante sollicitudin luctus",
    subtitle: "Lorem ipsum damal",
    client: "A Big Company",
    area: "100,000 m2",
    value: "$150.000",
    location: "Montevideo, Uruguay",
    year: 2021,
    architect: "Jack Deripper",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-7.png",
  },
  {
    title: "Dolores dellano",
    subtitle: "Lorem ipsum damal",
    client: "A Big Company",
    area: "100,000 m2",
    value: "$150.000",
    location: "Montevideo, Uruguay",
    year: 2021,
    architect: "Jack Deripper",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-8.png",
  },
  {
    title: "Matrosko ver",
    subtitle: "Lorem ipsum damal",
    client: "A Big Company",
    area: "100,000 m2",
    value: "$150.000",
    location: "Montevideo, Uruguay",
    year: 2021,
    architect: "Jack Deripper",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-9.png",
  },
  {
    title: "Ante sollicitudin luctus",
    subtitle: "Lorem ipsum damal",
    client: "A Big Company",
    area: "100,000 m2",
    value: "$150.000",
    location: "Montevideo, Uruguay",
    year: 2021,
    architect: "Jack Deripper",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-1.png",
  },
  {
    title: "Matrosko ver",
    subtitle: "Lorem ipsum damal",
    client: "A Big Company",
    area: "100,000 m2",
    value: "$150.000",
    location: "Montevideo, Uruguay",
    year: 2021,
    architect: "Jack Deripper",
    link: "/projects/item",
    imgSrc: "./assets/construction-project-2.png",
  },
  {
    title: "Ante sollicitudin luctus",
    subtitle: "Lorem ipsum damal",
    client: "A Big Company",
    area: "100,000 m2",
    value: "$150.000",
    location: "Montevideo, Uruguay",
    year: 2021,
    architect: "Jack Deripper",
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
