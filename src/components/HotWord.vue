<script setup lang="ts">
import { ref, onMounted } from 'vue'
const apiBase = import.meta.env.VITE_API_URL
interface ApiResponse {
  [key: string]: any
}
const datas = ref<ApiResponse[]>([])
// 取得熱門關鍵字

const years = [2023, 2024, 2025, 2026, 2027, 2028]
const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
const selectedYear = ref('2023')
const selectedMonth = ref(0)

const getHotWord = async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    return
  }
  try {
    const res: ApiResponse = await fetch(
      `${apiBase}/trendanalysis/get?year=${selectedYear.value}&month=${selectedMonth.value}`,
      {
        headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` }
      }
    )
    const data = await res.json()
    if (data.StatusCode === 200) {
      datas.value = data.sortedReturnResult
    } else {
      throw new Error(`發生錯誤 ${data.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}
onMounted(getHotWord)
</script>
<template>
  <div class="flex justify-between py-5 items-center">
    <h1 class="text-3xl">熱門關鍵字前20名</h1>
    <div class="flex p-4 gap-4 items-center h-[40px]">
      <p>請選擇年/月</p>
      <select v-model="selectedYear" class="rounded p-2 h-[40px] w-[120px] cursor-pointer">
        <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
      </select>
      <select v-model="selectedMonth" class="rounded p-2 h-[40px] w-[120px] cursor-pointer">
        <option value="0">整年</option>
        <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
      </select>
      <button
        type="button"
        class="h-9 px-4 bg-blue-900 text-white hover:bg-blue-800 rounded-md"
        @click="getHotWord"
      >
        查詢
      </button>
    </div>
  </div>
  <div class="flex flex-col">
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
                  熱門關鍵字
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  搜尋次數
                </th>
              </tr>
            </thead>
            <tbody
              class="bg-white divide-y divide-gray-200"
              v-for="(data, index) in datas"
              :key="index"
            >
              <tr>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{ data.Key }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{ data.Value }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style></style>
