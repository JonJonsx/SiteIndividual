import pickColor from './getColor.js';

function buildCard(pokemon){
    document.getElementById("boxCard").innerHTML += 
    `<div class="card" href="">
        <div class="imgBox">
            <img src="${pokemon.image}" alt="">
            <i class="far fa-heart" aria-hidden="true"></i>
        </div>
        <div class="read">
            <label for="">Nº${pokemon.id}</label>
            <label class="namePoke" for="">${pokemon.name}</label>
            <label class="types">${pokemon.type}</label>
        </div>
    </div>`;
}
// ${data.types.length > 1 ? '<label class="types">'+data.types[1].type.name+'</label>' : ''}
export default buildCard;