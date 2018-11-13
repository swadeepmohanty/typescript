function hello(name) {
    return "Hello " + name;
}
console.log(hello("swadeep"));
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(10, 20));
//optional parameter
function display(id, name, role) {
    console.log("id", id);
    console.log("name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
display(1, "Swadeep");
//default value
function displayPage(id, name, role) {
    if (role === void 0) { role = "Normal"; }
    console.log("id", id);
    console.log("name", name);
    if (role != undefined) {
        console.log("Role", role);
    }
}
displayPage(1, "Swadeep");
displayPage(1, "Swadeep", "Admin");
//function as argument
function calculator(fun) {
    console.log(fun(20, 30));
}
calculator(add);
//Returning a function
function minus() {
    function substract(num1, num2) {
        return num1 - num2;
    }
    return substract;
}
console.log(minus()(15, 10));
//Anonymous Function
var x = function (name) {
    return "Hello " + name;
};
console.log(x("Mohanty"));
