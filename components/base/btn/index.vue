<template>
    <NuxtLink v-if="attrs.href"  class="m-btn" :class="appearence">
        <slot/>
    </NuxtLink>
    <button v-else class="m-btn" :class="appearence">
        <slot/>
    </button>
</template>
<script setup lang="ts" >
interface IProps {
    appearence? : 'blue' | 'white',
}
interface IAtrrs {
    href : string | null,
} 

withDefaults(defineProps<IProps>(), {
    appearence : 'blue'
});  
const attrs = (useAttrs() as unknown) as IAtrrs; 

</script>
<style lang="scss">
@import '~/assets/styles/components/btn.scss'; 
</style>