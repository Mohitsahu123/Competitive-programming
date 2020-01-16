function qq(A){
    var flag = false;
        var smallPrimes = getPrimes(A);
        if(A ==4){
            return [2,2];
        }else{
            smallPrimes.sort(sortNumbers).some(function(x){
                
               if((A-x)%2 !==0 && isPrime(A-x) && isPrime(x)){
                flag = x;
                   return flag;
               } 
            });
            if(flag){
                return [flag, A-flag];
            }
            var half = A/2;
             if(half%2 ==0){
                return [half-1, half+1]; 
            }else{
                 return [half-2, half+2]; 
            }
    
        }
    
    }

    function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num > 1;
}

function sortNumbers(a,b){
    return a-b;
}

function getPrimes(num) {
    var primes = [];
    num = num > 1000 ?Math.sqrt(num) : num;
  for(i=Math.floor();i>=2;i--)
    if(num % i !== 0 || num%2 ==0 || num%3 == 0) primes.push(i);
  return primes ;
}

    var A = 30;
    qq(A);