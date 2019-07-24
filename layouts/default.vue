<template lang="pug">
    .layout
        Header
        .container
            FaqPromo
            SearchBar
            nuxt
            Categories
</template>

<script>
    import Header from '~/components/Header';
    import Categories from '~/components/Categories';
    import FaqPromo from '~/components/FaqPromo';
    import SearchBar from '~/components/SearchBar';

    export default {
        components: {
            Header,
            FaqPromo,
            SearchBar,
            Categories
        },
    }
</script>

<style lang="postcss">
    .layout {
        height: 100%;
        background-color: #F9FAFB;
    }
    .container {
        width: 1200px;
        margin: 0 auto;
        padding: 46px 55px;
        background-color: #ffffff;
    }
</style>