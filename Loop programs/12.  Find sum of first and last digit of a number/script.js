var a=prompt("Enter a Integer Number");
var first;
var last;
var sum;
                                //For Last Digit
 last=a%10;
 console.log("Last Digit is",last);
                               // For Last Digit
 while (a>=10) {
    a=a/10;
 }                              
 first=parseInt(a);
 console.log("First Digit is",first);
                                // Sum of Digits
sum=last+first;
console.log("The Sum of 1st and last digits is ",first,"+",last,"=",sum);


 