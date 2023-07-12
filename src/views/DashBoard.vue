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
    content: '審核使用者提出的成為作家申請'
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
</script>

<template>
  <main class="bg-slate-100 h-screen grid grid-cols-12">
    <div class="col-span-2 bg-slate-200">
      <SideBar />
    </div>
    <div class="col-span-10 bg-slate-100 p-6">
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
