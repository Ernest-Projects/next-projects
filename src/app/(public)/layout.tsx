import type { PropsWithChildren } from "react";
import { Header } from "../components/Header";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <main className="min-h-screen w-full h-full">
      <Header />
      <div className="w-full max-w-xl flex justify-center px-4 py-8">
        {children}
      </div>
    </main>
  );
}
