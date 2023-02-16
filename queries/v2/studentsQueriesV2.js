const studentDataV2 = require("../../data/v2/studentsDataV2.json");

const getAllStudentsV2 = () => {
    const { students } = studentDataV2; 
    return students;
};

const getStudentByIdV2 = (id) => {
    const { students } = studentDataV2; 
    const student = students.find((el) => el.id === id);
    return student;
}

module.exports = {
    getAllStudentsV2, getStudentByIdV2
}
