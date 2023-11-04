<template>
    <div>
        <h1><span>Edit Antacids</span></h1>
        <form v-on:submit.prevent="editAntacids">
            <p>ชื่อของยา : <input type="text" v-model="antacids.name_thai"></p>
            <p>name : <input type="text" v-model="antacids.name_eng"></p>
            <p>ประเภทของยา : <input type="text" v-model="antacids.category"></p>
            <p>รายละเอียดของยา : <input type="text" v-model="antacids.detail"></p>
            <p>ขนาดบรรจุยา : <input type="text" v-model="antacids.size"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อของยา : </a> <a1>{{ antacids.name_thai }}</a1></p>
            <p><a>name : </a> <a1>{{ antacids.name_eng }}</a1></p>
            <p><a>ประเภทของยา : </a> <a1>{{ antacids.category }}</a1></p>
            <p><a>รายละเอียดของยา : </a> <a1>{{ antacids.detail }}</a1></p>
            <p><a>ขนาดบรรจุยา : </a> <a1>{{ antacids.size }}</a1></p>
            <p></p>
        </div>

    </div>
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
            }
        }
    },
    methods: {
        async editAntacids() {
            try {
                await AntacidsService.put(this.antacids)
                this.$router.push({
                    name: 'antacidss'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let antacidsId = this.$route.params.antacidsId
            this.antacids = (await AntacidsService.show(antacidsId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>