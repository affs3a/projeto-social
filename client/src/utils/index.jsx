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

    alertAction(msg, action, handler) {
        this.alertClient.fire({
            title: "Confirmação",
            html: msg + `<br>Se sim, digite <strong>${action}</strong> no campo abaixo.`,
            input: "text",
            inputAttributes: {
                autocapitalize: "off"
            },
            showCancelButton: true,
            confirmButtonText: "Submeter",
            showLoaderOnConfirm: true,
            preConfirm: async (confirm) => {
                return confirm === action
            },
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                try {
                    handler()
                    this.alert('Operação realizada com sucesso!', 'success')
                } catch (e) {
                    this.alert(e, 'error')
                }
            } else {
                this.alert('Operação cancelada!', 'warning')
            }
        });
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

    formToObject(form, options = {}) {
        const formData = new FormData(form);

        [...form].forEach(it => {
            if (it.type == "file" && it.multiple) {
                formData.delete(it.name);
                [...it.files].forEach(file => {
                    formData.append(it.name, file, file.name)
                })
            }
        })

        const obj = {}


        const encode = {
            default: (value) => {
                return value
            },
            base64: (value) => {
                return value
            }
        }[options.filesEncoding ?? 'default']


        formData.forEach((v, k) => {
            if (v instanceof File) v = encode(v)
            if (k && v != "") obj[k]
                ? obj[k] = Array.isArray(obj[k])
                    ? [...obj[k], v]
                    : [obj[k], v]
                : obj[k] = v
        })

        return obj
    }

    empty(obj) {
        return obj ? Object.keys(obj).length == 0 : true
    }

    getError(error) {
        return error.response.data
            || error.data
            || ''
    }

    imageMimes() {
        return [
            'image/png',
            'image/jpeg',
            'image/jpg',
            'image/svg+xml',
        ]
    }
}

export default new Utils()