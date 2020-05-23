import Pokemon from '../js/Pokemon.js';
import pickColor from '../js/getColor.js';

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
    buildData(pokemon);
});


const color = pokemon => ({
    hp: pickColor('hp'),
    attack: pickColor('attack'),
    defense: pickColor('defense'),
    spAtk: pickColor('specialAttack'),
    spDef: pickColor('specialDefense'),
    speed: pickColor('speed')
});

function buildData(pokemon) {
    // aqui eu pego o body
    var body = document.getElementsByTagName('body')[0];

    // Aplica o valor da cor na variavel, que se encontra no css datapoke.css
    Object.entries(color(pokemon)).map(color => {
        body.style.setProperty(`--${color[0]}`, color[1])
    })
    //Atribuindo cor referente ao tipo do pokemon
    var typeColor = pokemon.types.map(type => pickColor(type.type.name).backgroundColor),
        typeName = pokemon.types.map(type => pickColor(type.type.name).color);

    const {
        image,
        id,
        name,
        hp,
        atk,
        def,
        spAtk,
        spDef,
        speed,
        types,
        abilities,
    } = pokemon;


    $('#imgPoke').attr('src',image);
    $('#txtId').attr('innerText' , id);
    $('#txtnome').attr('innerText' , name);
    
    $('#progressHp').attr('value' , hp);
    $('#progressAtk').attr('value' , atk);
    $('#progressDef').attr('value' , def);
    $('#progressSpAtk').attr('value' , spAtk);
    $('#progressSpDef').attr('value' , spDef);
    $('#progressSpeed').attr('value' , speed);


    $('#height').html(`${pokemon.alturaReal()} m`);
    $('#weight').html(`${pokemon.pesoReal()} kg`);
    
    $('#txtTypes').html(
        `<label class="type" style="background-color:${typeColor[0]}">${types[0].type.name}</label>
        ${types.length > 1 ? '<label class="type" style="color:;background-color:' + typeColor[1] + ';">' + types[1].type.name + '</label>' : ''}`);

    $('#abilities').html(
        `<label class="type">${abilities[0].ability.name}</label>
        ${abilities.length > 1 ? '<label class="type">' + abilities[1].ability.name + '</label>' : ''}
        ${abilities.length > 2 ? '<label class="type">' + abilities[2].ability.name + '</label>' : ''}`);
}