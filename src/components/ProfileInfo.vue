<template>
    <div class="block-info">
        <h1>User information</h1>
        <div class="user-info" v-if="!signLoading" >
            <p>name : <span>{{ profile.name }}</span></p>
            <p>username : <span>{{ profile.username }}</span></p>
            <p>phone : <span>{{ profile.phone }}</span></p>
            <p>email : <span>{{ profile.email }}</span></p>
        </div>
        <div v-else>
            <sign-loader />
        </div>
    </div>
</template>


<script>


export default {
    name: "profile-info",

    props: {
        profile: {
            type: Object,
            required: true
        },
        signLoading : {
            type :Boolean,
            required : true
        }
    }
}
</script>


<style scoped >
h1 {
    margin-top: 40px;
    text-align: center;
    font-size: 3rem;
}
.user-info {
    margin-top: 20px;
    margin-left: 450px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
p {
    font-size: 1.5rem;
}
 p span {
    font-size: 1.8rem;
    color: brown;
 }
</style>