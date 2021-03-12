const express = require('express');

const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/passwords', require('./passwords'));
router.use('/sections', require('./sections'));
router.use('/sectionItems', require('./sectionItems'));
router.use('/skills', require('./skills'));
router.use('/uploads', require('./uploads'));
router.use('/users', require('./users'));
router.use('/skills', require('./skills')); // added for skills

module.exports = router;
