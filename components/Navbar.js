import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="w-full border-b-2 ">
        <div className="w-full max-w-[1100px] mx-auto">
          <div className="w-full h-20 flex items-center justify-between ">
            <div>
              <h1>LOGO</h1>
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
              <button>
                <img src="/Message.svg" alt="" />
              </button>
              <button>
                <img src="/Bell.svg" alt="" />
              </button>
              <button>
                <img src="/Bag.svg" alt="" className="-translate-y-[2px]" />
              </button>
            </div>
            <div>
              <button>
                <img src="/User.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
