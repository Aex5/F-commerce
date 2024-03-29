import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="fixed top-0 z-50 w-full border-b-2 bg-white">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className=" w-full h-24 flex items-center justify-between ">
            <div>
              <Link href="/">
                <a>
                  <img src="/logo.svg" className="w-28"></img>
                </a>
              </Link>
            </div>
            <div className="flex flex-row-reverse relative">
              <input
                type="text"
                placeholder="cari produk lainya"
                className="relative px-2 py-1 w-[40rem] border-2 border-slate-200 rounded-lg"
              />
              <button className="absolute">
                <img
                  src="/search.svg"
                  alt=""
                  className="px-4 py-1 bg-slate-200 translate-y-[1px] border-slate-300 rounded-r-lg"
                />
              </button>
            </div>
            <div className="flex items-center gap-3">
              <Link href="/inbox">
                <a>
                  <img src="/Message.svg" alt="" />
                </a>
              </Link>
              <Link href="notification">
                <a>
                  <img src="/Bell.svg" alt="" />
                </a>
              </Link>
              <Link href="/bag">
                <a>
                  <img src="/Bag.svg" alt="" className="-translate-y-[2px]" />
                </a>
              </Link>
            </div>
            <div>
              <Link href="/user">
                <a>
                  <img src="/User.svg" alt="" />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
