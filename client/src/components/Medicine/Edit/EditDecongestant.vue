<template>
    <div>
        <h1><span>Edit Decongestant</span></h1>
        <form v-on:submit.prevent="editDecongestant">
            <p>ชื่อของยา : <input type="text" v-model="decongestant.name_thai"></p>
            <p>name : <input type="text" v-model="decongestant.name_eng"></p>
            <p>ประเภทของยา : <input type="text" v-model="decongestant.category"></p>
            <p>รายละเอียดของยา : <input type="text" v-model="decongestant.detail"></p>
            <p>ขนาดบรรจุยา : <input type="text" v-model="decongestant.size"></p>
            <p><button type="submit">Edit</button></p>
        </form>
        <hr>
        <div>
            <p><a>ชื่อของยา : </a> <a1>{{ decongestant.name_thai }}</a1></p>
            <p><a>name : </a> <a1>{{ decongestant.name_eng }}</a1></p>
            <p><a>ประเภทของยา : </a> <a1>{{ decongestant.category }}</a1></p>
            <p><a>รายละเอียดของยา : </a> <a1>{{ decongestant.detail }}</a1></p>
            <p><a>ขนาดบรรจุยา : </a> <a1>{{ decongestant.detail }}</a1></p>
            <p></p>
        </div>

    </div>
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
                size:'',
            }
        }
    },
    methods: {
        async editDecongestant() {
            try {
                await DecongestantService.put(this.decongestant)
                this.$router.push({
                    name: 'decongestants'
                })
            } catch (err) {
                console.log(err)
            }
        }
    },
    async created() {
        try {
            let decongestantId = this.$route.params.decongestantId
            this.decongestant = (await DecongestantService.show(decongestantId)).data
        } catch (error) {
            console.log(error)
        }
    }
}
</script>
<style scoped></style>