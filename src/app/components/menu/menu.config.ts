import { PAGES } from "@/config/pages.config";


export interface IMenuProps  {
    href: string,
    name: string
}

export const MENU: IMenuProps[] = [
    {
        href: PAGES.HOME,
        name: "Home" 
    },
    {
        href: PAGES.EXPLORE,
        name: "Explore"
    },
    {
        href: PAGES.LOCAL_PROFILE,
        name: "Profile"
    } ,
    {
        href: PAGES.LOCAL_SHOP,
        name: "Shop"
    } 
]; 