const pool = require('../config/db');

const ContactModel = {
  async getAll() {
    const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
    return result.rows;
  },

  async create(data) {
    const { name, email, message } = data;
    await pool.query(
      'INSERT INTO contacts (name, email, message) VALUES ($1, $2, $3)',
      [name, email, message]
    );
  },

  async delete(id) {
    await pool.query('DELETE FROM contacts WHERE id = $1', [id]);
  }
};

module.exports = ContactModel;