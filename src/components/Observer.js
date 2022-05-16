const imagen1 = document.getElementById("imagen1");

const cargarImagen = (entradas, observador) => {
     
    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
        
    });
}

const observador = new IntersectionObserver(cargarImagen, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold:1.0
});

observador.observe(imagen1)