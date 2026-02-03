let students = [
{ id: 1, name: "Mugisha Yvan", age: 18, gender: "male", grade: 11 },
{ id: 2, name: "Shimwa Jane", age: 17, gender: "female", grade: 10 },
{ id: 3, name: "Manzi Smith", age: 19, gender: "male", grade: 11 }
];
function addStudent(){
    const name= document.getElementById("name").value
    const age= document.getElementById("age").value

    if(name === "" || age < 0){
        alert("Please fill all fields");
        return;
    }
   
    const newStudent= {
        id: students.length + 1,
        name : name, 
        age: age,
        gender: "Unkown",
        grade: 0
    }
    students.push(newStudent);
    console.log(students);

    alert("Student was succesfully added!");
}