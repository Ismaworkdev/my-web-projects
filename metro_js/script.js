// Obtenemos todas las imágenes
const images = document.querySelectorAll('.main__img');

// Obtenemos el span donde se mostrará la información de la imagen
const infoSpan = document.getElementById('info');

// Creamos un array con las rutas de las imágenes
const imagePaths = [
  'imagenes/alexanderplatz.jpeg',
  'imagenes/hermannplatz.jpeg',
  'imagenes/jungfernheide.jpeg',
  'imagenes/konstanzer.jpeg',
  'imagenes/kurfurstenstrabe.jpeg',
  'imagenes/paulsternstrasse.jpeg',
  'imagenes/unterdenlinden.jpeg',
  'imagenes/westhafen.jpeg'
];

// Agregamos un evento "click" a cada imagen
images.forEach((image) => {
  image.addEventListener('click', () => {
    // Generamos un número aleatorio entre 0 y 7 (índices del array imagePaths)
    const randomIndex = Math.floor(Math.random() * imagePaths.length);
    
    // Obtenemos la ruta aleatoria correspondiente
    const randomPath = imagePaths[randomIndex];
    
    // Cambiamos la ruta de la imagen actual
    image.setAttribute('src', randomPath);
    
    // Mostramos solo el nombre del archivo en el span del footer
    const filename = randomPath.substring(randomPath.lastIndexOf('/') + 1);
    const nameWithoutExt = filename.split('.')[0];
    infoSpan.textContent = nameWithoutExt;
  });
});
