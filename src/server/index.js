const express = require('express');
const mongoose = require("mongoose");
var cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

const Schema = mongoose.Schema;

mongoose.connect('mongodb+srv://admin:admin@cluster0-xejaa.mongodb.net/users?retryWrites=true')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('error', err));

app.use(cors());
app.options('*', cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const usersSchema = new Schema({fullname: String, age: String, surname: String, email: String, isWorking: Boolean});
const Users = mongoose.model('Data', usersSchema);

async function createUser(userObj) {
  const userData = new Users({fullname: userObj.fullname, age: userObj.age,
    surname: userObj.surname, email: userObj.email, isWorking: userObj.isWorking});
  await userData.save();
}

app.get('/users', cors(), (req, res) => {
   Users.find()
   .exec()
   .then( result => {
   res.status( 200 ).json({
   items: result,
 })
})
});


app.post('/users', cors(), (req, res) => {
  createUser(req.body);
});


app.listen(3000, () => console.log('Listening on port 3000...'));
