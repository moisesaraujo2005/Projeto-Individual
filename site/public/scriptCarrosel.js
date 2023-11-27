var contagem=1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    proximaImagem();
}, 3000) 

function proximaImagem() {
    contagem++;
    if(contagem>4){
        contagem=1; 
    }

document.getElementById("radio"+contagem).checked=true;}