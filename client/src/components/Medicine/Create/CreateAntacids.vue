<template>
    <div2 style="display:flex; align-items:center; justify-content:center;">
        <div class="page">
            <div class="form1">
                <h1><span>Create Antacids</span></h1>
                <form class="register-form" v-on:submit.prevent="createAntacids">
                    <input type="text" placeholder="ชื่อของยา *" v-model="antacids.name_thai" required>
                    <input type="text" placeholder="name" v-model="antacids.name_eng">
                    <input type="text" placeholder="ประเภทของยา" v-model="antacids.category">
                    <input type="text" placeholder="รายละเอียดของยา" v-model="antacids.detail">
                    <input type="text" placeholder="ขนาดบรรจุยา" v-model="antacids.size">
                    <input type="text" placeholder="ราคายา *" v-model="antacids.price" required>
                    <button type="submit">Create</button>
                    <button v-on:click="navigateTo('/antacidss')">กลับ</button>
                </form>
            </div>
        </div>
    </div2>
</template>
<script>
import AntacidsService from '@/services/AntacidsService'
export default {
    data() {
        return {
            antacids: {
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
        async createAntacids() {
            try {
                await AntacidsService.post(this.antacids)
                this.$router.push({
                    name: 'antacidss'
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
   