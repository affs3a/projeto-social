import axios from "axios"
import Cookies from "js-cookie"

class API {
    constructor() {
        this.USER = 'user'
        this.ACCESS_TOKEN = 'access_token'
        this.REFRESH_TOKEN = 'refresh_token'

        this.ROLE_PROVIDER = 1
        this.ROLE_ADMIN = 2

        this.QUERY_USERS = 'users'

        this.client = axios.create({
            baseURL: 'http://localhost:8000/api/',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            }
        })
    }

    login(credentials, handler) {
        this.client.post('auth/login', credentials)
            .then(response => {
                const { user, access } = response.data
                Cookies.set(this.ACCESS_TOKEN, access, {
                    path: '/',
                    secure: true,
                    sameSite: 'strict',
                    expires: (1 / 4)
                })
                Cookies.set(this.USER, JSON.stringify(user), {
                    path: '/',
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

    logout() {
        Cookies.remove(this.ACCESS_TOKEN)
        Cookies.remove(this.USER)
    }

    async getUsers(search = null) {
        const { data } = await this.client.get('/users/', {
            params: search && { search },
            headers: this.buildHeader(),
        })

        return data
    }

    async addUser(data) {
        return await this.client.put('/users/', data, {
            headers: this.buildHeader()
        })
    }

    async editUser(data) {
        return await this.client.patch(`/users/${data.id ?? '0'}`, data, {
            headers: this.buildHeader(),
        })
    }

    async deleteUser(data) {
        return await this.client.delete(`/users/${data.id ?? '0'}`, {
            headers: this.buildHeader(),
        })
    }

    getProfiles() {
        return {
            1: "Prestador",
            2: "Administrador",
        }
    }

    buildHeader() {
        return {
            'Authorization': `Bearer ${Cookies.get(this.ACCESS_TOKEN) ?? ''}`
        }
    }

    userProfile() {
        const profile = JSON.parse(Cookies.get(this.USER) ?? "{}")
        return Object.values(profile).length > 0 ? profile : null
    }

    matchProfile(role) {
        return role ? this.getProfiles()[role] : null
    }

    queryClient() {
        return useQueryClient()
    }

    operationKey(key, operation) {
        return key + (operation ? `_${operation}` : '')
    }
}

export default new API()