"use client";

import React, { useState } from "react";
import { Calculator, Send, CheckCircle } from "lucide-react";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    quantity: "",
    design: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Quote request:", formData);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Minta <span className="text-orange-400">Penawaran</span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Dapatkan harga terbaik untuk kaos, jaket, dan tote bag Anda.
                Konsultasi gratis & estimasi transparan, cukup isi form di
                samping.
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Calculator className="w-6 h-6 text-orange-400" />
                Estimasi Harga
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Kaos (min. 24 pcs)</span>
                  <span className="text-white font-semibold">
                    Rp 45.000 - 65.000/pcs
                  </span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">Jaket (min. 12 pcs)</span>
                  <span className="text-white font-semibold">
                    Rp 100.000 - 120.000/pcs
                  </span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">Tote Bag (min. 50 pcs)</span>
                  <span className="text-white font-semibold">
                    Rp 15.000 - 18.000/pcs
                  </span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-sky-500 bg-opacity-10 rounded-lg border border-sky-500 border-opacity-30">
                <p className="text-gray-100 text-sm flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  Harga sudah termasuk sablon 1 warna. Tambahan warna +Rp
                  2.000–5.000/pcs.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Form Penawaran
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg"
                    placeholder="Kami akan menghubungi via WhatsApp"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg"
                  placeholder="Untuk kirim penawaran resmi (PDF)"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jenis Layanan
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg"
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                  >
                    <option value="">Pilih layanan</option>
                    <option value="kaos">Kaos</option>
                    <option value="jaket">Jaket</option>
                    <option value="totebag">Tote Bag</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg"
                    placeholder="Jumlah pcs"
                    value={formData.quantity}
                    onChange={(e) =>
                      setFormData({ ...formData, quantity: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Desain
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg"
                  placeholder="Tautan file (Drive) atau tulis ‘Butuh bantuan desain’"
                  value={formData.design}
                  onChange={(e) =>
                    setFormData({ ...formData, design: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan Tambahan
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 text-black rounded-lg resize-none"
                  placeholder="Sebutkan ukuran & posisi cetak, warna, deadline, alamat kirim…"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Kirim Permintaan Penawaran
              </button>
              <p className="text-gray-700 text-center">
                Balasan cepat pada jam kerja. Dengan mengirim formulir ini, Anda
                menyetujui Kebijakan Privasi kami.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quote;
