
'use client'
import BackToHome from "@/app/components/BackToHome";
import type { Metadata } from "next";
import { usePathname, useParams} from "next/navigation";

const metadata: Metadata = {
    title: "Profile"
}


export default function ExplorePage() {


    return <div> <h1 className=" text-3xl">
        Explore
        
        </h1> 
        <BackToHome path = {"/"}></BackToHome>
        </div>
}