<template lang="pug">
    .search-bar
        input.search-bar__input(
            type='text'
            v-model='search'
            @input='onChange'
            placeholder='Введите вопрос'
        )
        button.search-bar__button(@click='searchData') Поиск
        .search-bar__success(v-if='results.length > 0')
            .search-bar__cancel(@click='searchCancel') отменить поиск
            .search-bar__success-title Результаты поиска  «{{ search }}»‎
            .search-bar__success-count Найдено {{ results.length }} ответа
        .search-bar__failed(v-if='results.length === 0 && show')
            .search-bar__cancel(@click='searchCancel') отменить поиск
            .search-bar__failed-title К сожалению, по вашему запросу «{{ search }}» ничего не найдено‎
            .search-bar__failed-text
                span Вы можете задать вопрос на
                a(href="mailto:info@centrofinans.ru ") info@centrofinans.ru
                br
                span или позвонить нам на горячию линию
                a(href="tel:+78007773737") 8 800 777 37 37

</template>

<script>
    import data from '../data/test';

    export default {
        name: 'SearchBar',
        data() {
            return {
                search: '',
                results: [],
                show: false,
            }
        },
        methods: {
            onChange() {
                this.show = false;
            },
            searchData() {
                const arr = Object.values(data);
                const results = [];
                arr.forEach((item) => {
                    if (item.t.indexOf(this.search) > 0 || item.d.indexOf(this.search) > 0 || item.f.indexOf(this.search) > 0) {
                        results.push(item);
                    }
                });
                this.results = results;
                this.show = true;
                this.$store.dispatch('setSearchResults', results);
                this.$router.push('/search');
            },
            searchCancel() {
                this.results = [];
                this.search = '';
                this.show = false;
                this.$store.dispatch('setSearchResults', []);
                this.$router.push('/');
            }

        }
    }
</script>

<style lang="postcss" scoped>
    .search-bar__input {
        width: 325px;
        padding: 13px 18px;
        border: 1px solid rgba(42, 50, 70, 0.28);
        border-right: none;
        border-radius: 4px 0 0 4px;
        font-size: 16px;
        line-height: 19px;
        outline: none;
    }

    .search-bar__button {
        padding: 14px 37px;
        background: #FF0142;
        border: none;
        border-radius: 0 4px 4px 0;
        font-size: 16px;
        line-height: 19px;
        color: #FFFFFF;
        outline: none;
        cursor: pointer;
        transition: opacity 0.5s ease-in-out;
    }

    .search-bar__button:hover {
        opacity: 0.6;
    }

    .search-bar__success {
        padding-bottom: 7px;
        border-bottom: 1px solid rgba(42, 50, 70, 0.1);
    }

    .search-bar__cancel {
        position: relative;
        margin-top: 11px;
        padding-left: 15px;
        font-size: 14px;
        line-height: 16px;
        color: rgba(42, 50, 70, 0.5);
        text-decoration: underline;
        cursor: pointer;
    }

    .search-bar__cancel:before {
        content: '';
        position: absolute;
        left: 0;
        top: 4px;
        width: 9px;
        height: 9px;
        background-image: url('../assets/img/cancel.svg');
    }

    .search-bar__success-title {
        margin-top: 19px;
        margin-bottom: 3px;
        font-size: 24px;
        font-weight: bold;
        line-height: 29px;
    }

    .search-bar__success-count {
        font-size: 14px;
        line-height: 17px;
        color: rgba(42, 50, 70, 0.5);
    }

    .search-bar__failed {
        padding-bottom: 65px;
        border-bottom: 1px solid rgba(42, 50, 70, 0.1);
    }

    .search-bar__failed-title {
        width: 660px;
        margin-top: 58px;
        margin-bottom: 11px;
        font-size: 24px;
        line-height: 29px;
    }

    .search-bar__failed-text {
        font-size: 14px;
    }

    .search-bar__failed-text a {
        color: #FF0142;
    }
</style>