interface projectsI {
  category: string;
  title: string;
  description: string;
  imgSrc: string;
}

export const projects: projectsI[] = [
  { 
    category: "Construction", 
    title: "Lorem ipsum dolor 1", 
    description: "The effort vastly improved the company’s planning and execution functions, created and implemented a new stock policy.", 
    imgSrc: "./assets/casebox-1.jpg" 
  },
  { 
    category: "Architecture", 
    title: "Lorem ipsum dolor 2", 
    description: "The effort vastly improved the company’s planning and execution functions, created and implemented a new stock policy.", 
    imgSrc: "./assets/casebox-2.jpg" 
  },
  { 
    category: "Construction", 
    title: "Lorem ipsum dolor 3", 
    description: "The effort vastly improved the company’s planning and execution functions, created and implemented a new stock policy.", 
    imgSrc: "./assets/casebox-3.jpg" 
  },
];
