import {Request, Response, NextFunction} from 'express'
import StudentController from "../controllers/student"
import studentService from "../database/student"

class StudentHandler{
    studentController:StudentController;
    
    constructor(){
        this.studentController = new StudentController(studentService);

        this.getStudents = this.getStudents.bind(this); // IMPORTANTISIMO. Porque al pasar una función como callback se pierde el contexto this, y bind previene eso.
    }

    async getStudents(req: Request, res: Response, next:NextFunction){
        try{
            const studentsData = await this.studentController.getStudentStatus();
            res.json(studentsData);
        } catch(error){
            next(error);
        }
    }
}

export default StudentHandler;