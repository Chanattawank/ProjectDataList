<template>
    <div1>
        <h1><span>Medicine</span></h1>
        <ul>
            <li style="--clr: #00FFFF;">
                <a href="#/antacidss" data-text="ANTACIDS ยาแก้ปวดท้อง ท้องอืด ท้องเฟ้อ">ANTACIDS ยาแก้ปวดท้อง ท้องอืด
                    ท้องเฟ้อ</a>
            </li>
            <li style="--clr: #FFFACD;">
                <a href="#/mas" data-text="ANTIPYRETICS ยาบรรเทาปวดลดไข้">ANTIPYRETICS ยาบรรเทาปวดลดไข้</a>
            </li>
            <li style="--clr: #FFA500;">
                <a href="#/coughs" data-text="COUGH ยาแก้ไอ ขับเสมหะ">COUGH ยาแก้ไอ ขับเสมหะ</a>
            </li>
            <li style="--clr: #7FFF00;">
                <a href="#/decongestants" data-text="DECONGESTANT ยาแก้แพ้ ลดน้ำมูก">DECONGESTANT ยาแก้แพ้ ลดน้ำมูก</a>
            </li>
        </ul>
    </div1>
</template>
<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    },
}
</script>
<style scoped></style>
   