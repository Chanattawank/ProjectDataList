import Api from '@/services/Api'
export default {
    index(cough) {
        return Api().get('coughs')
    },
    show(coughId) {
        return Api().get('cough/' + coughId)
    },
    post(cough) {
        return Api().post('cough', cough)
    },
    put(cough) {
        return Api().put('cough/' + cough.id, cough)
    },
    delete(cough) {
        return Api().delete('cough/' + cough.id, cough)
    },
}