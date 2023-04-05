'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('staffs', [{
       NIP: '197912302000021004',
       nama: 'Budi Hartanto',
       TTL: 'Padang, 30 Desember 1979',
       alamat: 'Jln. Mawar No.12',
       telp: '081234561234'
    }, {
      NIP: '1990012520111117102',
       nama: 'Benny Agung',
       TTL: 'Bekasi, 25 Januari 1985',
       alamat: 'Jln. Merdeka No.3A',
       telp: '081122334455'
    },
    {
      NIP: '198507232005022019',
       nama: 'Siti Betriati',
       TTL: 'Bekasi, 30 Januari 1985',
       alamat: 'Jln. Proklamasi No.3A',
       telp: '081122334455'
    }, {
      NIP: '197007231995021029',
       nama: 'Suryanto Hanafi',
       TTL: 'Bekasi, 30 Januari 1970',
       alamat: 'Jln. Proklamasi No.3A',
       telp: '081122334455'
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('staffs', null, {});
  }
};
