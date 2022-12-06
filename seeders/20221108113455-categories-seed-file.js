'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', ['動作片', '冒險片', '動畫片', '喜劇片', '偵探推理片', '紀錄片', '戲劇片', '史詩或英雄片', '倫理片', '幻想片', '強盜片', '恐怖片', '武俠片', '靈異片', '文藝片', '警匪片', '科幻片', '默片', '懸疑片', '驚悚片', '戰爭片', '西部片'].map(item => {
      return {
        name: item,
        created_at: new Date(),
        updated_at: new Date()
      }
    }), {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Categories', {})
  }
}
