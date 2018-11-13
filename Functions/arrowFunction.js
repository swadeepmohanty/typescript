var hello = function () {
    return "Hello";
};
console.log(hello());
//passing parameter
var msg = function (value) {
    return value;
};
console.log(msg("Swadeep"));
//Array of Arrow function
var myarray = [];
for (var i = 0; i < 10; i++) {
    myarray.push(function () { return i; });
}
for (var i = 0; i < 10; i++) {
    console.log(myarray[i]());
}
