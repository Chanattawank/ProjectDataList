<template>
    <div>
        <h1><span>Decongestant</span></h1>
        <div>id : <a1>{{ decongestant.id }}</a1></div>
        <div>ชื่อของยา : <a1>{{ decongestant.name_thai }} {{ decongestant.name_eng }}</a1></div>
        <div>ประเภทของยา : <a1>{{ decongestant.category }}</a1></div>
        <div>รายละเอียดของยา : <a1>{{ decongestant.detail }}</a1></div>
        <div>ขนาดบรรจุของยา : <a1>{{ decongestant.size }}</a1></div>
        <div>ราคายา : <a1>{{ decongestant.price }}</a1></div>
        <p></p>
        <div><button v-on:click="navigateTo('/decongestants')">กลับ</button></div>
        <hr>
    </div>
</template>
<script>
import DecongestantService from '@/services/DecongestantService'

export default {
    data() {
        return {
            decongestant:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let decongestantId = this.$route.params.decongestantId
            this.decongestant = (await DecongestantService.show(decongestantId)).data
            console.log(this.decongestant)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   