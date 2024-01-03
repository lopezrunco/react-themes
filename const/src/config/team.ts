export interface TeamMemberI {
  imgSrc: string;
  name: string;
  role: string;
  social: { link: string; icon: string }[];
}

export const team: TeamMemberI[] = [
  {
    imgSrc: "./assets/team-member-avatar-1.png",
    name: "Madrian Cox",
    role: "CEO",
    social: [
      {
        link: "#",
        icon: "fa fa-facebook",
      },
      {
        link: "#",
        icon: "fa fa-twitter",
      },
      {
        link: "#",
        icon: "fa fa-linkedin",
      },
    ],
  },
  {
    imgSrc: "./assets/team-member-avatar-2.png",
    name: "Lauren Sage",
    role: "Developer",
    social: [
      {
        link: "#",
        icon: "fa fa-facebook",
      },
      {
        link: "#",
        icon: "fa fa-twitter",
      },
      {
        link: "#",
        icon: "fa fa-linkedin",
      },
    ],
  },
  {
    imgSrc: "./assets/team-member-avatar-3.png",
    name: "John Doe",
    role: "Lead Coordinator",
    social: [
      {
        link: "#",
        icon: "fa fa-facebook",
      },
      {
        link: "#",
        icon: "fa fa-twitter",
      },
    ],
  },
  {
    imgSrc: "./assets/team-member-avatar-4.png",
    name: "Remy Lacroix",
    role: "Lead Coordinator",
    social: [
      {
        link: "#",
        icon: "fa fa-twitter",
      },
      {
        link: "#",
        icon: "fa fa-linkedin",
      },
    ],
  },
  {
    imgSrc: "./assets/team-member-avatar-5.png",
    name: "Fasten Mendes",
    role: "Manager",
    social: [
      {
        link: "#",
        icon: "fa fa-facebook",
      },
      {
        link: "#",
        icon: "fa fa-linkedin",
      },
    ],
  },
  {
    imgSrc: "./assets/team-member-avatar-6.png",
    name: "Lauren Mendez",
    role: "CEO",
    social: [
      {
        link: "#",
        icon: "fa fa-facebook",
      },
      {
        link: "#",
        icon: "fa fa-twitter",
      },
      {
        link: "#",
        icon: "fa fa-linkedin",
      },
    ],
  },
];
