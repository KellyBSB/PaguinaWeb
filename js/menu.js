/*dar funcion al boton*/ 
var btnmenu = document.getElementById('btn-menu');
var nav= document.getElementById('nav');

/* al hacer clic en el menu que tenga un evento
al van se le agrega la clase costrar
*/

btnmenu.addEventListener('click', function()
{
    nav.classList.toggle('mostrar');
}
);
