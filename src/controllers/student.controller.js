//const Students = require("../models/student.model");
const Students = require("../models/student.model");
const studentModel = require("../models/student.model");

//Get all students lists.
exports.getStudents = (req, res) => {
    studentModel.getAllStudents((err, Students) => {
        console.log("Students Data: Here");
        if (err)
            res.send(err);
        console.log("Students:", Students);
        res.send(Students);
    });

};


//Get students by Phone.
exports.getStudentByPhone = (req, res) => {
    studentModel.getStudentByPhone(req.params.Phone, (err, Students) => {
        if (err)
            res.send(err);
        console.log("Single Student Data", Students);
        res.send(Students);
    });
};


//create new student.
exports.createStudent = (req, res) => {
    const studentReqData = new studentModel(req.body);
    console.log("Student Req Data:", studentReqData);

    //check null.
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.send(400).send({ success: false, message: "Please fill all the fields" });
    } else {
        studentModel.createStudent(studentReqData, (err, Students) => {
            if (err)
                res.send(err);
            console.log("Employee created successfully", Students);
            res.json({ status: true, message: "Student Created Successfully.", data: Students.insertId });
        });
    }
};


//get student by phone id for update.
exports.getStudentById = (req, res) => {
    studentModel.updateStudentById(req.params.id, (err, Students) => {
        if (err)
            res.send(err);
        console.log("Single Student Data:", Students);
        res.send(JSON.stringify({ status: 200, error: null, response: Students }));
    });

};


//update student
exports.updateStudent = (req, res) => {
    const studentReqData = new studentModel(req.body);
    console.log("studentReqData update:", studentReqData);

    //check null
    if (req.body.constructor === Object && Object.keys(res.body).length === 0) {
        res.send(400).send({ success: false, message: "Please fill all the fields" });
    } else {
        studentModel.updateStudent(req.params.id, studentReqData, (err, Students) => {
            if (err)
                res.send(err);
            res.JSON({ status: true, message: "Student Updated Successfully,", data: studentReqData });
        });
    }
};


//delete student.
exports.deleteStudent = (req, res) => {
    studentModel.deleteStudent(req.params.id, (err, Students) => {
        if (err)
            res.send(err);
        res.JSON({ success: true, message: "Student Data Deleted Successfully!" });
    });
};