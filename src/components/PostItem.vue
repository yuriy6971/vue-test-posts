<template>
    <div class="item-post">
        <div class="info">
            <p class="id">id : <span>{{ post.id }}</span></p>
            <p class="title">title : <span>{{ post.title }}</span></p>
        </div>
        <div>
            <my-button @click="$router.push(`/posts/${post.id}`)" >open</my-button>
        </div>

    </div>
</template>

<script>

export default {
    name: "post-item",

    props: {
        post: {
            type: Object,
            default: () => {}
        }
    },
   
}
</script>


<style scoped> 

.item-post {
      width: 100;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 20px;
      border: 2px solid green;
      border-radius: 6px;
      margin-bottom: 8px;
  }

  .id span {
      font-size: 1.2rem;
      color: tomato;
  }

  .title {
      font-size: 1.2rem;
  }

  .title span {
      font-size: 1.3rem;
      color: blueviolet;
  }
</style>