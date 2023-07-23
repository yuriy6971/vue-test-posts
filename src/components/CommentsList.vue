<template>
    <div class="comments-block" >
       <comments-item v-for="itemComment in comments" :key="itemComment.id" :comment="itemComment" />
    </div>
</template>

<script>
import CommentsItem from './CommentsItem.vue';


export default {
    name : "comments-list",
    components : {CommentsItem},

    props : {
        comments : {
            type: Array,
            default : () => []
        }
    }
}
</script>


<style scoped >

</style>