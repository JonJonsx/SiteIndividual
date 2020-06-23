import Pokemon from '../js/Pokemon.js';
import buildCard from '../js/cards.js';

window.addEventListener('load', () => {
    favoritePoke();
})

var favorite;
const favoritePoke = () => {
    const id = sessionStorage.id_usuario_meuapp;
    return fetch(`http://localhost:3000/leituras/pokemon/?` + new URLSearchParams({id}))
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            favorite = data;
            teste();
            return data;
        }).catch(function (error) {
            console.log(`Erro:${error.message}`);
        })
}
const teste = () => {
    var poke = favorite.map(poke => poke.idPoke)
    for (var i = 0; i <= poke.length; i++) {
        fnGetPoke(poke[i]);
    }
}


function fnGetPoke(poke) {
    Pokemon.getPokemon(poke).then(data => {
        const pokemon = new Pokemon(
            data.id,
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
            data.types
        );
        buildCard(pokemon);

        document.querySelectorAll('.card').forEach(item => {
            item.addEventListener('click', function (event, item) {

                const id = event.currentTarget.getElementsByClassName('read')[0].getElementsByTagName('label')[0].innerText
                const formatado = id.split(" ")[1]
                trocarPagina(formatado)
            })
        })
    });
}

function trocarPagina(id) {
    location.href = `./dataPoke.html?id=${id}`;
    console.log("trocando de pagina", id);
}