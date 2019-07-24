<template lang="pug">
    Card(
        :title='current.t'
        :text='current.f'
        :image='require("~/assets/img/card.png")'
        :info='"Обращаем ваше внимание, что существует ограничение на сумму единовременного гашения, она не должна превышать 15000 руб с комиссией."'
    )
</template>

<script>
    import data from '~/data/test';
    import Card from '~/components/Card';

    export default {
        components: {
            Card
        },
        computed: {
            current() {
                let current = {};
                const arr = Object.values(data);
                arr.forEach((item) => {
                    if (item.u === this.$route.params.id) {
                        current = item
                    }
                });

                return current;
            }
        },
    }
</script>