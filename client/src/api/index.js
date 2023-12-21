import axios from "axios"
import Cookies from "js-cookie"

class API {
    constructor() {
        this.ACESS_TOKEN = 'access_token'
        this.REFRESH_TOKEN = 'refresh_token'

        this.client = axios.create({
            baseURL: 'http://127.0.0.1:8000/api/',
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    login(credentials, handler) {
        this.client.post('auth/login', credentials)
            .then(response => {
                const accessToken = response.data.access
                Cookies.set(this.ACESS_TOKEN, accessToken, {
                    path: '',
                    secure: true,
                    sameSite: 'strict',
                    expires: (1 / 4)
                })
                handler({ response })
            })
            .catch(error => {
                handler({ error })
            })
    }
}

export default new API()