
const produtos=[
  {  id:1,
    nome:'rimel transparente.jpg',
    categorias_id:1,
    preco:2.50,
    img:'rimel.jpg'
  },
  {  id:2,
    nome:'base',
    categorias_id:2,
    preco:30.00,
    img:'base.jpg',

  },
  {  id:3,
    nome:'paleta',
    categorias_id:3,
    preco:14.00,
    img:'paleta azul.png',
  },
  {  id:4,
    nome:'paleta colorida',
    categorias_id:4,
    preco:4.00,
    img:'paleta colorida.jpg',
  },
  {  id:5,
    nome:'paleta',
    categorias_id:5,
    preco:10.00,
    img:'paleta1.jpg',
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
