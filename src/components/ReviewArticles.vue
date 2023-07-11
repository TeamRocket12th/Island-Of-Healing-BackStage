<script setup lang="ts">
import { reactive, ref } from 'vue'

const apiBase = import.meta.env.VITE_API_URL

interface ApiResponse {
  [key: string]: any
}
const articleId = ref('')
const progress = reactive({ Progress: '' })

// 取得單篇文章資訊
const getArticle = async () => {
  console.log('click')
  const token = localStorage.getItem('token')
  const adminId = localStorage.getItem('adminId')
  if (!token && !adminId) {
    return
  }
  try {
    const res: ApiResponse = await fetch(`${apiBase}/readarticle/${articleId.value}/${adminId}`, {
      headers: { 'Content-type': 'application/json' }
    })
    const data = await res.json()
    console.log(data)
    if (data.StatusCode === 200) {
      alert(data.Message)
    } else {
      throw new Error(`發生錯誤 ${data.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}

// 變更審核進度
const changeProgress = async () => {
  console.log('click')
  const token = localStorage.getItem('token')
  const adminId = localStorage.getItem('adminId')
  if (!token && !adminId) {
    return
  }
  try {
    const res: ApiResponse = await fetch(`${apiBase}/article/updateprogress/${articleId.value}`, {
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
      method: 'PUT',
      body: JSON.stringify(progress)
    })
    const data = await res.json()
    console.log(data)
    if (data.StatusCode === 200) {
      alert(data.Message)
    } else {
      throw new Error(`發生錯誤 ${data.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div class="flex flex-col gap-4 mb-4">
    <span class="mb-6">*目前API無法取得單篇文章進度</span>
    <div class="flex gap-4">
      <div>
        <label for="articleId" class="block mb-3">請輸入文章ID</label>
        <input
          v-model="articleId"
          type="text"
          placeholder="文章ID"
          class="input input-bordered input-sm w-40"
        />
      </div>
      <button class="btn btn-sm bg-gray-200 self-end" @click="getArticle">GET (X)</button>
    </div>
    <!-- <div>
      <p class="mb-3">目前進度</p>
      <p></p>
    </div> -->
    <div class="mb-4 flex gap-4">
      <div>
        <p class="mb-3">變更審核進度</p>
        <select v-model="progress.Progress" class="w-40 select select-sm select-bordered">
          <option disabled selected>審核進度</option>
          <option value="0">草稿</option>
          <option value="1">待審核</option>
          <option value="2">審核中</option>
          <option value="3">審核失敗</option>
          <option value="4">審核成功</option>
        </select>
      </div>
      <button type="button" class="btn-sm bg-gray-200 btn self-end" @click="changeProgress">
        確認
      </button>
    </div>
  </div>
</template>

<style scoped></style>
