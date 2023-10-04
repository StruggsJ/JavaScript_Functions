console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){

let maxNum = count;
let countedNegative = false;

if (count < 0){
    
    for (; maxNum < 0; maxNum++){

        if (maxNum % 2 == 0){

        }
        else{
            console.log(maxNum);
        }

        countedNegative == true;
    }

    
}

   if (!countedNegative){
    for (; maxNum >= 0; maxNum--){

        if (maxNum % 2 == 0){

        }
        else{
            console.log(maxNum);
        }
    }
    
}
 
}

console.log("Printing all the odds starting at 33:")
printOdds(33);
console.log("========")
console.log("Printing all the odds starting at -57:")
printOdds(-57);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName = 'John', age = 18){

    var aboveSixteen = `Congrats ${userName}, you can drive!`;
    var belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    if (age >= 16){
        console.log(aboveSixteen);
    }
    else {
        console.log(belowSixteen);
    }
    
}

checkAge('Mary', 25);
checkAge('Justin', 15);
checkAge();

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

//todo: refactor

function cartesianCheck (x, y){

    if (typeof x != 'number'|| typeof y != 'number'){
        console.log("Invalid input. Please enter two numbers separated by a comma.")
    }
    
    else if(x == 0 && y == 0){
        
        console.log("The point lies in the orgin.");
    }
    else if (x == 0 && y != 0){
        
        console.log("The point is on the x axis.");
    }
    else if (x != 0 && y == 0){
        
        console.log("The point is on the y axis.");
    }
    else if ( x < 0 && y < 0){
        
        console.log("The point is on quadrant 3.");
    }
    else if (x < 0 && y > 0){
        
        console.log("The point is on quadrant 2.");
    }
    else if (x > 0 && y > 0){
        
        console.log("The point is on quadrant 1.");
    }
    else{
        
        console.log("This point is on quadrant 4.");
    }

}

cartesianCheck(0, 0);
cartesianCheck(0, -40);
cartesianCheck(-40, 0);
cartesianCheck(20, 40);
cartesianCheck(-20, 40);
cartesianCheck(-20,-40);
cartesianCheck(40, -20);

cartesianCheck("3","5");
cartesianCheck("one", 3);


console.log("EXERCISE 4:\n==========\n");

function triangleType (x, y, z){

let validInput = true;

    if (typeof x != 'number'|| typeof y != 'number' || typeof z != 'number'){
        console.log("Invalid input. Please enter three numbers separated by a comma.");
        validInput = false;
    }
    else if (x <= 0 || y <= 0 || z <= 0){
        console.log("Invalid input. Please enter a number greater than zero.");
        validInput = false;
    }
    

   

    if ( validInput == true && (x + y <= z || x + z <= y || y + z <= x) ){
        console.log("This triangle is an invald triangle.");
    }
    else if (validInput == true && (x == y && y == z && x == z ) ) {
        console.log("This triangle is an equilateral triangle.");

    }
    else if (validInput == true && (x == y || y == z || x ==z)){
        console.log("This triangle is a isosceles triangle.");
    }
    else if (validInput == true){
        console.log("This triangle is a scalene triangle.");
    }
    
}

triangleType(1,1,1);
triangleType(1,2,2);
triangleType(23,22,11);

triangleType(3,3,6);
triangleType(0,0,0);

console.log("EXERCISE 5:\n==========\n");

/* reminder: planLimit: amount of data in the plan per 30 day period 
 day: the current day in the 30 day period
usage: the total amount of data used so far
*/

function dataPlanStatus(planLimit, day, usage){
    
let validInput = true;

if (typeof planLimit != 'number'|| typeof day != 'number' || typeof usage != 'number'){
    console.log("Invalid input. Please enter three numbers greater than zero separated by a comma.")
    validInput = false;
}
else if (planLimit <= 0 || day < 0 ){
    console.log("Invalid input. Please enter a number greater than zero for your data plan limit and/or total days used, and seperate the numbers by a comma.");
    validInput = false;
}

const totalDays = 30;
let remainingDays = totalDays - day;

let dataUseSuggest = Math.round((planLimit - usage) / remainingDays);

let avgUse = Math.round(planLimit / totalDays); 

let underOrOverAvg = Math.round(usage / remainingDays); 

let underOrOverUse = Math.round((underOrOverAvg * totalDays) - planLimit); 

let notUsedData = false;

//Days remaining.

if (validInput == true){
    console.log(`You have ${remainingDays} days remaining in your ${totalDays} day data plan.`)
}

//Average daily usage.

if (validInput == true){
    console.log(`The average use for this data plan is ${avgUse} GB/day.`)
}

//Data Usage Check

if (validInput == true){
    if (avgUse < underOrOverAvg){
        console.log(`You are currently exceeding your average daily use for your data plan. (Current Average Data Use: ${underOrOverAvg} GB/day)`);
        console.log(`If you continue with this high usage, you will exceed your data plan by ${underOrOverUse} GB.`)
        console.log(`To stay below your data plan, please use no more than ${dataUseSuggest} GB/day.`)
    }
    else if (avgUse > underOrOverAvg){

        if (underOrOverAvg == 0){
            console.log("You have not yet use any data for this data plan. If you encounter any problems using your data plan, please contact customer service. ")
            notUsedData = true;
        }
        else if (!notUsedData){
            console.log(`You are using under your data average for this plan. Consider downgrading your data plan. (Current Average Data Use: ${underOrOverAvg} GB/day)`);
    }

}
        else{
            console.log(`Your average data use is exactly the average data use for this plan. (Current Average Data Use: ${underOrOverAvg} GB/day) `)
             }      
    


}
}

dataPlanStatus(100,15,56);
console.log("------");
dataPlanStatus(100,5,15);
console.log("------");
dataPlanStatus(100,15,38)
console.log("------");
dataPlanStatus('100',30,100);
console.log('--------');
dataPlanStatus(0, 12,22);
console.log('-------');
dataPlanStatus(100,0,0)