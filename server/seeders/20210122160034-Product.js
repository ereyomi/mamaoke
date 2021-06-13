'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let data = [];

    for (let i = 1; i <= 40; i++) {
      const newRecord = {
        title: 'Test Product ' + i,
        slug: 'test-slug-' + i,
        productImgUrl: 'upload/product' + ((i % 2 === 0) ? '-a' : '-b') + '.jpg',
        price: 430 * i * Math.round( i / 2 ),
        secPrice: 1000 * i,
        CategoryId: (i % 2 === 0) ? 1 : 2,
        slug: 'It is a long established fact that a reader will be distracted...',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing',
        createdAt: new Date(),
        updatedAt: new Date(),
      };
      data.push(newRecord);
    }

    return queryInterface.bulkInsert('products', data, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("products", null, {});
  }
};
