export interface MenuItem {
  id: number;
  label: string;
  link: string;
  isActive?: boolean;
}

export interface SocialMediaItem {
  id: number;
  name: string;
  iconClass: string;
  link: string;
}

export interface SlideProps {
  isActive: boolean;
  imgSrc: string;
  imgAlt: string;
  captionLead: string;
  captionTitle: string;
  captionSubtitle: string;
  link: string;
  linkText: string;
}