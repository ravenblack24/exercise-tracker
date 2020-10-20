const lookup = require('./lookupUser');

const createUser = (req, res) => {
    const user = req.body.username;

    if(!user) {
       return res.json({"error" : "enter a username"});
    }
    var {createAndSaveUser} = require('../controllers/createAndSaveUser');
    createAndSaveUser({"username": user}, res);
} 

module.exports = {createUser}