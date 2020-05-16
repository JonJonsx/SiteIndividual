const datapoke = () =>{
    for(var i = 1; i <= 20; i ++){
        const numero = i;
        fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            document.getElementById("boxCard").innerHTML += 
                `<div class="card">
                    <div class="imgBox">
                        <i class="far fa-heart" aria-hidden="true"></i>
                        <img src="${data.sprites.front_default}" alt="">
                    </div>
                    <div class="read">
                        <label for="">Nº${numero}</label>
                        <label class="namePoke" for="">${data.name}</label>
                        <label class="types">${data.types[0].type.name}</label>
                    </div>
                </div>`;
        })
    }
}