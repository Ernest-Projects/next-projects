'use client'

import { PAGES } from "@/config/profile.config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Menu = () => {
    const pathname = usePathname();

    return (<>
      <nav className="flex gap-6  text-white/80">
            <Link className={(pathname === PAGES.HOME) ? "text-white" : ""} href="/">Home</Link>
            <Link href="/explore">Explore</Link>
            <Link href={PAGES.PROFILE("ernest")}>Profile</Link>

         </nav>
    </>)
}