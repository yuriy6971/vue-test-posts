<template>
    <div>
        <div v-if="!loading">
            <my-posts-item v-for="itemPost in myPosts" :key="itemPost.id" :post="itemPost" @remove="removePost" />
        </div>
        <div v-else>
            <sign-loader />
        </div>
    </div>
</template>

<script>
import MyPostsItem from "../components/MyPostsItem.vue"
export default {
    name: "my-posts-list",
    components: {MyPostsItem},

    props: {
        myPosts: {
            type: Array,
            default: () => []
        },
        isMyPostsLoading: {
            type: Boolean
        }
    },

    methods : {
        removePost(post){
             this.$emit("remove", post)
        }
    }
}
</script>

<style scoped ></style>