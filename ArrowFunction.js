//Arrow Function with closure
addNumber=(first,second)=> {
var returnval = "Result is:";

add=()=>{ //innerFn
return returnval + (first + second);
}
return add(); //calling inner function
}
var result = addNumber(10,300);
document.write(result);
