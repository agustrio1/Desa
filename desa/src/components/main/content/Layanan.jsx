import React from "react";

function PelayananLayanan() {
  return (
    <div className="p-4 bg-white shadow-md rounded-md transition-transform transform hover:scale-105">
      <h2 className="text-2xl font-semibold">Pelayanan dan Layanan</h2>
      <p>
        Desa Contoh menyediakan berbagai pelayanan dan layanan kepada warga
        desa, termasuk pelayanan administrasi, kesehatan, pendidikan, dan
        pelayanan sosial.
      </p>
      <ul className="list-disc pl-4">
        <li>Pelayanan administrasi kependudukan dan akta kelahiran.</li>
        <li>Puskesmas dan layanan kesehatan masyarakat.</li>
        <li>Sekolah dasar dan menengah.</li>
        <li>Program bantuan sosial untuk masyarakat kurang mampu.</li>
      </ul>
    </div>
  );
}

export default PelayananLayanan;
