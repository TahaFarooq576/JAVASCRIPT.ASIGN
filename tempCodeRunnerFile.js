function isprime(n){
    if(n<2){
        console.log("The number",n,"is not a prime number");
    }
    for(var i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            console.log("The number",n,"is not prime");
            return;
        }
    }
console.log("The given",n,"is prime number");
}
isprime(15);
