import Api from '@/services/Api'
export default {
    index(antacids) {
        return Api().get('antacidss')
    },
    show(antacidsId) {
        return Api().get('antacids/' + antacidsId)
    },
    post(antacids) {
        return Api().post('antacids', antacids)
    },
    put(antacids) {
        return Api().put('antacids/' + antacids.id, antacids)
    },
    delete(antacids) {
        return Api().delete('antacids/' + antacids.id, antacids)
    },
}