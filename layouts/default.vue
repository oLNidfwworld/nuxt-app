<script setup lang="ts">
import { Footer } from '~/components/base/footer';
import { Header } from '~/components/base/header';
</script>

<template>
    <div class="page-wrapper">
        <Header class="page-header" />
        <div class="page-content">
            <main>
                <slot />
            </main>
        </div>
        <Footer class="page-footer"/>
    </div>
</template>