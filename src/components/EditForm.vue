<template>
    <form @submit.prevent >
       <h3>Create comment</h3>
       <!-- <label class="label" >Название поста <input type="text" v-bind:value="post.title" @input="post.title = $event.target.value" > </label>
       <label class="label" >Описание поста <input type="text" v-bind:value="post.body" @input = "post.body = $event.target.value" > </label> -->
   
       <label class="label" >comment title <my-input type="text" v-model="editPost.e_title" /> </label>
       <label class="label" >comment body <my-textarea v-model="editPost.e_body" /> </label>
       <my-button  @click="sendEdit" >send</my-button>
     </form>
   </template>
   
   
   <script>
   export default {
     name : "edit-form",

     data(){
       return {
         editPost : {
           e_title : this.title,
           e_body : this.body
         }
       }
     },

     props : {
        title : {
          type : String
        },
        body : {
          type : String
        }
     },

     methods : {
      sendEdit(){
        this.$emit("edit",this.editPost)
      
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