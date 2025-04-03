import StudentService from "../database/student"

class StudentController{
    studentService : StudentService
    constructor(studentService:StudentService){
        this.studentService = studentService;
    }
    async getStudentStatus(){
        this.studentService.getStudentsData();

    }

}

export default StudentController;