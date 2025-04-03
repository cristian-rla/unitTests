import StudentService from "../database/student"

class StudentController{
    studentService : typeof StudentService;
    constructor(studentService: typeof StudentService){
        this.studentService = studentService;
    }
    async getStudentStatus(){
        const processed = this.studentService.getStudentData().forEach(({ mat, grade, debt}) => {
        let message;
            if(grade > 90 && !debt){
                message = "Te graduaste con honores";
// l mensaje es "Te graduaste con honores". Si tiene >90 pero adeudo == true "Tenías honores pero tienes un adeudo". 90> >70 independiente del adeudo "Pasaste muy apenas". <70 sin adeudo "Como no tienes adeudo, tienes derecho a un examen de recuperacion". <70  && adeudo "expulsado"
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