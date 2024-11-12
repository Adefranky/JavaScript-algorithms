var output = [];
const count = 1;

function fizbuzz(){

if (count % 3 === 0 && count % 5 === 0){
    output.push("fizbuzz")
} else if ( count % 3 === 0){
    output.push("fizz")
} else if (count % 5 === 0) {
    output.push("Buzz")
} else {
    output.push(count)
}
count ++;
}
for (let i = 1; i <= 20; i++){
fizbuzz();
};
console.log(output);


// Random person buying lunch
function whosPaying(names) {
    /******Don't change the code above*******/

    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];
    
    // Corrected return statement to match exact format
    return `${randomName} is going to buy lunch today!`;

    /******Don't change the code below*******/
}


// fibonacciGenerator
function fibonacciGenerator (n) {
    //Do NOT change any of the code above 👆
        
        //Write your code here:
        
        let fibonacciSequence = [];
        if(n >= 1){
            fibonacciSequence.push(0);
        } if (n >= 2){
            fibonacciSequence.push(1);
        }
        for (let i =2; i < n; i++){
            fibonacciSequence.push(fibonacciSequence[i - 1] + fibonacciSequence[i - 2]);
        }
        
        
        return fibonacciSequence;
        
        
        
        //Return an array of fibonacci numbers starting from 0.
        
    //Do NOT change any of the code below 👇
    }
    
    
    
