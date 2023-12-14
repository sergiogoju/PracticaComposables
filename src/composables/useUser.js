import { ref } from "vue";
export default function useUser() {
    const user = ref([]);
    const leerUser = async (userId) => {
        const userURL = `https://jsonplaceholder.typicode.com/users/${userId}`;
        const response = await fetch(userURL);
        user.value = await response.json();
    };
    return {
        user,
        leerUser,
    };
}
