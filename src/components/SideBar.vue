<script setup lang="ts"></script>

<template>
  <div class="bg-slate-200 w-64 h-full">
    <ul class="py-3">
      <li class="text-blue-950 hover:bg-slate-600 hover:text-white cursor-pointer">
        <RouterLink to="/dashboard/manageusers" class="block px-4 py-2">更改使用者身份</RouterLink>
      </li>
      <li class="text-blue-950 hover:bg-slate-600 hover:text-white cursor-pointer">
        <RouterLink to="/dashboard/reviewarticles" class="block px-4 py-2">審核文章</RouterLink>
      </li>
      <li class="text-blue-950 hover:bg-slate-600 hover:text-white cursor-pointer">
        <RouterLink to="/" class="block px-4 py-2">重新登入</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
