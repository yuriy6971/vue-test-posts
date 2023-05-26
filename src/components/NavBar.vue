<template>
    <div class="navbar">
        <nav-button @click="$router.push('/')" >Test task</nav-button>
        <div class="block-butt" >
            <nav-button @click="$router.push('/profile')" >My Profile</nav-button>
            <nav-button  @click="$router.push('/posts')" style="margin-left: 15px;" >Posts</nav-button>
            <nav-button  @click="$router.push('/my_posts')" style="margin-left: 15px;" >My Posts</nav-button>
        </div>

    </div>
</template>


<script>

export default {

    name: "nav-bar"
}
</script>


<style scoped >
.navbar {
    height: 60px;
    background-color:#9C8A45;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
}
.block-butt {
    display: flex;
}
 
</style>