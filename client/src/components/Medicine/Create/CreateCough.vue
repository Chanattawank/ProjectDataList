<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create Cough</span></h1>
                <form class="register-form" v-on:submit.prevent="createCough">
                    <input type="text" placeholder="ชื่อของยา *" v-model="cough.name_thai" required>
                    <input type="text" placeholder="name" v-model="cough.name_eng">
                    <input type="text" placeholder="ประเภทของยา" v-model="cough.category">
                    <input type="text" placeholder="รายละเอียดของยา" v-model="cough.detail">
                    <input type="text" placeholder="ขนาดบรรจุยา" v-model="cough.size">
                    <input type="text" placeholder="ราคายา*" v-model="cough.price" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/coughs')">กลับ</button> </form>
            </div>
        </div>
    </div2>
</template>
<script>
import CoughService from '@/services/CoughService'
export default {
    data() {
        return {
            cough: {
                name_thai: '',
                name_eng: '',
                category: '',
                detail: '',
                size: '',
                price: '',
            }
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        async createCough() {
            try {
                await CoughService.post(this.cough)
                this.$router.push({
                    name: 'coughs'
                })
            } catch (err) {
                console.log(err)
            }
        },
        navigateTo(route){
            this.$router.push(route)
        }
    },
     
}
</script>
<style scoped></style>
   