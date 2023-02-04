'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sub_kegiatans', [{
      rek_PK4: 5,
      rek_PKSk4: '4.01.01.1.06.04.',
      tahun: 2022,
      nama: 'Penyediaan Bahan Logistik Kantor'
    }, {
      rek_PK4: 5,
      rek_PKSk4: '4.01.01.1.06.05.',
      tahun: 2022,
      nama: 'Penyediaan Barang Cetakan dan Penggandaan'
    }, {
      rek_PK4: 5,
      rek_PKSk4: '4.01.01.1.06.09.',
      tahun: 2022,
      nama: 'Penyelenggaraan Rapat Koordinasi dan Konsultasi SKPD'
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sub_kegiatans', null, {});
  }
};
