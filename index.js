var menu = document.getElementById('menu')
var btn = document.querySelector('fa-bars')

function showMenu () {
    menu.classList.toggle('visible')
}
function hideMenu () {
    menu.classList.remove('visible')
}