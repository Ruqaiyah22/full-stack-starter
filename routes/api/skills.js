const express = require('express');

const router = express.Router();

router.get('/', async function(req, res) { // if it matches
    res.json([
        {id: 1, name: 'kaya'},
        {id: 2, name: 'aisha'}
    ]);
});

module.exports = router;