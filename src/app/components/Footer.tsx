import React from "react";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Mata Screenprint
              </h3>
              <p className="text-gray-400">
                Layanan sablon custom berkualitas tinggi untuk kebutuhan bisnis
                dan personal Anda.
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="https://api.whatsapp.com/send?phone=6281288957868&text=Saya%20ingin%20mendapatkan%20informasi%20terkait%20jasa%20sablon%20di%20Mata%20Screenprint"
                className="bg-green-600 hover:bg-green-700 p-3 rounded-full transition-colors"
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </a>
              <a
                href="https://www.instagram.com/mata.screenprint"
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors"
              >
                <Instagram className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Layanan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sablon Kaos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sablon Jaket
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Sablon Tote Bag
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Desain Custom
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Perusahaan</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Testimoni
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Kontak</h4>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                <div>
                  <p>+62 812-8895-7868</p>
                  <p className="text-sm">WhatsApp & Telepon</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                <div>
                  <p>mata.screenprint@gmail.com</p>
                  <p className="text-sm">Email resmi</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-red-500 flex-shrink-0" />
                <div>
                  <p>
                    Jl. Pejuang Jaya Utama Blok B No. 199
                    <br />
                    Kel. Pejuang, Kec. Medan Satria
                  </p>
                  <p className="text-sm">Kota Bekasi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 md:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white text-center md:text-left text-sm">
              © 2025 Mata Screenprint. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex items-center space-x-2 text-white text-sm">
              <span>Dikembangkan oleh</span>
              <a
                href="https://arktik.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-200 transition-colors font-semibold"
              >
                Arktik.id
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
