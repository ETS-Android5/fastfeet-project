
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.addColumn('transporters', 'avatar_id', {
    type: Sequelize.INTEGER,
    references: { model: 'files', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull: true,
  }),

  down: (queryInterface) => queryInterface.removeColumn('transporters', 'avatar_id'),
};
