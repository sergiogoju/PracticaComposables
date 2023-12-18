import { ref } from "vue";
export default function usePost() {
    const posts = ref([]);
    const post = ref([]);

    const leerPosts = async () => {
        const baseURL = "https://jsonplaceholder.typicode.com/posts";
        const response = await fetch(baseURL);
        posts.value = await response.json();
    };

    const leerPost = async (id) => {
        const postURL = `https://jsonplaceholder.typicode.com/posts/${id}`;
        const response = await fetch(postURL); //'${baseURL}/${id}`
        post.value = await response.json();
    };

    return {
        posts,
        leerPosts,
        post,
        leerPost,
    };
}

/*
1. Ok.

2. function FETCH

3. const posts = ref([]);
Un array vacio del tipo reactivo. Este array puede incluir todos los posts del .json.

4. Ok.

5. 
const leerUser = async () => {  
const response = await fetch(baseURL)
posts.value = await response.json()
}

Esta función leerUser realiza una llamada asincrona, y no asincrona usando fetch a la API, espera a que la respuesta se convierta en un objeto JSON 
luego asigna la respuesta a la variable posts.value.

¡AIXÒ ES PER MI FRANCESC, UN RECORDATORI!
https://www.aluracursos.com/blog/asyncawait-en-javascript-que-es-y-cuando-usar-programacion-asincrona#:~:text=De%20esta%20forma%2C%20la%20ejecuci%C3%B3n,hasta%20que%20finalice%20la%20Promesa.
Las palabras clave async y await, son una sintaxis que simplifica la programación asíncrona, facilitando el flujo de escritura y 
lectura de código; por lo que es posible escribir código que funcione de forma asíncrona, pero que se lea y estructure de forma síncrona. 
Async/await funciona con código basado en Promises, pero oculta las promesas para que la lectura sea más fluida y sencilla de entender.

Al definir una función como async, podemos usar la palabra clave await antes de cualquier expresión que retorne una promesa. 
De esta forma, la ejecución de la función externa (la función async) se pausará hasta que se resuelva la Promesa.

La palabra clave await recibe una Promesa y la convierte en un valor de retorno (o genera una excepción en caso de error). 
Cuando usamos await, JavaScript esperará hasta que finalice la Promesa. Si se completa con éxito (el término utilizado es fulfilled), 
el valor obtenido es retornado. Si la Promesa es rechazada (el término utilizado es rejected), se retorna el error arrojado por la excepción.

Ejemplo:

async function getUser(userId) {
const response = await fetch(`https://api.com/api/user/${userId}`);
const userData = await response.json();
return userData.name; // no es necesario await en el return
}

Una función declarada como async significa que el valor de retorno de la función será, "por dentro de javascript", una Promesa. 
Si la promesa se resuelve normalmente, el objeto-promesa retornará el valor. Si arroja una excepción, podemos usar try/catch como 
estamos acostumbrados en los programas síncronos. 
*/
