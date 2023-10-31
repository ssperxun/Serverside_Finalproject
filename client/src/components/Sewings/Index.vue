<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container d-flex justify-content-center">
                    <h1 class="text-light fw-bold">Sewing Machine</h1>
                </div>
            </nav>
        </header>
        <div class="container">
            <h3 class="my-3 fw-bold text-success">Sewing Machine Count: {{ sewings.length }}</h3>
            <div class="d-flex justify-content-start">
                <button class="btn my-3 text-light fw-bold" style="background: green;"
                    v-on:click="navigateTo('/sewing/create/')">สร้างเครื่องเย็บผ้า</button>
            </div>
            <div class="row row-cols-2 d-flex justify-content-center fw-bold my-3">
                <table class="table table-bordered table-danger table-striped">
                    <thead>
                        <tr>
                            <th scope="row">ID</th>
                            <th scope="row">ชื่อเครื่องเย็บผ้า</th>
                            <th scope="row">แบรนด์</th>
                            <th scope="row">ราคา</th>
                            <th scope="row">ดู/แก้ไข/ลบ</th>
                        </tr>
                    </thead>
                    <tbody v-for="sewing in sewings" v-bind:key="sewing.id">
                        <tr>
                            <td>{{ sewing.id }}</td>
                            <td>{{ sewing.product }}</td>
                            <td>{{ sewing.brand }}</td>
                            <td>฿{{ sewing.price }}</td>
                            <td>
                                <button class="btn btn-primary"
                                    v-on:click="navigateTo('/sewing/' + sewing.id)">Read</button>
                                <button class="btn btn-success"
                                    v-on:click="navigateTo('/sewing/edit/' + sewing.id)">Edit</button>
                                <button class="btn btn-danger" v-on:click="deleteSewing(sewing)">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import SewingsService from '@/services/SewingsService';
export default {
    data() {
        return {
            sewings: []
        }
    },
    async created() {
        this.sewings = (await SewingsService.index()).data
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
        async deleteSewing(sewing) {
            let result = confirm("What to delete?")
            if (result) {
                try {
                    await SewingsService.delete(sewing)
                    this.refreshData()
                } catch (error) {
                    console.log(error)
                }
            }
        },
        async refreshData() {
            this.sewings = (await SewingsService.index()).data
        }
    }
}
</script>
<style scoped></style>