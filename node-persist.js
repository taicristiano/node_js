var storage = require('node-persist');

// storage.init({
//     dir : "students"
// });
storage.init({
    dir : "students"
});
// storage.init().then(function(){
    // Gọi các hàm setItem, getItem
// });

function getAllStudents() {
    var students = storage.getItem('students');
    if (typeof students === "undefined") {
        return [];
    }
    return students;
}

function getStudent(studentId) {
    var students = getAllStudents();

    var matchedStudent = null;
    var numberStudent = students.length;
    for(var i = 0; i < numberStudent.length; i++) {
        if (students[id].id === studentId) {
            matchedStudent = studentId;
            break;
        }
    }
    return matchedStudent;
}

function addStudent(id, fullName) {
    var students = getAllStudents();
    // console.log(students);
    students.push({
        id : id,
        fullName : fullName
    });

    storage.setItem('students', students);
}

function removeStudent(studentId) {
    var students = getAllStudents();
    var numberStudent = students.length;
    for(var i = 0; i < numberStudent; i++) {
        if (students[i].id === studentId) {
            students.splice(i, 1);
        }
    }
    storage.setItem('students', students);
}

function editStudent(studentId, studentName) {
    var students = getAllStudents();
    var numberStudent = students.length;
    for (var i = 0; i < numberStudent; i++){
        if (students[i].id === studentId){
            students[i].fullName = studentName;
        }
    }
     
    storage.setItem('students', students);
}

function showStudents() {
    var students = getAllStudents();
    students.forEach(function(student){
        console.log('Student: ' + student.fullName + ' (' + student.id + ')');
    });
}

addStudent(1, 'Cuong');
// addStudent(2, 'Kinh');
// addStudent(3, 'Chinh');
// addStudent(4, 'Quyen');
 
// Hiển thị danh sách sinh viên
showStudents();
