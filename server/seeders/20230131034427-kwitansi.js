'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('kwitansis', [{
      rek_P5: 1,
      tahun: 2022,
      total: 1115300,
      nama: 'Belanja Alat Tulis Kantor an. Yannara', 
      NIP: '0123456789',
      status: 0
    }, {
      rek_P5: 2,
      tahun: 2022,
      total: 1000000,
      nama: 'Belanja Alat Tulis Kantor an. Yannara2', 
      NIP: '0123456789',
      status: 0
    }, {
      rek_P5: 5,
      tahun: 2022,
      total: 7082000,
      nama: 'Belanja Alat Tulis Kantor an. Yannara', 
      NIP: '0123456789',
      status: 0
    }, {
      rek_P5: 5,
      tahun: 2022,
      total: 1625000,
      nama: 'Belanja Bahan Cetak-Penggandaan Photo Copy an. Yannara', 
      NIP: '0123456789',
      status: 0
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('kwitansis', null, {});
  }
};
