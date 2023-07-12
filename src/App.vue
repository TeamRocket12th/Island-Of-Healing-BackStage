<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'
import { useAdminStore } from '@/stores/admin'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
const { adminToken, adminId } = storeToRefs(useAdminStore())
const token = ref<string | null>('')
onMounted(() => {
  token.value = localStorage.getItem('token')
})
const router = useRouter()

const removeLocalData = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('adminId')
  adminToken.value = ''
  adminId.value = ''
  router.push('/')
}
</script>

<template>
  <header class="bg-slate-100">
    <div class="navbar border-b border-gray-300">
      <nav class="flex items-center h-10 justify-between w-full pr-4">
        <h1 class="text-2xl font-medium ml-4">小島聊癒所 - 後台</h1>
        <div v-if="token" class="flex items-center gap-4">
          <RouterLink
            to="/dashboard"
            class="btn btn-sm bg-indigo-950 text-white font-normal hover:bg-indigo-900"
            >回到首頁</RouterLink
          >
          <button
            class="btn btn-sm bg-blue-900 text-white font-normal hover:bg-blue-700"
            @click="removeLocalData"
          >
            重新登入
          </button>
        </div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
