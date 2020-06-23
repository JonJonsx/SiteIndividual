import pickColor from './getColor.js';


function buildCard(pokemon){
    var typeColor = pokemon.types.map(type => pickColor(type.type.name).backgroundColor);
    var typeName = pokemon.types.map(type => pickColor(type.type.name).color);
    var typeBorder = pokemon.types.map(type => pickColor(type.type.name).border);
    document.getElementById("boxCard").innerHTML += 
    `<div class="card" style="color:${typeName[0]};background: linear-gradient(to right,${typeColor[0]},${typeColor[1] || '#0F2027'} );">
        <div class="imgBox">
            <img src="${pokemon.image}" alt="">
        </div>
        <div class="read">
            <label id="pokemonId" for="">Nº ${pokemon.id}</label>
            <label class="namePoke" for="">${pokemon.name}</label>
            <div class="types">
                <label class="type" style="border:${typeBorder[0]};">${pokemon.types[0].type.name}</label>
                ${pokemon.types.length > 1 ? '<label class="type" style="border:'+typeBorder[0]+';">'+pokemon.types[1].type.name+'</label>' : ''}
            <div>
        </div>
    </div>`;
}
// ${data.types.length > 1 ? '<label class="types">'+data.types[1].type.name+'</label>' : ''}
export default buildCard;