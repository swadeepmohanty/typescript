var student={
    firstname:"John",
    lastname:"Smith",
    score:123
};
console.log(student.firstname);
console.log(student.score);

for(var item in student){
    console.log(item);
    console.log(student[item]);
}

//Destructuring Object
var{firstname,lastname}=student;
console.log(firstname+" "+lastname);
