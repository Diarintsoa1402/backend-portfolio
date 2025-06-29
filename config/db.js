// config/db.js
const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

(async () => {
  try {
    const client = await pool.connect();
    console.log('✅ PostgreSQL connecté avec succès');
    client.release();
  } catch (err) {
    console.error('❌ Erreur de connexion à PostgreSQL:', err);
  }
})();

module.exports = pool; // ✅ CORRECT
