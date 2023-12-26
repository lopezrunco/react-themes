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