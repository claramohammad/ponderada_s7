// dbTest.js
const pool = require('../db/database.js');

async function testDB() {
  try {
    const conn = await pool.getConnection();
    
    // Tentativa de criar uma tabela simples (remova se já tiver uma tabela)
    const createTableSql = `
      CREATE TABLE IF NOT EXISTS test_table (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      )
    `;
    await conn.query(createTableSql);
    console.log("Tabela 'test_table' criada ou já existente.");

    // Tentativa de inserir um registro
    const insertSql = `INSERT INTO test_table (name) VALUES ('Test Name')`;
    const [result] = await conn.query(insertSql);
    console.log("Registro inserido, ID:", result.insertId);

    // Tentativa de consultar registros
    const [rows] = await conn.query("SELECT * FROM test_table");
    console.log("Registros recuperados:", rows);

    conn.release();
  } catch (error) {
    console.error("Ocorreu um erro ao testar o banco de dados:", error);
  }
}

testDB();
