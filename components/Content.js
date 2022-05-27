import React from "react";

export default function Content() {
  return (
    <>
      <div className="w-full mt-10">
        <div className="w-full max-w-[1100px] mx-auto">
          <div>
            <h2 className="text-xl title-font font-medium">Kategori Popular</h2>
            <div className="custom-shadow rounded-xl">
              <ul className="py-5 px-5 flex items-center gap-5 ">
                <li>
                  <button className="w-20 h-10 border-2 rounded-xl">
                    Anime
                  </button>
                </li>
                <li>
                  <button className="w-20 h-10 border-2 rounded-xl">
                    Game
                  </button>
                </li>
                <li>
                  <button className="w-20 h-10 border-2 rounded-xl">
                    Manga
                  </button>
                </li>
                <li>
                  <button className="w-20 h-10 border-2 rounded-xl">
                    V-Tuber
                  </button>
                </li>
                <li>
                  <button className="w-20 h-10 border-2 rounded-xl">
                    Original
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* card list produk */}
          <div className="mt-20 flex justify-between flex-wrap">
            <div className="w-64 h-[23rem] p-5 shadow-md rounded-xl">
              <img src="/maid.png" alt="" />
              <p className="mt-3 text-xs">Maid - Original</p>
              <p className="mt-5 text-lg font-semibold">Rp.1.500.000</p>
              <p className="mt-2 text-xs">⭐4.9 | Terjual 500+</p>
            </div>
            <div className="w-64 h-[23rem] p-5 shadow-md rounded-xl">
              <img src="/zerotwo.png" alt="" />
              <p className="mt-3 text-xs">ZeroTwo - Draling In The Franxxx</p>
              <p className="mt-5 text-lg font-semibold">Rp.1.500.000</p>
              <p className="mt-2 text-xs">⭐4.9 | Terjual 500+</p>
            </div>
            <div className="w-64 h-[23rem] p-5 shadow-md rounded-xl">
              <img src="/rem.png" alt="" />
              <p className="mt-3 text-xs">
                Rem - Re:Zero Kara Hajimeru Isekai Seikatsu
              </p>
              <p className="mt-5 text-lg font-semibold">Rp.1.500.000</p>
              <p className="mt-2 text-xs">⭐4.9 | Terjual 500+</p>
            </div>
            <div className="w-64 h-[23rem] p-5 shadow-md rounded-xl">
              <img src="/himikatoga.png" alt="" />
              <p className="mt-3 text-xs">
                Himiko Toga - Boku No Hero Academia
              </p>
              <p className="mt-5 text-lg font-semibold">Rp.1.500.000</p>
              <p className="mt-2 text-xs">⭐4.9 | Terjual 500+</p>
            </div>
            <div className="w-64 h-[23rem] p-5 shadow-md rounded-xl">
              <img src="/miku.png" alt="" />
              <p className="mt-3 text-xs">
                Himiko Toga - Boku No Hero Academia
              </p>
              <p className="mt-5 text-lg font-semibold">Rp.1.500.000</p>
              <p className="mt-2 text-xs">⭐4.9 | Terjual 500+</p>
            </div>
            <div className="w-64 h-[23rem] p-5 shadow-md rounded-xl">
              <img src="/ladyfox.png" alt="" />
              <p className="mt-3 text-xs">
                Himiko Toga - Boku No Hero Academia
              </p>
              <p className="mt-5 text-lg font-semibold">Rp.1.500.000</p>
              <p className="mt-2 text-xs">⭐4.9 | Terjual 500+</p>
            </div>
            <div className="w-64 h-[23rem] p-5 shadow-md rounded-xl">
              <img src="/tanjiro.png" alt="" />
              <p className="mt-3 text-xs">
                Himiko Toga - Boku No Hero Academia
              </p>
              <p className="mt-5 text-lg font-semibold">Rp.1.500.000</p>
              <p className="mt-2 text-xs">⭐4.9 | Terjual 500+</p>
            </div>
            <div className="w-64 h-[23rem] p-5 shadow-md rounded-xl">
              <img src="/minato.png" alt="" />
              <p className="mt-3 text-xs">
                Himiko Toga - Boku No Hero Academia
              </p>
              <p className="mt-5 text-lg font-semibold">Rp.1.500.000</p>
              <p className="mt-2 text-xs">⭐4.9 | Terjual 500+</p>
            </div>
          </div>
          <h2 className="pt-8 title-font text-2xl font-medium">
            Produk terlaris
          </h2>
          <div className="grid grid-cols-2 pt-8 gap-6">
            <div>
              <div className="p-5 shadow-md rounded-xl grid grid-cols-2">
                <img src="/zerotwo.png" alt="" />
                <div>
                  <p className="mt-3 text-2xl font-medium">
                    ZeroTwo - Draling In The Franxxx
                  </p>
                  <p className="text-sm py-2">
                    Figure zero two darilink in the franxx dengan bahan yang
                    bagus dan paling laris di sini
                  </p>
                  <p className=" py-2 text-lg font-semibold title-font">
                    Rp.1.500.000
                  </p>
                  <button className="border-2  rounded-md p-1 px-2 bg-slate-100">
                    Beli Sekarang
                  </button>
                  <p className="my-2 text-xs">⭐4.9 | Terjual 500+</p>
                </div>
              </div>
            </div>
            <div>
              <div className="p-5 shadow-md rounded-xl grid grid-cols-2">
                <img src="/zerotwo.png" alt="" />
                <div>
                  <p className="mt-3 text-2xl font-medium">
                    ZeroTwo - Draling In The Franxxx
                  </p>
                  <p className="text-sm py-2">
                    Figure zero two darilink in the franxx dengan bahan yang
                    bagus dan paling laris di sini
                  </p>
                  <p className=" py-2 text-lg font-semibold title-font">
                    Rp.1.500.000
                  </p>
                  <button className="border-2  rounded-md p-1 px-2 bg-slate-100">
                    Beli Sekarang
                  </button>
                  <p className="my-2 text-xs">⭐4.9 | Terjual 500+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
