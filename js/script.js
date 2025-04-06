const galeria = document.querySelectorAll('.imgDiv');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const texto = entry.target.querySelector('.textImg');

        if (entry.isIntersecting) {
            entry.target.classList.add('aparecer');
            texto.classList.add('animacao');
        } else {
            entry.target.classList.remove('aparecer');
            texto.classList.remove('animacao');
        }
    });
});

galeria.forEach((img) => {
    observer.observe(img);
});