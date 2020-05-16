import teste from './getColor.js';
console.log('cor',teste('hp'))
const datapoke = () =>{
    for(var i = 1; i <= 20; i ++){
        const numero = i;
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.getElementById("boxCard").innerHTML += 
                `<div class="card" href="">
                    <div class="imgBox">
                        <img src="${data.sprites.front_default}" alt="">
                        <i class="far fa-heart" aria-hidden="true"></i>
                    </div>
                    <div class="read">
                        <label for="">Nº${numero}</label>
                        <label class="namePoke" for="">${data.name}</label>
                        <label class="types">${data.types[0].type.name}</label>
                        ${data.types.length > 1 ? '<label class="types">'+data.types[1].type.name+'</label>' : ''}
                    </div>
                </div>`;
        })
    }
}
window.addEventListener('load',function(){
    datapoke();
})