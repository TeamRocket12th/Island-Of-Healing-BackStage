<script setup lang="ts">
import { ref, onMounted } from 'vue'



const apiBase = import.meta.env.VITE_API_URL
interface ApiResponse {
  [key: string]: any
}


// 取得費用單
const datas = ref<ApiResponse[]>([]);
const getFee = async () => {

  const token = localStorage.getItem('token')
  if (!token) {
    return
  }
  try {
    const res: ApiResponse = await fetch(`${apiBase}/expense/get`, {
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` }
    })
    const data = await res.json()
    console.log(data)
    if (data.StatusCode === 200) {
      
      console.log(data.ExpenseData)
      datas.value = data.ExpenseData

    } else {
      throw new Error(`發生錯誤 ${data.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}
onMounted(getFee)
// 新增費用單
// const datas = ref<ApiResponse[]>([]);
const id = ref('')
const createFee = async () => {
  const token = localStorage.getItem('token')
  
  if (!token) {
    return
  }
  try {
    const res: ApiResponse = await fetch(`${apiBase}/expense/create?userid=${id.value}`, {
      method: 'POST',
      headers: { 'Content-type': 'application/json', Authorization: `Bearer ${token}` }
    })
    const data = await res.json()
    console.log(data)
    if (data.StatusCode === 200) {

      console.log(data.ExpenseData)
      datas.value = data.ExpenseData
      getFee()
    } else {
      throw new Error(`發生錯誤 ${data.Message}`)
    }
  } catch (error) {
    console.log(error)
  }
}

// 修改費用單
const editFee = async (data:any) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return;
  }
  try {
    const res = await fetch(`${apiBase}/expense/update`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        Id: data.Id,
        ContractId: data.ContractId,
        PayDate: data.PayDate,
        Amount: data.Amount,
        Paid: data.Paid
      })
    });

    const responseData = await res.json();
    console.log(responseData);
  
    if (responseData.StatusCode === 200) {
      datas.value = responseData.ExpenseData;
      getFee();
    } else {
      throw new Error(`發生錯誤 ${responseData.Message}`);
    }
  } catch (error) {
    console.log(error);
  }
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date
    .getDate()
    .toString()
    .padStart(2, '0')}`
}
</script>
<template>
  <h1 class="text-3xl mb-4">新增費用單</h1>
  <div class="flex mb-10"><input class="px-2 border shadow-md" v-model="id" placeholder="請輸入作家編號" type="text"><button class="shadow-lg border ml-2 h-[40px] px-4 bg-blue-900 text-white rounded" @click="createFee">新增</button></div>
  <div  class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th scope="col" class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                  筆數
                </th>
                <th scope="col" class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                  費用單編號
                </th>
                <th scope="col" class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                  作家編號
                </th>
                
                
                <th scope="col" class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                    費用
                </th>
                <th scope="col" class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                    是否已完成付款
                </th>
                <th scope="col" class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                    費用單創建日期
                </th>
                <th scope="col" class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                    付款日期
                </th>
                <th scope="col" class="px-6 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">
                      編輯
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="data in datas" :key="data.Id">
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{ data.Id }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap" v-if="data.Edit">
                      <input v-model="data.ContractId" class="border">
                </td>
                <td class="px-6 py-4 whitespace-nowrap underline  text-blue-500 cursor-pointer" @click="editFee(data)" v-else>
                    {{ data.ContractId }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  {{ data.WriterId }}
                </td>

                <td class="px-6 py-4 whitespace-nowrap" v-if="data.Edit">
                    <input v-model="data.Amount" class="border w-20">
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500" v-else>
                  {{ data.Amount }}
                </td>
               <td class="px-6 py-4 whitespace-nowrap" v-if="data.Edit">
                        <select v-model="data.Paid" class="border w-20">
                          <option :value= true>是</option>
                          <option :value= false>否</option>

                         </select>
                  </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500" v-else>
                  <p v-if="data.Paid === true">是</p>
                  <p v-else>否</p>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                    {{ formatDate(data.InitDate) }}
                    
                </td>
                <td class="px-6 py-4 whitespace-nowrap" v-if="data.Edit">
                        <input v-model="data.PayDate" class="border w-[220px]">
                  </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500" v-else>
                    {{ formatDate(data.PayDate) }}
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-gray-500">
                  <button class=" border ml-2 p-2 h-[40px] px-4 bg-blue-900 text-white rounded" v-if='!data.Edit' @click="data.Edit = true">編輯</button>
                   <button class=" border ml-2 p-2 h-[40px] px-4 bg-blue-900 text-white rounded" v-else  @click="editFee(data)"  >完成</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
th,td{
  text-align: center;
}
input{
  padding: 5px;
}
</style>