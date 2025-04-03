import express from 'express'
import StudentHandler from '../handlers/student'

const router = express.Router();
const studentHandler = new StudentHandler();

router.get('/', studentHandler.getStudents);

export default router;