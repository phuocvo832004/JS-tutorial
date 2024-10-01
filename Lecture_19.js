
// #B
// Example 1:
// class Student {
//     constructor(name, age, mssv) {
//         this.name = name;
//         this.age = age;
//         this.mssv = mssv;
//     }

//     diemdanh() {
//         console.log(`MSSV ${this.mssv} co mat!`);
//     }
// }

// const phuoc = new Student('phuoc', 20, '22521158')
// phuoc.diemdanh()


// Example 2:
class Student {

    studentID = ""; // another way to define class property "studentID"
    #school = 'UIT'; // private properties,

    // Constructor - init instance properties
    constructor(studentID, name, age, grades = []) {
        this.studentID = studentID
        this.name = name; 
        this.age = age;   
        this.grades = grades; 
    }

    // Instance method
    addGrade(grade) {
        this.grades.push(grade);
    }

    // Instance method
    getAverageGrade() {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        return this.grades.length ? sum / this.grades.length : 0;
    }

    async getAvatar() {
        try {
            const response = await fetch('https://png.pngtree.com/png-clipart/20190516/original/pngtree-cartoon-hand-painted-dolphins-cute-dolphin-little-dolphin-png-image_3821858.jpg');
            const blob = await response.blob();
            return blob; 
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    // Getter
    get school() {
        return this.#school;
    }

    // Setter
    set school(newID) {
        this.#school = newID;
    }

    // Private method 
    #calculatePass() {
        return this.getAverageGrade() >= 5;
    }

    // Instance method uses private method
    checkPassStatus() {
        return this.#calculatePass() ? "Passed" : "Failed";
    }
}

// create student1 object based on Student blueprint
// let student1 = new Student("22521150", "phuoc", 20, [6, 7, 8]); // student1 is an instance of "blueprint" Student

// // access properties 
// console.log(student1.studentID); // UIT
// console.log(student1.name) // phuoc
// console.log(student1.school) // because this is a private property hence log undefined

// // access methods
// student1.addGrade(9);
// console.log(student1.getAverageGrade()); // Average Grade: 7.5

// console.log(`Student ID: ${student1.studentID}`);   // Student ID: S123
// student1.studentID = "0000000";                        // Use setter to update value
// console.log(`Updated Student ID: ${student1.studentID}`); // Updated Student ID: S456

// // inside function can access private property
// console.log(`Status: ${student1.checkPassStatus()}`); // Status: Passed


// #C
class InternationalStudent extends Student {

    classroom ="CS202"; // add new properties

    constructor() {
        super(...arguments);  // call properties of parent class
    }

    // add new method 
    getStudentInfo() {
        return `Student ID: ${this.studentID}, Name: ${this.name}, Age: ${this.age}, 
        Class: ${this.classroom}, Course: ${this.course}, School: ${this.school}`;

    }
}

// create a child class object
let student1 = new InternationalStudent("3214523", "long", 20, [7, 8, 9]);

// console.log(student1.getStudentInfo()); 


// #D
InternationalStudent.prototype.course = "kho du lieu va OLAP"; // add new property 'course'

let student2 = new InternationalStudent("3214523", "Quang", 20, "CS215", [7, 8, 9]);
console.log(student2.getStudentInfo());