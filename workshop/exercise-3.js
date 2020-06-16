// Q3.1
// Write a function that accepts two integers and returns
// the greater one. (this is slightly different from the previous question.)
function max(num1, num2) {
    if (num1 > num2){
        return num1;
    } else if (num2 > num1){
        return num2;
    }
}
// Also, wouldn't it be nice if there were a Math method that could simplify the code....
// https://www.w3schools.com/jsreF/jsref_obj_math.asp

function max(num1, num2) {
    return Math.max(num1, num2);
}

// Q3.2
// Without changing the function at all,
// Can you figure out how we could use it to determine the greater number between 4 integers?
let num1 = Math.max(1, 2);
let num2 = Math.max(3, 4);
function max(num1, num2) {
    return Math.max(num1, num2);
}
// Q3.3
// Would this work with more integers?
// Yes if we keep putting math functions inside math functions