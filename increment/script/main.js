document.getElementById("btn_addcontador").addEventListener("click", contador);
document.getElementById("btn_deccontador").addEventListener("click", decontador);
document.getElementById("btn_incrementa").addEventListener("click", incrementa);
document.getElementById("btn_decrementa").addEventListener("click", decrementa);

var cont = 0;
var resultado = 0;
var resultado_final = 0;

function contador(){
    resultado_contador = ++cont;
    resultado = resultado_contador;
    document.getElementById("contador").innerHTML = resultado;
}
function decontador(){
    if(cont <= 0){
        cont = 0;
       }
       else{
        resultado_decontador = --cont;
       }
    resultado = resultado_decontador;
    document.getElementById("contador").innerHTML = resultado;
}

function incrementa(){

    resultado_final = (resultado+resultado_final);    
    document.getElementById("resultado").innerHTML = resultado_final;
}
function decrementa(){
    resultado_final=(resultado_final-resultado);
    if(resultado_final <=0){
        resultado_final = 0;
    }
    document.getElementById("resultado").innerHTML = resultado_final;
    
}