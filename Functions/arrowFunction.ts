var hello = ():string=>{
    return "Hello";
}

console.log(hello());

//passing parameter
var msg = (value:string):string=>{
    return value;
}

console.log(msg("Swadeep"));

//Array of Arrow function
var myarray:Array<any>=[];
for(var i=0;i<10;i++){
    myarray.push(():number=>{return i});
}
for(var i=0;i<10;i++){
    console.log(myarray[i]());
}