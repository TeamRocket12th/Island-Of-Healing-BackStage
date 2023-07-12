<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'

const apiBase = import.meta.env.VITE_API_URL

interface ApiResponse {
  [key: string]: any
}

interface ArticleProgress {
  Id: number
  Title: string
  Initdate: string
  WriterNickName: string
  ArticleImgUrl: string
  Progress: string
  newProgress: string
}

const getProgressValue = (progress: string) => {
  switch (progress) {
    case '待審核':
      return '1'
    case '審核中':
      return '2'
    case '審核失敗':
      return '3'
    case '審核成功':
      return '4'
    default:
      return '1'
  }
}

const articles = ref<ArticleProgress[]>([])

const getAllArticles = async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    return
  }
  try {
    const res: ApiResponse = await fetch(`${apiBase}/administratorarticles/get`, {
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` }
    })
    const data = await res.json()
    console.log(data)
    if (data.StatusCode === 200) {
      articles.value = data.ArticlesData.map((article: ArticleProgress) => ({
        ...article,
        newProgress: getProgressValue(article.Progress)
      }))
      console.log(articles.value)
    } else {
      throw new Error(`發生錯誤 ${data.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}

onMounted(getAllArticles)

// 變更審核進度
const changeProgress = async (article: ArticleProgress, id: number) => {
  const token = localStorage.getItem('token')
  const adminId = localStorage.getItem('adminId')
  if (!token && !adminId) {
    return
  }
  try {
    const res: ApiResponse = await fetch(`${apiBase}/article/updateprogress/${id}`, {
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
      method: 'PUT',
      body: JSON.stringify({ Progress: article.newProgress })
    })
    const data = await res.json()
    console.log(data)
    if (data.StatusCode === 200) {
      alert(data.Message)
      getAllArticles()
    } else {
      throw new Error(`發生錯誤 ${data.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <div v-if="articles" class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  ID
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  標題
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  創建日期
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  作者
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  目前進度
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  變更進度
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                ></th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="article in articles" :key="article.Id">
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{ article.Id }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{ article.Title }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{ new Date(article.Initdate).toLocaleString() }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{ article.WriterNickName }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{ article.Progress }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  <div class="py-1 flex gap-4">
                    <select
                      v-model="article.newProgress"
                      class="w-30 select select-sm select-bordered"
                    >
                      <option disabled selected>審核進度</option>
                      <option value="1">待審核</option>
                      <option value="2">審核中</option>
                      <option value="3">審核失敗</option>
                      <option value="4">審核成功</option>
                    </select>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  <button
                    type="button"
                    class="btn-sm bg-slate-300 font-normal btn self-end"
                    @click="changeProgress(article, article.Id)"
                  >
                    確認
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
