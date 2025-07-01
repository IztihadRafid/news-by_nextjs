import Banner from "@/components/shared/Banner";
import NewsCard from "@/components/shared/NewsCard";
import { NewsItem } from "../../types/news";
import NewsLetter from "@/components/shared/NewsLetter";

const Home = async () => {
  const data = await fetch("http://localhost:3000/data_news/news_data.json");
  const news = await data.json();
  console.log(news);
  return (
    <div className="py-12">
      <Banner></Banner>

      <div className="my-12">
        <h1 className="text-2xl font-bold mb-8">Latest news</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-6">
          {news.slice(0, 3).map((item: NewsItem) => (
            <NewsCard key={item._id} item={item}></NewsCard>
          ))}
        </div>
      </div>
      <NewsLetter></NewsLetter>
    </div>
  );
};
export default Home;
