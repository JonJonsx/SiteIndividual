const mixColor = (value) => {
    switch (value) {
        case "electric":
            return electric()
        case "normal":
            return normal()
        case "fighting":
            return fighting()
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
        case "steel":
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
        case "specialAttack":
            return specialAttack()
        case "specialDefense":
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
    backgroundColor: "#f1c40f",
    color: "#fff !important"
})

const normal = () => ({
    backgroundColor: "#a8a878",
    color: "#fff !important"
})

const fighting = () => ({
    backgroundColor: "#c0392b",
    color: "#fff !important"
})

const flying = () => ({
    backgroundColor: "#a890f0",
    color: "#000 !important",
    border: "1px solid #000 !important"
})

const ice = () => ({
    backgroundColor: "#81ecec",
    color: "#fff !important"
})

const poison = () => ({
    backgroundColor: "#9b59b6",
    color: "#fff !important"
})
const ground = () => ({
    backgroundColor: "#e0c068",
    color: "#fff !important"
})

const rock = () => ({
    backgroundColor: "#563c15",
    color: "#fff !important"
})

const bug = () => ({
    backgroundColor: "#A3CB38",
    color: "#fff !important"
})

const fire = () => ({
    backgroundColor: "#F79F1F",
    color: "#fff !important"
})

const ghost = () => ({
    backgroundColor: "#341f97",
    color: "#fff !important"
})

const steel = () => ({
    backgroundColor: "#95a5a6",
    color: "#000 !important",
    border: "1px solid #000 !important"
})
const water = () => ({
    backgroundColor: "#778beb",
    color: "#fff !important"
})

const grass = () => ({
    backgroundColor: "#2ecc71",
    color: "#fff !important"
})

const psychic = () => ({
    backgroundColor: "#e84393",
    color: "#fff !important"
})

const dragon = () => ({
    backgroundColor: "#6c5ce7",
    color: "#fff !important"
})
const dark = () => ({
    backgroundColor: "#533e2d",
    color: "#fff !important"
})

const fairy = () => ({
    backgroundColor: "#f8a5c2",
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