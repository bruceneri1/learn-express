const { error } = require('console');
const express = require('express')
const fs = require('fs');
const path = require('path');
const router = express.Router()

router.post('/adduser', (req, res) => {
    let newuser = req.body;
    req.users.push(newuser);

    fs.writeFile(path.resolve(__dirname, '../data/users.json'), JSON.stringify(req.users), (error) => {
        if (error) {
            console.log('Failed to write');
            return res.status(500).send('Failed to save the user');
        }
        console.log('User Saved');
        res.send('done');
    });
});

module.exports = router;