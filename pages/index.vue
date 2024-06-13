
<template>
    <div class="container">
        <FinesCheckout class="mb-[98px]"/>
        <CompasBenefits class="mb-[85px]"/>
        <Docs/>
    </div>
</template>
<script setup lang="ts">
import { CompasBenefits } from '~/components/blocks/compassBenefits';
import { Docs } from '~/components/blocks/docs';
import { FinesCheckout } from '~/components/blocks/finesCheckout'; 
</script> 
<style scoped>
.mb-\[98px\]{
    margin-bottom: 98px;
}
.mb-\[85px\]{
    margin-bottom: 85px;
}
</style>