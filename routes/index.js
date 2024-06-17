// Necessary dependency
const router = require('express').Router();

// Import modular routers for /notes
const notesRouter = require('./notes');

router.use('/notes', notesRouter);

// Export route
module.exports = router;
