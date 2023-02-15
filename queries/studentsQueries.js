const studentData = require("../data/studentData.json");

const getAllStudents = () => {
    const { students } = studentData; 
    return students;
};

const getStudentById = (id) => {
    const { students } = studentData; 
    const student = students.find((el) => el.id === id);
    return student;
}

module.exports = {
    getAllStudents, getStudentById
}
