<template>
    <div>
        <h1><span>Antacids</span></h1>
        <div>id : <a1>{{ antacids.id }}</a1></div>
        <div>ชื่อของยา : <a1>{{ antacids.name_thai }} {{ antacids.name_eng }}</a1></div>        
        <div>ประเภทของยา : <a1>{{ antacids.category }}</a1></div>
        <div>รายละเอียดของยา : <a1>{{ antacids.detail }}</a1></div>
        <div>ขนาดบรรจุยา : <a1>{{ antacids.size }}</a1></div>
        <div>ราคายา : <a1>{{ antacids.price }}</a1></div>
        <p></p>
        <button v-on:click="navigateTo('/antacidss')">กลับ</button>
        <hr>
    </div>
</template>
<script>
import AntacidsService from '@/services/AntacidsService'

export default {
    data() {
        return {
            antacids:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let antacidsId = this.$route.params.antacidsId
            this.antacids = (await AntacidsService.show(antacidsId)).data
            console.log(this.antacids)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   