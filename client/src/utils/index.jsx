import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'

class Utils {
    constructor() {
        this.alertClient = withReactContent(Swal)
    }

    alert(msg, status, opts = {}) {
        return this.alertClient.fire({
            title: {
                'success': 'Sucesso!',
                'error': 'Erro!',
                'warning': 'Alerta!',
                'question': 'Confirmação',
            }[status],
            html: this.makeMessage(msg),
            icon: status,
            ...opts,
        })
    }

    makeMessage(target) {
        let messageText = ''
        if (Array.isArray(target)) {
            messageText = target.reduce((accumulator, text) => (
                accumulator += (accumulator != '' ? '<br>' : '') + text
            ), '')

        } else if (typeof target === 'object' && !Array.isArray(target)) {
            messageText = Object.keys(target).reduce((accumulator, text) => (
                accumulator += (accumulator != '' ? '<br>' : '')
                + `<strong>${text}</strong>: ${target[text]}`
            ), '')

        } else { 
            messageText = target 
        }
        
        return `<p>${messageText}</p>`
    }

    formToObject(form) {
        const formData = new FormData(form)
        const obj = {}

        formData.forEach((v, k) => {
            k && v != "" && (obj[k] = v)
        })

        return obj
    }

    empty(obj) {
        return obj ? Object.keys(obj).length == 0 : true
    }

    getError(response) {
        return response.error.response.data ??
            response.error.message ??
            response.error.response.data.message ?? 
            response.data ?? ''
    }
}

export default new Utils()