class Pokemon {
    constructor(
        id,
        name,
        image,
        height,
        weight,
        hp,
        atk,
        def,
        spAtk,
        spDef,
        speed,
        types,
        abilities,
        species,
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.height = height;
        this.weight = weight;
        this.hp = hp;
        this.atk = atk;
        this.def = def;
        this.spAtk = spAtk;
        this.spDef = spDef;
        this.speed = speed;
        this.types = types;
        this.abilities = abilities;
        this.species = species;
    }

    alturaReal() {
        return this.height / 10;
    }

    pesoReal() {
        return this.weight / 10;
    }
    static getPokemon(id) {
        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                return data;
            }).catch(function (error) {
                console.log(`Erro:${error.message}`);
            })
    }
}

export default Pokemon;