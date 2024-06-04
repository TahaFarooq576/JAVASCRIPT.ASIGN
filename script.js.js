// 1.Write a javascript program to finf cube of a number using function.....

//  let n=prompt("Enter a number to find its cube");
// function cube(n){
//     result=n*n*n;
//     console.log("Cube of given number is",result);
// }
// cube(7);

//_________________________________________________________________________

//2.wrie a program that check diameter,circumference,area of a circle using function....

// function circle(r){
//     var Diameter=2*r;
//     console.log("Diameter of circle is:",Diameter);
//     var Circumference=2*3.14*r;
//     console.log("Circumference of circle is:",Circumference);
//     var Area=2*3.14*r*r;
//     console.log("Area of circle is:",Area);
// }
// circle(5);

//________________________________________________________________________

// 3.write a program that finds maximum OR minimum number from two numbers using functions...

// function min_max(num1,num2){
//     if(num1>num2){
//         console.log("Maximum num b/w these numbers is:",num1,"and minimum num is:",num2);
//     }
//     else if(num2>num1){
//         console.log("Maximum num b/w these numbers is:",num2,"and minimum num is:",num1);
//     }
//     else{
//         console.log("Invalid input! please enter only numbers,not alphabets or specisl characters");
//     }
// }
//     min_max(105976,456789);

//__________________________________________________________________________

//4.write a program to check wheather a number is Even OR odd using functions....

// function even_odd(n){
//     if(n%2==0){
//         console.log("The num",n," is even number.Thanks!");
//     }
//     else if(n%2!=0){
//         console.log("The num",n," is odd number.Thanks!");
//     }
//     else{
//         console.log("Invalid Input!Please Enter only number,not alphabertor special character OR symbol.Thanks!")
//     }
// }
// even_odd(3456789);

//__________________________________________________________________________

//5.write a program to check weather a number is a prime armstrong oR perfect number using function

// function isprime(n){
//     if(n<2){
//         console.log("The number",n,"is not a prime number");
//     }
//     for(var i=2;i<=Math.sqrt(n);i++){
//         if(n%i==0){
//             console.log("The number",n,"is not prime");
//             return;
//         }
//     }
// console.log("The given",n,"is prime number");
// }


// function isArmstrong(n) {
//     var sum = 0;
//     var temp = n;
//     var num = n.toString().length;

//     while (temp > 0) {
//         var digit = temp % 10;
//         temp = Math.floor(temp / 10);
//         sum += Math.pow(digit, num);
//     }

//     if (sum === n) {
//         console.log("The given number is an Armstrong number");
//     } else {
//         console.log("The given number is not an Armstrong number");
//     }
// }

// function isperfect(n){
//     var n;
//     var sum=0;
//     for(var i=1;i<=n/2;i++){
//         if(n%i==0){
//             sum+=i;
//         }
//     }
//     if(sum==n){
//         console.log("The given number is a perfect number");
//     }
//     else{
//         console.log("The given number is not a perfect number");
//     }
// }
// isperfect(6);
// isprime(15);
// isArmstrong(152);

//__________________________________________________________________________________

//Write a program to find all prime numbers between given interval...

// function allprime(n1,n2){
//   for(var i=n1;i<=n2;i++){
//     var isprime=true;
//     if(i<=1)continue;
//     for(var j=2;j<=Math.sqrt(i);j++){
//         if(i%j==0){
//             isprime= false;
//             break;
//         }
//     }
//     if(isprime){
//         console.log(i);
//   }

// }
// }
  
// allprime(10,200)

//____________________________________________________________________________________

//Weite aprogram to print all the natural numbers from 1 to n...

//     function natural(n){
//        for(var i=1;i<=n;i++){
//         console.log(i);
//        }
//     }
// natural(15);

//__________________________________________________________________________________

//WRite a program to print all the Even or Odd  numbers b/w iven intervl...

// function printeven(upper,lower){
//     for(var i=upper;i<=lower;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     }

// }
// function printodd(upper,lower){
//     for(var i=upper;i<=lower;i++){
//         if(i%2!=0){
//             console.log(i);
//         }
//     }

// }
// printeven(10,100);
// printodd(10,100);
//______________________________________________________________________

//Wrie a program to find sum of all natural numbers b/w 1 to n...

// function allsum(n){
//     var sum=0;
//     for(var i=1;i<=n;i++){
//         sum=sum+i;
//     console.log(sum);
//     }
//     console.log("Total sum from from 1 to",n,"is:",sum);
// }
// allsum(5);

//______________________________________________________________________

//Wrie a program to print sum of all even or odd numbers b/w 1 to n....

//  function sumeven(upper,lower){
//     var sum=0;
//     for(var i=upper;i<=lower;i++){
//         if(i%2==0){
//             sum+=i;
//             console.log(sum);
//         }
//     }
// console.log("Total sum of all even numbers b/w",upper,"and",lower,"is:",sum);
// }
// function sumodd(upper,lower){
//     var sum=0;
//     for(var i=upper;i<=lower;i++){
//         if(i%2!=0){
//             sum+=i;
//             console.log(sum);
//         }
//     }
//     console.log("Total sum of all even numbers b/w",upper,"and",lower,"is:",sum);
// }
// sumeven(5,10);
// sumodd(5,10);

//_____________________________________________________________________________________________

//Write a program to find reverse of any numbers using funtion....

// function reverse(n){
//     var reverse=0;
//     while(n>0){
//         reverse=(reverse*10)+(n%10);
//         n=Math.floor(n/10);
//     }
// console.log("The reverse of given number is:",reverse);
// }
// reverse(12345);

//_______________________________________________________________________________________________

//Write a program to cheack weather a number is palindrom OR not....

// function palindrom(n){
//     var orignal=n;
//     var reverse=0;
//     while(n>0){
//         reverse=(reverse*10)+(n%10);
//         n=Math.floor(n/10);
//     }
//     console.log("Reverse of number is:",reverse);
//     if(reverse==orignal){
//         console.log("The given number is a palindrom number");
//     }
//     else{
//         console.log("The given numbetr is not a palindrom number");
//     }
// }
// palindrom(16461);

//_______________________________________________________________________________________________

//Write a program to find sum of its digits Using Functions...

function sumdigit(n){
    var sum=0;
    var digit;
    while(n>0){
        digit=n%10;
        n=Math.floor(n/10);
         sum=sum+digit;
         console.log("Digit",digit)
         console.log("Sum",sum);
    }
console.log(sum);
}
sumdigit(1234);

