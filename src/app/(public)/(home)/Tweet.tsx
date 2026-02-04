import { PAGES } from "@/config/profile.config";
import type { ITweet } from "@/shared/types/tweets.types";
import Image from "next/image";

import Link from "next/link";

interface Props {
  tweet: ITweet;
}

export const Tweet = ({ tweet }: Props) => {
  return (
    <>
      <div className="w-full h-fit border-neutral-500/20  border rounded-md gap-4 px-4 py-2 text-white ">
        <div className="rounded-full items-center w-8 h-8 flex flex-row">
          
          <Image src="/X_icon_2.svg" width = {24} height={24} alt="x-logo" />

          <Link href={PAGES.PROFILE(tweet.author)} className="ml-2 text-sm">@{tweet.author}</Link>
        </div>

        <p className="ml-2 text-sm">{tweet.content}</p>
      </div>
    </>
  );
};
