const { readFileSync } = require('fs');
const { Sequelize } = require('sequelize');
const Importer = require('mysql-import');

describe('Desafios de manipulação de tabelas', () => {
  let importer;
  let sequelize;

  beforeAll(() => {
    jest.setTimeout(100000);
    importer = new Importer(
      { user: process.env.MYSQL_USER, password: process.env.MYSQL_PASSWORD, host: process.env.HOSTNAME }
    );

    sequelize = new Sequelize(
      `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASSWORD}@${process.env.HOSTNAME}:3306/`
    );
  });

  afterAll(() => {
    importer.disconnect();
    sequelize.close();
  });

  beforeEach(async () => {
    await importer.import('./northwind.sql');
    await sequelize.query('USE northwind;', { type: 'RAW' });
  });

  afterEach(async () => await sequelize.query('DROP DATABASE northwind;', { type: 'RAW' }));

  describe('Queries de inserção', () => {
    const countOrderDetailsQuery = `SELECT COUNT(*) AS details_count FROM northwind.order_details
      WHERE order_id = 69
            AND product_id = 80
            AND quantity = 15.0000
            AND unit_price = 15.0000
            AND discount = 0
            AND status_id = 2
            AND date_allocated IS NULL
            AND purchase_order_id IS NULL
            AND inventory_id = 129`;

    const lastOrderDetailsIdsQuery = (limit = 1) =>
      `SELECT id FROM northwind.order_details ORDER BY id DESC LIMIT ${limit};`;

    describe('Adicione ao `order_details` uma linha com os seguintes dados: `order_id`: 69, `product_id`: 80, `quantity`: 15.0000, `unit_price`: 15.0000, `discount`: 0, `status_id`: 2, `date_allocated`: NULL, `purchase_order_id`: NULL e `inventory_id`: 129', () => {
      it('Verifica o desafio20', async () => {
        const challengeQuery = readFileSync('desafio20.sql', 'utf8').trim();
        const lastOrderDetailsId = (
          await sequelize.query(lastOrderDetailsIdsQuery(), { type: 'SELECT' })
        )[0].id;

        expect(await sequelize.query(countOrderDetailsQuery, { type: 'SELECT' }))
          .toEqual([{ details_count: 0 }]);

        await sequelize.query(challengeQuery, { type: 'INSERT' });

        expect(await sequelize.query(countOrderDetailsQuery, { type: 'SELECT' }))
          .toEqual([{ details_count: 1 }]);

        expect(await sequelize.query(lastOrderDetailsIdsQuery(), { type: 'SELECT' }))
          .toEqual([{ id: lastOrderDetailsId + 1 }]);
      });
    });

    describe('Adicione, com um único `INSERT`, duas linhas ao `order_details` com os mesmos dados. Esses dados são novamente os mesmos do requisito 20', () => {
      it('Verifica o desafio21', async () => {
        const challengeQuery = readFileSync('desafio21.sql', 'utf8').trim();
        const lastOrderDetailsId = (
          await sequelize.query(lastOrderDetailsIdsQuery(), { type: 'SELECT' })
        )[0].id;

        expect(await sequelize.query(countOrderDetailsQuery, { type: 'SELECT' }))
          .toEqual([{ details_count: 0 }]);

        await sequelize.query(challengeQuery, { type: 'INSERT' });

        expect(await sequelize.query(countOrderDetailsQuery, { type: 'SELECT' }))
          .toEqual([{ details_count: 2 }]);

        expect(await sequelize.query(lastOrderDetailsIdsQuery(2), { type: 'SELECT' }))
          .toEqual([{ id: lastOrderDetailsId + 2 }, { id: lastOrderDetailsId + 1 }]);
      });
    });
  });

  describe('Queries de atualização', () => {
    const countOrderDetailsByDiscountQuery = (discount) =>
      `SELECT COUNT(*) AS details_count FROM order_details WHERE discount = ${discount};`;

    describe('Atualize os dados de `discount` do `order_details` para 15', () => {
      it('Verifica o desafio22', async () => {
        const challengeQuery = readFileSync('desafio22.sql', 'utf8').trim();

        expect(await sequelize.query(countOrderDetailsByDiscountQuery(15), { type: 'SELECT' }))
          .toEqual([{ details_count: 0 }]);

        await sequelize.query(challengeQuery, { type: 'UPDATE' });

        expect(await sequelize.query(countOrderDetailsByDiscountQuery(15), { type: 'SELECT' }))
          .toEqual([{ details_count: 58 }]);
      });
    });

    describe('Atualize os dados de `discount` da tabela `order_details` para 30 cuja `unit_price` seja menor que 10.0000', () => {
      it('Verifica o desafio23', async () => {
        const challengeQuery = readFileSync('desafio23.sql', 'utf8').trim();

        expect(await sequelize.query(countOrderDetailsByDiscountQuery(30), { type: 'SELECT' }))
          .toEqual([{ details_count: 0 }]);

        await sequelize.query(challengeQuery, { type: 'UPDATE' });

        expect(await sequelize.query(countOrderDetailsByDiscountQuery(30), { type: 'SELECT' }))
          .toEqual([{ details_count: 17 }]);
      });
    });

    describe('Atualize os dados de `discount` da tabela `order_details` para 45 cuja `unit_price` seja maior que 10.0000 e o id seja um número entre 30 a 40', () => {
      it('Verifica o desafio24', async () => {
        const challengeQuery = readFileSync('desafio24.sql', 'utf8').trim();

        expect(await sequelize.query(countOrderDetailsByDiscountQuery(45), { type: 'SELECT' }))
          .toEqual([{ details_count: 0 }]);

        await sequelize.query(challengeQuery, { type: 'UPDATE' });

        expect(await sequelize.query(countOrderDetailsByDiscountQuery(45), { type: 'SELECT' }))
          .toEqual([{ details_count: 7 }]);
      });
    });
  });

  describe('Queries de deleção', () => {
    const countOrderDetailsQuery = 'SELECT COUNT(*) AS details_count FROM order_details;';

    describe('Delete todos os dados em que a `unit_price` da tabela `order_details` seja menor que 10.0000', () => {
      it('Verifica o desafio25', async () => {
        const challengeQuery = readFileSync('desafio25.sql', 'utf8').trim();

        expect(await sequelize.query(countOrderDetailsQuery, { type: 'SELECT' }))
          .toEqual([{ details_count: 58 }]);

        await sequelize.query(challengeQuery, { type: 'DELETE' });

        expect(await sequelize.query(countOrderDetailsQuery, { type: 'SELECT' }))
          .toEqual([{ details_count: 41 }]);
      });
    });

    describe('Delete todos os dados em que a `unit_price` da tabela `order_details` seja maior que 10.0000', () => {
      it('Verifica o desafio26', async () => {
        const challengeQuery = readFileSync('desafio26.sql', 'utf8').trim();

        expect(await sequelize.query(countOrderDetailsQuery, { type: 'SELECT' }))
          .toEqual([{ details_count: 58 }]);

        await sequelize.query(challengeQuery, { type: 'DELETE' });

        expect(await sequelize.query(countOrderDetailsQuery, { type: 'SELECT' }))
          .toEqual([{ details_count: 20 }]);
      });
    });

    describe('Delete todos os dados da tabela `order_details`', () => {
      it('Verifica o desafio27', async () => {
        const challengeQuery = readFileSync('desafio27.sql', 'utf8').trim();

        expect(await sequelize.query(countOrderDetailsQuery, { type: 'SELECT' }))
          .toEqual([{ details_count: 58 }]);

        await sequelize.query(challengeQuery, { type: 'DELETE' });

        expect(await sequelize.query(countOrderDetailsQuery, { type: 'SELECT' }))
          .toEqual([{ details_count: 0 }]);
      });
    });
  });
});
