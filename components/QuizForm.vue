<template>
  <div class="p-6 border rounded-xl bg-white shadow">
    <h2 class="text-lg font-bold mb-4">📝 {{ quizTitle }}</h2>
    <form @submit.prevent="submitQuiz">
      <div v-for="(q, index) in questions" :key="index" class="mb-4">
        <p class="font-semibold mb-2">{{ index+1 }}. {{ q.text }}</p>
        <div class="space-y-2">
          <label v-for="(opt, i) in q.options" :key="i" class="flex items-center gap-2">
            <input type="radio" :name="'q'+index" :value="opt" v-model="answers[index]" />
            {{ opt }}
          </label>
        </div>
      </div>
      <button type="submit" class="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Kirim Jawaban
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue"

defineProps({
  quizTitle: String,
  questions: Array
})

const answers = ref([])

const submitQuiz = () => {
  console.log("Jawaban:", answers.value)
  alert("Kuis dikirim!")
}
</script>
