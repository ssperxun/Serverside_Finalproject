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
                <div class="show text-light my-3 rounded-3" style="width: 50rem;">
                    <div class="my-3 fw-bold">
                        <h1>Show Sewing Machine</h1>
                        <hr>
                    </div>
                    <div class="text-start p-3">
                        <div class="row">
                            <div class="col-1">
                                <div class="mb-3">
                                    <label for="ID" class="form-label">ID : </label>
                                    <span class="form-control">{{ sewing.id }}</span>
                                </div>
                            </div>
                            <div class="col">
                                <div class="mb-3">
                                    <label for="product" class="form-label">Product Name (ชื่อสินค้า) : </label>
                                    <span class="form-control">{{ sewing.product }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="brand" class="form-label">Brand Name (ชื่อแบรนด์) : </label>
                            <span class="form-control">{{ sewing.brand }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price (ราคา) : </label>
                            <span type="number" class="form-control">{{ sewing.price }} บาท</span>
                        </div>
                        <div class="mb-3">
                            <label for="color" class="form-label">Color (สี) : </label>
                            <span class="form-control">{{ sewing.color }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="suitable" class="form-label">Suitable (เหมาะสำหรับห้องแบบไหน) : </label>
                            <span class="form-control">{{ sewing.suitable }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="type" class="form-label">Type (ประเภทเครื่องเย็บผ้า) : </label>
                            <span class="form-control">{{ sewing.type }}</span>
                        </div>
                        <div class="mb-3">
                            <label for="material" class="form-label">Material (วัสดุหลัก) : </label>
                            <span class="form-control">{{ sewing.material }}</span>
                        </div>
                    </div>
                    <div class="mb-3">
                        <a @click="$router.back()" class="btn btn-danger">ย้อนกลับ</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import SewingsService from '@/services/SewingsService';

export default {
    data() {
        return {
            sewing: null
        }
    },
    async created() {
        try {
            let sewingId = this.$route.params.sewingId
            this.sewing = (await SewingsService.show(sewingId)).data
        } catch (error) {
            console.log(error)
        }
    },
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    }

}
</script>
<style scoped></style>