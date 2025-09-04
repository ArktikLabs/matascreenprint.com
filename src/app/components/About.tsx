import React from 'react';
import { Users, Award, MapPin, Clock, Check } from 'lucide-react';

const stats = [
  { icon: Users, number: "500+", label: "Proyek selesai & klien puas", color: "bg-red-500" },
  { icon: Award, number: "3+", label: "Tahun pengalaman produksi", color: "bg-yellow-500" },
  { icon: MapPin, number: "Bekasi", label: "Pickup/antar area tertentu, kirim nasional", color: "bg-green-500" },
  { icon: Clock, number: "2-5", label: "Hari pengerjaan (opsi ekspres tersedia)", color: "bg-blue-500" }
];

const About = () => {
  return (
    <section className="py-20 bg-rose-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Kenapa Pilih <span className="text-orange-400">Kami?</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Berbasis di Bekasi, kami fokus pada kaos, jaket, dan tote bag. Dari mockup hingga QC berlapis, hasil kami rapi, tepat waktu dengan harga transparan, siap kirim ke seluruh Indonesia.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Award className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Kualitas Konsisten</h3>
                  <p className="text-gray-600 text-sm">Tinta premium, warna tajam & awet cuci, mesin terkalibrasi.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-yellow-100 p-2 rounded-lg">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Cepat & Terukur</h3>
                  <p className="text-gray-600 text-sm">Timeline jelas 2–5 hari kerja, tersedia opsi ekspres.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Check className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Mudah & Transparan</h3>
                  <p className="text-gray-600 text-sm">MOQ fleksibel, mockup sebelum produksi, harga tanpa kejutan.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <img 
                src="/images/about.jpg" 
                alt="Screen printing workshop in Bekasi Indonesia"
                className="w-full h-80 object-cover rounded-2xl mb-6"
              />
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className={`${stat.color} p-2 rounded-lg inline-block mb-2`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-red-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;