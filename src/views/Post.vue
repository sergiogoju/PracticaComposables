<template>
    <div v-if="post && user">
        <h1 class="text-3xl">{{ post.title }}</h1>
        <div class="text-gray-500 mb-10">by {{ user.name }}</div>
        <div>{{ post.body }}</div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import usePost from "../composables/usePost.js";
import useUser from "../composables/useUser.js";

const route = useRoute();

const { post, leerPost } = usePost();
const { user, leerUser } = useUser();

async function infoPost() {
    await leerPost(route.params.id);
    await leerUser(post.value.userId);
}
infoPost();
</script>
