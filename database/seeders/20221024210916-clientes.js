const bcrypt = require('bcrypt');
const clientes = [
  {
    id: 1,
    nome: 'langglow',
    email: 'langglow2022@gmail.com',
    senha: bcrypt.hashSync("12345", 10),
    endereco: 'Hollywood',
  },
  {
    id: 2,
    nome: 'Geovanna',
    email: 'geo2022@gmail.com',
    senha: bcrypt.hashSync("12345", 10),
    endereco: 'Itália',
  },
  {
    id: 3,
    nome: 'Gaby',
    email: 'gaby2022@gmail.com',
    senha: bcrypt.hashSync("12345", 10),
    endereco: 'Portugal',
  },
  {
    id: 4,
    nome: 'Naty',
    email: 'naty2022@gmail.com',
    senha: bcrypt.hashSync("12345", 10),
    endereco: 'Canadá',
  },
  {
    id: 5,
    nome: 'AnaCarol',
    email: 'anacarol2022@gmail.com',
    senha: bcrypt.hashSync("12345", 10),
    endereco: 'Roma',
  },
  {
    id: 6,
    nome: 'Lara',
    email: 'lara2022@gmail.com',
    senha: bcrypt.hashSync("12345", 10),
    endereco: 'World',
  },
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('clientes', clientes, {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('clientes', null, {});

  }
};
