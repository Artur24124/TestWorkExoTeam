<template lang="pug">
    .faq-promo
        .faq-promo__title Вопрос ответ
        .faq-promo__text Найдите подходящею категорию вопросов на этой странице или найдите ответ на интересубщий вас вопрос воспользовавшись поиском
</template>

<script>
    export default {
        name: 'FaqPromo'
    }
</script>

<style lang="postcss" scoped>
    .faq-promo {
        position: relative;
        margin-bottom: 46px;
        padding-left: 88px;
        padding-bottom: 25px;
        border-bottom: 1px solid rgba(42, 50, 70, 0.1);
    }

    .faq-promo:before {
        content: '';
        position: absolute;
        left: 0;
        top: 10px;
        width: 50px;
        height: 50px;
        background-image: url('../assets/img/help.svg');
        background-repeat: no-repeat;
    }

    .faq-promo__title {
        margin-bottom: 8px;
        font-size: 24px;
        font-weight: bold;
        line-height: 29px;
    }

    .faq-promo__text {
        width: 476px;
        font-size: 14px;
        line-height: 17px;
    }
</style>