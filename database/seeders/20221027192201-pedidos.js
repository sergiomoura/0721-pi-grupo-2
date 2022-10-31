//se usar 0 é porque não foi entregue se colocarmos 1 é que foi entregue
const pedidos=[{
  id:1,
  //status:,
  clientes_id:3,
  valor_total:120.00,
  endereco_entrega:'na casa da fulana'
},
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('pedidos',pedidos, {});
   
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('pedidos', null, {});
    
  }
};
