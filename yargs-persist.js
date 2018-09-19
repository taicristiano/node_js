var storage = require('node-persist');
var yargs = require('yargs');

 
storage.initSync({
    dir : "mydata",
    ttl : false
});
 
function getAllStudents()
{
    var students = storage.getItemSync('students');
    if (typeof students === "undefined"){
        return [];
    }
     
    return students;
}
 
 
function showStudents()
{
    var students = getAllStudents();
    for (var i = 0; i < students.length; i++)
    {
        console.log('Student: ' + students[i].fullName + "(" +students[i].id+ ")");
    }
}
 
function addStudent(studentId, studentName)
{
    var students = getAllStudents();
    students.push({
        id: studentId,
        fullName : studentName
    });
     
    storage.setItemSync('students', students);
}
 
function removeStudent(studentId)
{
    var students = getAllStudents();
     
    for (var i = 0; i < students.length; i++)
    {
        if (students[i].id === studentId){
            students.splice(i, 1);
        }
    }
     
    storage.setItemSync('students', students);
}
 
function editStudent(studentId, studentName)
{
    var students = getAllStudents();
     
    for (var i = 0; i < students.length; i++)
    {
        if (students[i].id === studentId){
            students[i].fullName = studentName;
        }
    }
     
    storage.setItemSync('students', students);
}
 

// addStudent(1, 'Cuong');
// addStudent(2, 'Kinh');
// addStudent(3, 'Chinh');
// addStudent(4, 'Quyen');
 
// Hiển thị danh sách sinh viên
// showStudents();

var argv = yargs.command("list", "Get List students", function(yargs) {
    // No thing
})
.command('create', "Create a students", function(yargs) {
    return yargs.options({
        id: {
            demand : true,
            type : "number"
        },
        fullName : {
            demand : true,
            type : "string"
        }
    });
})
.command("delete", "Delete a student", function(yargs) {
    return yargs.options({
        id : {
            demand : true,
            type : "number"
        }
    })
})
.command('edit', 'Edit a Student', function(yargs) {
    return yargs.options({
        id : {
            demand : true,
            type : "number"
        },
        fullName : {
            demand : true,
            type : "string"
        }
    });
})
.argv;

var action = argv._[0];
if (action === 'list') {
    showStudents();
} else if (action === 'create') {
    addStudent(argv.id, argv.fullName);
    console.log('Add Successfully!');
    showStudents();
} else if (action === 'delete') {
    removeStudent(argv.id);
    console.log('Delete Successfully!');
    showStudents();
} else if (action === 'edit') {
    editStudent(argv.id, argv.fullName);
    console.log('Edit Successfully!');
    showStudents();
} else {
    console.log('Command not found!');
    showStudents();
}


// command
// node yargs-persist.js create--id 12 --fullName tainhot
// node yargs-persist.js create --id 12 --fullName tainhot
// node yargs-persist.js list
// node yargs-persist.js list
// node yargs-persist.js create --id 12 --fullName tainhot
// node yargs-persist.js create --id 12 --fullName tainhot
// node yargs-persist.js create --id 12 --fullName tainhot
// node yargs-persist.js create --id 12 --fullName tainhot
// node yargs-persist.js create --id 12 --fullName tainhot
// node yargs-persist.js list
// node yargs-persist.js create --id 12 --fullName tainhot
// node yargs-persist.js create --id 12 --fullName tainhot
// node yargs-persist.js list
// node yargs-persist.js create --id 22 --fullName tainhot
