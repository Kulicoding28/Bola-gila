"use client";

import Image from "next/image";
import Banner from "@/public/leagues/Banner.svg";

const nd = new Date();
const dateConvert = nd.toDateString();

export default function Home() {
  return (
    <section className="px-4 md:px-8 w-[800px]">
      <div className="mb-8 md:mb-6">
        <input
          type="text"
          placeholder="search team"
          className="card p-2 w-1/2"
        />
        <button className="card p-2 ml-3 w-auto bg-violet-300 text-slate-800 hover:text-slate-600 text-md hover:bg-violet-400 duration-200 transition font-medium tracking-wide">
          search
        </button>
      </div>
      <div className="flex card relative p-0">
        <Image
          src={Banner}
          alt="banner"
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex justify-between items-center md:mt-6 mt-8 card p-2">
        <h1 className="text-slate-600 text-md font-semibold tracking-wide">
          MATCHES
        </h1>
        <div className="px-2 py-0 md:py-1 bg-teal-100 rounded-md">
          <p className="text-xs text-slate-600 font-thin">{dateConvert}</p>
        </div>
      </div>
    </section>
  );
}
