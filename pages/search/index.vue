<template lang="pug">
    .search(v-if='searchResults.length > 0')
        .search__cards
            CategoryCard(
                v-for='category in searchResults'
                :key='category.u'
                :title='category.t'
                :text='category.d'
                :link='`/search/${category.u}`'
            )
</template>

<script>
    import { mapGetters } from 'vuex';
    import CategoryCard from '~/components/CategoryCard';

    export default {
        computed: {
            ...mapGetters({
                searchResults: 'getSearchResults'
            })
        },
        components: {
            CategoryCard
        }
    }
</script>

<style lang="postcss" scoped>
    .search__cards {
        padding-top: 52px;
    }
</style>