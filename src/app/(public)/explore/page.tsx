import type { Metadata } from "next";
import { Explore } from "./Explore";

const metadata: Metadata = {
    title: "Profile"
};
type TSearchParams = {tag?:string};


export default async function ExplorePage({searchParams}: {searchParams: Promise<TSearchParams>}) {

    const {tag} = await searchParams;
    return <Explore tag = {tag}/>
}