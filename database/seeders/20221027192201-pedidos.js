//se usar 0 é porque não foi entregue se colocarmos 1 é que foi entregue
const pedidos=[{
  id:1,
  //0(não saiu da loja),1(saiu da loja),2(esta a caminho),3(pedido entregue ao destinatario)
  status:0,
  clientes_id:3,
  valor_total:120.00,
  endereco_entrega:'na casa da fulana'
},
{ 
  id:2,
  status:1,
  clientes_id:5,
  valor_total:450.00,
  endereco_entrega:'no sitio do Sr.Lobato',
},
{
  id:3,
  status:0,
  clientes_id:4,
  valor_total:490.00,
  endereco_entrega:'Rua das ostras, n 89',
},
{
  id:4,
  status:3,
  clientes_id:6,
  valor_total:500.00,
  endereco_entrega:'Rua dos Camarõe, N 450',
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
