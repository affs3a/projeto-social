class Utils {
    makeMessage(target) {
        if (Array.isArray(target)) {
            return target.reduce((accumulator, text) => (accumulator += ` ${text}`), '')
        } else if (typeof target === 'object' && !Array.isArray(target)) {
            return Object.keys(target).reduce(
                (accumulator, text) => (accumulator += ` ${text}: ${target[text]}`), '')
        } else {
            return target
        }
    }
}

export default new Utils()