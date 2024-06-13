<template>
    <div class="inpt-box">
        <label v-if="labelName" class="inpt-box__label" :for="attrs.id"  >{{ labelName }}</label>
        <input class="inpt-box__inpt" v-bind="$attrs" />
    </div>        
</template>
<script setup lang="ts">  
interface IProps {
    labelName? : string
}   
interface IAttrs {
    id? : string, 
}

defineOptions({
    inheritAttrs : false
});

const props = defineProps<IProps>();    
const attrs = (useAttrs() as unknown) as IAttrs;

</script> 
<style lang="scss">
@import '/assets/styles/components/inpt.scss';
</style>