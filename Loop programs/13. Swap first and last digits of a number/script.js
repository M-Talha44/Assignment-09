var a=prompt("Enter any Integer Number");
var last;
var first;
var third;
                                        // For Last Digit
last=a%10;
console.log("The Last Digit is",last);
                                         //For First Digit
while (a>=10) {
    a=a/10;
}
first=parseInt(a);
console.log("The First Digit is",first);
                             // for swapping
       // 1st method                                  // 2nd method  
 third=first;                                           //  first=last+first;
 first=last;                                            //  last=first-last;
 last=third;                                            //  first=first-last;                                                      
                                            
                                                       

console.log("Now Swapping");
console.log("The Last Digit is",last);
console.log("The First Digit is",first);




