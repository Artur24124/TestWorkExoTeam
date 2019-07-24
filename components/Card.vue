<template lang="pug">
    .card
        .card__back(@click='goBack') Назад
        .card__title {{ title }}
        .card__text(v-html="text")
        img.card__image(:src='image')
        .card__info {{ info }}
</template>

<script>
    export default {
        name: 'Card',
        props: ['title', 'text', 'image', 'info'],
        methods: {
            goBack() {
                this.$router.back();
            }
        }
    }
</script>


<style lang="postcss" scoped>
    .card {
        padding: 16px 0 52px;
        border-bottom: 1px solid rgba(42, 50, 70, 0.1);
    }

    .card__back {
        position: relative;
        margin-bottom: 22px;
        padding-left: 20px;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: rgba(42, 50, 70, 0.5);
        cursor: pointer;
        text-decoration: underline;
    }

    .card__back:before {
        content: '';
        position: absolute;
        left: 0;
        top: 3px;
        width: 12px;
        height: 8px;
        background-image: url('../assets/img/back.svg');
    }

    .card__title {
        width: 485px;
        margin-bottom: 38px;
        font-size: 24px;
        font-weight: bold;
        line-height: 29px;
    }

    .card__text {
        width: 600px;
        margin-bottom: 39px;
        font-family: 'TimesNewRoman', 'monospace';
        font-size: 18px;
        line-height: 21px;
    }

    .card__image {
        margin-bottom: 41px;
    }

    .card__info {
        width: 600px;
        padding: 14px 15px;
        font-size: 16px;
        background: #FFF7D9;
    }
</style>