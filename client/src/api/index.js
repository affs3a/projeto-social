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
        this.QUERY_CATEGORIES = 'categories'
        this.QUERY_SERVICES = 'services'
        
        this.client = axios.create({
            baseURL: 'http://0.0.0.0:1234/api/',
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
            }
        })

        this.media_path = 'http://0.0.0.0:1234/'
        this.whats_client = 'https://api.whatsapp.com/send?phone=55'
        this.insta_client = 'https://www.instagram.com/'
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

    async getUsers(params = {}) {
        const { data } = await this.client.get('/users/', {
            params: params,
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

    async getCategories(params = {}) {
        const { data } = await this.client.get('/categories/', {
            params: params,
            headers: this.buildHeader(),
        })

        return data
    }

    async getCategory(id) {
        const { data } = await this.client.get(`/categories/${id}`, {
            headers: this.buildHeader(),
        })

        return data
    }

    async addCategory(data) {
        return await this.client.put('/categories/', data, {
            headers: this.buildHeader()
        })
    }

    async editCategory(data) {
        return await this.client.patch(`/categories/${data.id ?? '0'}`, data, {
            headers: this.buildHeader(),
        })
    }

    async deleteCategory(data) {
        return await this.client.delete(`/categories/${data.id ?? '0'}`, {
            headers: this.buildHeader(),
        })
    }

    async getServices(params = {}) {
        const { data } = await this.client.get('/services/', {
            params: params,
            headers: this.buildHeader(),
        })

        return data
    }
    
    async getService(id) {
        const { data } = await this.client.get(`/services/${id}`, {
            headers: this.buildHeader(),
        })

        return data
    }

    async addService(data) {
        return await this.client.put('/services/', data, {
            headers: this.buildHeader()
        })
    }

    async editService(data) {
        return await this.client.patch(`/services/${data.id ?? '0'}`, data, {
            headers: this.buildHeader(),
        })
    }

    async deleteService(data) {
        return await this.client.delete(`/services/${data.id ?? '0'}`, {
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
        const profile = Cookies.get(this.ACCESS_TOKEN)
        return profile && {
            'Authorization': `Bearer ${profile}`
        }
    }

    userProfile() {
        const profile = JSON.parse(Cookies.get(this.USER) ?? "{}")
        return Object.values(profile).length > 0 ? profile : null
    }

    matchProfile(role) {
        return role ? this.getProfiles()[role] : null
    }
}

export default new API()