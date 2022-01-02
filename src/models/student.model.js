var dbConn = require("../../config/db.config");

var Students = function(Students) {
    this.FirstName = Students.FirstName;
    this.LastName = Students.LastName;
    this.Email = Students.Email;
    this.Phone = Students.Phone;
    this.Salary = Students.Salary;
}

//Get All Students.
Students.getAllStudents = (result) => {
    dbConn.query(' SELECT * FROM students', (req, res) => {
        try {
            console.log("Students Records Fetched Successfully");
            console.log(res);
            result(null, res);
        } catch (error) {
            console.log("Error while fetching data", error);
            result(null, error);
        }
    });
};

//get students by phone number and can be replaced by any variable
Students.getStudentByPhone = (Phone, result) => {
    dbConn.query("SELECT * FROM students WHERE Phone=?", Phone, (req, res) => {
        try {
            console.log("Student Record by this number is: ", res);
            result(null, res);

        } catch (error) {
            console.log("Error while fetching data by phone number", error);
            result(null, res);
        }
    });
};

//Create new Student.
Students.createStudent = (studentReqData, result) => {
    dbConn.query("INSERT INTO students SET ?", studentReqData, (req, res) => {
        try {
            console.log("Student Created Successfully", res);
            result(null, res);
        } catch (error) {
            console.log("Error While Inserting Data");
            result(null, error);
        }
    });
};


//Get Student by id for update.
Students.updateStudentById = (id, result) => {
    dbConn.query("SELECT * FROM students where id=?", id, (req, res) => {
        try {
            console.log("Id specific update");
            result(null, res);
        } catch (error) {
            console.log("Error while fetching student by id", error);
            result(null, error);
        }
    });
};


//Update Student.
Students.updateStudent = (id, studentReqData, result) => {
    dbConn.query("UPDATE students SET FirstName=?, LastName=?, Email=?, Phone=?, Salary=? WHERE id=?", [studentReqData.FirstName, studentReqData.LastName, studentReqData.Email, studentReqData.Phone, studentReqData.Salary, id], (req, res) => {
        try {
            console.log("Student Updated Successfully", res);
            result(null, res);
        } catch (error) {
            console.log("Error While Update Student", error);
            result(null, error);
        }
    });
};


//Delete Student.
Students.deleteStudent = (id, result) => {
    dbConn.query("DELETE FROM Students WHERE id=?", [id], (req, res) => {
        try {
            console.log("Student Deleted Successfully", res);
            result(null, res);
        } catch (error) {
            console.log("Error while deleting student", error);
            result(null, error);
        }
    })
};


module.exports = Students;