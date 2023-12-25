class Utils {
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
            response.error.response.data.message ?? ''
    }
}

export default new Utils()