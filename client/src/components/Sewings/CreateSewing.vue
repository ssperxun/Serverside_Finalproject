<template>
    <div>
        <header>
            <nav class="navbar navbar-expand-lg">
                <div class="container d-flex justify-content-center">
                    <h1 class="text-light fw-bold">Sewing Machine</h1>
                </div>
            </nav>
        </header>
        <div class="container-fluid">
            <div class="d-flex justify-content-center">
                <form v-on:submit.prevent="createSewing" class="text-light my-3 rounded-3" style="width: 50rem;">
                    <div class="my-3 fw-bold">
                        <h1>Create Sewing Machine</h1>
                        <hr>
                    </div>
                    <div class="text-start p-3">
                        <div class="mb-3">
                            <label for="product" class="form-label">Product Name (ชื่อสินค้า) : </label>
                            <input type="text" class="form-control" v-model="sewing.product" placeholder="Enter a Product">
                        </div>
                        <div class="mb-3">
                            <label for="brand" class="form-label">Brand Name (ชื่อแบรนด์) : </label>
                            <input type="text" class="form-control" v-model="sewing.brand" placeholder="Enter a Brand">
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price (ราคา) : </label>
                            <input type="number" class="form-control" v-model="sewing.price" placeholder="Enter a Price">
                        </div>
                        <div class="mb-3">
                            <label for="color" class="form-label">Color (สี) : </label>
                            <input type="text" class="form-control" v-model="sewing.color" placeholder="Enter a Color">
                        </div>
                        <div class="mb-3">
                            <label for="suitable" class="form-label">Suitable (เหมาะสำหรับห้องแบบไหน) : </label>
                            <input type="text" class="form-control" v-model="sewing.suitable"
                                placeholder="Enter a Suitable">
                        </div>
                        <div class="mb-3">
                            <label for="type" class="form-label">Type (ประเภทเครื่องเย็บผ้า) : </label>
                            <input type="text" class="form-control" v-model="sewing.type" placeholder="Enter a Type">
                        </div>
                        <div class="mb-3">
                            <label for="material" class="form-label">Material (วัสดุหลัก) : </label>
                            <input type="text" class="form-control" v-model="sewing.material"
                                placeholder="Enter a Material">
                        </div>
                        <div class="mb-3">
                            <button type="submit" class="btn btn-primary me-2">สร้างเครื่องเย็บผ้า</button>
                            <a @click="$router.back()" class="btn btn-danger">ย้อนกลับ</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script>
import SewingsService from '@/services/SewingsService'

export default {
    data() {
        return {
            sewing: {
                product: '',
                brand: '',
                price: '',
                color: '',
                suitable: '',
                type: '',
                material: '',
            }
        }
    },
    methods: {
        async createSewing() {
            try {
                await SewingsService.post(this.sewing)
                this.$router.push({
                    name: 'sewings'
                })
            } catch (error) {
                console.log(error)
            }
        }
    }
}
</script>
<style scoped></style>