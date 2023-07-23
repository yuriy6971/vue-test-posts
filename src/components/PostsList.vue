<template>
    <div class="posts-block">
        <div v-if="!loading" >
            <post-item v-for="itemPost in posts" :key="itemPost.id" :post="itemPost" />
        </div>
        <div v-else >
          <sign-loader />
        </div>
    </div>
</template>


<script>
import PostItem from "./PostItem.vue"
export default {
    name: 'posts-list',
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            default: () => []
        },
        loading: {
            type: Boolean
        }
    }
}
</script>


<style scoped >
.posts-block {
    width: 80%;
    margin: 30px auto;
}
</style>