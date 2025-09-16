//For Loop
for(let i=0; i<=10; i++){
    console.log(i);
}
//While Loop
let j = 0;
while(j<=10){
    console.log(j);
    j++;
}
//Do While Loop
let k = 0;
do{
    console.log(k);
    k++;
}while(k<=10);

//For In Loop
let person = {fname:"John", lname:"Doe", age:25, city:"New York", country:"USA", occupation:"Developer", hobby:"Photography"};
for(let x in person){
    console.log(x + ": " + person[x]);
}


//For Of Loop
let cars = ["BMW", "Volvo", "Mini", "Audi", "Mercedes", 33, "Honda", "Ford"];
for(let car of cars){
    console.log(car);
}

for(let i=0; i<cars.length; i++){
    console.log(cars[i]);
}
cars.forEach(function(car){
    console.log(car);
});

person.forEach(function(value, key){
    console.log(key + ": " + value);  
})          

//Break and Continue
for(let i=0; i<10; i++){
    if(i === 5){
        break; // Exit the loop when i is 5
    }
    console.log(i);
}

for(let i=0; i<10; i++){
    if(i === 5){
        continue; // Skip the iteration when i is 5
    }
    console.log(i);
}    