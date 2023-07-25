<script setup lang="ts"></script>

<template>
  <div class="bg-slate-200 w-64 h-full">
    <ul class="py-3 flex flex-col">
      <li class="text-blue-950 hover:bg-slate-600 hover:text-white cursor-pointer">
        <RouterLink to="/dashboard/manageusers" class="block px-4 py-2"
          >審核成為作家申請</RouterLink
        >
      </li>
      <li class="text-blue-950 hover:bg-slate-600 hover:text-white cursor-pointer">
        <RouterLink to="/dashboard/reviewarticles" class="block px-4 py-2">管理文章</RouterLink>
      </li>
      <li class="text-blue-950 hover:bg-slate-600 hover:text-white cursor-pointer">
          <RouterLink to="/dashboard/hotword" class="block px-4 py-2">熱門關鍵字搜尋</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
