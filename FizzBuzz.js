// Print numbers from 1 to 100.
// If the number is divisible by 3, print “Fizz” in place of the number.
// If the number is divisible by 5, print “Buzz” in place of the number.
// If the number is divisible by both 3 and 5, print “FizzBuzz” in place of the number.
 

for ( let i = 1; i <= 99; i++){

    if (i%3 == 0) {

        console.log("Fizz")


    } else if( i % 5 == 0){

        console.log("Buzz");
        
    }else if (i % 3 == 0 && i %5 ==0) {

        console.log("FizzBuzz");

    } else {

        console.log(i);
    
    }
}