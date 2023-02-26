'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('akuns', [{
      NIP: '0123456789',
      password: 'budi',
      role: 'admin'
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('akuns', null, {});
  }
};
