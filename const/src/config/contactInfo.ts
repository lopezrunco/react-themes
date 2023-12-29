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
    link: "fa fa-envelope-open",
  },
];
