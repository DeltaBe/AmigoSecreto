// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variable para guardar 
let amigos = []


//Los usuarios escribirán el nombre de un amigo en un campo de texto y lo agregarán a una lista visible al hacer clic en "Adicionar".
function agregar_nombres() {
    //accede al id de la etiqueta input
    let input = document.getElementById('amigo');
            let nombre = input.value.trim();
            //llamamos al metodo que valida si se a puesto un valor en la entrada
            if (!validar_entrada(nombre)) {
                return;
            }
            //verificamos si no hay algun nombre igual en la lista
            if (amigos.includes(nombre)) {
                alert(`El nombre "${nombre}" ya está en la lista.`)
                return
            }
            //si todo sale bien agregamos y lo mostramos en pantalla al final limpiamos la entrada
            amigos.push(nombre);
            visualizar_lista();
            input.value = '';
}
//Si el campo de texto está vacío, el programa mostrará una alerta pidiendo un nombre válido.
function validar_entrada(nombre) {
    //si no se ingreso ningun parametro mandara una alerta
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return false;
    }
    return true;
}

//Los nombres ingresados aparecerán en una lista 
function visualizar_lista() {
    //accedemos al la etiqueta y la guardamos en una variable
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
   //itera sobre cada elemento y llama al metodo agregarelemento
    amigos.forEach(amigo => {
        agregarElementoALista(amigo, lista);
    });
}

//agrega una etiqueta li para los nombres
function agregarElementoALista(nombre, lista) {
    //crea una etiqueta li con el texto del nombre 
    let li = document.createElement('li');
    li.textContent = nombre;
    lista.appendChild(li);
}


// Al hacer clic en el botón "Sortear Amigo", se seleccionará aleatoriamente un nombre de la lista y se mostrará en la página.
function sortearAmigo() {
   // si la lista esta vacia mostrara una ventana de alerta
        if (amigos.length === 0) {
            alert('No hay amigos en la lista para sortear.');
            return;
        }

        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];

        const resultado = document.getElementById('resultado');
        resultado.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong> 🎉`;
    
}


