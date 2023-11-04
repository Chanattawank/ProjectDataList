<template>
    <div>
        <h1><span>Edit Antipyretics</span></h1>
        <form v-on:submit.prevent="editAntipyretics">
            <p>ชื่อของยา : <input type="text" v-model="antipyretics.name_thai"></p>
            <p>name : <input type="text" v-model="antipyretics.name_eng"></p>
            <p>ประเภทของยา : <input type="text" v-model="antipyretics.category"></p>
            <p>รายละเอียดของยา : <input type="text" v-model="antipyretics.detail"></p>
            <p>ขนาดบรรจุยา : <input type="text" v-model="antipyretics.size"></p>

            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อของยา : </a> <a1>{{ antipyretics.name_thai }}</a1></p>
            <p><a>name : </a> <a1>{{ antipyretics.name_eng }}</a1></p>
            <p><a>ประเภทของยา : </a> <a1>{{ antipyretics.category }}</a1></p>
            <p><a>รายละเอียดของยา : </a> <a1>{{ antipyretics.detail }}</a1></p>
            <p><a>ขนาดบรรจุยา : </a> <a1>{{ antipyretics.size }}</a1></p>

            <p></p>
        </div>

    </div>
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
            }
        }
    },
    methods: {
        async editAntipyretics() {
            try {
                await AntipyreticsService.put(this.antipyretics)
                this.$router.push({
                    name: 'antipyreticss'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let antipyreticsId = this.$route.params.antipyreticsId
            this.antipyretics = (await AntipyreticsService.show(antipyreticsId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>