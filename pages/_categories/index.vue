<template lang="pug">
    .category
        .category__back(@click='goBack') Назад
        .category__title Нарушения при погашении
        .category__cards
            CategoryCard(
                v-for='category in categories'
                :key='category.id'
                :title='category.title'
                :text='category.text'
                :link='category.link'
            )
</template>

<script>
    import CategoryCard from '~/components/CategoryCard';

    export default {
        name: 'CategoryCards',
        data() {
            return {
               categories: [
                   {
                       id: 1,
                       title: 'Я просрочил платеж',
                       text: 'Подайте заявку онлайн, получите предварительное одобрение по SMS и приходите за деньгами в ближайший офис «Центрофинанс».' +
                           ' При себе необходимо иметь паспорт (пенсионерам и военнослужащим...',
                       link: '/category/1'

                   },
                   {
                       id: 2,
                       title: 'Какие последствия?',
                       text: 'Подайте заявку онлайн, получите предварительное одобрение по SMS и приходите за деньгами в ближайший офис «Центрофинанс».' +
                           ' При себе необходимо иметь паспорт (пенсионерам и военнослужащим...',
                       link: '/category/2'

                   },
                   {
                       id: 3,
                       title: 'За мной уже выехали?',
                       text: 'Подайте заявку онлайн, получите предварительное одобрение по SMS и приходите за деньгами в ближайший офис «Центрофинанс».' +
                           ' При себе необходимо иметь паспорт (пенсионерам и военнослужащим...',
                       link: '/category/3'

                   }
               ]
            }
        },
        components: {
            CategoryCard
        },
        methods: {
            goBack() {
                this.$router.back();
            }
        }
    }
</script>

<style lang="postcss" scoped>
    .category {
        padding-top: 21px;
    }

    .category__back {
        position: relative;
        margin-bottom: 14px;
        padding-left: 20px;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        color: rgba(42, 50, 70, 0.5);
        cursor: pointer;
        text-decoration: underline;
    }

    .category__back:before {
        content: '';
        position: absolute;
        left: 0;
        top: 3px;
        width: 12px;
        height: 8px;
        background-image: url('../../assets/img/back.svg');
    }

    .category__title {
        padding-bottom: 27px;
        border-bottom: 1px solid rgba(42, 50, 70, 0.1);
        font-size: 24px;
        font-weight: bold;
        line-height: 29px;
    }

    .category__cards {
        padding-top: 52px;
    }
</style>