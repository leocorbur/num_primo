//Evaluacion de numero primo
//Se usará condicional if, else y bucle for

function es_primo(){
    var num = document.getElementById("numero").value;
    primo = true;
    for(i = 2; i < num; i = i + 1){
        if(num % i == 0){
            primo = false;
        }
    }
    if(primo == true){
        alert( "El " + num + " es un número primo, además " + num +" x PI = " +num*Math.PI)
    }else{
        alert( "El " + num + " NO es un número primo, además " + num +" x PI = " +num*Math.PI)
    }

}
   
