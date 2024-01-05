interface ContactInfoI {
  id: number;
  name: string;
  text: string;
  content: string;
  icon: string;
  link: string;
}

export const contactInfo: ContactInfoI[] = [
  {
    id: 1,
    name: "phone",
    text: "Phone",
    content: "0350 8898",
    icon: "fa fa-phone",
    link: "tel:12345678901",
  },
  {
    id: 2,
    name: "email",
    text: "Email",
    content: "admin@email.com",
    icon: "fa fa-phone",
    link: "#",
  },
  {
    id: 3,
    name: "hours",
    text: "Hours",
    content: "Monday - Friday, 9am - 6 pm",
    icon: "fa fa-clock-o",
    link: "#",
  },
  {
    id: 4,
    name: "directions",
    text: "Directions",
    content: "San Francisco, USA",
    icon: "fa fa-map-marker",
    link: "#",
  },
];
