//menuhamburguesa
ham.addEventListener('click', function() {
    ham.classList.toggle('crece');
    menu_wrapper.classList.toggle('crece');
});

document.getElementById("botonArriba").addEventListener("click", irArriba);

function irArriba() {

    let up = document.documentElement.scrollTop;
    if (up > 0) {
        window.scrollTo(0, 0);
    }
}

botonArriba = document.getElementById('botonArriba');
window.onscroll = function() {

    let scroll = document.documentElement.scrollTop;
    if (scroll > 200) {
        botonArriba.style.transform = "scale(1)";

    } else if (scroll < 200) {
        botonArriba.style.transform = "scale(0)";;
    }

};