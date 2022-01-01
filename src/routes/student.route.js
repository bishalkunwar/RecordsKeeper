const express = require("express");
const router = express.Router();

const studentsController = require("../controllers/student.controller");

//get all students.
router.get("/", studentsController.getStudents);

//get student by id.
router.get("/:id", studentsController.getStudentById);

//Get id for update.
router.get("/byPhone/:Phone", studentsController.getStudentByPhone);

//create new student.
router.post("/", studentsController.createStudent);

//Update Student.
router.put("/:id", studentsController.updateStudent);

//Delete Student
router.delete("/:id", studentsController.deleteStudent);

module.exports = router;