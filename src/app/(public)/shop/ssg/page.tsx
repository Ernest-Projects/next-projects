"use server";

import BackToHome from "@/app/components/BackToHome";
import {
  ProductsCard,
  type IProductsCard,
} from "@/app/components/ProductsCard";
import { Suspense } from "react";
import Loading from "./loading";

export default async function SSGPage() {
  console.log(typeof process.env.NEXT_API_URL);

  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 10000); // ? why code doesn't waiting 10 secs?

  try {
    const responce = await fetch(process.env.FAKEAPI_URL!, {
      cache: "force-cache",
      next: { revalidate: 60 }, // ! fetch error
      signal: controller.signal,
    });
    // console.log("responce:", responce)
    const products = (await responce.json()) as IProductsCard[];

    return (
      <div className="w-full flex flex-col ">
        <p className="my-4">SSG</p>

        <div className="flex-col max-h-[400vh] flex gap-y-8 gap-x-4 flex-wrap">
          <Suspense fallback = {<Loading/>}>
          {products.map((item, index) => {
          return <ProductsCard key={index} {...item}></ProductsCard>;
        })}
          </Suspense>
          <BackToHome path="/" />
        </div>
      </div>
    );
  } catch (error) {
    console.error("Fetch timeout or error:", error);
    return (
      <>
        <div>API timeout 😢</div>
        <BackToHome path="/" />
      </>
    );
  } finally {
    clearTimeout(timeout);
  }
}
