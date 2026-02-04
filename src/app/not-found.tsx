import Link from "next/link";
import BackToHome from "./components/BackToHome";


export  default function NotFound () {


    return (<>
        <div className="min-h-screen flex justify-center flex-col items-center">

            <h1 className="text-7xl font-bold mb-4">404</h1>
            <p className=" text-neutral-600 mb-6">This page doesn't exist. Or maybe it moved.</p>

            <BackToHome path  = {"/"}></BackToHome>


        </div>
    </>)

    
}