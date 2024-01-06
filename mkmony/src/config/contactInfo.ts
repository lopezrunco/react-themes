interface ContactInfoI {
  id: number;
  name: string;
  text: string;
  content: string;
  icon: string;
  link: string;
}

interface LocationsI {
  title: string;
  location: string;
}

interface SocialItemsI {
  title: string;
  iconClass: string;
  link: string;
}

export const contactInfo: ContactInfoI[] = [
  {
    id: 1,
    name: "phone",
    text: "Phone",
    content: "+598 0350 8898",
    icon: "fa fa-phone",
    link: "tel:+59803508898",
  },
  {
    id: 2,
    name: "email",
    text: "Email",
    content: "admin@email.com",
    icon: "fa fa-envelope",
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
];

export const locations: LocationsI[] = [
  {title: "New York", location: "13th Street. 47 W 13th St, NY 10011 +1 646-610-5000"},
  {title: "Kansas City", location: "Sherwood St. Sacramento, CA 95823 +1 408-277-8900"}
]

export const social: SocialItemsI[] = [
  {title: "Facebook", iconClass: "fab fa-facebook-square", link: "#"},
  {title: "Twitter", iconClass: "fab fa-twitter", link: "#"},
  {title: "Youtube", iconClass: "fab fa-youtube", link: "#"},
  {title: "Instagram", iconClass: "fab fa-instagram", link: "#"},
]