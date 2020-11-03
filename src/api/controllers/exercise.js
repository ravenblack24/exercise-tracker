const moment = require('moment');
const {findById} = require('../services/index-user');
const {logFilter} = require('../helper/logFilter');
const {createAndSaveExercise, getUserLog} = require('../services/index-exercise');

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
            "log" : { 
                description,
                duration,
                date }
        });
        
        return res.json({
            "_id" : newExercise._id,
            "username": newExercise.username,
            "date": newExercise.log[newExercise.log.length-1].date,
            "duration": newExercise.log[newExercise.log.length-1].duration,
            "description": newExercise.log[newExercise.log.length-1].description
        });

    } catch(err) {
        return res.json({"error": "unable to save exercise"});
    }
} 

const getLog = async (req, res) => {
    const userId = req.query.userId;
    let from = req.query.from;
    let to = req.query.to;
    let limit = req.query.limit;

    if(!userId) {
        return res.json({"error" : "enter a user id"});
    }

    // from & to needed for date range filter
    if(!from && !to) {
        from = undefined;
        to = undefined;
    }

    try {
        const userLog = await findById(userId);

        let response = {};

        response.id = userLog._id;
        response.username = userLog.username,
        response.count = logFilter(userLog.log, from, to, limit).count,
        response.log = logFilter(userLog.log, from, to, limit).log;
        return res.json(response);

    } catch(err) {
        return res.json({"error": "unable to get exercise record"});
    } 
}

module.exports = {addExercise, getLog}