// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//1- Crear Variable para ingresar nombres de amigos
//Array vacio que permite almacenar los nombres de amigos
let nombreAmigos =[];


//2- Crear Función para agregar Amigo
function agregarAmigo(){

    //2.1-Obtener el Input
    const input = document.getElementById('amigo');

    //2.2-Validar la entrada
    if (!validarEntrada(input)) return;

    //2.3-Agregar el nombre a la Lista
    nombreAmigos.push(input.value.trim());

    //2.4-Actualizar la lista en la Interfaz
    actualizarLista();

    //2.5-Limpiar el Input
    input.value = '';
}

//3- Crear Función para validar Entrada
function validarEntrada(input){
    const valor = input.value.trim();
    if (!valor){
        alert('Por favor, ingrese un nombre válido');
        return false;
    }
    return true;
}

//4- Crear Función para visualizar Lista Amigos
function actualizarLista(){
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    nombreAmigos.forEach((amigo, index) => {
        const item = document.createElement('li');
        item.textContent = `${index +1}. ${amigo}`;
        lista.appendChild(item);
    });
}


//5- Crear Función para sortear Amigo
function sortearAmigo(){
    if (nombreAmigos.length === 0) {
        alert('Agregar amigos antes de sortear');
        return;
    }

    //5.1-Seleccionar un indice aleatorio
    const indice = Math.floor(Math.random() * nombreAmigos.length);
    const ganador = nombreAmigos[indice];

    //5.2-Mostrar redultado por Pantalla
    document.getElementById('resultado').innerHTML =
    `!El amigo secreto es: <Strong>${ganador}</strong>!`;
}