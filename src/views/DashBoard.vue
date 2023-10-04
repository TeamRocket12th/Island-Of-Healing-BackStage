<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
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
    content: '精選文章管理'
  },
  {
    id: '4',
    content: '熱門關鍵字搜尋'
  },
  {
    id: '5',
    content: '費用單管理'
  }
])

const showFeatures = ref(true)
const route = useRoute()

watch(
  () => route.path,
  (newPath, oldPath) => {
    if (newPath !== '/dashboard') {
      showFeatures.value = false
    } else {
      showFeatures.value = true
    }
  },
  { immediate: true }
)

const isSidebarOpen = ref(true)

const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}
</script>

<template>
  <main class="bg-slate-100 relative min-h-screen">
    <div
      :class="isSidebarOpen ? 'w-48' : 'w-0'"
      class="h-full absolute bg-slate-200 transition-all duration-300 z-10 overflow-hidden"
    >
      <SideBar />
    </div>

    <div :class="isSidebarOpen ? 'ml-48' : 'ml-0'" class="h-full transition-all duration-300">
      <button
        @click="toggleSidebar"
        class="fixed top-1/4 bg-slate-500 text-white rounded-full p-2 z-20"
        :style="{ left: isSidebarOpen ? '11rem' : '1rem' }"
      >
        <span v-if="isSidebarOpen">-</span>
        <span v-else>+</span>
      </button>
      <div class="bg-slate-100 p-14">
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
    </div>
  </main>
</template>

<style></style>
