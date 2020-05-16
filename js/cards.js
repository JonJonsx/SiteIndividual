import pickColor from './getColor.js';
import Pokemon from './dataPoke.js';

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

const datapoke = () =>{
    for(var i = 1; i <= 20; i ++){
        const numero = i;
        
        Pokemon.getPokemon(i).then(data => {
            const pokemon = new Pokemon(data.id,
                data.name,
                data.sprites.front_default,
                data.height,
                data.weight,
                data.stats[5].base_stat,
                data.stats[4].base_stat,
                data.stats[3].base_stat,
                data.stats[2].base_stat,
                data.stats[1].base_stat,
                data.stats[0].base_stat,
                data.types[0].type.name
                );
                buildCard(pokemon);
        });
    }
}
window.addEventListener('load',function(){
    datapoke();
})