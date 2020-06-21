import Pokemon from '../js/Pokemon.js';
import buildCard from '../js/cards.js';

window.addEventListener('load', () => {
    favoritePoke();
})

var favorite;
const favoritePoke = () => {
    return fetch(`http://localhost:3000/leituras/pokemon`)
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

// BARRA DE PESQUISA
var search = document.getElementById("txtSearch");
var boxCard = document.getElementById("boxCard");
search.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) {
        clear();
        fnGetPoke(e.target.value.toLowerCase());
    } else if (e.target.value == '') {
        clear();
        datapoke();
    }
});
const clear = () => { boxCard.innerHTML = ''; }



function trocarPagina(id) {
    location.href = `./pages/dataPoke.html?id=${id}`;
    console.log("trocando de pagina", id);
}

//PLANO DE FUNDO ALEATORIO
var nImage = parseInt(Math.random() * 2) + 1;
document.getElementsByTagName('body')[0].style.backgroundImage = `url(./img/img${nImage}.png)`;