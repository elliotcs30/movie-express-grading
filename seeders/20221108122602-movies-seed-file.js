'use strict'
const faker = require('faker')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categories = await queryInterface.sequelize.query('SELECT id FROM Categories;', { type: queryInterface.sequelize.QueryTypes.SELECT })

    await queryInterface.bulkInsert('movies',
      Array.from({ length: 50 }, () => ({
        title: faker.name.title(),
        genres: '[1, 2, 3, 4, 5]',
        description: faker.lorem.text(),
        release_date: new Date(),
        Image: `https://loremflickr.com/320/240/rabbit,rabbit/?random=${Math.random() * 100}`,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: categories[Math.floor(Math.random() * categories.length)].id
      }))
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('movies', {})
  }
}
