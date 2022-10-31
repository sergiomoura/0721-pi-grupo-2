const pedidos_tem_produtos=[

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
