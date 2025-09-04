import React from "react";
import { Eye, Heart, Zap, Star, Sparkles } from "lucide-react";

const portfolioItems = [
  {
    title: "Jersey Futsal Legend",
    category: "VIRAL SPORTS",
    image: "/images/porto-1.jpg",
    description: "Jersey yang bikin lawan takut duluan!",
    bgColor: "bg-blue-500",
    likes: "2.3K",
  },
  {
    title: "Hoodie Aesthetic AF",
    category: "TRENDSETTER",
    image: "/images/porto-2.jpg",
    description: "Hoodie yang bikin feed Instagram makin kece!",
    bgColor: "bg-pink-500",
    likes: "4.1K",
  },
  {
    title: "Eco Tote Bag Goals",
    category: "ECO WARRIOR",
    image: "/images/porto-3.jpg",
    description: "Save earth with style! Planet-friendly & super cute",
    bgColor: "bg-green-500",
    likes: "1.8K",
  },
  {
    title: "Cafe Vibes Tee",
    category: "BRAND MAGIC",
    image: "/images/porto-4.jpg",
    description: "Kaos yang bikin brand jadi memorable!",
    bgColor: "bg-yellow-500",
    likes: "3.2K",
  },
  {
    title: "School Pride Jacket",
    category: "SCHOOL SPIRIT",
    image: "/images/porto-5.jpg",
    description: "Jaket yang bikin bangga jadi anak sekolah!",
    bgColor: "bg-indigo-500",
    likes: "2.7K",
  },
  {
    title: "Wedding Souvenir Magic",
    category: "LOVE STORY",
    image: "/images/porto-6.jpg",
    description: "Souvenir pernikahan yang bikin tamu terharu!",
    bgColor: "bg-rose-500",
    likes: "5.6K",
  },
];

const Portfolio = () => {
  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Static Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-yellow-500 opacity-20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-50 mb-6">
            Portofilo <span className="text-orange-400">Kami</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-medium">
            Portofolio nyata dari ratusan produksi: sablon presisi, bahan terkurasi, dan finishing bersih. Scroll untuk inspirasi desain & kualitas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-8 border border-white border-opacity-20"
            >
              <div className="relative overflow-hidden group">
                <img
                  src={item.image}
                  alt={`${item.title} - custom screen printing work portfolio`}
                  className="w-full h-72 object-cover group-hover:scale-125 transition-transform duration-700"
                />

                {/* Solid Color Overlay */}
                <div
                  className={`absolute inset-0 ${item.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-500 flex items-center justify-center`}
                ></div>
              </div>

              <div className="p-8 space-y-4">
                <span
                  className={`inline-block ${item.bgColor} text-white text-sm font-black px-4 py-2 rounded-full`}
                >
                  {item.category}
                </span>
                <h3 className="text-2xl font-black text-black group-hover:text-gray-500 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Creative Bottom Glow */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-1 ${item.bgColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              ></div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-16 relative z-10">
          <button className="group bg-amber-600 hover:bg-amber-500 text-white font-black px-12 py-6 rounded-2xl transition-all duration-300 transform hover:scale-110 shadow-2xl text-xl">
            <span className="flex items-center gap-3">
              EXPLORE ALL VIRAL WORKS!
            </span>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
