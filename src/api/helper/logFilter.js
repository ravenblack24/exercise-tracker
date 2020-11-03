const exercise = require("../controllers/exercise");

const logFilter = (exerciseLog, from, to, limit) => {

    let log = exerciseLog;

    if(from && to) {
        log = exerciseLog.filter(record => {
            return record.date <= new Date(to) && record.date >= new Date(from);
        })
    }

    if(limit && log.length > limit) {
        log = log.slice(0, limit);
    }

    return {log, count: log.length};

}

module.exports = {logFilter}