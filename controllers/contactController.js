const ContactModel = require('../models/contactModel');

const ContactController = {
  async getAll(req, res) {
    try {
      const contacts = await ContactModel.getAll();
      res.json(contacts);
    } catch (err) {
      console.error('Erreur dans getAll:', err);
      res.status(500).json({ error: 'Erreur lors de la récupération des messages.' });
    }
  },

  async create(req, res) {
    try {
      await ContactModel.create(req.body);
      res.status(201).json({ message: 'Message envoyé avec succès.' });
    } catch (err) {
      console.error('Erreur dans create:', err);
      res.status(500).json({ error: 'Erreur lors de l\'envoi du message.' });
    }
  },

  async delete(req, res) {
    try {
      await ContactModel.delete(req.params.id);
      res.json({ message: 'Message supprimé avec succès.' });
    } catch (err) {
      console.error('Erreur dans delete:', err);
      res.status(500).json({ error: 'Erreur lors de la suppression.' });
    }
  }
};

module.exports = ContactController;