export default function Content({ products }) {
  return (
    <>
      <div className="w-full mt-10 text-[#2f564f]">
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
          <div className="mt-20 flex justify-between flex-wrap gap-y-10 ">
            {products.map((product) => {
              return (
                <div className="relative w-64 h-[24rem] p-5 shadow-md rounded-xl hover:-translate-y-3 hover:shadow-xl duration-300">
                  <img
                    src={
                      "http://localhost:1337" +
                      product.attributes.thumbnail.data.attributes.formats
                        .thumbnail.url
                    }
                    alt="thumbnail"
                    className="w-[12rem] mx-auto"
                  />
                  <p className="mt-10 text-base">{product.attributes.name}</p>
                  <p className="absolute mt-10 text-lg font-semibold bottom-10">
                    Rp.{product.attributes.price}
                  </p>
                  <p className="absolute mt-2 text-xs bottom-5">
                    {product.attributes.rating} | {product.attributes.sold}{" "}
                    Terjual
                  </p>
                </div>
              );
            })}
          </div>

          {/* produk terlaris */}
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
