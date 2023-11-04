<template>
    <div>
        <h1><span>Antipyretics</span></h1>
        <div>id : <a1>{{ antipyretics.id }}</a1></div>
        <div>ชื่อของยา : <a1>{{ antipyretics.name_thai }} {{ antipyretics.name_eng }}</a1></div>
        <div>ประเภทของยา : <a1>{{ antipyretics.category }}</a1></div>
        <div>รายละเอียดของยา : <a1>{{ antipyretics.detail }}</a1></div>
        <div>ขนาดบรรจุยา : <a1>{{ antipyretics.size }}</a1></div>
        <div>ราคายา : <a1>{{ antipyretics.price }}</a1></div>
        <p></p>
        <div><button v-on:click="navigateTo('/mas')">กลับ</button></div>
        <hr>
    </div>
</template>
<script>
import AntipyreticsService from '@/services/AntipyreticsService'

export default {
    data() {
        return {
            antipyretics:null
        }
    },
    methods:{
        navigateTo(route){
            this.$router.push(route)
        }
    },
    async created() {
        try{
            let antipyreticsId = this.$route.params.antipyreticsId
            this.antipyretics = (await AntipyreticsService.show(antipyreticsId)).data
            console.log(this.antipyretics)
        }catch (err) {
            console.log (err)
        }
    }
}
</script>
<style scoped>
</style>
   