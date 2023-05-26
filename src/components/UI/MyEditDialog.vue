<template>
    <div class="edit" v-if="show" @click="hideEdit" >
    <div class="edit-content" @click.stop >
   <slot></slot>
    </div>
    </div>
</template>


<script>

export default {
    name : "my-edit-dialog",

    props : {
        show : {
            type :Boolean,
            default : false
        }
    },
    methods : {
        hideEdit(){
            this.$emit("update:show",false)
        }
    }
}
</script>

<style scoped >
.edit {
    position: fixed;
    top : 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0,0,0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;

}
.edit-content {
  background-color: white;
  border-radius: 12px;
  min-width: 50px;
  min-height: 50px;
  padding: 20px;
}
</style>