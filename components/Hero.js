import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay, EffectFade } from "swiper";
import "swiper/css/effect-fade";

export default function Hero() {
  return (
    <>
      <div className="w-full mt-10">
        <div className="w-full max-w-[1100px] mx-auto">
          <h1 className="text-xl mb-10 title-font font-medium">
            Produk Terlaris Minggu Ini
          </h1>
          <Swiper
            rewind={true}
            effect={"fade"}
            modules={[Navigation, Autoplay, EffectFade]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            <div>
              <SwiperSlide>
                <div className=" py-14 px-20 flex justify-between items-center border-2 border-slate-300 rounded-2xl">
                  <div>
                    <h1 className="text-5xl tracking-wide">
                      Anime Action Figure
                    </h1>
                    <p className="w-[22rem] mt-5">
                      Figure Anime terlaris minggu ini yang berkualitas terbaik
                      dengan harga yang terjangkau, beli sekarang juga!
                    </p>
                    <p className="text-lg font-bold mt-5">Rp 500.000</p>
                    <div className="flex items-center gap-5 mt-10">
                      <button className="py-3 px-5 bg-slate-100 rounded-lg border-2 border-slate-300">
                        Beli Sekarang
                      </button>
                      <div className="flex items-center gap-3">
                        <p className="text-[2rem]">❤</p>
                        <p>500+</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src="/tanjiro.png" alt="" className="w-[20rem]" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className=" py-14 px-20 flex justify-between items-center bg-white border-2 border-slate-300 rounded-2xl">
                  <div>
                    <h1 className="text-5xl tracking-wide">
                      Anime Action Figure
                    </h1>
                    <p className="w-[22rem] mt-5">
                      Figure Anime terlaris minggu ini yang berkualitas terbaik
                      dengan harga yang terjangkau, beli sekarang juga!
                    </p>
                    <p className="text-lg font-bold mt-5">Rp 500.000</p>
                    <div className="flex items-center gap-5 mt-10">
                      <button className="py-3 px-5 bg-slate-100 rounded-lg border-2 border-slate-300">
                        Beli Sekarang
                      </button>
                      <div className="flex items-center gap-3">
                        <p className="text-[2rem]">❤</p>
                        <p>500+</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src="/minato.png" alt="" className="w-[20rem]" />
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className=" py-14 px-20 flex justify-between items-center bg-white border-2 border-slate-300 rounded-2xl">
                  <div>
                    <h1 className="text-5xl tracking-wide">
                      Anime Action Figure
                    </h1>
                    <p className="w-[22rem] mt-5">
                      Figure Anime terlaris minggu ini yang berkualitas terbaik
                      dengan harga yang terjangkau, beli sekarang juga!
                    </p>
                    <p className="text-lg font-bold mt-5 title-font">
                      Rp 500.000
                    </p>
                    <div className="flex items-center gap-5 mt-10">
                      <button className="py-3 px-5 bg-slate-100 rounded-lg border-2 border-slate-300">
                        Beli Sekarang
                      </button>
                      <div className="flex items-center gap-3">
                        <p className="text-[2rem]">❤</p>
                        <p className="title-font">500+</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <img src="/zerotwo.png" alt="" className="w-[20rem]" />
                  </div>
                </div>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
