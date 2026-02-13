import { postTweet } from "@/server-actions/post-tweet";

export function TweetForm() {
  return (
    <form
      action={postTweet}
      className="bg-transparent w-full border-white/10 border mb-6 px-4 py-2 space-y-2 rounded-md text-sm flex justify-between flex-col"
    >
      <input
        type="text"
        name="content"
        className="w-full h-12 text-sm focus:outline-none"
        placeholder="Your feelings..."
      />
      <div className="flex justify-between">
        <button className="text-neutral-500">Have a problem?</button>
        <button type="submit" className="text-black font-semibold bg-white rounded-full  px-4 py-2">
          Tweet
        </button>
      </div>
    </form>
  );
}
