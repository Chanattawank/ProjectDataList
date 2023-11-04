<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Decongestant</span></h1>
        <p><button v-on:click="create">Create Decongestant</button></p>
        <div v-for="decongestant in decongestants" v-bind:key="decongestant.id">
            <div><a>ชื่อของยา : </a> <a1>{{ decongestant.name_thai }} {{ decongestant.name_eng }}</a1></div>
            <div><a>ขนาดบรรจุยา : </a> <a1>{{ decongestant.size }}</a1></div>
            <div><a>ราคายา : </a> <a1>{{ decongestant.price }}</a1></div>
            <p></p>
            <button v-on:click="navigateTo('/decongestant/' + decongestant.id)">ดูข้อมูลยา</button>
            <button v-on:click="navigateTo('/decongestant/edit/' + decongestant.id)">แก้ไขข้อมูลยา</button>
            <button v-on:click="deleteDecongestant(decongestant)">ลบข้อมูลยา</button>
            <hr>
        </div>
    </div>
</template>
<script>
import DecongestantService from '@/services/DecongestantService'
export default {
    data() {
        return {
            decongestants: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.decongestants = (await DecongestantService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'decongestant-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteDecongestant(decongestant) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await DecongestantService.delete(decongestant)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.decongestants = (await DecongestantService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    }
}
</script>
<style scoped></style>