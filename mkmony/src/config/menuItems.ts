interface MenuItemsI {
  id: number;
  label: string;
  link: string;
  isActive?: boolean;
}

export const menuItems: MenuItemsI[] = [
  { id: 1, label: "Home", link: "/", isActive: true },
  { id: 2, label: "About", link: "/about", isActive: false },
  { id: 3, label: "Services", link: "/services", isActive: false },
  { id: 4, label: "Portfolio", link: "/portfolio", isActive: false },
  { id: 6, label: "Contact", link: "/contact", isActive: false },
];
