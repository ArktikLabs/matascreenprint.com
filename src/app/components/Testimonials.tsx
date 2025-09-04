import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Owner Cafe Nusantara",
    headline: "Pelayanan cepat, hasil presisi.",
    content:
      "Pelayanan sangat memuaskan! Kualitas sablon kaos staff cafe kami bagus banget, warna tidak luntur meski sering dicuci. Harga juga terjangkau.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Sari Dewi",
    role: "Ketua Komunitas Baca",
    headline: "Tote bag-nya kokoh & bersih.",
    content:
      "Tote bag untuk acara komunitas hasilnya melebihi ekspektasi. Desainnya rapi, bahan berkualitas, dan pengerjaan tepat waktu. Recommended!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
  {
    name: "Ahmad Rizki",
    role: "Coach Tim Futsal",
    headline: "Jersey nyaman, sablon elastis.",
    content:
      "Jersey futsal tim kami disablon disini. Hasilnya profesional banget, sablon tidak crack dan nyaman dipakai. Pasti order lagi next season!",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=150",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Kata <span className="text-orange-400">Klien Kami</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Testimoni asli dari brand lokal, komunitas, dan tim olahraga. Hasil
            rapi, warna konsisten, dan tepat waktu, itulah alasan mereka kembali
            order.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative border-t-4 border-orange-500"
            >
              <div className="space-y-6">
                <p className="text-black leading-relaxed text-lg font-semibold">
                  "{testimonial.headline}"
                </p>
                <p className="text-gray-700 leading-relaxed text-lg italic">
                  {testimonial.content}
                </p>

                <div
                  className="flex items-center gap-1 mb-4"
                  aria-label="5 dari 5 bintang"
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={`${testimonial.name} customer testimonial`}
                    className="w-16 h-16 rounded-full object-cover border-4 border-gray-100"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                B
              </div>
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                S
              </div>
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                A
              </div>
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                +
              </div>
            </div>
            <span className="text-gray-700 font-semibold">
              500+ klien puas memilih kami
            </span>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-700 font-semibold">
            Ulasan ditampilkan dengan izin klien. Beberapa testimoni diringkas
            untuk kejelasan.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
