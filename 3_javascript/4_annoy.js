//version1

// var answer = prompt ("Are we there yet?");

// while(answer !== "yes"){
//     var answer = prompt("Ae we there yet?");
// }

// if(answer === "yes"){
//     alert("YAY, We made it!");
// }



//version 2

// var answer = prompt("Are we there yet?");

// while(answer.indexOf("yes") === -1){
//     var answer = prompt("Are we there yet?");
// }

// alert("YAY, We made it!");


function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var capitalize2 = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

//replace  '-' with '_'
function kebabToSnake(str){
   return str.replace(/-/gi,"_");
}

var x = prompt("Enter the something");
//alert("first: " +capitalize(x));
//alert("second: " +capitalize2(x));
alert("kebabToSnake: " + kebabToSnake(x));

