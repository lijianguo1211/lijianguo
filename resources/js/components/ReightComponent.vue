<template>
    <aside class="col-md-4 blog-sidebar">
        <div class="p-3 mb-3 bg-light rounded">
            <h4>每日一句</h4>
            <p><em>&nbsp&nbsp</em></p>
        </div>

        <div class="p-3">
            <h4 class="font-italic">{{ publish_title }}</h4>
            <ol class="list-unstyled mb-0">
                <li>
                    <a href="">

                    </a>
                </li>
            </ol>
        </div>

        <div class="p-3">
            <h4 class="font-italic">{{ recommend_title }}</h4>
            <ol class="list-unstyled">
                <li>
                    <a href="">

                    </a>
                </li>
            </ol>
        </div>

        <div class="p-3">
            <h4 class="font-italic">{{ links_title }}</h4>
            <ol class="list-unstyled">
                <li v-for="item in links">
                    <a :href="item.url">
                        {{ item.title }}
                    </a>
                </li>
            </ol>
        </div>
    </aside>

</template>

<script>
    export default {
        name: "ReightComponent",
        props: ['links'],
        data() {
            return {
                one_day: '每日一句',
                one_day_title: '每日一句',
                one_day_content: '每日一句',
                publish_title: '发布日期',
                publish:[
                    {

                    }
                ],
                recommend_title: '推荐阅读',
                recommend: [
                    {

                    }
                ],
                links_title: "飞机票",
                links:[

                ]
            }
        }
    }
</script>

<style scoped>

</style>
