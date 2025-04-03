import {Request, Response, NextFunction} from 'express'
import StudentController from "../controllers/student"
import studentService from "../database/student"

class StudentHandler{
    studentController:StudentController
    constructor(){
        this.studentController = new StudentController(studentService: studentService);
    }

    getStudents(req: Request, res: Response, next:NextFunction){
        
    }
}

export default StudentHandler;