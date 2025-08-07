// const Project = require('../models/Project');

// exports.getAllProjects = async (req, res) => {
//   try {
//     const projects = await Project.find({});
//     res.json({ statusCode: 200, data: projects, message: 'Success' });
//   } catch (error) {
//     res.status(500).json({ statusCode: 500, message: 'Error fetching projects', error });
//   }
// };

const projectService = require('../services/projectService');

exports.getAllProjects = (req, res) => {
  const projects = projectService.getAllProjects();
  res.json({ data: projects });
};
