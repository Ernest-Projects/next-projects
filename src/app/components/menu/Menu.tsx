"use client";

import { PAGES } from "@/config/pages.config";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { MenuItem } from "./MenuItem";
import { MENU } from "./menu.config";

export const Menu = () => {
  const pathname = usePathname();
  const segment = useSelectedLayoutSegment();

  // console.log("pathname: ", pathname);
  // console.log("segment: ", segment);


  // console.log("mathes: ", pathname.startsWith(`/profile`));
  // console.log("substring: ", pathname.substring(1));
  // console.log("exsist: ", pathname[100])

  
  return (
    <>

      <nav className="flex gap-6  text-white/80">

        {MENU.map((item, index) => {
          return (
            <MenuItem
              key={index}
              item = {item}
              isActive={ item.href == "/" ? pathname == "/" : item.href == pathname || pathname.startsWith(item.href)}
            />
          );
        })}
      </nav>
    </>
  );
};
