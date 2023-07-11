<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-slate-100">
    <div class="navbar border-b border-gray-300">
      <nav class="flex items-center h-10 justify-between w-full pr-4">
        <h1 class="text-2xl font-medium ml-4">小島聊癒所 - 後台</h1>
        <div><RouterLink to="/dashboard" class="btn btn-sm">回到首頁</RouterLink></div>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped></style>
