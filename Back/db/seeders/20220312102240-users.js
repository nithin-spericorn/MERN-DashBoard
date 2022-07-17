/*'use strict';
const {users} = require('../models')

module.exports = {
  async up (queryInterface, Sequelize) {
    const info = await users.findAll()
    if(!info.length){
      const password = await users.hashPassword('password');
      let data = [
        {
          user_name: 'root',
          password,
          created_at: new Date(),
          updated_at: new Date()
        }
      ]
      return await queryInterface.bulkInsert('users', [...data],{});
    } else {
      return
    }
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
*/