import Image from "next/image";
import { NewsItem } from "../../../../types/news";
import { Badge } from "@/components/ui/badge";

export default async function NewsDetailsPage({ params }: Props) {
  const res = await fetch("http://localhost:3000/data_news/news_data.json");
  const news: NewsItem[] = await res.json();
  const item = news.find((n) => n._id === params.id);
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-semibold mb-7">{item?.title}</h1>
      <Image
        src={item.imageUrl}
        alt={item.title}
        width={800}
        height={800}
      ></Image>
   <div className="flex justify-between items-center p-6">
       <p>{item?.published_at}</p>
      <div className="space-x-2">
         <Badge>{item?.categories[0]} </Badge>
       <Badge>{item?.categories[1]} </Badge>
      </div>
   </div>
   
      <p className="dark:text-white text-gray-800 mb-2 text-lg">{item?.description}</p>
    </div>
  );
}
