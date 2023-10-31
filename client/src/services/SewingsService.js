import Api from '@/services/Api'

export default {
    index (search) {
        return Api().get('sewings')
    },
    show (sewingId) {
        return Api().get('sewing/' + sewingId)
    },
    post (sewing) {
        return Api().post('sewing/', sewing)
    },
    put (sewing) {
        return Api().put('sewing/' + sewing.id, sewing)
    },
    delete (sewing) {
        return Api().delete('sewing/' + sewing.id, sewing)
    },
}