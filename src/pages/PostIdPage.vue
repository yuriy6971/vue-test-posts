<template>
    <div>
        <div class="post-block" >
            
            <h2 class="title-page">This is the post page with Id - <span>{{ $route.params.id }}</span></h2>
            <h3 class="author">Author : <span>{{ author }}</span></h3>
            <p class="post-title">Post title : <span>{{ postTitle }}</span> </p>
            <p class="post-text">Post text : <span>{{ postText }}</span></p>
        </div>

        <div class="comments-block">
            <div class="btns">
                <my-button class="write" @click="showDialog">
                    write comment
                </my-button>
                <my-button v-if="author === 'Patricia Lebsack'" class="edit-post" @click="showEdit" >
                    editing
                </my-button>
                <my-button class="butt-comments" @click="showListComments">
                    List comments
                </my-button>
                <my-button class="hide" @click="() => { showComments = false }">
                    hide comments
                </my-button>
            </div>

            <div class="comments" v-if="showComments">
                <h3>Comments on this posts :</h3>
                <comments-list :comments="comments" />
            </div>

        </div>
        <my-dialog v-model:show="dialogVisible">
            <comment-form @create="createComment" />
        </my-dialog>
        <my-edit-dialog  v-model:show="editVisible" >
            <edit-form :title="postTitle" :body="postText" @edit="sendEditComment" />
        </my-edit-dialog>
    </div>
</template>


<script>
import CommentsList from "../components/CommentsList.vue"
import CommentForm from "@/components/CommentForm.vue";
import EditForm from "@/components/EditForm.vue";
import axios from 'axios';
export default {
    name: "postId-page",
    components: { CommentsList, CommentForm, EditForm },

    data() {
        return {
            postTitle: "",
            postText: "",
            userId: null,
            author: "",
            comments: [],
            showComments: false,
            dialogVisible: false,
            editVisible : false,
            myEmail: "",
            newComment : {}
            
        }
    },
    methods: {
        getComments() {
            if (this.comments.length === 0) {
                axios.get(`https://jsonplaceholder.typicode.com/comments/?postId=${this.$route.params.id}`)
                    .then(response => {
                        console.log(response)
                        this.comments = response.data

                    })
            }
            
        },

        showListComments(){
           this.getComments()
           this.showComments = true
        },


        getPostBody() {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`)
                .then(response => {
                    console.log(response)
                    this.postTitle = response.data.title
                    this.postText = response.data.body,
                    this.userId = response.data.userId
                })
                .catch(error => {
                    console.error(error)
                })
        },
        getEmail() {
            axios.get("https://jsonplaceholder.typicode.com/users/4")
                .then(response => {
                    this.myEmail = response.data.email,
                    this.myName = response.data.name
                })
              .catch(error => {
                console.error(error)
              })
        },

        showDialog() {
            this.dialogVisible = true
        },
        showEdit(){
          this.editVisible = true
        },
        createComment(comment) {
            if(!this.comments.length){
                this.getComments()
            }
            
            axios.post("https://jsonplaceholder.typicode.com/comments", {
                postId : this.$route.params.id,
                name : comment.title,
                email : this.myEmail,
                body : comment.body

            }, {
                'Content-type': 'application/json; charset=UTF-8',
            })
                .then(response => {
                    if (response.status < 300){
                        console.log(response.status)
                    this.newComment = {
                        postId : this.$route.params.id,
                name : comment.title,
                email : this.myEmail,
                body : comment.body
                    }
                    this.comments = [ this.newComment, ...this.comments]
                    this.showComments = true
                    }
              
                })
                .catch(error => {
                console.error(error)
              })

            setTimeout(() => {
                this.dialogVisible = false
            }, 400)
        },
     sendEditComment(editPost){
        axios.put(`https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`, {
                title: editPost.e_title,
                body: editPost.e_body,

            }, {
                'Content-type': 'application/json; charset=UTF-8',
            })
                .then(response => {
                    if(response.status === 200){
                        console.log(response.status)
                        //this.getPostBody() // при действенном ответе сервера.
                        this.postTitle = editPost.e_title
                        this.postText = editPost.e_body
                    }
                   
                })
                .catch(error => {
                console.error(error)
              })

            setTimeout(() => {
                this.editVisible = false
            }, 400)
     }
    },

    mounted() {
        this.getPostBody()
        this.getEmail()


    },

    watch: {
        userId(newId) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${newId}`)
                .then(response => {
                    this.author = response.data.name
                })
                .catch(error => {
                console.error(error)
              })
        }
    }
}
</script>


<style scoped >
.post-block {
    margin-bottom: 30px;
}

.title-page {
    margin-top: 20px;
    font-size: 1.7rem;
    text-align: center;
}

.title-page span {
    font-size: 2.2rem;
    color: red;
}

p {
    font-size: 1.3rem;
}

.post-title {
    margin-bottom: 15px;
}

.author span {
    font-size: 1.3rem;
    color: brown;
}

.post-title span {
    font-size: 1.6rem;
}

.post-text span {
    font-size: 1.5rem;
    color: green;
    font-style: italic;
}


.btns {
    display: flex;
    padding-right: 120px;
    justify-content: flex-end;
}

.hide {
    margin-left: 40px;
    background-color: tomato;
}

.write {
    margin-right: 15px;
    background-color: cornflowerblue;
}
.edit-post {
    margin-right: 500px;
    background-color: darkviolet;
}
.comments h3 {
    text-align: center;
    margin-bottom: 10px;
}
</style>