let imagens = [
    {
        img: 'assets/img/R-1512518-1455169815-6159.jpg'
    },
    {
        img: 'assets/img/R-1508349-1352933887-9900.jpg'
    },
    {
        img: 'assets/img/R-1455616-1544725422-2672.jpg'
    }
];

// Variaveis
let imagem = document.querySelector('.fundo');
let indexImagem = 0;

//Eventos
document.querySelector('.menu-musicas').addEventListener('click', () => {
    imagem.src = 'assets/img/Music.webp';
});

document.querySelector('.menu-videos').addEventListener('click', () => {
    imagem.src = 'assets/img/Film Wallpaper Top Background.png';
});

document.querySelector('.menu-fotos').addEventListener('click', () => {
    imagem.src = 'assets/img/img-fotos.PNG';
});

document.querySelector('.menu-pod').addEventListener('click', () => {
    imagem.src = 'assets/img/Podcast.webp';
});

document.querySelector('.menu-extras').addEventListener('click', () => {
    imagem.src = 'assets/img/wallpaper-extra.jpg';
});

document.querySelector('.menu-confg').addEventListener('click', () => {
    imagem.src = 'assets/img/Tools-wallpapers.jpg';
});

document.querySelector('.menu-aleatoria').addEventListener('click', () => {
    imagem.src = 'assets/img/iPod-Shuffle.jpg';
});

document.querySelector('.menu-tocando').addEventListener('click', () => {
    imagem.src = 'assets/img/itl.cat_apple-music-wallpaper_1858900.png';
});


// Funções
function redenrizarBackground(index) {
    indexImagem++;
    imagem.addEventListener('loadedmetadata', () => {
        imagem.src = imagens[index].img;
   
    });

    
}
