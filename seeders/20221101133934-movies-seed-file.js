'use strict'
const faker = require('faker')

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
    await queryInterface.bulkInsert('movies',
      Array.from({ length: 50 }, () => ({
        title: faker.name.title(),
        genres: '[1, 2, 3, 4, 5]',
        description: faker.lorem.text(),
        release_date: new Date(),
        Image: `https://loremflickr.com/320/240/rabbit,rabbit/?random=${Math.random() * 100}`,
        created_at: new Date(),
        updated_at: new Date()
      }))
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('movies', {})
  }
}
