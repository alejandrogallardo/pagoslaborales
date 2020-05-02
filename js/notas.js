let elemento;

elemento = document.all;
elemento = document.all[10];
elemento = document.head;
elemento = document.body;
elemento = document.domain;
elemento = document.URL;
elemento = document.characterSet;
elemento = document.forms;
elemento = document.forms[0];
elemento = document.forms[0].id;
elemento = document.forms[0].className;
elemento = document.forms[0].classList;
elemento = document.forms[0].classList[0];

elemento = document.images;
elemento = document.images[2];
elemento = document.images[2].getAttribute('src');

// scripts
elemento = document.scripts;

elemento = document.images;

let imagenes = document.images;
let imagenesArr = Array.from(imagenes)

// imagenesArr.forEach...

// Obtener el texto de un elemento

let encabezado = document.getElementById('encabezado').innerText;
let encabezado = document.getElementById('encabezado').textContent;

encabezado.style.background = '#333'
encabezado.style.color = '#333'
encabezado.style.padding = '20px'

encabezado.innerText = 'Nuevo texto'

let enlace = document.querySelector('#principal a:first-child')
let enlace = document.querySelector('#principal a:nth-child')
let enlace = document.querySelector('#principal a:last-child')

enlace = document.getElementsByClassName('enlace')[3];

enlace = enlace[3]

enlace = document.getElementsByTagName('a')

let enlaces = Array.from(enlace)

enlaces.forEach(function(enlace){
    console.log(enlace.innerText);
});

// agregar clase
enlace.className = 'enlace'

enlaces.id = 'nuevoId'

enlace.setAttribute('href', '#')

enlace.textContent = 'Nuevo texto'

// Agregar al HTML
document.querySelector('#secundaria').appendChild(enlace)

// 
let nuevoEncabezado = document.createElement('h2')

nuevoEncabezado.id = 'miId'

nuevoEncabezado.appendChild(document.createTextNode('Los mejores cursos'))

let anterior = document.querySelector('#encabezado')
let elPadre = document.querySelector('#listadecursos')

elPadre.replaceChild(nuevoEncabezado, anterior)

console.log(anterior.parentElement);

// 
let primerLi = document.querySelector('#encabezado')

let elemento = primerLi.className
elemento = primerLi.classList.add('nueva-clase')
elemento = primerLi.classList.remove('nueva-clase')
elemento = primerLi.classList

elemento.getAttribute('href')
elemento.getAttribute('data-id', 20)
elemento = primerLi.hasAttribute('data-id')

navegacion.removeChild(inlaces[0])


console.log(elemento);