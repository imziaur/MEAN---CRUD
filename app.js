// function sum(a, b) {
//     return a + b;
//   }
//   module.exports = sum;
const express = require('express');

var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var { Employee } = require('./models/employee');
function get_employee(){
  // var result = 'success';
  var result = '';
  Employee.find((err, docs) => {
      if(!err) { var result='success'; }
      else { var result='failed'; }
      // return 'success';
      return result;
  }); 
  return result;
}

module.exports = get_employee; 