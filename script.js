function soma_seq(){

    var n= parseInt(numero.value);
    var soma=n;

    while (n>1) {
        soma=soma+(n-1);
        n=n-1;
        
    }
    alert(soma);
}

function fat_q(){
    var n=parseInt(camila.value);
    var fat=n;

    while(n>1){
        fat=fat*(n-1);
        n=n-1;
    }
    alert(fat)
}