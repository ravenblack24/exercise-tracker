const moment = require('moment');
const {findById} = require('../services/index-user');
const {createAndSaveExercise} = require('../services/index-exercise');

const addExercise = async (req, res) => {
    const userId = req.body.userId;
    const description = req.body.description;
    const duration = req.body.duration;
    var date = req.body.date;

    if(!date) {
       date = moment().format('YYYY-MM-DD');
    }

    try {
        const userLookup = await findById(userId);

        if(userLookup == null) {
            return res.json({"error": "id not found"});
        }

        const newExercise = await createAndSaveExercise({
            "userId": userId,
            "log" : [{ 
                "description": description,
                "duration" : duration,
                "date": date }]
        });
        console.log("saved");
        
        return res.json({
            "_id" : newExercise._id,
            "username": newExercise.username,
            "count": 0,
            "log": newExercise.log 
        });

    } catch(err) {
        return res.json({"error": "unable to save"});
    }
} 

module.exports = {addExercise}