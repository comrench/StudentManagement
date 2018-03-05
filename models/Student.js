var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
  rollNo: String,
  grade: String,
  studentName: String,
  fatherName: String,
  dateOfBirth: String,
  address: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Student', StudentSchema);
