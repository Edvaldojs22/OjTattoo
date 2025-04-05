
// const galeria = document.querySelector('.galeria');
// const imagens = document.querySelectorAll('.galeria .imgDiv');

// function atualizarOpacidade() {
//   const galeriaRect = galeria.getBoundingClientRect();
//   const centroGaleria = galeriaRect.top + galeria.clientHeight / 2;

//   imagens.forEach(img => {
//     const rect = img.getBoundingClientRect();
//     const centroImagem = rect.top + rect.height / 2;

//     const distanciaDoCentro = Math.abs(centroImagem - centroGaleria);

//     const fadeLimite = galeria.clientHeight / 2; // Quanto maior, mais suave
//     let opacidade = 1 - distanciaDoCentro / fadeLimite;

//     opacidade = Math.max(0, Math.min(1, opacidade));
//     img.style.opacity = opacidade;
//   });
// }

// galeria.addEventListener('scroll', atualizarOpacidade);

