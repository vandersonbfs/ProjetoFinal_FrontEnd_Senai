// Lista de musicas Array 00:33 do video
let musicas = [
    {
        titulo: 'Song 2',
        artista: 'Blur',
        album: 'Blur',
        src: 'assets/audio/Blur - Song 2.mp3',
        img: 'assets/img/R-1512518-1455169815-6159.jpg'
    },
    {
        titulo: 'Black Betty',
        artista: 'Ram Jam',
        album: 'Ram Jam',
        src: 'assets/audio/Ram Jam - Black Betty.mp3',
        img: 'assets/img/R-1508349-1352933887-9900.jpg'
    },
    {
        titulo: 'Good Riddance',
        artista: 'Green Day',
        album: 'Time of Your Life',
        src: 'assets/audio/Green Day - Good Riddance.mp3',
        img: 'assets/img/R-1455616-1544725422-2672.jpg'
    }
];

// Variaveis
let musica = document.querySelector('audio');
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.nome-musica h5');
let nomeArtista = document.querySelector('.nome-musica i');
let nomeAlbum = document.querySelector('.nome-musica p');
let indexMusica = 0;

//Eventos
document.querySelector('.play-pause').addEventListener('click', tocarMusica);
document.querySelector('.btn-pause').addEventListener('click', pauseMusica);

// Detectar se a musica esta tocando ou não
musica.addEventListener('timeupdate', atualizarBarra);

// Esperar a música carregar para definir a duração
musica.addEventListener('loadedmetadata', function() {
    duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
});

document.querySelector('.btn-anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0) {
        indexMusica = musicas.length - 1;
    }
    redenrizarMusica(indexMusica);
});

document.querySelector('.btn-proximo').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica < 0) {
        indexMusica = musicas.length - 1;
    }
    redenrizarMusica(indexMusica);
});

// Funções
function redenrizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadedmetadata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        nomeAlbum.textContent = musicas[index].album;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));    
    });
}
// Tocar a musica
function tocarMusica() {
    musica.play();
    document.querySelector('.btn-pause').style.display = 'block';
    document.querySelector('.btn-play').style.display = 'none';
}

// Pausa a musica
function pauseMusica() {
    musica.pause();
    document.querySelector('.btn-pause').style.display = 'none';
    document.querySelector('.btn-play').style.display = 'block';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos;
}
