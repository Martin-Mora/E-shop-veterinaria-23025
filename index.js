const FILA=document.querySelector('.inicio-contenedor-carrusel-ofertas');
const FLECHA_IZQUIERDA=document.querySelector('.inicio-flecha-izquierda');
const FLECHA_DERECHA=document.querySelector('.inicio-flecha-derecha');

// Mover las imágenes con la flecha derecha //
FLECHA_DERECHA.addEventListener('click', () => {
  FILA.scrollLeft= FILA.scrollLeft + FILA.offsetWidth;
});
// Mover las imágenes con la flecha izquierda //
FLECHA_IZQUIERDA.addEventListener('click', () =>{
  FILA.scrollLeft= FILA.scrollLeft - FILA.offsetWidth;
})