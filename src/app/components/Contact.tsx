import React from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telepon & WhatsApp",
      details: "+62 812-8895-7868",
      action: null,
      bgColor: "bg-green-600",
    },
    {
      icon: Mail,
      title: "Email",
      details: "mata.screenprint@gmail.com",
      action: null,
      bgColor: "bg-blue-600",
    },
    {
      icon: Clock,
      title: "Jam Operasional",
      details: "Senin - Sabtu: 08:00 - 17:00 WIB\nMinggu: Tutup",
      action: null,
      bgColor: "bg-purple-600",
    },
  ];

  const actionButton = (action: any) => {
    if (action != null) {
      return (
        <a className="text-yellow-400 hover:text-yellow-300 font-semibold transition-colors">
          {action} →
        </a>
      );
    }
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Hubungi <span className="text-yellow-400">Kami</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Siap melayani kebutuhan sablon Anda! Konsultasi gratis dan survey
            lokasi untuk wilayah Bekasi dan sekitarnya.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-2xl hover:bg-gray-700 transition-colors duration-300"
              >
                <a href="#">
                  <div className="flex items-start gap-4">
                    <div
                      className={`${info.bgColor} p-3 rounded-lg flex-shrink-0`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {info.title}
                      </h3>
                      <p className="text-gray-300 mb-4 whitespace-pre-line">
                        {info.details}
                      </p>
                      {actionButton(info.action)}
                    </div>
                  </div>
                </a>
              </div>
            ))}

            <div className="bg-sky-700 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Area Layanan
              </h3>
              <p className="text-red-100 mb-4">
                Kami melayani Bekasi dan sekitar dengan opsi antar/pickup.
                Gratis antar untuk area:{" "}
                <b>
                  Bekasi Selatan, Bekasi Barat, Bekasi Timur, Bekasi Utara,
                  Tambun, Cikarang
                </b>
                .
                <br />
                Catatan: Di luar area, ongkir menyesuaikan ekspedisi.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Peta Lokasi
              </h3>
              <div className="bg-gray-200 h-64 rounded-2xl flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="w-16 h-16 mx-auto mb-4 text-amber-600" />
                  <p className="font-semibold">Lokasi Kami di Bekasi</p>
                  <p className="text-sm">
                    Jl. Pejuang Jaya Utama Blok B No. 199
                  </p>
                  <p className="text-sm">Kel. Pejuang, Kec. Medan Satria</p>
                  <p className="text-sm">Kota Bekasi</p>
                </div>
              </div>
              <a href="https://maps.app.goo.gl/D8eonJsKZLG9E3aF8">
                <div className="w-full text-center mt-6 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
                  Lihat di Maps
                </div>
              </a>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Media Sosial
              </h3>
              <div className="space-y-4">
                <a
                  href="https://api.whatsapp.com/send?phone=6281288957868&text=Saya%20ingin%20mendapatkan%20informasi%20terkait%20jasa%20sablon%20di%20Mata%20Screenprint"
                  target="_blank"
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <MessageCircle className="w-8 h-8 text-green-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      WhatsApp +62 812-8895-7868
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Chat langsung untuk order cepat
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/mata.screenprint"
                  target="_blank"
                  className="flex items-center gap-4 p-4 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors"
                >
                  <Instagram className="w-8 h-8 text-pink-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Instagram @matascreenprint
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Lihat portfolio terbaru
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
