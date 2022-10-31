const pedidos_tem_produtos=[
{
  produtos_id:1,
  pedidos_id:2,

},
{
  produtos_id:2,
  pedidos_id:3,

},
{
  produtos_id:3,
  pedidos_id:4,

},

]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('pedidos_tem_produtos',pedidos_tem_produtos, {});
    
  },

  async down (queryInterface, Sequelize) {
   
   await queryInterface.bulkDelete('pedidos_tem_produtos', null, {});
    
  }
};
