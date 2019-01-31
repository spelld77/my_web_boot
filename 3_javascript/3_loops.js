var counter = -10;
console.log("Print all numbers between -10 and 19");
while(counter < 20){
    console.log(counter);
    counter++;
}

counter = 10;
console.log("Print all even numbers between 10 and 40");
while(counter <= 40){
    if(counter % 2 == 0){
        console.log(counter);
    }
    counter++;
}

counter = 300;
console.log("Print all odd numbers between 300 and 333");
while(counter <=333){
    if(counter % 2 == 1){
        console.log(counter);
    }
    counter++;
}

counter = 5;
console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
while(counter <= 50){
    if(counter % 5 == 0 && counter % 3 == 0){
        console.log(counter);
    }
    counter++;
}