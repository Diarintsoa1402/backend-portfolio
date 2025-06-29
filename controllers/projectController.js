const ProjectModel = require('../models/projectModel');

const ProjectController = {
 async getAll(req, res) {
  try {
    console.log("📥 getAll lancé...");
    const projects = await ProjectModel.getAll();
    console.log("✅ Projets récupérés:", projects);
    res.json(projects);
  } catch (error) {
    console.error("❌ Erreur dans getAll:", error);
    res.status(500).json({ error: 'Erreur lors de la récupération des projets.' });
  }
},
  async getById(req, res) {
    try {
      const project = await ProjectModel.getById(req.params.id);
      if (!project) return res.status(404).json({ error: 'Projet non trouvé.' });
      res.json(project);
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la récupération du projet.' });
    }
  },

async create(req, res) {
  try {
    console.log("📦 Données reçues pour création:", req.body);
    await ProjectModel.create(req.body);
    res.status(201).json({ message: 'Projet créé avec succès.' });
  } catch (err) {
    console.error("❌ Erreur dans create:", err); // Log complet
    res.status(500).json({ error: "Erreur lors de la création du projet." });
  }
}
,

  async update(req, res) {
    try {
      await ProjectModel.update(req.params.id, req.body);
      res.json({ message: 'Projet mis à jour.' });
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la mise à jour.' });
    }
  },

  async delete(req, res) {
    try {
      await ProjectModel.delete(req.params.id);
      res.json({ message: 'Projet supprimé.' });
    } catch (error) {
      res.status(500).json({ error: 'Erreur lors de la suppression.' });
    }
  },
};

module.exports = ProjectController;
