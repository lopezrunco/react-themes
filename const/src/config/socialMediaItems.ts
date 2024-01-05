export interface SocialMediaItemI {
  id: number;
  name: string;
  iconClass: string;
  link: string;
}

export const socialMediaItems: SocialMediaItemI[] = [
  { id: 1, name: "Facebook", iconClass: "fa fa-facebook text-dark", link: "#" },
  {
    id: 2,
    name: "GooglePlus",
    iconClass: "fa fa-google-plus text-dark",
    link: "#",
  },
  { id: 3, name: "Twitter", iconClass: "fa fa-twitter text-dark", link: "#" },
  { id: 4, name: "LinkedIn", iconClass: "fa fa-linkedin text-dark", link: "#" },
];
