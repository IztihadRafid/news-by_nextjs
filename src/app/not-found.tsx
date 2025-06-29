import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-white flex items-center justify-center h-96 ">
      <div className="text-center my-4">
        <h1 className="lg:text-9xl md:text-6xl text-4xl font-bold">404</h1>
        <h2 className="lg:text-7xl md:text-4xl text-3xl font-semibold">Page Not Found</h2>
       <button className="bg-slate-900 px-6 py-4 hover:bg-slate-700 text-white rounded-2xl my-6"> <Link href={"/"}>Go To Home Page</Link></button>
      </div>
    </div>
  );
}
