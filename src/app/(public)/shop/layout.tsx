import type { PropsWithChildren } from "react";
import { LoadTypeData } from "./LoadTypeData";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <main className="min-h-screen w-full h-full">
      <div className="w-full max-w-xl flex flex-col justify-center px-4 py-8">
      <header className=" mb-4 text-2xl">Shop</header>
                      <LoadTypeData/>
        {children}
      </div>
    </main>
  );
}