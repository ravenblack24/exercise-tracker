const {createAndSaveUser, findByUsername, getAllUsers} = require('../services/index-user');

const createUser = async (req, res) => {
    const user = req.body.username;

    if(!user) {
       return res.json({"error" : "enter a username"});
    }

    try {
        const userLookup = await findByUsername({"username": user});

        if(userLookup != null) {
            return res.json({"error": "username taken"});
        }

        const data = await createAndSaveUser({"username": user});
        return res.json({"username": data.username, "_id": data._id});

    } catch(err) {
        return res.json({"error": "unable to save"});
    }
} 

const allUsers = async (res) => {
    try {
        const users = await getAllUsers();
        console.log(users);
        return res.json(users);

    } catch (err) {
        return res.json({"error": "unable to get users"});
    }
}

module.exports = {createUser, allUsers}