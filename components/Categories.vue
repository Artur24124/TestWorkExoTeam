<template lang="pug">
    .categories
        .categories__item
            .categories__item-title Личный кабинет
            ul.categories__item-list
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Ошибки в личном кабинете
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Как получить доступ в личный кабинет
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Не могу зайти в личный кабинет
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Ошибки в личном кабинете
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Как получить доступ в личный кабинет
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Не могу зайти в личный кабинет
        .categories__item
            .categories__item-title Погашения займа
            ul.categories__item-list
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Способы погашения
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Нарушения при погашении
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Нужны ли поручители для получения займа?
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Нарушения при погашении
        .categories__item
            .categories__item-title Получение денег
            ul.categories__item-list
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Не могу зайти в личный кабинет
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Как получить доступ в личный кабинет
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Не могу зайти в личный кабинет
        .categories__item
            .categories__item-title Личный кабинет
            ul.categories__item-list
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Ошибки в личном кабинете
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Как получить доступ в личный кабинет
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Не могу зайти в личный кабинет
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Ошибки в личном кабинете
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Как получить доступ в личный кабинет
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Не могу зайти в личный кабинет
        .categories__item
            .categories__item-title Погашения займа
            ul.categories__item-list
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Способы погашения
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Нарушения при погашении
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Нужны ли поручители для получения займа?
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Нарушения при погашении
        .categories__item
            .categories__item-title Получение денег
            ul.categories__item-list
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Не могу зайти в личный кабинет
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Как получить доступ в личный кабинет
                li.categories__item-list-item
                    nuxt-link.categories__item-list-link(to='/category') Не могу зайти в личный кабинет
</template>

<script>
    export default {
        name: 'Categories'
    }
</script>

<style lang="postcss" scoped>
    .categories {
        display: flex;
        flex-wrap: wrap;
        margin-top: 74px;
    }

    .categories__item {
        width: 33%;
        margin-bottom: 91px;
    }

    .categories__item-title {
        margin-bottom: 31px;
        font-size: 20px;
        font-weight: bold;
        line-height: 24px;
    }

    .categories__item-list {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .categories__item-list-item {
        display: block;
        margin-bottom: 17px;
    }

    .categories__item-list-link {
        border-bottom: 1px solid rgba(42, 50, 70, 0.1);
        font-size: 16px;
        line-height: 19px;
        color: #2A3246;
        text-decoration: none;
        transition: all 0.3s ease-in-out;
    }

    .categories__item-list-link:hover {
        color: #FF0142;
        border-bottom-color: #FF0142;
    }
</style>