function soma_seq(){
    
    alert(entrou);
    var n = parseInt(numero.value);
    var soma = n;

while(n > 1) {
        soma = soma+(n-1);
        n = n-1;
    }

    alert(soma);
}


function potencia(){
    let n=parseInt(numero3.value);
    let pote = n;
    while(n>1){
        pote = Math.pow(2,n);
        n = n - 1;
        alert(pote);

    }
}