<template lang="pug">
    .category__card
        .category__card-title {{ title }}
        .category__card-text {{ text }}
        nuxt-link.category__card-more(:to='`${link}`') Подробнее
</template>

<script>
    export default {
        name: 'CategoryCard',
        props: [
            'title',
            'text',
            'link',
        ]
    }
</script>

<style lang="postcss" scoped>
    .category__card {
        margin-bottom: 60px;
    }

    .category__card-title {
        margin-bottom: 16px;
        font-size: 20px;
        font-weight: bold;
        line-height: 24px;
    }

    .category__card-text {
        width: 601px;
        font-size: 16px;
        line-height: 19px;
    }

    .category__card-more {
        position: relative;
        padding-right: 17px;
        font-size: 14px;
        line-height: 17px;
        color: #FF0142;
        transition: all 0.4s ease-in-out;
    }

    .category__card-more:hover {
        text-decoration: none;
    }

    .category__card-more:before {
        content: '';
        position: absolute;
        right: 0;
        top: 5px;
        width: 12px;
        height: 8px;
        background-image: url('../assets/img/more.svg');
    }
</style>