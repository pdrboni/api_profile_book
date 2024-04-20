/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      'photos',
      'aluno_id',
      'student_id',
    );
  },

  async down() {},
};
