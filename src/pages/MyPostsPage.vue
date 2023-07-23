<template>
    <div class="my-posts">
        <h2>List of my posts</h2>
        <div>
            <my-posts-list :myPosts="myPosts" :isMyPostsLoading="isMyPostsLoading"  @remove="removePost" />
        </div>
        <sign-loader v-if="isMyPostsLoading" />
    </div>
</template>


<script>
import axios from 'axios';
import MyPostsList from "../components/MyPostsList.vue"
export default {
    name: "my_posts-page",
    components: { MyPostsList },
    data() {
        return {
            myPosts: [],
            isMyPostsLoading: false
        }
    },
     methods : {
       removePost(post){
        this.isMyPostsLoading = true
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${post.id}`)
        .then (response => {
            console.log(response.status)
            if(response.status === 200){
                this.isMyPostsLoading = false
             this.myPosts = this.myPosts.filter(item => item.id !== post.id)
            }
        })

       }
     },
    mounted() {
        this.isMyPostsLoading = true
        axios.get("https://jsonplaceholder.typicode.com/posts/?userId=4")
            .then(response => {
                console.log(response)
                this.myPosts = response.data
                this.isMyPostsLoading = false
            })
            .catch(error => {
                console.error(error)
              })
    }


}
</script>


<style scoped >
.my-posts h2 {
    font-size: 2rem;
    color: crimson;
    text-align: center;
    margin-top: 20px;
}
</style>