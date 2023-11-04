<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create Decongestant</span></h1>
                <form class="register-form" v-on:submit.prevent="createDecongestant">
                    <input type="text" placeholder="ชื่อของยา*" v-model="decongestant.name_thai" required>
                    <input type="text" placeholder="name" v-model="decongestant.name_eng">
                    <input type="text" placeholder="ประเภทของยา" v-model="decongestant.category">
                    <input type="text" placeholder="รายละเอียดของยา" v-model="decongestant.detail">
                    <input type="text" placeholder="ขนาดบรรจุยา" v-model="decongestant.size">
                    <input type="text" placeholder="ราคายา*" v-model="decongestant.price" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/decongestants')">กลับ</button> </form>
            </div>
        </div>
    </div2>
</template>
<script>
import DecongestantService from '@/services/DecongestantService'
export default {
    data() {
        return {
            decongestant: {
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
        async createDecongestant() {
            try {
                await DecongestantService.post(this.decongestant)
                this.$router.push({
                    name: 'decongestants'
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