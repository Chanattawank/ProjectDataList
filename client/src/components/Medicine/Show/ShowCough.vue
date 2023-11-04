<template>
    <div>
        <h1><span>Cough</span></h1>
        <div>id : <a1>{{ cough.id }}</a1></div>
        <div>ชื่อของยา : <a1>{{ cough.name_thai }} {{ cough.name_eng }}</a1></div>
        <div>ประเภทของยา : <a1>{{ cough.category }}</a1></div>
        <div>รายละเอียดของยา : <a1>{{ cough.detail }}</a1></div>
        <div>ขนาดบรรจุยา : <a1>{{ cough.size }}</a1></div>
        <div>ราคายา : <a1>{{ cough.price }}</a1></div>
        <p></p>
        <div><button v-on:click="navigateTo('/coughs')">กลับ</button></div>
        <hr>
    </div>
</template>
<script>
import CoughService from '@/services/CoughService'

export default {
    data() {
        return {
            cough:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let coughId = this.$route.params.coughId
            this.cough = (await CoughService.show(coughId)).data
            console.log(this.cough)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   