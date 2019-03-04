// function sum(a, b) {
//     return a + b;
//   }
//   module.exports = sum;
// const express = require('express');

// var router = express.Router();
// var ObjectId = require('mongoose').Types.ObjectId;

// var { Employee } = require('./models/employee');
// function get_employee(){
//   // var result = 'success';
//   Employee.find((err, docs) => {
//       if(!err) { res.send(docs);var result='success'; }
//       else { console.log('Error in retriving Employees :' + JSON.stringify(err, undefined, 2)); var result='failed'; }
//       // return 'success';
//       return result;
//   }); 
//   return result;
// }

// module.exports = get_employee; 

const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');

var employeeController = require('./controllers/employeeController.js');
var app = express();
app.use(bodyParser.json());

app.listen(3000, () => console.log('Server started at port : 3000'));
app.use('/employees', employeeController);

function sum(a, b) {
    return a + b;
  }
  module.exports = sum;

