<template>
    <div>
        <div><button1 v-on:click="navigateTo('/index')">กลับ</button1></div>
        <h1><span>Antacids</span></h1>
        <p><button v-on:click="create">Create Antacids</button></p>
        <div v-for="antacids in antacidss" v-bind:key="antacids.id">
            <div><a>ชื่อของยา : </a> <a1>{{ antacids.name_thai }} {{ antacids.name_eng }}</a1></div>
            <div><a>ขนาดบรรจุยา : </a> <a1>{{ antacids.size }}</a1></div>
            <div><a>ราคายา : </a> <a1>{{ antacids.price }}</a1></div>
            <P></P>
            <button v-on:click="navigateTo('/antacids/' + antacids.id)">ดูข้อมูลยา</button>
            <button v-on:click="navigateTo('/antacids/edit/' + antacids.id)">แก้ไขข้อมูลยา</button>
            <button v-on:click="deleteAntacids(antacids)">ลบข้อมูลยา</button>
            <hr>
        </div>
    </div>
</template>
<script>
import AntacidsService from '@/services/AntacidsService'
export default {
    data() {
        return {
            antacidss: []
        }
    },
    // แสดงข้อมูล
    async created() {
        this.antacidss = (await AntacidsService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        }
    },
    methods: {
        // เข้าหน้าสร้าง User ใหม่
        create() {
            this.$router.push({ name: 'antacids-create' })
        },
        navigateTo(route) {
            this.$router.push(route)
        },
        // ลบข้อมูล
        async deleteAntacids(antacids) {
            let result = confirm("want to delete?")
            if (result) {
                try {
                    await AntacidsService.delete(antacids)
                    this.refreshData()
                } catch (err) {
                    console.log(err)
                }
            }
        },
        async refreshData() {
            this.antacidss = (await AntacidsService.index()).data
        },
    },


    catch(error) {
        console.log(error)
    },
}
</script>
<style scoped></style>