import BackToHome from "@/app/components/BackToHome";



// * SERVER VERSION SEE (@code page.tsx)
type TParamsProps = {tag?: string};

export function  Explore({tag}: TParamsProps) {  

  return (
    <>
      <div>
        {" "}
        <h1 className=" text-3xl">Explore {!!tag && `by #${tag}`}</h1>
        <BackToHome path={"/"}></BackToHome>
      </div>
    </>
  );
}


// CLIENT VERSION
// export function Explore() {
//   const searchParams = useSearchParams();
//   const tag = searchParams.get("tag");

//   return (
//     <>
//       <div>
//         {" "}
//         <h1 className=" text-3xl">Explore {!!tag && `by #${tag}`}</h1>
//         <BackToHome path={"/"}></BackToHome>
//       </div>
//     </>
//   );
// }
