import StudentService from "../database/student"

class StudentController{
    studentService : typeof StudentService;
    constructor(studentService: typeof StudentService){
        this.studentService = studentService;
    }
    async getStudentStatus(){
        this.studentService.getStudentData();

    }

}

export default StudentController;