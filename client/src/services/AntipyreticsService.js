import Api from '@/services/Api'
export default {
    index(antipyretics) {
        return Api().get('mas')
    },
    show(antipyreticsId) {
        return Api().get('antipyretics/' + antipyreticsId)
    },
    post(antipyretics) {
        return Api().post('antipyretics', antipyretics)
    },
    put(antipyretics) {
        return Api().put('antipyretics/' + antipyretics.id, antipyretics)
    },
    delete(antipyretics) {
        return Api().delete('antipyretics/' + antipyretics.id, antipyretics)
    },
}