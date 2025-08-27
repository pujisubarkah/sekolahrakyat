<template>
  <div class="p-6 bg-white rounded-xl shadow">
    <h2 class="text-xl font-bold mb-4">🏅 Leaderboard</h2>
    <ul>
      <li
        v-for="(s, i) in students"
        :key="s.id"
        class="flex justify-between p-3 border-b"
      >
        <span>{{ i+1 }}. {{ s.name }}</span>
        <span class="font-bold text-blue-600">{{ s.points }} pts</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  students: Array
})
</script>
