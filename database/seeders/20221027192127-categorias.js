const categorias=[
{
  id:1,
  nome:'olhos',
},
{
  id:2,
  nome:'rosto',
},
{
  id:3,
  nome:'lábios',
},
{
  id:4,
  nome:'sobrancelhas',
},
{
  id:5,
  nome:'skincare',
}
]



module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categorias',categorias, {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categorias', null, {});

  }
};
