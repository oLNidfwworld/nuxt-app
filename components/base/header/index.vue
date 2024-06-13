<template>
    <header class="m-header">
        <div class="container m-header__content">
            <div class="m-header__wrapper">
                <div class="m-header__left">
                    <Logo class="m-header__logo" />
                    <nav class="m-header__nav">
                        <ul class="m-header__row">
                            <li>
                                <NuxtLink href="/tariff/" class="m-header__nav-item">
                                    Тарифы
                                </NuxtLink>
                            </li>
                            <li>
                                <NuxtLink href="/contacts/" class="m-header__nav-item">
                                    Контакты
                                </NuxtLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <ul class="m-header__row">
                    <li class="m-header__num-hide">
                        <a href="tel:+74951184422" class="m-header__nav-item--bold">
                            +7 495 118-44-22
                        </a>
                    </li>
                    <li>
                        <button class="m-header__nav-item">Вход</button>
                    </li>
                    <li>
                        <Btn href="/may-be-registration">Регистрация</Btn>
                    </li>
                </ul>
                <button  class="m-header__burger-opener" @click="burgerIsOpened = !burgerIsOpened">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="32" height="32" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512"
                        xml:space="preserve" class="">
                        <g>
                            <path
                                d="M3.5 7.5h17a1.5 1.5 0 1 0 0-3h-17a1.5 1.5 0 1 0 0 3zM20.5 10.5h-17a1.5 1.5 0 1 0 0 3h17a1.5 1.5 0 1 0 0-3zM20.5 16.5h-17a1.5 1.5 0 1 0 0 3h17a1.5 1.5 0 1 0 0-3z"
                                fill="#fff" opacity="1" data-original="#fff" />
                        </g>
                    </svg>
                </button>
            </div>
        </div> 
        <div class="m-header-burger" :class="{ 'opened' : burgerIsOpened}" >
            <div class="container m-header-burger__wrapper">
                <nav>
                    <ul class="m-header-burger__row">
                        <li>
                            <NuxtLink href="/tariff/" class="m-header__nav-item">
                                Тарифы
                            </NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/contacts/" class="m-header__nav-item">
                                Контакты
                            </NuxtLink>
                        </li>
                    </ul>
                </nav>
                <ul class="m-header-burger__row">
                    <li>
                        <a href="tel:+74951184422" class="m-header__nav-item--bold">
                            +7 495 118-44-22
                        </a>
                    </li>
                    <li>
                        <button class="m-header__nav-item">Вход</button>
                    </li>
                    <li>
                        <Btn href="/may-be-registration">Регистрация</Btn>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
import { Btn } from '../btn';
import { Logo } from '../logo';

const burgerIsOpened = ref(false);
const route = useRoute();

watch( ( ) => route.path, ( ) => {
    burgerIsOpened.value = false;
})
</script>
<style lang="scss">
@import '~/assets/styles/components/header.scss';
</style>