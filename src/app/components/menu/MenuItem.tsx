import Link from "next/link";
import type { IMenuProps } from "./menu.config";

type TMenuItem =  {
  isActive: boolean,
  item: IMenuProps
};


export const MenuItem = ({item, isActive}: TMenuItem) => {
  return (
    <>
      <Link className={`${isActive ? "text-white" : ""} transition-colors hover:text-white`} href = {item.href}>
        {item.name}
      </Link>
    </>
  );
};
