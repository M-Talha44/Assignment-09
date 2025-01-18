var a=prompt("Enter a integer Number");
var first;
var last;
                          // For Last Digit
last=a%10;
console.log("Last digit is ",last);
                         // For 1st Digit
while (a>=10) {
    a=a/10;
}
first=parseInt(a);
console.log("First Digit is",first);










