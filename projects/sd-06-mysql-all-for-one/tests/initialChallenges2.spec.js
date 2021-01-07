const { readFileSync } = require('fs');
const { Sequelize } = require('sequelize');
const Importer = require('mysql-import');

describe('Desafios iniciais', () => {

  // beforeAll(async () => {
  //   // jest.setTimeout(100000);
   
  // });

  // afterAll(async () => {

  // });

  // describe.only('Exiba apenas os nomes do produtos na tabela `products`', () => {
    it('Verifica o desafio1', async () => {
      let sequelize;

      const importer2 = new Importer(
        { user: 'root', password: '123123', host: 'localhost' }
      );
  
      importer2.import('./northwind.sql').then(async () => {
        console.log('Consegui importar o banco');
        sequelize = new Sequelize(
          `mysql://root:123123@localhost:3306/northwind`
        );
        console.log('5050', sequelize);
        
        const challengeQuery = readFileSync('desafio1.sql', 'utf8').trim();
        const expectedResult = require('./challengesResults/challengeResult1');
  
        expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
        await sequelize.query('DROP DATABASE northwind;', { type: 'RAW' });
        sequelize.close();
      });
      console.log('passou pelo teste');
      
      // importer2.disconnect();
  
    });
  // });

  // describe('Exiba os dados de todas as colunas da tabela `products`', () => {
  //   it('Verifica o desafio2', async () => {
  //     const challengeQuery = readFileSync('desafio2.sql', 'utf8').trim();
  //     const expectedResult = require('./challengesResults/challengeResult2');

  //     expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
  //   });
  // });

  // describe('Escreva uma query que exiba os valores da coluna que representa a primary key da tabela `products`', () => {
  //   it('Verifica o desafio3', async () => {
  //     const challengeQuery = readFileSync('desafio3.sql', 'utf8').trim();
  //     const expectedResult = require('./challengesResults/challengeResult3');

  //     expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
  //   });
  // });

  // describe('Conte quantos registros existem em `product_name` de `products`', () => {
  //   it('Verifica o desafio4', async () => {
  //     const challengeQuery = readFileSync('desafio4.sql', 'utf8').trim();
  //     const expectedResult = require('./challengesResults/challengeResult4');

  //     expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
  //   });
  // });

  // describe('Monte uma query que exiba os dados da tabela `products` a partir do quarto registro até o décimo terceiro, incluindo tanto um quanto o outro', () => {
  //   it('Verifica o desafio5', async () => {
  //     const challengeQuery = readFileSync('desafio5.sql', 'utf8').trim();
  //     const expectedResult = require('./challengesResults/challengeResult5');

  //     expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
  //   });
  // });

  // describe('Exiba os dados das colunas `product_name` e `id` da tabela `products` de maneira que os resultados estejam em ordem alfabética dos nomes', () => {
  //   it('Verifica o desafio6', async () => {
  //     const challengeQuery = readFileSync('desafio6.sql', 'utf8').trim();
  //     const expectedResult = require('./challengesResults/challengeResult6');

  //     expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
  //   });
  // });

  // describe('Mostre apenas os ids dos 5 últimos registros da tabela `products` (a ordernação deve ser baseada na coluna `id`)', () => {
  //   it('Verifica o desafio7', async () => {
  //     const challengeQuery = readFileSync('desafio7.sql', 'utf8').trim();
  //     const expectedResult = require('./challengesResults/challengeResult7');

  //     expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
  //   });
  // });

  // describe('Faça uma consulta que retorne três colunas contendo os nomes `A`, `Trybe` e `eh` com os valores `5 + 6`, `"de"` e `2 + 8`, respectivamente', () => {
  //   it('Verifica o desafio8', async () => {
  //     const challengeQuery = readFileSync('desafio8.sql', 'utf8').trim();
  //     const expectedResult = require('./challengesResults/challengeResult8');

  //     expect(await sequelize.query(challengeQuery, { type: 'SELECT' })).toEqual(expectedResult);
  //   });
  // });
});
