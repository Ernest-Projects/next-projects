import Link from "next/link";
import Image from "next/image";
import { Menu } from "./Menu";

export const Header = () => {
  return (
    <>
      <header className="border-b border-white/10 px-6 py-4 flex items-center justify-between bg-black">
        <Link href={"/"} className="flex items-center gap-3">
          <Image
            src={"/X_icon_2.svg"}
            alt={"X icon"}
            width={28}
            height={28}
            priority
          />
        </Link>

        <Menu></Menu>
        
      </header>
    </>
  );
};
