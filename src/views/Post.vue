<template>
    <div v-if="post && user">
        <h1 class="text-3xl">{{ post.title }}</h1>
        <div class="text-gray-500 mb-10">by {{ user.name }}</div>
        <div>{{ post.body }}</div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { watch } from "vue";
import usePost from "../composables/usePost.js";
import useUser from "../composables/useUser.js";
import useResources from "../composables/useResources.js";

const router = useRoute();

// Archivos separados de Post y User
//leerPost(router.params.id);
// const { post, leerPost } = usePost();
// const { user, leerUser } = useUser();

// 4. Archivos junstos, utilizar el mismo composable (useResources)
// Leer Posts, post y Users
const { getUno: leerPost, info: post } = useResources("posts");
const { getUno: leerUser, info: user } = useResources("users");

leerPost(router.params.id);
watch(
    () => ({ ...post.value }),
    () => leerUser(post.value.userId)
);

</script>
