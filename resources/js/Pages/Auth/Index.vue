<script setup>

import { Head } from '@inertiajs/vue3';
import { onMounted } from 'vue';

onMounted(() => {
    console.log('Component mounted.');
});

</script>

<template>

    <Head>
        <title>Auth</title>
    </Head>

    <div>
        <h1>Auth</h1>
    </div>

</template>