"use client";
import { PropsInnerProducts } from "@/app/common/types/fetchTypes";
import { params } from "@/app/common/types/paramsTypes";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = ({ params }: params) => {
  const [data, setData] = useState<PropsInnerProducts | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
      setData(await res.json());
      try {
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <>
          <h1>{data.title}</h1>
          <Image
            src={data.image}
            alt={data.category}
            width={100}
            height={100}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default page;
