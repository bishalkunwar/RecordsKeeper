const Students = require("../models/student.model");
const studentModel = require("../models/student.model");

//Get all students lists.
exports.getStudents = (req, res) => {

    studentModel.getAllStudents((error, Students) => {
        try {
            console.log("Students Records:", Students);
            res.send(Students);
        } catch (error) {
            console.log(error);
            res.send(error);
        }
    });

};


//Get students by Phone.
exports.getStudentByPhone = (req, res) => {

};


//create new student.
exports.createStudent = (req, res) => {

};


//get student by phone id for update.
exports.getStudentById = (req, res) => {

};


//update student
exports.updateStudent = (req, res) => {

};


//delete student.
exports.deleteStudent = (req, res) => {

};