<template>
  <!-- Blok kuis langsung dihapus, hanya detail tugas dan form submit jawaban yang tampil -->
	<div class="max-w-3xl mx-auto px-4 py-8">
		<div class="bg-white rounded-xl shadow-lg p-6 mb-6">
			<div class="flex items-center gap-4 mb-4">
				<img src="/lanri_.png" alt="Task Logo" class="h-12 w-12 rounded-full bg-blue-100 p-2" />
				<div>
					<h1 class="text-2xl font-bold text-[#002F6C]">{{ task.title || 'Judul Tugas' }}</h1>
					<p class="text-gray-500 text-sm">{{ task.subject || 'Mata Pelajaran' }}</p>
			</div>
			<p class="text-gray-700 mb-4">{{ task.description || 'Deskripsi tugas akan tampil di sini.' }}</p>
			<div class="flex flex-wrap gap-4 mb-2">
				<span class="bg-yellow-300 text-[#002F6C] px-3 py-1 rounded-full font-semibold text-xs">Deadline: {{ task.deadline || '-' }}</span>
				<span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-xs">Status: {{ task.status || 'Belum Dikerjakan' }}</span>
			</div>
			<div v-if="task.file" class="mt-2">
				<a :href="`/files/${task.file}`" target="_blank" class="text-blue-600 underline text-xs">Download Lampiran</a>
			</div>
		</div>

		<div class="bg-white rounded-lg shadow p-4 mb-6">
			<h2 class="text-lg font-bold text-[#002F6C] mb-2">Instruksi</h2>
			<div class="text-gray-700 text-sm" v-html="task.instructions || 'Instruksi tugas akan tampil di sini.'"></div>
		</div>

	
			<button
				class="mt-3 bg-[#002F6C] text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-[#002F6C] transition-colors"
				@click="submitQuiz"
			>
				Submit Jawaban
			</button>
		</div>

		<div class="bg-white rounded-lg shadow p-4">
			<h2 class="text-lg font-bold text-[#002F6C] mb-2">Submit Jawaban</h2>
			<input type="file" class="mb-2" />
			<textarea class="w-full border rounded p-2 mb-2" rows="4" placeholder="Tulis jawaban atau catatan..."></textarea>
			<button class="bg-[#002F6C] text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-[#002F6C] transition-colors">Kirim Jawaban</button>
		</div>

		<div class="mt-8 flex justify-end">
			<NuxtLink to="/dashboard/student/tasks" class="bg-[#002F6C] text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-[#002F6C] transition-colors">
				Kembali ke Daftar Tugas
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

definePageMeta({ layout: 'auth' })

const route = useRoute()
const task = ref({})
const quiz = ref({ question: '', choices: [], answer: null, result: '', correct: '' })

const assignments = [
  {
    id: '1',
    title: 'Tugas Matematika: Pecahan',
    subject: 'Matematika',
    description: 'Kerjakan soal pecahan berikut dan upload jawabanmu.',
    deadline: '31 Agustus 2025',
    status: 'Belum Dikerjakan',
    file: 'soal-pecahan.pdf',
    instructions: '<ul><li>Baca soal pada lampiran.</li><li>Kerjakan di kertas, lalu upload foto/jawaban.</li><li>Jawaban bisa ditulis di bawah atau di-upload.</li></ul>',
    quiz: {
      question: 'Berapa hasil dari 1/2 + 1/4?',
      choices: [
        { text: '3/4', value: 'A' },
        { text: '2/4', value: 'B' },
        { text: '1/4', value: 'C' },
        { text: '1', value: 'D' }
      ],
      correct: 'A'
    }
  },
  {
    id: '2',
    title: 'Esai Bahasa Indonesia',
    subject: 'Bahasa Indonesia',
    description: 'Tulis esai tentang pengalaman belajar di sekolah.',
    deadline: '2 September 2025',
    status: 'Belum Dikerjakan',
    instructions: '<ul><li>Tulis minimal 300 kata.</li><li>Upload file esai jika sudah selesai.</li></ul>'
    // Tidak ada quiz
  },
  {
    id: '3',
    title: 'Laporan IPA Eksperimen',
    subject: 'IPA',
    description: 'Buat laporan hasil eksperimen sains.',
    deadline: '5 September 2025',
    status: 'Belum Dikerjakan',
    instructions: '<ul><li>Ikuti format laporan yang diberikan.</li><li>Upload file laporan.</li></ul>'
    // Tidak ada quiz
  }
]

onMounted(() => {
  const found = assignments.find(t => t.id === route.params.id)
  task.value = found || {}
  if (task.value.quiz) {
    quiz.value.question = task.value.quiz.question
    quiz.value.choices = task.value.quiz.choices
    quiz.value.answer = null
    quiz.value.result = ''
    quiz.value.correct = task.value.quiz.correct
  }
})

function submitQuiz() {
  if (!quiz.value.answer) {
    quiz.value.result = 'Pilih jawaban dulu!'
    return
  }
  if (quiz.value.answer === quiz.value.correct) {
    quiz.value.result = 'Jawaban benar! Kamu dapat 10 poin.'
  } else {
    quiz.value.result = 'Jawaban salah, coba lagi!'
  }
}
</script>
