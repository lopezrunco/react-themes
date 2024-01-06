interface LinkItem {
  title: string;
  link: string;
  btnClassName: string;
}

interface SlideItemI {
  title: string;
  content: string;
  links: LinkItem[];
  imgSrc: string;
}

export const slides: SlideItemI[] = [
  {
    title: "MKmoney theme",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit culpa nesciunt id maiores, rerum sunt ducimus repellat hic veniam provident amet voluptate accusamus, nemo laboriosam fugit sint pariatur cum fugiat",
    links: [
      { title: 'About us', link: '/about', btnClassName: 'btn normal-btn' },
      { title: 'Contact us', link: '/contact', btnClassName: 'btn outline-btn' }
    ],
    imgSrc:"./assets/slide.jpg"
  },
];
