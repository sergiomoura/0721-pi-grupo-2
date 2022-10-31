const produtos=[
  {  id:1,
    nome:'rimel',
    categorias_id:1,
    preco:2.50
  },
  {  id:2,
    nome:'base',
    categorias_id:2,
    preco:30.00,
  },
  {  id:3,
    nome:'batom',
    categorias_id:3,
    preco:14.00,
  },
  {  id:4,
    nome:'lápis',
    categorias_id:4,
    preco:4.00
  },
  {  id:5,
    nome:'máscara',
    categorias_id:5,
    preco:10.00
  },
]


module.exports = {
  async up (queryInterface, Sequelize) {
 
     await queryInterface.bulkInsert('produtos',produtos, {});
   
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('produtos', null, {});
     
  }
};
