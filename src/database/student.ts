type StudentData = {
    mat:string,
    name:string, 
    grade:number,
    debt:boolean    
};

const dummyData = [
    { "mat": "A01234567", "name": "Julio", "grade": 89.3, "debt": true },
    { "mat": "A09876543", "name": "Mariana", "grade": 76.5, "debt": false },
    { "mat": "A02345678", "name": "Carlos", "grade": 92.1, "debt": true },
    { "mat": "A03456789", "name": "Fernanda", "grade": 85.0, "debt": false },
    { "mat": "A04567890", "name": "Roberto", "grade": 68.7, "debt": true },
    { "mat": "A05678901", "name": "Sofía", "grade": 95.2, "debt": false },
    { "mat": "A06789012", "name": "Luis", "grade": 80.5, "debt": true },
    { "mat": "A07890123", "name": "Elena", "grade": 88.9, "debt": false },
    { "mat": "A08901234", "name": "Javier", "grade": 70.4, "debt": true },
    { "mat": "A09012345", "name": "Andrea", "grade": 91.6, "debt": false }
  ]
  

class StudentService{
    data:Array<StudentData>;
    constructor(data:Array<StudentData>){
        this.data = data;
    }
    getStudentData(){
        return this.data;
    }
}  

export default new StudentService(dummyData);