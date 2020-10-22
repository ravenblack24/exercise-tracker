const express = require('express');
const cors = require('cors');
const users = require('./src/api/controllers/users');
const exercise = require('./src/api/controllers/exercise');

const app = express();

app.use(express.static(__dirname+"/public"));
app.use(cors());
app.use(express.urlencoded({extended:false}));

app.get("/", (req, res) => {
    res.sendFile(__dirname+'/views/index.html');
})

app.post("/api/exercise/new-user", (req, res) => {
    users.createUser(req, res);
})

app.get("/api/exercise/users", (req, res) => {
    users.allUsers(res);
})

app.post("/api/exercise/add", (req, res) => {
    
})

const port = process.env.PORT || 3000;

const listener = app.listen(port, () => {
    console.log("Your app is listening on port " + listener.address().port);
});