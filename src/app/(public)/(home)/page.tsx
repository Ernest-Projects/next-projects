import Image from "next/image";
import { Tweet } from "./Tweet";
import type { ITweet } from "@/shared/types/tweets.types";
import { KITCHEN_TWEETS } from "@/shared/data/tweets.data";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main>
      <div>
      <header className="my-6 text-2xl">Home</header>

      <div className="space-y-6">
        {KITCHEN_TWEETS.map((item, index) => {
          return <Tweet key={index} tweet={item} />;
        })}
      </div>
      </div>
    </main>
  );
}
