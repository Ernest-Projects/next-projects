"use client";

import Image from "next/image";

export interface IProductsCard {
  price: number;
  image: string;
  title: string;
}

export function ProductsCard({ price, image, title }: IProductsCard) {
  return (
    <div className="rounded-2xl w-fit max-w-50 h-fit border border-neutral-700 p-3 hover:shadow transition flex flex-wrap justify-center flex-col">

      <Image
        src={image}
        alt={title}
        height={50}
        width={100}
        className="object-contain mb-3 rounded "
      ></Image>

      <header className= "text-white font-semibold" >{title}</header>
      <p className="text-white/15 mt-2">{price}$</p>
        </div>
  );
}
