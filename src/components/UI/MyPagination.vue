<template>
    <div class="pagination" >
        <button class="butt-move" :disabled="isPrevDisabled" @click="decreasePortionCount" >prev</button>
        <div class="numbers-page" > 
            <p :class="{'page-number' : 1, 'current-page' : currentPage === numberPage}" 
      v-for="numberPage in pagesArray" :key="numberPage"  
      @click="(() => changePage(numberPage))"  
        >{{ numberPage }} </p>
        </div>
        <button class="butt-move" :disabled="isNextDisabled"  @click="increasePortionNumber" >next</button>
    </div>
</template>


<script>

export default {
    name : "my-pagination",
    data(){
        return {
            currentPage : 1,
            portionSize : 5,
            portionNumber : 1,
            pages : [],
            isPrevDisabled : true,
            isNextDisabled : false
            
        }
    },

    props : {
        totalPages : {
            type : Number,
        }
    },
    methods : {
        changePage(numberPage){
            this.currentPage = numberPage
            this.$emit("changePage",numberPage)
        },
        increasePortionNumber(){
            this.portionNumber = this.portionNumber + 1
            this.isPrevDisabled = false
            if(this.portionNumber === this.portionSize - 1) this.isNextDisabled = true
        },
        decreasePortionCount(){
            this.portionNumber = this.portionNumber - 1
            this.isNextDisabled = false
            if(this.portionNumber === 1) this.isPrevDisabled = true
        }
    },
    computed : {
        portionCount(){
            return Math.ceil(this.totalPages / this.portionSize)
        },
       leftPortionNumber(){
        return (this.portionNumber - 1) * this.portionSize + 1
       },
       rightPortionNumber(){
        return this.portionNumber * this.portionSize
       },
       pagesArray(){
        const pages = []
        for(let i = 1; i <= this.totalPages;i++){
            pages.push(i)
        }
        return pages.filter(page => page >= this.leftPortionNumber && page <= this.rightPortionNumber)
       }
    },
  
}
</script>


<style scoped >

.pagination {
     display: flex;
     justify-content: center;
     align-items: center; 
    margin-top: 10px;
   
}
.numbers-page {
    display: flex;
    margin: 0 15px;
}
.page-number {
    font-size: 1.4rem;
    margin-right: 8px;
    padding: 5px 10px;
    border: 1px solid ;
    border-radius: 50%;
    cursor: pointer;
}
.current-page {
    background-color: tomato;
    color: white;
}
.butt-move {
    font-size: 1.4rem;
    background-color: inherit;
    border: none;
    cursor: pointer;

}
</style>