import Pokemon from '../js/Pokemon.js';
import buildCard from '../js/cards.js';

// BARRA DE NAVEGAÇÃO INICIA EM BAIXO E SOBE QUANDO O SCROLL É MOVIDO PARA BAIXO 
const target = document.getElementById("header"); // PEGANDO O HEADER DA PAGINA PELO ID
function animeScroll() {
    const windowTop = window.pageYOffset; // DISTANCIA DO TOP DA PAGINA
    if (windowTop == 0) {
        target.style.bottom = `0`;
        target.style.top = `initial`;
    } else {
        target.style.top = `0`;
        target.style.bottom = `initial`;
    }
}

window.addEventListener('scroll', function () { // AQUI CHAMA A FUNÇÃO PELO SCROLL
    animeScroll();
});

window.addEventListener('load', () => {
    datapoke();
})


const datapoke = () => {
    const amountPoke = 20; // Quantidade de pokemon que vai aparecer na tela
    for (var i = 1; i <= amountPoke; i++) {
        const numero = i;
        fnGetPoke(i);
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

var nImage = parseInt(Math.random() * 2) + 1;
document.getElementsByTagName('body')[0].style.backgroundImage = `url(./img/img${nImage}.png)`;

function trocaColor(){
    document.getElementsByClassName('icon')[0].style.color = "red!important";
}