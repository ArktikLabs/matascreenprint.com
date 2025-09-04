import React from "react";
import {
  Shirt,
  Package,
  ShoppingBag,
  Star,
  ArrowRight,
  Heart,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Shirt,
    title: "KAOS CUSTOM",
    description:
      "Sablon presisi, warna tajam & awet cuci. Bahan combed terkurasi, ukuran lengkap!",
    features: ["Cotton Combed", "Sablon Plastisol", "Warna Tahan Lama"],
    price: "50 Ribu",
    image: "/images/t-shirt.jpg",
    bgColor: "bg-pink-500",
  },
  {
    icon: Package,
    title: "JAKET CUSTOM",
    description:
      "Hoodie/varsity/zipper dengan sablon atau bordir rapi. Bahan fleece/terry premium, finishing bersih!",
    features: ["Bahan Fleece", "Sablon Rubber", "Desain Custom"],
    price: "100 Ribu",
    image: "/images/jacket.jpg",
    bgColor: "bg-purple-500",
  },
  {
    icon: ShoppingBag,
    title: "TOTE BAG CUSTOM",
    description:
      "Kanvas/drill/spunbond, jahitan kuat. Cetak logo full area, cocok untuk event & merchandise!",
    features: ["Kanvas Tebal", "Sablon Water Base", "Eco Friendly"],
    price: "15 Ribu",
    image: "/images/tote-bag.jpg",
    bgColor: "bg-green-500",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-rose-50 relative overflow-hidden">
      {/* Static Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-200 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-200 opacity-30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-200 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            Layanan <span className="text-orange-400">Kami</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
            Skala kecil hingga ribuan kaos, jaket, tote bag. Pengerjaan cepat,
            opsi ekspres tersedia, dukungan desain gratis.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 relative z-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-6 border-4 border-transparent"
            >
              <div className="relative overflow-hidden">
                {/* Floating Elements */}
                <div className="absolute top-4 left-4 w-6 h-6 bg-yellow-400 rounded-full z-10"></div>
                <div className="absolute top-6 right-8 w-4 h-4 bg-pink-400 rounded-full z-10"></div>

                <img
                  src={service.image}
                  alt={`${service.title} custom screen printing service`}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Solid Color Overlay */}
                <div
                  className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>

                <div className="absolute bottom-4 left-4">
                  <service.icon
                    className={`w-10 h-10 text-white ${service.bgColor} p-2 rounded-full shadow-lg`}
                  />
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 group-hover:translate-x-2 transition-transform duration-300"
                    >
                      <div
                        className={`w-6 h-6 ${service.bgColor} rounded-full flex items-center justify-center`}
                      >
                        <Star className="w-3 h-3 text-white fill-current" />
                      </div>
                      <span className="text-sm font-semibold text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between pt-6 border-t-2 border-gray-100">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 font-semibold">
                      HARGA MULAI
                    </div>
                    <span className={`text-3xl font-black text-purple-600`}>
                      {service.price}
                    </span>
                  </div>
                  <button
                    className={`group flex items-center gap-2 ${service.bgColor} text-white font-bold px-6 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg`}
                  >
                    <span>PESAN SEKARANG</span>
                  </button>
                </div>
              </div>

              {/* Creative Bottom Element */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-2 ${service.bgColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16 relative z-10">
          <button className="group bg-blue-600 hover:bg-blue-500 text-white font-black px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl text-xl">
            <span className="flex items-center gap-3">
              LIHAT SEMUA LAYANAN GILA KAMI!
            </span>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Services;
