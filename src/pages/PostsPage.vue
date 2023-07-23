<template>
  <div class="posts-page">
    <h1>Page with posts</h1>
    <my-select class="select" v-model="selectedSort" :options="sortOptions" />
    <posts-list :posts="posts" :loading="isPostsLoading" />
    <my-pagination  :totalPages="totalPages"  @changePage="setPage" />
  </div>
</template>


<script>
import PostsList from "../components/PostsList.vue"
import axios from 'axios';
export default {
  name: "post-page",
  components: { PostsList },
  data() {
    return {
      posts: [],
      page: 1,
      limit: 5,
      totalPages : 0,
      isPostsLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "sorted by title" },
        { value: "increasing", name: "sorted by increasing id" },
        { value: "decreasing", name: "sorted by decreasing id" }
      ]

    }
  },

  methods: {
    getPosts() {
      this.isPostsLoading = true
      axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _page: this.page,
          _limit: this.limit
        }
      })
        .then(response => {
          this.posts = response.data
          this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
          console.log(response)
          this.isPostsLoading = false
        })
        .catch(error => {
                console.error(error)
              })
      
    
    },
     setPage(newPage){
       this.page = newPage
     }
  },

  mounted() {
    this.getPosts()
  },

 watch : {
  selectedSort(newValue){
  if(newValue === "title") {
    this.posts.sort((post1, post2) => post1.title?.localeCompare(post2.title))
  }
  else if (newValue ==="increasing"){
    this.posts.sort((post1,post2) => post1.id - post2.id)
  }
  else if(newValue == "decreasing") {
    this.posts.sort((post1,post2) => post2.id - post1.id)
  }

  },
  page(newPage){
    this.isPostsLoading = true
      axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _page: newPage,
          _limit: this.limit
        }
      })
        .then(response => {
          this.posts = response.data
          this.isPostsLoading = false
        })
        .catch(error => {
                console.error(error)
              })
  }
 }




  }
</script>


<style scoped >
.posts-page h1 {
  margin-top: 20px;
  text-align: center;
  font-size: 1.8rem;
}

.select {
  display: block;
  margin-left: auto;
  margin-right: 150px;
  font-size: 1.2rem;
}
</style>