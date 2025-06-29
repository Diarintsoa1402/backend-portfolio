const pool = require('../config/db');


const ProjectModel = {
  async getAll() {
    const result = await pool.query('SELECT * FROM projects');
    return result.rows;
  },

  async getById(id) {
    const result = await pool.query('SELECT * FROM projects WHERE id = $1', [id]);
    return result.rows[0];
  },

  async create(data) {
    const { title, description, image, link, tags } = data;
    await pool.query(
      'INSERT INTO projects (title, description, image, link, tags) VALUES ($1, $2, $3, $4, $5)',
      [title, description, image, link, tags]
    );
  },

  async update(id, data) {
    const { title, description, image, link, tags } = data;
    await pool.query(
      'UPDATE projects SET title = $1, description = $2, image = $3, link = $4, tags = $5 WHERE id = $6',
      [title, description, image, link, tags, id]
    );
  },

  async delete(id) {
    await pool.query('DELETE FROM projects WHERE id = $1', [id]);
  },
};

module.exports = ProjectModel;
