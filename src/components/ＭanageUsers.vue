<script setup lang="ts" type="module">
import { ref, onMounted } from 'vue'
import Swal from 'sweetalert2';
const apiBase = import.meta.env.VITE_API_URL

interface ApiResponse {
  [key: string]: any
}

interface UserData {
  Id: number
  Account: string
  Nickname: string
  WriterProgress: string
  ImgUrl: string
}

const userData = ref<UserData[]>([])

// 取得申請成為作家列表
const getApplication = async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    return
  }
  try {
    const res: ApiResponse = await fetch(`${apiBase}/administratorwriters/get`, {
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` }
    })
    const data = await res.json()
    if (data.StatusCode === 200) {
      userData.value = data.UserData
    } else {
      throw new Error(`發生錯誤 ${data.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}

onMounted(getApplication)

// 發出審核結果訊息
const sendResult = async (id: number) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return
  }
  try {
    const res: ApiResponse = await fetch(`${apiBase}/writernotification/create?writerid=${id}`, {
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
      method: 'POST'
    })
    const data = await res.json()
    if (data.StatusCode === 200) {
      await pushWriter(id)
    } else {
      throw new Error(`發生錯誤 ${data.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}

// Pusher通知審核通過
// Pusher通知追蹤者
const pushWriter = async (id: number) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return
  }
  try {
    const res: ApiResponse = await fetch(`${apiBase}/pusher/bewriter?writerid=${id}`, {
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
      method: 'POST'
    })
    const data = await res.json()
    if (data.StatusCode !== 200) {
      throw new Error(`發生錯誤 ${data.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}

// 修改作家身份
// result
// 2=審核失敗；3=審核成功

const changeRole = async (id: number, result: string) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return
  }
  try {
    const res: ApiResponse = await fetch(`${apiBase}/applyforwriterresult/${id}/${result}`, {
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
      method: 'PUT'
    })
    const data = await res.json()
    if (data.StatusCode === 200) {
      alert(data.Message)
      sendResult(id)
      getApplication()
    } else {
      throw new Error(`發生錯誤 ${data.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}



// 取消作家身份
const cancelRole = (id: number) => {
   Swal.fire({
    title: "請確認是否刪除作家身份",
    text: "一但刪除將無法回復，必須重新申請",
    icon: "error",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "確定刪除",
    cancelButtonText: "關閉"
  }).then((result:any) => {
    if (result.isConfirmed) {
      cancelWriters(id);

    }
  });
};

const cancelWriters = async (id: number) => {
  const token = localStorage.getItem('token')
  if (!token) {
    return
  }
  try {
    const res: ApiResponse = await fetch(`${apiBase}/cancelwriter/${id}`, {
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` },
      method: 'PUT'
    })
    const data = await res.json()
    if (data.StatusCode === 200) {
      Swal.fire("已刪除", "該作家身份刪除成功", "success");
      getApplication()

    } else {
      throw new Error(`發生錯誤 ${data.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div v-if="userData" class="flex flex-col">
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
                  大頭照
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  帳號
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  暱稱
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  申請狀態
                </th>
                <th
                  scope="col"
                  class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider"
                >
                  動作
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="user in userData" :key="user.Id">
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{ user.Id }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  <img :src="user.ImgUrl" alt="User Image" class="h-10 w-10 rounded-full" />
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{ user.Account }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{ user.Nickname }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{ user.WriterProgress }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div v-if="user.WriterProgress === '已申請'" class="flex gap-4">
                    <button
                      type="button"
                      class="btn btn-sm font-normal bg-emerald-600 opacity-90 text-white hover:bg-emerald-700"
                      @click="changeRole(user.Id, '3')"
                    >
                      審核通過
                    </button>
                    <button
                      type="button"
                      class="btn btn-sm font-normal bg-rose-700 text-white hover:bg-rose-800"
                      @click="changeRole(user.Id, '2')"
                    >
                      審核失敗
                    </button>
                  </div>
                  <div v-else-if="user.WriterProgress === '申請成功'" class="flex gap-4">
                    <button
                      type="button"
                      class="btn btn-sm font-normal border-orange-200 bg-slate-50 border-2 hover:bg-orange-400 hover:text-white"
                      @click="cancelRole(user.Id)"
                    >
                      取消作家身份
                    </button>
                  </div>
                  <div v-else>-</div>
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
