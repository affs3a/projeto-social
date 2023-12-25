import axios from "axios"
import Cookies from "js-cookie"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"

class API {
    constructor() {
        this.USER = 'user'
        this.ACCESS_TOKEN = 'access_token'
        this.REFRESH_TOKEN = 'refresh_token'

        this.ROLE_PROVIDER = 1
        this.ROLE_ADMIN = 2

        this.users_key = 'users'

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

    getUsers() {
        return useQuery({
            queryKey: [this.users_key],
            queryFn: async () => {
                const { data } = await this.client.get('/users/', {
                    headers: this.buildHeader()
                })
                return data
            }
        })
        
    }

    addUser() {
        return useMutation({
            mutationKey: ['add_user'],
            mutationFn: async (data) => {
                return await this.client.put('/users/', data, {
                    headers: this.buildHeader(),
                })
            }
        })
    }

    editUser() {
        return useMutation({
            mutationKey: ['add_user'],
            mutationFn: async (data) => {
                console.log(data)
                return await this.client.patch(`/users/${data.id ?? ''}`, data, {
                    headers: this.buildHeader(),
                })
            }
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
}

export default new API()