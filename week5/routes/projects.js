// const express = require('express');
// const router = express.Router();

// router.get('/', (req, res) => {
//   res.send('Welcome to the Projects Room');
// });

// module.exports = router;

// const express = require('express');
// const Router = express.Router();
// const projectsController = require('../controllers/projectsController');

// router.get('/', projectsController.getAllProjects);

// module.exports = router;

const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

// All routes below
router.get('/', projectsController.getAllProjects);

module.exports = router;
