'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('kegiatans', [{
      rek_P4: 1,
      rek_PK4: '4.01.01.1.01.',
      tahun: 2023,
      nama: 'KEGIATAN PERENCANAAN, PENGANGGARAN DAN EVALUASI KINERJA PERANGKAT DAERAH'
    }, {
      rek_P4: 1,
      rek_PK4: '4.01.01.1.02.',
      tahun: 2023,
      nama: 'KEGIATAN ADMINISTRASI KEUANGAN PERANGKAT DAERAH'
    }, {
      rek_P4: 1,
      rek_PK4: '4.01.01.1.03.',
      tahun: 2023,
      nama: 'KEGIATAN ADMINISTRASI BARANG MILIK DAERAH PADA PERANGKAT DAERAH'
    }, {
      rek_P4: 1,
      rek_PK4: '4.01.01.1.05.',
      tahun: 2023,
      nama: 'KEGIATAN ADMINISTRASI KEPEGAWAIAN PERANGKAT DAERAH'
    }, {
      rek_P4: 1,
      rek_PK4: '4.01.01.1.06.',
      tahun: 2023,
      nama: 'KEGIATAN ADMINISTRASI UMUM PERANGKAT DAERAH'
    }, {
      rek_P4: 1,
      rek_PK4: '4.01.01.1.07.',
      tahun: 2023,
      nama: 'KEGIATAN PENGADAAN BARANG MILIK DAERAH PENUNJANG URUSAN PEMERINTAH DAERAH'
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('kegiatans', null, {});
  }
};
