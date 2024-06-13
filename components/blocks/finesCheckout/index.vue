<template>
    <section class="checkout-fines">
        <div class="checkout-fines__form-block">
            <h1 class="title-h1 checkout-fines__title">
                Проверьте штрафы и зарегестрируйтесь в 1 клик
            </h1>
            <form class="checkout-fines-form" @submit.prevent="submIt" >
                <div class="checkout-fines-form__inpt-wrapper">
                    <Inpt  id="checkoutFinesNum" required type="text" label-name="Номер автомобиля" />
                    <Inpt id="checkoutFinesRegion" required type="text" label-name="Регион" />
                    <Inpt id="checkoutFinesCert" required type="text" label-name="Свидетельство о регистрации ТС" />
                    <Transition name="msg-appear"> 
                        <span v-if="msg !== ''" class="checkout-fines-form__msg">{{ msg }}</span>
                    </Transition>
                </div>
                <div class="checkout-fines-form__accept-buttons"> 
                    <Btn type="submit" :class="{ 'loading' : pending}" :inert="pending" :disabled="pending" class="checkout-fines-form__submit">
                        Проверить штрафы
                        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path 
                                fill-rule="evenodd" clip-rule="evenodd"
                                d="M11.9228 6.67275L0.570595 6.6677C0.258112 6.66756 0.00490403 6.41413 0.00504303 6.10165L0.00505829 6.09706C0.00775929 5.78097 0.264223 5.52585 0.58033 5.52482L11.9085 5.48781L7.46482 1.01632C7.23504 0.78511 7.23134 0.412918 7.45646 0.17717C7.67491 -0.051598 8.03746 -0.0599587 8.26623 0.158497C8.26934 0.161465 8.2724 0.164468 8.27544 0.167505L13.8714 5.75741C14.0668 5.95257 14.067 6.26915 13.8718 6.46452L13.8702 6.46617L8.18932 12.1003C7.95877 12.329 7.58651 12.3274 7.35786 12.0969C7.3547 12.0937 7.35158 12.0905 7.3485 12.0872C7.1183 11.8443 7.12365 11.4621 7.36057 11.2257L11.9228 6.67275Z"
                                fill="white" />
                        </svg>
                    </Btn>  
                    <Btn  appearence="white" type="button" class="checkout-fines-form__cancel" @click="showVideo">
                        <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5258 20.2492C1.61798 19.0743 1.16406 16.1905 1.16406 11.5976C1.16406 7.00468 1.52855 4.25596 2.25754 3.35141C2.75216 2.6247 3.22423 2.1221 3.67376 1.8436C4.12329 1.5651 4.71528 1.40847 5.44973 1.37371C10.5243 1.12406 14.3824 0.999492 17.0239 1C19.6655 1.00051 23.1675 1.12651 27.5299 1.37798C28.2271 1.51283 28.8478 1.77363 29.392 2.16038C29.9363 2.54714 30.3022 3.04098 30.4897 3.64191C31.0955 5.04118 31.3984 7.52884 31.3984 11.1049C31.3984 14.6809 31.1736 17.2829 30.7239 18.9108C30.4927 19.803 30.0488 20.5145 29.392 21.045C28.7353 21.5756 27.852 21.8344 26.7423 21.8215C21.892 22.0624 18.2543 22.1787 15.8292 22.1702C13.4042 22.1618 9.93055 22.0209 5.40843 21.7474C4.7907 21.7474 4.26489 21.6434 3.83098 21.4353C3.39708 21.2272 2.96202 20.8318 2.5258 20.2492Z" stroke="#1253A2"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2153 7.03705L13.2191 7.04005L21.3702 11.3065L20.374 11.7778L13.209 15.4787L13.215 7.03805L13.2153 7.03705Z" fill="#1253A2"/>
                        </svg> 
                        <span>О сервисе</span>
                        <span>(1 мин. 20 сек)</span>
                    </Btn>
                </div>
                <p class="checkout-fines-form__approve">Нажимая «Проверить штрафы» вы соглашаетесь с политикой обработки персональных данных и принимаете оферту</p>
            </form>
        </div>
        <picture class="checkout-fines__picture">
            <source srcset="/assets/public/checkoutFines.png" />
            <img class="" src="" alt="" />
        </picture>
    </section>
</template>
<script setup lang="ts">
import { Fancybox } from '@fancyapps/ui';
import { Btn } from '~/components/base/btn';
import { Inpt } from '~/components/base/inpt'; 
import "@fancyapps/ui/dist/fancybox/fancybox.css";
const msg = ref(''); 
const pending = ref(false);

const submIt = async ( ) => { 
    
    pending.value = true;
    await (new Promise(resolve => setTimeout(resolve, 2000)));
    pending.value = false;
    // do something here... 
    msg.value = 'Данные отправлены';
    setTimeout( ( ) => {
        msg.value = '';
    }, 3500);
}
const showVideo = ( ) => { 
    
    new Fancybox([
        {
            // src: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
            src : 'https://www.youtube.com/watch?v=TAmInvloe_s',
            type: 'iframe', 
        }
    ])
}
</script>
<style lang="scss">
@import '/assets/styles/components/blocks/finesCheckout.scss';
</style>