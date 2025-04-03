import {Request, Response, NextFunction} from 'express'
import StudentController from "../controllers/student"
import studentService from "../database/user"

class studentHandler{
    studentController:StudentController
    constructor(){
        this.studentController = new StudentController(studentService);
    }

    getStudents(req: Request, res: Response, next:NextFunction){
        
    }
}