const express = require('express');
const router = express.Router();
// Simple GET route
router.get('/', (req, res) => {
res.send('Hello from the /api/hello route!');
});
module.exports = router;