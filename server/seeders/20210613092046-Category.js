'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
    */
    let data = [];
    for ( let i = 1; i <= 3; i++ ) {
      const d = {
        name: 'Swallow',
        description: 'It is a long established fact that a reader will be distracted',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
      data.push(d);
    }

    return queryInterface.bulkInsert('categories', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
