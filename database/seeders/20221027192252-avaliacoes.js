const avaliacoes=[
  {
    id:1,
    //nota 0 (não like) 1 (like)
    nota:1,
    clientes_id:6,
  },
  {
    id:2,
    nota:0,
    clientes_id:2,
  },
  {
    id:3,
    nota:0,
    clientes_id:3,
  },
  {
    id:4,
    nota:0,
    clientes_id:4,
  },
  {
    id:5,
    nota:1,
    clientes_id:1,
  },
  {
    id:6,
    nota:1,
    clientes_id:5,
  },
]

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('avaliacoes', avaliacoes,  {});
    
  },

  async down (queryInterface, Sequelize) {
  
   await queryInterface.bulkDelete('avaliacoes', null, {});
     
  }
};
