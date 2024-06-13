<template>
    <section>
        <h2 class="title-h2 docs-card-title">Документы</h2>
        <Swiper 
            :modules="[Pagination]" 
            :breakpoints="{
                0 : {
                    slidesPerView: 1, 
                },
                720 : {
                    slidesPerView: 2, 
                },
                1024 : {
                    slidesPerView: 3, 
                },
            }" 
            pagination class="card-doc-slider" :space-between="35" @swiper="initSwiper"> 
            <SwiperSlide 
            v-for="(item, index) in desc" 
            :key="index"
            class="card-doc">
                <div class="card-doc__wrapper">
                    <h3 class="card-doc__name">{{item.name}}</h3>
                    <p class="card-doc__description">{{item.desc}}
                    </p>
                    <Btn class="card-doc__go" :href="`/docs/${item.link}`">Перейти</Btn>
                </div>
            </SwiperSlide> 
            <div class="card-doc-slider__nav-wrapper">
                <button class="card-doc-slider__prev" @click="slidePrev">
                    <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                        fill-rule="evenodd" clip-rule="evenodd"
                            d="M0 80C22.0914 80 40 62.0914 40 40C40 17.9086 19.5657 0 0 0V80Z" fill="#A6B7D4"
                            fill-opacity="0.471045" />
                        <path 
                        fill-rule="evenodd" clip-rule="evenodd"
                            d="M11.587 38.9505C11.0751 39.375 10.8191 39.7928 10.8191 40.2036C10.8191 40.6145 11.0857 41.0802 11.6189 41.6006L21.5574 51.6012C22.0713 52.1183 22.0796 52.9507 21.5761 53.478C21.0875 53.9896 20.2767 54.0083 19.765 53.5197C19.7581 53.5131 19.7512 53.5064 19.7444 53.4996L7.8556 41.6237C7.07412 40.8431 7.07344 39.5768 7.85406 38.7953C7.85626 38.7931 7.85847 38.7909 7.86068 38.7887L19.937 26.8116C20.4526 26.3002 21.2852 26.3036 21.7966 26.8193C21.8036 26.8264 21.8106 26.8336 21.8175 26.8409C22.3324 27.3843 22.3204 28.239 21.7905 28.7678L11.587 38.9505Z"
                            fill="white" />
                    </svg>
                </button>
                <button class="card-doc-slider__next" @click="slideNext">
                    <svg width="40" height="80" viewBox="0 0 40 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                        fill-rule="evenodd" clip-rule="evenodd"
                            d="M40 80C17.9086 80 0 62.0914 0 40C0 17.9086 20.4343 0 40 0V80Z" fill="#A6B7D4"
                            fill-opacity="0.471045" />
                        <path 
                        fill-rule="evenodd" clip-rule="evenodd"
                            d="M28.413 38.9505C28.9249 39.375 29.1809 39.7928 29.1809 40.2036C29.1809 40.6145 28.9143 41.0802 28.3811 41.6006L18.4426 51.6012C17.9287 52.1183 17.9204 52.9507 18.4239 53.478C18.9125 53.9896 19.7233 54.0083 20.235 53.5197C20.2419 53.5131 20.2488 53.5064 20.2556 53.4996L32.1444 41.6237C32.9259 40.8431 32.9266 39.5768 32.1459 38.7953C32.1437 38.7931 32.1415 38.7909 32.1393 38.7887L20.063 26.8116C19.5474 26.3002 18.7148 26.3036 18.2034 26.8193C18.1964 26.8264 18.1894 26.8336 18.1825 26.8409C17.6676 27.3843 17.6796 28.239 18.2095 28.7678L28.413 38.9505Z"
                            fill="white" />
                    </svg>
                </button>
            </div>
        </Swiper>
    </section>
</template>
<script setup lang="ts">
import type Swiper from 'swiper';
import { Btn } from '~/components/base/btn';
import { Pagination } from 'swiper/modules'; 

let slideNext = () => { };
let slidePrev = () => { };

const initSwiper = (swiper: Swiper) => {
    slideNext = () => swiper.slideNext();
    slidePrev = () => swiper.slidePrev();
} 

const desc = shallowRef([
    {
        name : 'Лицензионный договор',
        desc : 'Механизм разбрасывания веерного типа приводится в действие от колес тележки, отличается простой и надежной конструкцией, не нуждается в смазке.',
        link : '1',
    },
    {
        name : 'Политика обработки персональных данных',
        desc : 'Радиус разброса ПГМ составляет до 3 метров и может регулироваться.',
        link : '2',
    },
    {
        name : 'Информация об оплате',
        desc : 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.',
        link : '6',
    },
    {
        name : 'Информация об оплате',
        desc : 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.',
        link : '4',
    },
    {
        name : 'Информация об оплате',
        desc : 'Десятипозиционный переключатель дозировки расположен на ручке тележки и позволяет очень точно регулировать объем рассыпаемого реагента с учетом его массы и фракции.',
        link : '88',
    },
])
</script>
<style lang="scss">
@import '/assets/styles/components/blocks/docs.scss';
</style>