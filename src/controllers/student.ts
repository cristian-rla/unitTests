import studentServ from "../database/student"

class StudentController{
    studentService : typeof studentServ;
    constructor(studentService: typeof studentServ){
        this.studentService = studentService;
    }
    getStudentStatus(){
        const processed = this.studentService.getStudentData().map(({ mat, grade, debt}) => {
        let message;
            if(grade > 90 && !debt){
                message = "Te graduaste con honores";
            } else if(grade > 90 && debt){
                message = "Tenías honores pero tienes un adeudo";
            } else if(grade >= 70){
                message = "Pasaste muy apenas";

            } else if(grade < 70 && !debt){
                message = "Como no tienes adeudo, tienes derecho a un examen de recuperacion";
            } else {
                message = "expulsado";

            }
            return {mat, message};
        });        
        return processed;
    }
}

export default StudentController;