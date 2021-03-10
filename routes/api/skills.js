const express = require('express');

const router = express.Router();

const models = require('../../models');

router.get('/', async function(req, res) { // if it matches
    const rows = await models.Skills.findAll();
    res.json// ([
        // {id: 1, name: 'kaya'}, hardcoded
        // {id: 2, name: 'aisha'}
    //]);
});

router.post('/', async function (req, res){
    // build a new skill row in memory from the form data in the body of the request
    const row = models.Skill.build(req.body);
    try{
        // wait for the database to save the new row
        await row.save();
        // if successful, return 201 status (CREATED), amd the JSON data of the row
        res.status(201).json(row);
    } catch (error) {
        // if the database returns an error, print it to the consol
        console.log(error);
        // send back the UNPROCESSABLE ENTITY error code and the error message
        res.status(422).json(error);
    }
});

module.exports = router;