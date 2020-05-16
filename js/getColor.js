const mixColor = (value) => {
    switch (value) {
        case "electric":
            return electric()
        case "flying":
            return flying()
        case "ice":
            return ice()
        case "poison":
            return poison()
        case "ground":
            return ground()
        case "fire":
            return fire()
        case "rock":
            return rock()
        case "bug":
            return bug()
        case "ghost":
            return ghost()
        case "stell":
            return steel()
        case "water":
            return water()
        case "grass":
            return grass()
        case "psychic":
            return psychic()
        case "dragon":
            return dragon()
        case "dark":
            return dark()
        case "fairy":
            return fairy()
        case "unknown":
            return unknown()
        case "shadow":
            return shadow()
        case "attack":
            return attack()
        case "defense":
            return defense()
        case "special-attack":
            return specialAttack()
        case "special-defense":
            return specialDefense()
        case "hp":
            return hp()
        case "speed":
            return speed()
        default:
            return unknown();
    }
}

const electric = () => ({
    backgroundColor: "#fed330",
    color: "#fff !important"
})

const flying = () => ({
    backgroundColor: "#d1d8e0",
    color: "#000 !important"
})

const ice = () => ({
    backgroundColor: "#2bcbba",
    color: "#fff !important"
})

const poison = () => ({
    backgroundColor: "#8854d0",
    color: "#fff !important"
})
const ground = () => ({
    backgroundColor: "#cd6133",
    color: "#fff !important"
})

const rock = () => ({
    backgroundColor: "#84817a",
    color: "#fff !important"
})

const bug = () => ({
    backgroundColor: "#218c74",
    color: "#fff !important"
})

const fire = () => ({
    backgroundColor: "#ff5252",
    color: "#fff !important"
})

const ghost = () => ({
    backgroundColor: "#474787",
    color: "#fff !important"
})

const steel = () => ({
    backgroundColor: "#aaa69d",
    color: "#000 !important"
})
const water = () => ({
    backgroundColor: "#45aaf2",
    color: "#fff !important"
})

const grass = () => ({
    backgroundColor: "#26de81",
    color: "#fff !important"
})

const psychic = () => ({
    backgroundColor: "#f7b731",
    color: "#fff !important"
})

const dragon = () => ({
    backgroundColor: "#fc5c65",
    color: "#fff !important"
})
const dark = () => ({
    backgroundColor: "#2c2c54",
    color: "#fff !important"
})

const fairy = () => ({
    backgroundColor: "#f7f1e3",
    color: "#fff !important"
})

const unknown = () => ({
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    color: "#fff !important"
})

const shadow = () => ({
    backgroundColor: "#fed330",
    color: "#40407a !important"
})

const speed = () => '#ced6e0';

const specialDefense = () => '#1B9CFC';

const specialAttack = () => '#6D214F';

const defense = () => '#3742fa';

const attack = () => '#f53b57';

const hp = () => '#05c46b';

export default mixColor;