<template>
    <form @submit.prevent >
       <h3>Create comment</h3>
       <!-- <label class="label" >Название поста <input type="text" v-bind:value="post.title" @input="post.title = $event.target.value" > </label>
       <label class="label" >Описание поста <input type="text" v-bind:value="post.body" @input = "post.body = $event.target.value" > </label> -->
   
       <label class="label" >comment title <my-input type="text" v-model="comment.title" /> </label>
       <label class="label" >comment body <my-textarea v-model="comment.body" /> </label>
       <my-button  @click="createComment" >Add comment</my-button>
     </form>
   </template>
   
   
   <script>
   export default {
     name : "comment-form",

     data(){
       return {
         comment : {
           title : "",
           body : ""
         }
       }
     },
     methods : {
      createComment(){
        
      if(this.comment.title.length && this.comment.body.length) {
        this.$emit("create",this.comment)
      }
      }
     }
        
    }     
     
  
   </script>
   
   
   <style scoped >
   form h3 {
     margin-bottom: 10px;
     padding-left: 350px;
   }
   .label {
     display: block;
     margin-bottom: 20px;
     font-size: 1.5rem;
   }
   
   </style>