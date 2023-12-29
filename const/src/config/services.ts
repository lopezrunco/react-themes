export interface ServiceItemI {
  id: number;
  size: string;
  categories: string;
  title: string;
  description: string;
  name: string;
  text: string;
  content: string;
  icon: string;
  link: string;
}

export const services: ServiceItemI[] = [
  {
    id: 1,
    size: "col-lg-4",
    categories: "Provide, construction, Services",
    title: "Our services item 1",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sint perspiciatis quidem amet earum sunt eos reprehenderit animi beatae odit?",
    name: "phone",
    text: "Phone",
    content: "0350 8898",
    icon: "fa fa-home",
    link: "#",
  },
  {
    id: 2,
    size: "col-lg-4",
    categories: "Provide, construction, Services",
    title: "Our services item 2",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sint perspiciatis quidem amet earum sunt eos reprehenderit animi beatae odit?",
    name: "email",
    text: "Email",
    content: "admin@email.com",
    icon: "fa fa-bolt",
    link: "#",
  },
  {
    id: 3,
    size: "col-lg-4",
    categories: "Provide, construction, Services",
    title: "Our services item 3",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores sint perspiciatis quidem amet earum sunt eos reprehenderit animi beatae odit?",
    name: "address",
    text: "Address",
    content: "123 Street, City",
    icon: "fa fa-pencil",
    link: "#",
  },
];
