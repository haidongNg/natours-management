export interface IMenu {
  title: string;
  isActive: boolean;
  url: string,
  subMenu: SubMenu[];
}

interface SubMenu {
  name: string;
  subUrl: string;
  isActive: boolean;
}
