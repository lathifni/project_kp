'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('staffs', [{
       NIP: '0123456789',
       nama: 'Budi A',
       TTL: 'Padang, 30 Desember 1979',
       alamat: 'Jln. Mawar No.12',
       telp: '081234561234'
    }, {
      NIP: '987654321',
       nama: 'Frank A',
       TTL: 'Bekasi, 30 Januari 1979',
       alamat: 'Jln. Merdeka No.3A',
       telp: '081122334455'
    }]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('staffs', null, {});
  }
};
