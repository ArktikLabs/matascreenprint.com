import React from "react";
import {
  ArrowRight,
  MapPin,
  Clock,
  Sparkles,
  Zap,
  Contact,
  Phone,
} from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-sky-800 text-white min-h-screen flex items-center overflow-hidden">
      {/* Static Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 opacity-20 rounded-full blur-xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-pink-400 opacity-30 rounded-full blur-lg"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-400 opacity-20 rounded-full blur-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-green-400 opacity-40 rounded-full blur-md"></div>

        {/* Geometric Shapes */}
        <div className="absolute top-16 right-16 w-20 h-20 border-4 border-amber-400 opacity-30 rotate-45"></div>
        <div className="absolute bottom-20 left-16 w-12 h-12 bg-pink-500 transform rotate-12"></div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative z-10">
            {/* Creative Badge */}
            <div className="inline-flex items-center gap-2 bg-orange-400 text-black px-6 py-3 rounded-full font-bold text-sm">
              <span>JASA SABLON BEKASI</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black leading-tight">
                <span className="text-rose-100">MATA</span>
                <br />
                <span className="text-orange-400 drop-shadow-2xl">SCREEN</span>
                <span className="block text-rose-100 transform inline-block">
                  PRINT
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white opacity-90 leading-relaxed font-medium">
                <span className="text-white font-bold">
                  Dari Ide ke Produk Jadi, Lebih Cepat
                </span>
                <br />
                Kami wujudkan desainmu lewat sablon rapi dan konsisten. Cocok
                untuk UMKM, komunitas, sekolah, kampus, dan corporate.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <div className="flex items-center gap-2 text-black bg-white bg-opacity-40 backdrop-blur-sm px-6 py-3 rounded-full hover:scale-105 transition-transform">
                <MapPin className="w-4 h-4" />
                <span>Kunjungi Kami</span>
              </div>
              <div className="flex items-center gap-2 bg-green-700 bg-opacity-40 backdrop-blur-sm px-6 py-3 rounded-full hover:scale-105 transition-transform">
                <Phone className="w-4 h-4" />
                <span>Hubungi Kami!</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="group border-3 border-orange-400 hover:bg-orange-400 hover:text-orange-100 text-orange-400 font-black px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl">
                <span className="text-lg">PESAN SEKARANG!</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="group border-3 border-white hover:bg-white hover:text-sky-700 font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-xl">
                <span>Lihat Portofolio Kami</span>
              </button>
            </div>
          </div>

          <div className="relative z-10">
            <div className="relative bg-white bg-opacity-20 backdrop-blur-lg rounded-3xl p-8 border-2 border-white border-opacity-30 shadow-2xl transform hover:rotate-2 transition-all duration-500">
              {/* Floating Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full"></div>
              <div className="absolute -top-2 -right-6 w-6 h-6 bg-pink-400 rounded-full"></div>
              <div className="absolute -bottom-3 -left-2 w-5 h-5 bg-green-400 rounded-full"></div>

              {/* <Image
                src="/images/jose-aljovin--e28RZcAJd0-unsplash.jpg"
                alt="Custom screen printed t-shirts showcase"
                width={200}
                height={100}
                className="w-full h-80 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              /> */}
              <img
                src="/images/hero.jpg"
                alt="Custom screen printed t-shirts showcase"
                className="w-full h-80 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />

              {/* Creative Price Badge */}
              <div className="absolute -top-6 -right-6 bg-pink-500 text-white px-8 py-4 rounded-2xl font-black transform rotate-12 shadow-xl">
                <div className="text-center">
                  <div className="text-xs">MULAI DARI</div>
                  <div className="text-2xl">50K!</div>
                  <div className="text-xs">HOT DEAL</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
