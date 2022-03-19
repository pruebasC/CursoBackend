'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('tasks', [
      {id: 1, description: 'Grabar el curso de Backend',createdAt: new Date(), updatedAt: new Date()},
      {id: 2, description: 'Editar los vídeos del curso de Backend',createdAt: new Date(), updatedAt: new Date()},
      {id:3, description: 'Subir los vídeos',createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('tasks', null, {});

  }
};
