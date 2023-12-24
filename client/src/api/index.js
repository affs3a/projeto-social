import axios from "axios"
import Cookies from "js-cookie"
import { useQuery } from "@tanstack/react-query"

class API {
    constructor() {
        this.USER = 'user'
        this.ACCESS_TOKEN = 'access_token'
        this.REFRESH_TOKEN = 'refresh_token'

        this.ROLE_PROVIDER = 1
        this.ROLE_ADMIN = 2

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
                const { user, access } = response.data
                Cookies.set(this.ACCESS_TOKEN, access, {
                    path: '',
                    secure: true,
                    sameSite: 'strict',
                    expires: (1 / 4)
                })
                Cookies.set(this.USER, JSON.stringify(user), {
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

    logout() {
        Cookies.remove(this.ACCESS_TOKEN)
        Cookies.remove(this.USER)
    }

    getUsers() {
        return useQuery({
            queryKey: ['users'],
            queryFn: async () => {
                const { data } = await this.client.get('/users', {
                    headers: this.buildHeader()
                })
                return data
            }
        })
        
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
        return role ? {
            1: "Prestador",
            2: "Administrador"
        }[role] : null
    }
}

export default new API()