<template>
    <textarea  class="area" name="body"  cols="60" rows="10"
    :value="modelValue" @input="updateText"
    ></textarea>
</template>


<script>

export default {
    name :"my-textarea",
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
.area {
    font-size: 1.5rem;
    width: 40%;

}

</style>