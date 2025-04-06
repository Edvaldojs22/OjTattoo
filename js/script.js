const observar = new IntersectionObserver((eventos) => {
   eventos.forEach((event) => {
    if (event.isIntersecting) {
        event.target.classList.add('aparecer')
    } else{
        event.target.classList.remove('aparecer')
    }
   })
});

const galeria = document.querySelectorAll('.imgDiv');

galeria.forEach((img) => {observar.observe(img)})
