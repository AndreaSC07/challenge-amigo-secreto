// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos=[]; //declaracion array

//aqui se recibe el nombre
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim();
    let regex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜ\s]+$/; // variable para validar que solo se digite letras

// Validación para que solo se digiten letras
if (regex.test(nombre)) { /// si solo son letras se mete el nombre al array
    amigos.push(nombre);
} else {
    alert("El nombre no es válido. Solo se permiten letras."); // si son números se da mensaje y no se mete nada al array
}

    if (nombre === '') { //Valida que no sea espacio en blanco
        alert("Por Favor, ingresa un nombre válido.");
        return;
  }

actualizarListaAmigos(); 
limpiarCaja();

}

function limpiarCaja(){
    document.querySelector("#amigo").value=""; // se limpia caja cada vez que se agraga un nombre
   

}

function actualizarListaAmigos() { //funcion para mostrar nombres en la pantalla con una lista html
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((nombre) => {
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}


function sortearAmigo() { // se hace el sorteo con los nombres agregdos
    if (amigos.length === 0) {
        alert("No has agregado ningun amigo"); // si no se ha agregado ningun nombre no se hace el sorteo
    return;
 }
  let indice = Math.floor(Math.random() * amigos.length);
  let elegido = amigos[indice];

  let listaResultado = document.getElementById("resultado");
    listaResultado.innerHTML = '';
  const li = document.createElement("li");
  li.textContent = "El amigo secreto sorteado es: " + elegido;
  listaResultado.appendChild(li);
} 
