"use client";
import useFetch from "@/app/common/hooks/useFetch";
import { itemTypes } from "@/app/common/types/fetchTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const { data, loading } = useFetch("https://fakestoreapi.com/products");
  return (
    <div>
      {loading && <p>Loading...</p>}
      {data.map((item: itemTypes) => {
        return (
          <Link href={`shop/${item.id}`} key={item.id}>
            <h1>{item.title}</h1>
            <Image src={item.image} width={100} height={100} alt={item.title} />
            <p>{item.price}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default page;
