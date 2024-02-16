const { Client } = require('pg');

module.exports = {
  async dbQuery(statement) {
    let client = new Client({ database: 'ffps' });

    await client.connect();
    let result = await client.query(statement);
    await client.end();

    return result;
  }
}