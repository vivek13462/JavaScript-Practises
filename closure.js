//Closure
function addNumber(first,second) {
var returnval = "Result is:";

function add(){ //innerFn
return returnval + (first + second);
}
return add(); //calling inner function
}
var result = addNumber(10,3);
document.write(result);
