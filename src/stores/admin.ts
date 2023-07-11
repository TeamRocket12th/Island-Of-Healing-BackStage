import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAdminStore = defineStore('admin', () => {
  const adminId = ref('')

  const getAdminId = (id: string) => {
    adminId.value = id
    localStorage.setItem('adminId', id)
  }
  const adminToken = ref('')

  const getAdminToken = (token: string) => {
    adminToken.value = token
    localStorage.setItem('token', token)
  }

  return { adminId, getAdminId, adminToken, getAdminToken }
})
