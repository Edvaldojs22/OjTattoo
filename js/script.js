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


const menu = document.querySelector('.menu');
const painelMenu = document.querySelector('.painelMenu');


let teste = false;
menu.addEventListener('click', () => {
    if (teste) {
        painelMenu.classList.remove('painelMenuShow')
        teste = false
        
    } else {
        painelMenu.classList.add('painelMenuShow')
        teste = true
    }

})