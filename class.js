class student{
    constructor(sId, sName, ) {
        this.Id = sId;
        this.name = sName;
        this.school = "koite parum na";
    }
}

const student1 = new student(7, "chini na");
const student2 = new student(12, "ere oo na");
const student3 = new student(28, "ere chini");
const student4 = new student(34, "ere oo chini");
console.log(student1.Id, student2.name, student3.school, student4);