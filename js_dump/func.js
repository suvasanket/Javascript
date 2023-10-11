var name
function hello(name) {
    var name0 = "hello "//local scope
    name = "world"//global scope
    console.log(name0 + name);
    // console.log(name0 + name1);
}

hello("rocky")//1st func

function sum(a, b) {
    console.log(a + b)// 2nd func
}
// sum(10, 15)

function global() {
    console.log(name1);
}

global();//3 func

function greater(a, b) {
    return a < b//this is possible
}

console.log(greater(10, 11));//4th func

//variable declared inside local scope without var keyword is a global variable
//local var > global var
