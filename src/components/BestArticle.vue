<script setup lang="ts">
import Swal from 'sweetalert2'
import { onMounted } from 'vue'
import useArticles from '../composables/useArticles'

interface ApiResponse {
  [key: string]: any
}
interface ArticleInfo {
  Id: number
  Title: string
  Initdate: string
  WriterNickName: string
  ArticleImgUrl: string
  Progress: string
  newProgress: string
  Selected: boolean
}

const apiBase = import.meta.env.VITE_API_URL

const { getAllArticles, reviewArticles } = useArticles()

// 新增文章精選
const createBestArticles = async (articleId: number, select: boolean) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return
  }
  try {
    const res: ApiResponse = await fetch(`${apiBase}/selectedarticle/${articleId}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` }
    })
    const bestArticleList = await res.json()
    if (bestArticleList.StatusCode === 200) {
      bestArticleList.Selected = select
      Swal.fire('新增精選成功', '該文章已被加入精選列表', 'success')
      getAllArticles()
    } else {
      throw new Error(`發生錯誤 ${bestArticleList.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}

// 取消文章精選
const cancelBestArticles = async (articleId: number, select: boolean) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return
  }
  try {
    const res: ApiResponse = await fetch(`${apiBase}/cancelselectedarticle/${articleId}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` }
    })
    const bestArticleList = await res.json()
    if (bestArticleList.StatusCode === 200) {
      bestArticleList.Selected = select
      Swal.fire('刪除精選成功', '該文章已被移除精選列表', 'success')
      getAllArticles()
    } else {
      throw new Error(`發生錯誤 ${bestArticleList.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}

const toggleSelectedStatus = async (article: ArticleInfo) => {
  const select = !article.Selected // 切換 Selected 屬性的值
  if (select) {
    await createBestArticles(article.Id, select)
  } else {
    await cancelBestArticles(article.Id, select)
  }
}

onMounted(getAllArticles)
</script>

<template>
  <h1>
    <div v-if="reviewArticles" class="flex flex-col">
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
                    精選文章
                  </th>
                  <th
                    scope="col"
                    class="px-6 py-3 font-medium text-gray-500 uppercase tracking-wider text-center"
                  >
                    確認動作
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="article in reviewArticles" :key="article.Id">
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
                    <p class="text-center">{{ article.Selected ? '是' : '否' }}</p>
                  </td>

                  <td class="px-6 py-4 whitespace-nowrap text-gray-500 text-center">
                    <button
                      @click="toggleSelectedStatus(article)"
                      class="btn btn-sm border ml-2 p-2 h-9 rounded-md px-4 text-white font-normal"
                      :class="
                        article.Selected
                          ? 'bg-rose-700 hover:bg-rose-800'
                          : 'bg-teal-600 hover:bg-teal-700'
                      "
                    >
                      {{ article.Selected ? '刪除精選' : '新增精選' }}
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </h1>
</template>
