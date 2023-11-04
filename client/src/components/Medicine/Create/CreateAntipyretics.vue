<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create Antipyretics</span></h1>
                <form class="register-form" v-on:submit.prevent="createAntipyretics">
                    <input type="text" placeholder="ชื่อของยา *" v-model="antipyretics.name_thai" required>
                    <input type="text" placeholder="name" v-model="antipyretics.name_eng">
                    <input type="text" placeholder="ประเภทของยา" v-model="antipyretics.category">
                    <input type="text" placeholder="รายละเอียดของยา" v-model="antipyretics.detail">
                    <input type="text" placeholder="ขนาดบรรจุยา" v-model="antipyretics.size">
                    <input type="text" placeholder="ราคายา*" v-model="antipyretics.price" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/mas')">กลับ</button> </form>
            </div>
        </div>
    </div2>
</template>
<script>
import AntipyreticsService from '@/services/AntipyreticsService'
export default {
    data() {
        return {
            antipyretics: {
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
        async createAntipyretics() {
            try {
                await AntipyreticsService.post(this.antipyretics)
                this.$router.push({
                    name: 'mas'
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
   