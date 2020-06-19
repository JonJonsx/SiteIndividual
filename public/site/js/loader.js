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
    if(menu.style.display == 'block'){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}