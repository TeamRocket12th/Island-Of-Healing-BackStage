<script setup lang="ts">
import { ref } from 'vue'

const sideBarList = [
  {
    id: '1',
    content: '作家身份管理',
    link: 'manageusers'
  },
  {
    id: '2',
    content: '管理文章',
    link: 'reviewarticles'
  },
  {
    id: '3',
    content: '精選文章管理',
    link: 'bestarticles'
  },
  {
    id: '4',
    content: '熱門關鍵字搜尋',
    link: 'hotword'
  },
  {
    id: '5',
    content: '費用單管理',
    link: 'feecalculate'
  }
]

const activeId = ref('')
const setActiveLink = (id: string) => {
  activeId.value = id
}
</script>

<template>
  <div class="bg-slate-200 w-64 h-full">
    <ul class="py-3 flex flex-col">
      <li
        v-for="item in sideBarList"
        :key="item.id"
        class="text-blue-950 hover:bg-slate-600 hover:text-white cursor-pointer"
        :class="{ 'bg-slate-600 text-white': activeId === item.id }"
      >
        <RouterLink
          :to="`/dashboard/${item.link}`"
          class="block px-4 py-2"
          @click="setActiveLink(item.id)"
          >{{ item.content }}</RouterLink
        >
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
