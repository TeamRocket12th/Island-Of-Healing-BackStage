// useArticles.ts
import { ref } from 'vue'

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

const useArticles = () => {
  const apiBase = import.meta.env.VITE_API_URL
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
      if (data.StatusCode === 200) {
        reviewArticles.value = data.ArticlesData.map((article: ArticleInfo) => ({
          ...article
        })).reverse()
      } else {
        throw new Error(`發生錯誤 ${data.Message}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  return { getAllArticles, reviewArticles }
}

export default useArticles
