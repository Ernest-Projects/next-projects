import { PAGES } from "@/config/pages.config";
import Link from "next/link";

export function LoadTypeData() {
  const styles = "rounded-xl bg-neutral-800 py-2 px-4 border-white/30 border text-white";
  return (
    <>
      <section className="flex h-fit w-fit flex-row space-x-2 justify-between mb-10">
        <Link
          className={styles}
          href={PAGES.LOCAL_SHOP}
        >
          SSR
        </Link>
        <Link
          className={styles}
          href={PAGES.ISR}
        >
          ISR
        </Link>
        <Link
          className={styles}
          href={PAGES.SSG}
        >
          SSG
        </Link>
      </section>
    </>
  );
}
