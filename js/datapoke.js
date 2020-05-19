import Pokemon from '../js/Pokemon.js';
import pickColor from '../js/getColor.js';

function buildProgress(pokemon) {
    var typeColor = pokemon.types.map(type => pickColor(type.type.name).backgroundColor);
    var typeName = pokemon.types.map(type => pickColor(type.type.name).color);
    var life = pickColor('hp');
    var attack = pickColor('attack');
    var defense = pickColor('defense');
    var spAttack = pickColor('specialAttack');
    var spDefense = pickColor('specialDefense');
    var speed = pickColor('speed');

    var body = document.getElementsByTagName('body')[0];
    body.style.setProperty('--hp', life),
        body.style.setProperty('--attack', attack),
        body.style.setProperty('--defense', defense),
        body.style.setProperty('--spAtk', spAttack),
        body.style.setProperty('--spDef', spDefense),
        body.style.setProperty('--speed', speed);

    document.getElementById('imgPoke').src = pokemon.image;
    document.getElementById('txtId').innerText = pokemon.id;
    document.getElementById('txtnome').innerText = pokemon.name;
    document.getElementById('progressHp').value = pokemon.hp;
    document.getElementById('progressAtk').value = pokemon.atk;
    document.getElementById('progressDef').value = pokemon.def;
    document.getElementById('progressSpAtk').value = pokemon.spAtk;
    document.getElementById('progressSpDef').value = pokemon.spDef;
    document.getElementById('progressSpeed').value = pokemon.speed;
    document.getElementById('txtTypes').innerHTML =
        `<label class="type" style="background-color:${typeColor[0]}">${pokemon.types[0].type.name}</label>
        ${pokemon.types.length > 1 ? '<label class="type" style="color:;background-color:' + typeColor[1] + ';">' + pokemon.types[1].type.name + '</label>' : ''}`;
    document.getElementById('height').innerHTML = `${pokemon.alturaReal()} m`;
    document.getElementById('weight').innerHTML = `${pokemon.pesoReal()} kg`;
    document.getElementById('abilities').innerHTML =
        `<label class="type">${pokemon.abilities[0].ability.name}</label>
        ${pokemon.abilities.length > 1 ? '<label class="type">' + pokemon.abilities[1].ability.name + '</label>' : ''}
        ${pokemon.abilities.length > 2 ? '<label class="type">' + pokemon.abilities[2].ability.name + '</label>' : ''}`
}
const returnId = () => {
    var query = location.search.slice(1);
    var partes = query.split('&');
    var poke = {};
    partes.forEach(function (parte) {
        var chaveValor = parte.split('=');
        var chave = chaveValor[0];
        var valor = chaveValor[1];
        poke[chave] = valor;
    });
    return poke.id;
}
var idPoke = parseInt(returnId());

Pokemon.getPokemon(idPoke).then(data => {
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
        data.types,
        data.abilities
    );
    buildProgress(pokemon);
});