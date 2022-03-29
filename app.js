// Primer elemento directo
let campeonCopa = document.querySelector("ul > li")

// Segundo elemento
let segundoElemento = document.querySelector(" ul > li:nth-child(2)")

// Tercer elemento
// const tercerElement = () => {
//     const element = document.getElementById('tercer');
//     return element;
// };

// Selecciono todos los elementos
// let paises = document.querySelectorAll("li")


// ------------------------------------------------------

// alert(tercerElement().innerText)

// console.log(paises[0].innerText)

// paises.forEach(element => 
//     console.log(element.innerText)
// );


// ---------------------------------------------------------
// let divElement = document.querySelector("div")

// console.log(divElement.innerHTML);
// console.log(divElement.innerText);


// let titulo = document.querySelector("h2");

// titulo.style.color = "cyan2";
// titulo.style.fontSize = "12px";
// titulo.style.backgroundColor = "#dddddd";

// ---------------------------------------------------------

// let titulo = document.querySelector("h2");
// let boton = document.querySelector(".boton");

// boton.addEventListener('click', function(params) {
//     // alert("Se cambio el titulo");
//     titulo.style.color = "cyan2";
//     titulo.style.fontSize = "12px";
//     titulo.style.backgroundColor = "#dddddd";
// });


// ---------------------------------------------------------

let boton = document.querySelector(".boton");

boton.addEventListener('click', (params) => {
    campeonCopa.classList.toggle("no-pass");  
    params.preventDefault();  
});

