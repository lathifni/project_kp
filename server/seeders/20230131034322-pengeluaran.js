'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pengeluarans', [{
      rek_P5: '5.1.02.01.01.0024',
      rek_PKSk4: 1,
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Tulis Kantor',
      anggaran: 9195745,
      triwulan1: 6000000,
      triwulan2: 6000000,
      triwulan3: 6000000,
      triwulan4: 6000000
    }, {
      rek_P5: '5.1.02.01.01.0025',
      rek_PKSk4: 1,
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Kertas dan Cover',
      anggaran: 13171300,
      triwulan1: 6000000,
      triwulan2: 6000000,
      triwulan3: 6000000,
      triwulan4: 6000000
    }, {
      rek_P5: '5.1.02.01.01.0029',
      rek_PKSk4: 1,
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Bahan Komputer',
      anggaran: 16301400,
      triwulan1: 6000000,
      triwulan2: 6000000,
      triwulan3: 6000000,
      triwulan4: 6000000
    }, {
      rek_P5: '5.1.02.01.01.0024',
      rek_PKSk4: 2,
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Tulis Kantor',
      anggaran: 15823,
      triwulan1: 6000000,
      triwulan2: 6000000,
      triwulan3: 6000000,
      triwulan4: 6000000
    }, {
      rek_P5: '5.1.02.01.01.0025',
      rek_PKSk4: 2,
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Kertas dan Cover',
      anggaran: 72100,
      triwulan1: 6000000,
      triwulan2: 6000000,
      triwulan3: 6000000,
      triwulan4: 6000000
    }, {
      rek_P5: '5.1.02.01.01.0026',
      rek_PKSk4: 2,
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Bahan Cetak',
      anggaran: 34937000,
      triwulan1: 6000000,
      triwulan2: 6000000,
      triwulan3: 6000000,
      triwulan4: 6000000
    }, {
      rek_P5: '5.1.02.01.01.0004',
      rek_PKSk4: 3,
      tahun: 2022,
      nama: 'Belanja Bahan-Bahan Bakar dan Pelumas',
      anggaran: 16560000,
      triwulan1: 6000000,
      triwulan2: 6000000,
      triwulan3: 6000000,
      triwulan4: 6000000
    }, {
      rek_P5: '5.1.02.01.01.0052',
      rek_PKSk4: 3,
      tahun: 2022,
      nama: 'Belanja Makanan dan Minuman Rapat',
      anggaran: 15250000,
      triwulan1: 6000000,
      triwulan2: 6000000,
      triwulan3: 6000000,
      triwulan4: 6000000
    }, {
      rek_P5: '5.1.02.01.01.0001',
      rek_PKSk4: 3,
      tahun: 2022,
      nama: 'Belanja Perjalanan Dinas Biasa',
      anggaran: 167204000,
      triwulan1: 6000000,
      triwulan2: 6000000,
      triwulan3: 6000000,
      triwulan4: 6000000
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pengeluarans', null, {});
  }
};
