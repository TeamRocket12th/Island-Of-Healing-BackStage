<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SideBar from '../components/SideBar.vue'

const announcement = ref([
  {
    id: '1',
    content: '修改文章審核進度'
  },
  {
    id: '2',
    content: '審核使用者提出的成為作家申請,取消作家身分'
  },
  {
    id: '3',
    content: '熱門關鍵字搜尋'
  },
  {
    id: '4',
    content: '費用單管理'
  }
])

const router = useRouter()

const showFeatures = ref(true)
router.beforeEach((to) => {
  if (to.path !== '/dashboard') {
    showFeatures.value = false
  } else {
    showFeatures.value = true
  }
})

const isSidebarOpen = ref(true)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <main class="bg-slate-100 grid min-h-screen" :class="isSidebarOpen ? 'grid-cols-12' : 'block'">
    <div class="relative" :class="isSidebarOpen ? 'col-span-2' : ''">
      <div
        class="absolute h-full bg-slate-200 transition-all duration-300 ease-in-out overflow-hidden"
        :class="isSidebarOpen ? 'left-0' : '-left-full'"
      >
        <SideBar />
      </div>
      <button
        @click="toggleSidebar"
        class="absolute top-1/4 transform -translate-x-[-50%] translate-y-2 bg-slate-500 text-white border-none rounded-full p-2 transition-all duration-300"
        :style="{ left: isSidebarOpen ? '14rem' : '0' }"
      >
        <span v-if="isSidebarOpen">-</span>
        <span v-else>+</span>
      </button>
    </div>
    <div class="bg-slate-100 p-6" :class="isSidebarOpen ? 'col-span-10' : 'col-span-full'">
      <div v-if="showFeatures">
        <h2 class="text-2xl font-semibold text-slate-800 mb-10">目前功能</h2>
        <ul>
          <li v-for="feat in announcement" :key="feat.id" class="mb-2">
            {{ feat.id + '. ' + feat.content }}
          </li>
        </ul>
      </div>
      <RouterView />
    </div>
  </main>
</template>

<style></style>
