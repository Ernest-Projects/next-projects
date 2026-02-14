// import BackToHome from "@/app/components/BackToHome";
import type { Metadata } from "next";
import dynamic from "next/dynamic";


type Params = {username: string};


export async function generateMetadata ({params}: {params: Promise<Params>}): Promise<Metadata> {
  return {title: `@${(await params).username}'s profile`}
}


const DynamicBackToHomeButton = dynamic(
  () => import('@/app/components/BackToHome'),
  
  {
    loading: () => <p>Loading button...</p>,
  }
);


export default async function ProfilePage({
  params,
}: {
  params: Params;
}) {
    const  {username } = await params; 

    return (
    <div>
      {" "}
      <h1 className=" text-3xl">{username}`s Profile</h1>

      <DynamicBackToHomeButton path = "/"></DynamicBackToHomeButton>
    </div>
  );
}
