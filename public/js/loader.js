window.addEventListener('load', function () {
    setTimeout(() => {
        const loader = document.querySelector('.loading');
        loader.style.display = "none";
    }, 500);
})

var menu = document.getElementsByClassName('menu')[0];
if (screen.width <= 780) {
    menu.style.display = "none";
}
function closeOpen() {
    if (menu.style.display == 'block') {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

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

document.getElementById('header').innerHTML = `
    <div class="container">
        <div>
            <h1 class="titulo">Site</h1>
        </div>
        <nav>
            <ul class="menu">
                <li><a href="./index.html">Home</a></li>
                <li><a href="./about.html">Sobre</a></li>
                <li><a href="./contact.html">Contato</a></li>
                <li class="submenu"><a href="./login.html"><i class="fa fa-user" aria-hidden="true"></i></a>
                </li>
                <li><a href="#" onclick="logoff()">logout</a></li>
            </ul>
        </nav>
    </div>`
