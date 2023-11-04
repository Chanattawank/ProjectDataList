<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Antipyretics</span></h1>
        <p><button v-on:click="create">Create Antipyretics</button></p>
        <div v-for="antipyretics in antipyreticss" v-bind:key="antipyretics.id">
            <div><a>ชื่อของยา : </a> <a1>{{ antipyretics.name_thai }} {{ antipyretics.name_eng }}</a1></div>
            <div><a>ขนาดบรรจุยา : </a> <a1>{{ antipyretics.size }}</a1></div>
            <div><a>ราคายา : </a> <a1>{{ antipyretics.price }}</a1></div>
            <p></p>
            <button v-on:click="navigateTo('/antipyretics/' + antipyretics.id)">ดูข้อมูลยา</button>
            <button v-on:click="navigateTo('/antipyretics/edit/' + antipyretics.id)">แก้ไขข้อมูลยา</button>
            <button v-on:click="deleteAntipyretics(antipyretics)">ลบข้อมูลยา</button>
            <hr>
        </div>
    </div>
</template>
<script>
import AntipyreticsService from '@/services/AntipyreticsService'
export default {
    data() {
        return {
            antipyreticss: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.antipyreticss = (await AntipyreticsService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'antipyretics-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteAntipyretics(antipyretics) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await AntipyreticsService.delete(antipyretics)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.antipyreticss = (await AntipyreticsService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    }
}
</script>
<style scoped></style>