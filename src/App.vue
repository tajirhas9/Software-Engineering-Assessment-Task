<template>
	<router-view v-slot="{ Component }" :key="$route.path">
		<transition name="fade" mode="out-in">
			<component :is="Component" :key="$route.path" />
		</transition>
	</router-view>
</template>

<script setup lang="ts"></script>

<style scoped></style>
