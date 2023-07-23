<template>
    <div>
    <profile-info :profile="profile" :signLoading="isUserInfoLoading" />
    </div>
</template>


<script>
import ProfileInfo from '@/components/ProfileInfo.vue'
import axios from 'axios'
export default {
    components : {ProfileInfo},
    name : "ProfilePage",
    data(){
        return {
            profile : {},
            isUserInfoLoading : false
        }
    },
   
    methods : {
     getUserInfo(){
       this.isUserInfoLoading = true    
      axios.get("https://jsonplaceholder.typicode.com/users/4")
      .then(response => {
        console.log(response)
        this.profile = response.data
        this.isUserInfoLoading = false
      })
      .catch(error => {
                console.error(error)
              })
     }
    },
   mounted () {
      this.getUserInfo()
    }


}
</script>


<style scoped >


</style>