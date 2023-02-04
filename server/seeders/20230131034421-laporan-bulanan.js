'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('laporan_bulanans', [{
      rek_P5:1,
      bulan: 1,
      tahun: 2022,
      anggaran: 2298937,
    }, {
      rek_P5:1,
      bulan: 4,
      tahun: 2022,
      anggaran: 2298936,
    }, {
      rek_P5:1,
      bulan: 7,
      tahun: 2022,
      anggaran: 2298936,
    }, {
      rek_P5:1,
      bulan: 10,
      tahun: 2022,
      anggaran: 2298936,
    }, {
      rek_P5:6,
      bulan: 1,
      tahun: 2022,
      anggaran: 8734250,
    }, {
      rek_P5:6,
      bulan: 4,
      tahun: 2022,
      anggaran: 8734250,
    }, {
      rek_P5:6,
      bulan: 7,
      tahun: 2022,
      anggaran: 8734250,
    }, {
      rek_P5:6,
      bulan: 10,
      tahun: 2022,
      anggaran: 8734250,
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('laporan_bulanans', null, {});
  }
};
