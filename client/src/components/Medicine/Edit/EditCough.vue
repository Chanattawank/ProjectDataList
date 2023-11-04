<template>
    <div>
        <h1><span>Edit Cough</span></h1>
        <form v-on:submit.prevent="editCough">
            <p>ชื่อของยา : <input type="text" v-model="cough.name_thai"></p>
            <p>name : <input type="text" v-model="cough.name_eng"></p>
            <p>ประเภทของยา : <input type="text" v-model="cough.category"></p>
            <p>รายละเอียดของยา : <input type="text" v-model="cough.detail"></p>
            <p>ขนาดบรรจุยา : <input type="text" v-model="cough.size"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อของยา : </a> <a1>{{ cough.name_thai }}</a1></p>
            <p><a>name : </a> <a1>{{ cough.name_eng }}</a1></p>
            <p><a>ประเภทของยา : </a> <a1>{{ cough.category }}</a1></p>
            <p><a>รายละเอียดของยา : </a> <a1>{{ cough.detail }}</a1></p>
            <p><a>ขนาดบรรจุยา : </a> <a1>{{ cough.detail }}</a1></p>
            <p></p>
        </div>
    </div>
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
            }
        }
    },
    methods: {
        async editCough() {
            try {
                await CoughService.put(this.cough)
                this.$router.push({
                    name: 'coughs'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let coughId = this.$route.params.coughId
            this.cough = (await CoughService.show(coughId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>