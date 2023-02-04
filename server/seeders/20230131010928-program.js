'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('programs', [{
      rek_P4: '4.01.01.',
      tahun: 2022,
      nama: 'PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH PROVINSI'
    }, {
      rek_P4: '4.01.02.',
      tahun: 2022,
      nama: 'PROGRAM PENATAAN ORGANISASI'
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('programs', null, {});
  }
};
