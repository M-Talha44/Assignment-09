var a=prompt("Enter 1st Number");
var b=prompt("Enter 2nd Number");
var c=prompt("Enter 3rd Number");
var sum=0;
for(var i=0;a!=0;i++){
    a=a/10;
    a=parseInt(a);
}
console.log("1st Number Digits is ",i);
for(var j=0;b!=0;j++){
    b=b/10;
    b=parseInt(b);
}
console.log("2nd Number Digits is",j);
for(var k=0;c!=0;k++){
    c=c/10;
    c=parseInt(c);
}
console.log("3rd Number Digits is",k);

sum=i+j+k;
console.log("The Sum of Digits is"," ",i,"+",j,"+",k,"=",sum);
