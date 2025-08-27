
<template>
	<div class="max-w-4xl mx-auto px-4 py-8">
		<div class="bg-white rounded-xl shadow-lg p-6 mb-6">
			<div class="flex items-center gap-4 mb-4">
				<img src="/lanri_.png" alt="Course Logo" class="h-14 w-14 rounded-full bg-blue-100 p-2" />
				<div>
					<h1 class="text-2xl font-bold text-[#002F6C]">{{ course.name || 'Nama Course' }}</h1>
					<p class="text-gray-500 text-sm">{{ course.category || 'Kategori Course' }}</p>
				</div>
			</div>
			<p class="text-gray-700 mb-4">{{ course.description || 'Deskripsi course akan tampil di sini.' }}</p>
			<div class="flex flex-wrap gap-4">
				<span class="bg-yellow-300 text-[#002F6C] px-3 py-1 rounded-full font-semibold text-xs">{{ course.level || 'Level' }}</span>
				<span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold text-xs">{{ course.duration || 'Durasi' }}</span>
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<div class="bg-white rounded-lg shadow p-4">
				<h2 class="text-lg font-bold text-[#002F6C] mb-2">Materi</h2>
				<ul class="list-disc pl-5 text-gray-700">
					<li v-for="materi in course.materials || []" :key="materi.title" class="mb-3">
						<div class="font-semibold">{{ materi.title }}</div>
						<div v-if="materi.description" class="text-xs text-gray-500 mb-1">{{ materi.description }}</div>
						<div v-if="materi.content" class="text-sm text-gray-700" v-html="materi.content"></div>
						<a v-if="materi.file" :href="`/files/${materi.file}`" target="_blank" class="text-blue-600 underline text-xs">Download Materi</a>
					</li>
				</ul>
			</div>
			<div class="bg-white rounded-lg shadow p-4">
				<h2 class="text-lg font-bold text-[#002F6C] mb-2">Quiz / Ujian</h2>
				<ul class="list-disc pl-5 text-gray-700">
					<li v-for="quiz in course.quizzes || [ { title: 'Quiz 1' }, { title: 'Quiz 2' } ]" :key="quiz.title">
						{{ quiz.title }}
					</li>
				</ul>
			</div>
		</div>

		<div class="mt-8 flex justify-end">
			<NuxtLink to="/dashboard/student/courses" class="bg-[#002F6C] text-white px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-[#002F6C] transition-colors">
				Kembali ke Daftar Course
			</NuxtLink>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

definePageMeta({ layout: 'auth' })

const route = useRoute()
const course = ref({})

onMounted(() => {
	// Simulasi fetch data course berdasarkan id
	// Ganti dengan API call sesuai kebutuhan
	course.value = {
		name: 'Matematika Dasar',
		category: 'Matematika',
		description: 'Belajar konsep dasar matematika untuk siswa SD.',
		level: 'SD',
		duration: '12 Pertemuan',
		materials: [
			{
				title: 'Penjumlahan & Pengurangan',
				description: 'Dasar operasi hitung penjumlahan dan pengurangan untuk siswa SD.',
				content: 'Penjumlahan adalah ... <br> Pengurangan adalah ...'
			},
			{
				title: 'Perkalian & Pembagian',
				description: 'Materi tentang konsep perkalian dan pembagian sederhana.',
				file: 'perkalian.pdf'
			},
			{
				title: 'Pengenalan Pecahan',
				description: 'Memahami pecahan dengan contoh visual dan latihan soal.',
				file: 'pecahan.pdf'
			}
		],
		quizzes: [
			{ title: 'Quiz 1: Penjumlahan' },
			{ title: 'Quiz 2: Pecahan' }
		]
	}
})
</script>
