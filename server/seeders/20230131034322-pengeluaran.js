'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('pengeluarans', [{
      rek_P5: '5.1.02.01.01.0024',
      rek_PKSk4: 1,
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Tulis Kantor',
      triwulan1: 62000000,
      triwulan2: 62000000,
      triwulan3: 61000000,
      triwulan4: 67000000
    }, {
      rek_P5: '5.1.02.01.01.0025',
      rek_PKSk4: 1,
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Kertas dan Cover',
      triwulan1: 36000000,
      triwulan2: 66000000,
      triwulan3: 16000000,
      triwulan4: 46000000
    }, {
      rek_P5: '5.1.02.01.01.0029',
      rek_PKSk4: 1,
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Bahan Komputer',
      triwulan1: 96000000,
      triwulan2: 36000000,
      triwulan3: 26000000,
      triwulan4: 81000000
    }, {
      rek_P5: '5.1.02.01.01.0024',
      rek_PKSk4: 2,
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Alat Tulis Kantor',
      triwulan1: 16000000,
      triwulan2: 64000000,
      triwulan3: 61000000,
      triwulan4: 16000000
    }, {
      rek_P5: '5.1.02.01.01.0025',
      rek_PKSk4: 2,
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Kertas dan Cover',
      triwulan1: 16000000,
      triwulan2: 26000000,
      triwulan3: 36000000,
      triwulan4: 46000000
    }, {
      rek_P5: '5.1.02.01.01.0026',
      rek_PKSk4: 2,
      tahun: 2022,
      nama: 'Belanja Alat/Bahan untuk Kegiatan Kantor-Bahan Cetak',
      triwulan1: 46000000,
      triwulan2: 36000000,
      triwulan3: 26000000,
      triwulan4: 26000000
    }, {
      rek_P5: '5.1.02.01.01.0004',
      rek_PKSk4: 3,
      tahun: 2022,
      nama: 'Belanja Bahan-Bahan Bakar dan Pelumas',
      triwulan1: 62000000,
      triwulan2: 26000000,
      triwulan3: 26000000,
      triwulan4: 26000000
    }, {
      rek_P5: '5.1.02.01.01.0052',
      rek_PKSk4: 3,
      tahun: 2022,
      nama: 'Belanja Makanan dan Minuman Rapat',
      triwulan1: 86000000,
      triwulan2: 76000000,
      triwulan3: 66000000,
      triwulan4: 56000000
    }, {
      rek_P5: '5.1.02.01.01.0001',
      rek_PKSk4: 3,
      tahun: 2022,
      nama: 'Belanja Perjalanan Dinas Biasa',
      triwulan1: 56000000,
      triwulan2: 46000000,
      triwulan3: 36000000,
      triwulan4: 26000000
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pengeluarans', null, {});
  }
};
