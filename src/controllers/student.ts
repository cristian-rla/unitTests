import studentService from "../database/student"

class StudentController{
    studentService : typeof studentService;
    constructor(studentService: typeof studentService){
        this.studentService = studentService;
    }
    async getStudentStatus(){
        this.studentService.getStudentsData();

    }

}

export default StudentController;