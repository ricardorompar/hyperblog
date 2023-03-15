
// Funcion para calcular el factorial:
var factorial = function(n){
    return (n==0)?1:factorial(n-1)*n;
}
// Calculo de una aproximacion de Pi basado en la formula de Newton
var newtonPi = function(n){ //el numero de iteraciones
    let sum=0;
    for(let k=0; k<=n; k++){
        let num = Math.pow(2,k)*Math.pow(factorial(k),2);
        let den = factorial(2*k+1);
        sum+=(num/den);
    }
    return 2*sum;
}
// Calculo de una aproximacion de Pi basado en la formula de Ramanujan
var ramaPi = function(n){ //el numero de iteraciones
    let sum=0;
    for(let k=0; k<=n; k++){
        let num = factorial(4*k)*(1103+26390*k);
        let den = Math.pow(factorial(k),4)*Math.pow(396,4*k);
        sum+=(num/den);
    }
    return (9801/(2*Math.sqrt(2)))/sum;
}

