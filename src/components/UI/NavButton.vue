<template>
    <button class="butt" >
        <slot></slot>
    </button>
</template>

<script>

export default{
    name : "nav-button"
}
</script>

<style scoped >  
.butt {
    display: block;
  font-size: 1.15rem;
  padding: 6px 10px;
  background-color: #1994E9;
  color: beige;
  border-radius: 5px;
  cursor: pointer;
}
</style>