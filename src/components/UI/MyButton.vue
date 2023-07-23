<template>
    <button class="butt" >
        <slot></slot>
    </button>
</template>


<script>

export default {
    name : "my-button"
}
</script>

<style scoped >
.butt {
    font-size: 1.1rem;
    background-color: green;
    color: white;
    padding: 4px 10px;
    border-radius: 5px;
    cursor: pointer;
}

</style>