var a=prompt("Enter a Number");
var b=1;
var c=0;
while (b<=a) {
    if (b%2!=0) {
        c=c+b;
    }
    b++;
}
console.log(c);