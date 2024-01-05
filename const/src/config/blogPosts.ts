export interface BlogPostI {
  imgSrc: string;
  title: string;
  categories: string[];
  description: string;
  author: {
    name: string;
    date: string;
    avatarSrc: string;
  };
  link: string;
}

export interface BlogArchivesI {
  date: string;
  link: string;
}

export const blogPosts: BlogPostI[] = [
  {
    imgSrc: "../assets/construction-blog-post-thumb-1.png",
    title: "Integrated design engineering",
    categories: ["Provide,", "Services,", "Services"],
    description:
      "Lorem ipsum dolor sit amet, conse nil adipiscing Donec nec eros tristiq...",
    author: {
      name: "John Smith",
      date: "21 July 2022",
      avatarSrc: "../assets/construction-blog-post-avatar.png",
    },
    content: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem. Qui ex sapiente officia iure in harum, autem consectetur rerum quisquam delectus corrupti inventore facilis temporibus iusto corporis tempore reprehenderit quaerat excepturi!', 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem.',
      'Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem. Qui ex sapiente officia iure in harum, autem consectetur rerum quisquam delectus corrupti inventore facilis temporibus iusto corporis tempore reprehenderit quaerat excepturi!'
      ],
    link: "/blog/post",
  },
  {
    imgSrc: "../assets/construction-blog-post-thumb-2.png",
    title: "Integrated design engineering construction",
    categories: ["Provide,", "Services,", "Services"],
    description:
      "Lorem ipsum dolor sit amet, conse nil adipiscing Donec nec eros tristiq...",
    author: {
      name: "John Smith",
      date: "21 July 2021",
      avatarSrc: "../assets/construction-blog-post-avatar.png",
    },
    content: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem. Qui ex sapiente officia iure in harum, autem consectetur rerum quisquam delectus corrupti inventore facilis temporibus iusto corporis tempore reprehenderit quaerat excepturi!', 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem.',
      'Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem. Qui ex sapiente officia iure in harum, autem consectetur rerum quisquam delectus corrupti inventore facilis temporibus iusto corporis tempore reprehenderit quaerat excepturi!'
      ],
    link: "/blog/post",
  },
  {
    imgSrc: "../assets/construction-blog-post-thumb-1.png",
    title: "Integrated design engineering construction",
    categories: ["Provide,", "Services,", "Services"],
    description:
      "Lorem ipsum dolor sit amet, conse nil adipiscing Donec nec eros tristiq...",
    author: {
      name: "John Smith",
      date: "21 July 2021",
      avatarSrc: "../assets/construction-blog-post-avatar.png",
    },
    content: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem. Qui ex sapiente officia iure in harum, autem consectetur rerum quisquam delectus corrupti inventore facilis temporibus iusto corporis tempore reprehenderit quaerat excepturi!', 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem.',
      'Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem. Qui ex sapiente officia iure in harum, autem consectetur rerum quisquam delectus corrupti inventore facilis temporibus iusto corporis tempore reprehenderit quaerat excepturi!'
      ],
    link: "/blog/post",
  },
  {
    imgSrc: "../assets/construction-blog-post-thumb-2.png",
    title: "Integrated design engineering construction",
    categories: ["Provide,", "Services,", "Services"],
    description:
      "Lorem ipsum dolor sit amet, conse nil adipiscing Donec nec eros tristiq...",
    author: {
      name: "John Smith",
      date: "21 July 2021",
      avatarSrc: "../assets/construction-blog-post-avatar.png",
    },
    content: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem. Qui ex sapiente officia iure in harum, autem consectetur rerum quisquam delectus corrupti inventore facilis temporibus iusto corporis tempore reprehenderit quaerat excepturi!', 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem.',
      'Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem. Qui ex sapiente officia iure in harum, autem consectetur rerum quisquam delectus corrupti inventore facilis temporibus iusto corporis tempore reprehenderit quaerat excepturi!'
      ],
    link: "/blog/post",
  },
  {
    imgSrc: "../assets/construction-blog-post-thumb-1.png",
    title: "Integrated design engineering construction",
    categories: ["Provide,", "Services,", "Services"],
    description:
      "Lorem ipsum dolor sit amet, conse nil adipiscing Donec nec eros tristiq...",
    author: {
      name: "John Smith",
      date: "21 July 2021",
      avatarSrc: "../assets/construction-blog-post-avatar.png",
    },
    content: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem. Qui ex sapiente officia iure in harum, autem consectetur rerum quisquam delectus corrupti inventore facilis temporibus iusto corporis tempore reprehenderit quaerat excepturi!', 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem.',
      'Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem. Qui ex sapiente officia iure in harum, autem consectetur rerum quisquam delectus corrupti inventore facilis temporibus iusto corporis tempore reprehenderit quaerat excepturi!'
      ],
    link: "/blog/post",
  },
  {
    imgSrc: "../assets/construction-blog-post-thumb-2.png",
    title: "Integrated design engineering construction",
    categories: ["Provide,", "Services,", "Services"],
    description:
      "Lorem ipsum dolor sit amet, conse nil adipiscing Donec nec eros tristiq...",
    author: {
      name: "John Smith",
      date: "21 July 2021",
      avatarSrc: "../assets/construction-blog-post-avatar.png",
    },
    content: [
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem. Qui ex sapiente officia iure in harum, autem consectetur rerum quisquam delectus corrupti inventore facilis temporibus iusto corporis tempore reprehenderit quaerat excepturi!', 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem.',
      'Omnis iste non, ratione dolores repellat officia ab eum saepe sapiente ipsum magnam iusto esse autem illum repudiandae assumenda quidem. Qui ex sapiente officia iure in harum, autem consectetur rerum quisquam delectus corrupti inventore facilis temporibus iusto corporis tempore reprehenderit quaerat excepturi!'
      ],
    link: "/blog/post",
  },
];

export const blogArchives: BlogArchivesI[] = [
  {
    date: 'January 2014',
    link: "/"
  },
  {
    date: 'Septemeber 2015',
    link: "/"
  },
  {
    date: 'August 2015',
    link: "/"
  },
  {
    date: 'July 2015',
    link: "/"
  },
  {
    date: 'June 2015',
    link: "/"
  },
]