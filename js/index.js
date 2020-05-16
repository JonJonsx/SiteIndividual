
// BARRA DE NAVEGAÇÃO INICIA EM BAIXO E SOBE QUANDO O SCROLL É MOVIDO PARA BAIXO 
const target = document.getElementById("header"); // PEGANDO O HEADER DA PAGINA PELO ID
function animeScroll(){
    const windowTop = window.pageYOffset; // DISTANCIA DO TOP DA PAGINA
    if(windowTop == 0){
        target.style.bottom = `0`;
        target.style.top = `initial`;
    }else{
        target.style.top = `0`;
        target.style.bottom = `initial`;
    }
}
window.addEventListener('scroll',function(){ // AQUI CHAMA A FUNÇÃO PELO SCROLL
    animeScroll();
});

function colorType(){
    var types  = ['unknown','fire','water','eletric','glass','ice','fight','poison','ground','flying','psychic','bug','rock','ghost','dragon','steel','dark','fairy'];
    
    var pickColor = ['#ada594','#f75231','#399cff','#e2ad2a','#7acd51','#5acee7','#a55239','#af59a0','#d5b45a','#9cadf7','#ff73a5','#adbd21','#bda55a','#6363b5','#7b63e7','#adadc6','#735a4a','#f7b5f7'];
    for(var i = 0; i < types.length; i++){
        if(types[i] == pickColor[i]){
            console.log('true');
        }else{
            console.log('false');
        }
    };
}

window.addEventListener('load',function(){
    datapoke();
})


