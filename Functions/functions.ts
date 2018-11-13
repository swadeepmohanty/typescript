function hello(name:string):string{
    return "Hello "+name;
}

console.log(hello("swadeep"));

function add(num1:number,num2:number):number{
    return num1+num2;
}
console.log(add(10,20));
//optional parameter
function display(id:number,name:string,role?:string){
    console.log("id",id);
    console.log("name",name);
    if(role!=undefined){
    console.log("Role",role);
    }
}
display(1,"Swadeep");

//default value
function displayPage(id:number,name:string,role:string="Normal"){
    console.log("id",id);
    console.log("name",name);
    if(role!=undefined){
    console.log("Role",role);
    }
}
displayPage(1,"Swadeep");
displayPage(1,"Swadeep","Admin");

//function as argument
function calculator(fun:any):void
{
    console.log(fun(20,30));
}
calculator(add);

//Returning a function
function minus():any{
    function substract(num1:number,num2:number){
        return num1 - num2;
    }
    return substract;
}
console.log(minus()(15,10));

//Anonymous Function
var x = function(name:string):string{
    return "Hello "+name;
}
console.log(x("Mohanty"));