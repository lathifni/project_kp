'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('akuns', [{
      NIP: '197912302000021004',
      password: '$2b$10$xpx9nSLDOwMdOhC6ZrRVmuZXOkJM/KGbrMIj62yj6kbr9WPO7VppS',
      //admin
      role: 'admin'
    }, {
      NIP: '1990012520111117102',
      password: '$2b$10$Mw2M1ubjutVNC3wuL1JE2.Y7DASjop0IFBbV83hYRNYIAJLxrPL6.',
      //bendahara
      role: 'bendahara'
    }, {
      NIP: '198507232005022019',
      password: '$2b$10$doAgC6JxMig914uidlXIf.tfrnpaFSpqFBpMIiQtk0IRa03LEuJvm',
      //user
      role: 'user'
    }, {
      NIP: '197007231995021029',
      password: '$2b$10$doAgC6JxMig914uidlXIf.tfrnpaFSpqFBpMIiQtk0IRa03LEuJvm',
      //user
      role: 'user'
    },
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('akuns', null, {});
  }
};
