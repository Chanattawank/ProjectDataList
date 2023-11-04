<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Cough</span></h1>
        <p><button v-on:click="create">Create Cough</button></p>
        <div v-for="cough in coughs" v-bind:key="cough.id">
            <div><a>ชื่อของยา : </a> <a1>{{ cough.name_thai }} {{ cough.name_eng }}</a1></div>
            <div><a>ขนาดบรรจุยา : </a> <a1>{{ cough.size }}</a1></div>
            <div><a>ราคายา : </a> <a1>{{ cough.price }}</a1></div>
            <p></p>
            <button v-on:click="navigateTo('/cough/' + cough.id)">ดูข้อมูลยา</button>
            <button v-on:click="navigateTo('/cough/edit/' + cough.id)">แก้ไขข้อมูลยา</button>
            <button v-on:click="deleteCough(cough)">ลบข้อมูลยา</button>
            <hr>
        </div>
    </div>
</template>
<script>
import CoughService from '@/services/CoughService'
export default {
    data() {
        return {
            coughs: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.coughs = (await CoughService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'cough-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteCough(cough) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await CoughService.delete(cough)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.coughs = (await CoughService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    }
}
</script>
<style scoped></style>