<template>
	<main>
		<p class="instruction">This is a sample component to show how data is fetched from the server</p>
		<div>
			<dl v-for="device in devices" :key="device.id">
				<dt>{{ device.name }}</dt>
				<dd>{{ device.usage }}</dd>
			</dl>
		</div>
	</main>
</template>
<script setup lang="ts">
	import { computed } from 'vue'
	import { useStore } from 'vuex'

	const store = useStore()

	let devices = computed(() => store.getters.devices)
</script>
<style scoped>
	.instruction {
		font-style: italic;
		text-align: center;
		padding-bottom: 3rem;
		vertical-align: top;
		font-size: 1rem;
	}

	dl {
		border: 1px solid var(--color-border);
		padding: 1rem;
		margin-bottom: 10px;
		max-width: 960px;
	}

	dt {
		font-weight: 600;
		font-size: larger;
		padding-bottom: 1rem;
	}

	dd {
		padding-left: 1rem;
	}
</style>
