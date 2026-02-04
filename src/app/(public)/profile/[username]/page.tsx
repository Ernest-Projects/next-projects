import BackToHome from "@/app/components/BackToHome";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Profile",
};

export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
    const  {username } = await params; 

    return (
    <div>
      {" "}
      <h1 className=" text-3xl">{username}`s Profile</h1>
      <BackToHome path={"/"}></BackToHome>
    </div>
  );
}
