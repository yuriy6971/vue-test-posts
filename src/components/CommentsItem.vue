<template>
    <div class="comment-block" >
     <div class="comment-info">
     <p class="title" >comment title : {{ comment.name }}</p>
     <p class="body">comment body : <span>{{ comment.body }}</span></p>
     <p class="email" >commenter's email : <span>{{ comment.email }}</span></p>
     </div>
    </div>
</template>


<script>

export default {
    name : "comments-item",
    props : {
        comment : {
            type : Object,
            default : () => {}

            
        }
    }
}
</script>


<style scoped >
.comment-block {
    margin-bottom: 20px;
    border: 2px solid green;
}
.body span {
    font-size: 1.2rem;
    font-style: italic;
}
.email span {
    color: blue;
}
</style>