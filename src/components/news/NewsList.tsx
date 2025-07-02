"use client";
import React, { useEffect, useState } from "react";
import { NewsItem } from "../../../types/news";
import NewsCard from "../shared/NewsCard";
import { Input } from "../ui/input";

const NewsList = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    fetch("/data_news/news_data.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);
  //   console.log(news);
  const filteredNews = news.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-12 mb-5">
        <div className="mb-4 md:w-3/4">
          <h3 className="font-bold text-lg mb-2">Search News</h3>
          <Input
            className="w-full rounded-md p-2 border border-gray-300"
            placeholder="Search News..."
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <h3 className="font-bold text-lg mb-2">Filter</h3>
        </div>
      </div>

      {filteredNews.length === 0 && search ? (
        <p className="text-center text-gray-500">
          No news found matching your search.
        </p>
      ) : (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          {filteredNews.map((item) => (
            <NewsCard key={item._id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsList;
