var courses:any =["JMS", "Java","Spring"];
courses.push("WebServices");
courses.push(20);
for(var i=0;i<courses.length;i++){
    console.log(courses[i]);
}

var[a,b]=courses;
console.log(a);
console.log(b);