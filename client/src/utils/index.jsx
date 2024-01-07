import Swal from "sweetalert2"
import withReactContent from 'sweetalert2-react-content'
import api from "@/api"

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

    async formWithFilesToObject(form, inputName) {
        const formData = new FormData(form)

        const input = [...form].find(input => input.name === inputName);
        const files = [...input.files];

        const convertedFiles = await Promise.all(
            files.map(file => this.convertToBase64(file)))

        formData.set(inputName, JSON.stringify(convertedFiles))

        return formData
    }

    async convertToBase64(file) {
        return new Promise((resolve, reject) => {
            const fr = new FileReader();
            fr.onloadend = () => resolve({
                file: fr.result,
                name: file.name,
                type: file.type,
                size: file.size
            })
            fr.readAsDataURL(file)
        })
    }

    formToObject(form, isFormData = false) {
        const formData = isFormData ? form : new FormData(form);
        const obj = {}

        formData.forEach((value, key) => {
            if (value != "") obj[key] = value
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

    parseImages(jsonEncoded) {
        const images = JSON.parse(jsonEncoded)
            .map(image => api.media_path + image);

        return images
    }
}

export default new Utils()