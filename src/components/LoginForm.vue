<script setup lang="ts">
import router from '@/router'
import { ref,reactive } from 'vue'
import { useAdminStore } from '@/stores/admin'
const apiBase = import.meta.env.VITE_API_URL
const { getAdminToken, getAdminId } = useAdminStore()

const adminData = reactive({
  Account: 'administrator@example.com',
  Password: 'Test0000'
})

const isFetched = ref(false)

interface ApiResponse {
  [key: string]: any
}

const handleLogin = async () => {
  isFetched.value = true
  try {
    const res: ApiResponse = await fetch(`${apiBase}/login`, {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(adminData)
    })
    const data = await res.json()
    if (data.StatusCode === 200) {
      alert(data.Message)
      router.push('/dashboard')
      getAdminToken(data.Token)
      getAdminId(data.Data.User.Uid)
    }
  } catch (error) {
    console.log(error)
  }finally {
    isFetched.value = false
  }
}
</script>
<template>
  <div class="flex justify-center items-center max-w-[300px] mx-auto">
    <form class="w-full flex flex-col items-center">
      <div class="mb-4 w-full">
        <label for="email" class="block mb-2">Email</label>
        <input
          id="email"
          type="email"
          placeholder="請輸入帳號"
          class="input input-bordered w-full"
          v-model="adminData.Account"
        />
      </div>
      <div class="mb-8 w-full">
        <label for="password" class="block mb-2">密碼</label>
        <input
          id="password"
          type="password"
          placeholder="請輸入密碼"
          class="input input-bordered w-full"
          v-model="adminData.Password"
        />
      </div>
      <button class="btn w-2/3 bg-gray-200" type="submit" @click.prevent="handleLogin" :disabled="isFetched">
            <span v-if="!isFetched">登入</span>
            <span v-else>登入中...</span>
      </button>

    </form>
  </div>
</template>

<style scoped></style>
