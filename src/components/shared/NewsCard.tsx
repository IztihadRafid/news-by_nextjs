import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { NewsCardProps } from "../../../types/news";
const NewsCard = ({ item }: NewsCardProps) => {
  return (
    <div className="border p-4 rounded-md shadow-md ">
      <div className="flex justify-center items-center">
        <Link href={`/news/${item?._id}`}>
          <Image
            priority
            src={item?.imageUrl}
            alt="news image"
            width={400}
            height={200}
            className="mb-5 md:h-56 rounded-md hover:scale-105 cursor-pointer transition-all duration-200"
          ></Image>
        </Link>
      </div>

      <div>
        <h2 className="text-xl font-semibold my-3">{item?.title}</h2>
        <p className="mb-4">{item?.description.substring(0, 80)}...</p>
        <Link href={`/news/${item?._id}`}>
          <Button variant={"default"}>Read more</Button>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
