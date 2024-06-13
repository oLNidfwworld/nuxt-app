<template>
    <div class="container">
        <h1 class="title-h1">Документ {{ route.params.num }}</h1>
    </div>
</template>
<script setup lang="ts"> 
const route = useRoute(); 
</script>