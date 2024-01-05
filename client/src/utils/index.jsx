import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'

import "./index.css"

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

        const callback = (obj, key, value) => {
            if (value != "") obj[key]
            ? obj[key] = Array.isArray(obj[key])
                ? [...obj[key], value]
                : [obj[key], value]
            : obj[key] = value
        }

        const encode = {
            default: (obj, key, value) => {
                callback(obj, key, value)
            },
            base64: (obj, key, value) => {
                const reader = new FileReader();
                const aux = {}

                reader.readAsDataURL(value)
                reader.onloadend = () => {
                    aux.name = value.name
                    aux.url = reader.result
                    if (obj[key] && typeof obj[key] == "string") {
                        obj[key] = JSON.parse(obj[key])
                    }
                    callback(obj, key, aux)
                    obj[key] = JSON.stringify(obj[key])
                }
            }
        }[options.filesEncoding ?? 'default']

        formData.forEach((value, key) => {
            if (value instanceof File) encode(obj, key, value)
            else callback(obj, key, value)
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