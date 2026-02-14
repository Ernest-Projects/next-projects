import BackToHome from "@/app/components/BackToHome";
import {
  ProductsCard,
  type IProductsCard,
} from "@/app/components/ProductsCard";
export default async function ShopPage() {
  console.log(typeof process.env.NEXT_API_URL);

  const controller = new AbortController();

  const timeout = setTimeout(() => {
    controller.abort();
  }, 10000); // ? why fetch doesn't waiting 10 secs?

  try {
    const responce = await fetch(process.env.FAKEAPI_URL!, {
      
      cache: "no-store", // * FOR SSR

      next: { revalidate: 60 }, // ! fetch error

      signal: controller.signal,
    });
    // console.log("responce:", responce)
    const products = (await responce.json()) as IProductsCard[];

    return (
      <div className="w-full flex flex-col">
        <p>SSG</p>

        <div className="grid grid-cols-2 gap-y-8 gap-x-8">
          {products.map((item, index) => {
            return <ProductsCard key={index} {...item}></ProductsCard>;
          })}
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
