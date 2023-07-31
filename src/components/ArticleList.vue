<script setup lang="ts">
import ReviewArticles from './ReviewArticles.vue'
import SelectArticles from './SelectArticles.vue'
import { onMounted, ref } from 'vue'

const apiBase = import.meta.env.VITE_API_URL
const showReview = ref(true)

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

const reviewArticles = ref<ArticleInfo[]>([])

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
      reviewArticles.value = data.ArticlesData.map((article: ArticleInfo) => ({
        ...article,
        newProgress: getProgressValue(article.Progress)
      })).reverse()
    } else {
      throw new Error(`發生錯誤 ${data.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}

onMounted(getAllArticles)
</script>

<template>
  <div>
    <ReviewArticles
      v-if="showReview"
      :reviewArticles="reviewArticles"
      :getAllArticles="getAllArticles"
    />
    <SelectArticles v-else />
  </div>
</template>

<style scoped></style>
