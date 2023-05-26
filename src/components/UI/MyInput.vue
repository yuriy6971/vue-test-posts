<template>
    <input class="input" type="text" :value="modelValue" @input="updateText" >
</template>


<script>

export default {
    name :"my-input",
    props : {
        modelValue : [String,Number]
    },
    methods : {
        updateText(event){
            this.$emit("update:modelValue",event.target.value)
        }
    }
}
</script>

<style scoped >
.input {
    font-size: 1.5rem;
    width: 40%;

}

</style>