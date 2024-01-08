interface AboutI {
  briefAboutUs: string;
  aboutUs: string[];
  whyUs: string[];
  quote: string;
  quotegImgSrc: string;
  footerMesage: string;
  footerImgSrc: string;
  aboutImgSrc: string;
  aboutVideoSrc: string;
  aboutVideoText: string[];
}

interface MissionI {
  title: string;
  icon: string;
  description: string;
}

export const about: AboutI[] = [
  {
    briefAboutUs: "Before we talk destination, we shine a spotlight across your organization to fully understand its people, processes, and technology.",
    aboutUs: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem aperiam explicabo quia ducimus mollitia iste placeat nihil quo recusandae.", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem aperiam explicabo quia ducimus mollitia iste placeat nihil quo recusandae.", "Lorem ipsum dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit."],
    whyUs: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatem aperiam explicabo quia ducimus mollitia iste placeat nihil quo recusandae.", "Lorem ipsum dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut saepe explicabo totam inventore quas reiciendis. Recusandae porro, magni voluptates dolores atque, unde exercitationem quos nemo saepe illo, distinctio aperiam? Dolorem quaerat, officia esse,neque quis velit odit eligendi libero culpa cupiditate et a omnis natus asperiores doloremque modi. Dolorum, nihil.", "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut saepe explicabo totam inventore quas reiciendis. Recusandae porro, magni voluptates dolores atque, unde exercitationem quos nemo saepe illo, distinctio aperiam? Dolorem quaerat, officia esse,neque quis velit odit eligendi libero culpa cupiditate et a omnis natus asperiores doloremque modi. Dolorum, nihil."],
    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto possimus, laudantium porro modi deserunt omnis?",
    quotegImgSrc: "./assets/mission.jpg",
    footerMesage: "Lorem ipsum dolor sit amet consecteturs harum officia, consequatur distinctio rem porro.",
    footerImgSrc: "./assets/mission_bg_2.jpg",
    aboutImgSrc: "./assets/about.jpg",
    aboutVideoSrc: "../assets/example-video.mp4",
    aboutVideoText: [
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut saepe explicabo totam inventore quas reiciendis. Recusandae porro, magni voluptates dolores atque, unde exercitationem quos nemo saepe illo, distinctio aperiam? Dolorem quaerat, officia esse,neque quis velit odit eligendi libero culpa cupiditate et a omnis natus asperiores doloremque modi. Dolorum, nihil.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut saepe explicabo totam inventore quas reiciendis. Recusandae porro, magni voluptates dolores atque, unde exercitationem quos nemo saepe illo, distinctio aperiam? Dolorem quaerat, officia esse,neque quis velit odit eligendi libero culpa cupiditate et a omnis natus asperiores doloremque modi. Dolorum, nihil.',
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut saepe explicabo totam inventore quas reiciendis. Recusandae porro, magni voluptates dolores atque, unde exercitationem quos nemo saepe illo, distinctio aperiam? Dolorem quaerat, officia esse,neque quis velit odit eligendi libero culpa cupiditate et a omnis natus asperiores doloremque modi. Dolorum, nihil.',
    ]
  }
];

export const mission: MissionI[] = [
  {
    title: 'Lorem, ipsum dolor.',
    icon: 'fas fa-eye',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos placeat error quibusdam aliquid ratione eum ducimus quasi nisi, mollitia quaerat.'
  },
  {
    title: 'Lorem, ipsum dolor.',
    icon: 'fas fa-coins',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos placeat error quibusdam aliquid ratione eum ducimus quasi nisi, mollitia quaerat.'
  },
  {
    title: 'Lorem, ipsum dolor.',
    icon: 'fas fa-atom',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos placeat error quibusdam aliquid ratione eum ducimus quasi nisi, mollitia quaerat.'
  },
]