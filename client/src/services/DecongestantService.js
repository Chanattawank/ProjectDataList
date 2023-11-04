import Api from '@/services/Api'
export default {
    index(decongestant) {
        return Api().get('decongestants')
    },
    show(decongestantId) {
        return Api().get('decongestant/' + decongestantId)
    },
    post(decongestant) {
        return Api().post('decongestant', decongestant)
    },
    put(decongestant) {
        return Api().put('decongestant/' + decongestant.id, decongestant)
    },
    delete(decongestant) {
        return Api().delete('decongestant/' + decongestant.id, decongestant)
    },
}