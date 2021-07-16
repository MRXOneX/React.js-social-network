import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '499ae224-1b6b-4f93-8238-6cc32fe700ef'
    }
})

export const userAPI = {
    getUsers(currentPage = 10,pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    delUser(user) {
        return instance.delete(`follow/${user}`).then(response => response.data.resultCode)
    },
    setUser(user) {
        return instance.post(`follow/${user}`, {}).then(response => response.data.resultCode)
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object')
        return profileAPI.getProfile(userId)
    }
}
export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}
export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId) {
        return instance.get('profile/status/' + userId);
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {
            status: status
        })
    },
    savePhoto (photos) {
        const formData = new FormData();
        formData.append('image', photos);
        return instance.put('profile/photo', formData, {
            header: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile (profile) {
        return instance.put('profile', profile)
    }
}
export const SecurityAPI = {
    getCaptchaUrl() {
        return instance.get('security/get-captcha-url')
    }
}