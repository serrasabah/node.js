const arguments = process.argv.slice(2);

function showPrimeNumbers(firstnumber, secondnumber){

    for(let i = firstnumber; i<=secondnumber;i++){

        let isPrime = true;

        for(let j=2; j<i; j++){
            if(i%j==0 && i!=j){
                isPrime=false;
            }
        }

        if(isPrime){
            console.log(i);
        }
    }
}

showPrimeNumbers(arguments[0]*1, arguments[1]*1);
