<template>
	<main>
		<h1>Welcome to Software Engineer Technical Assessment</h1>
		<!-- <div class="device-section">
			<device-list v-if="isDevicesLoaded" />
			<button @click="load" v-else>Load Devices</button> -->
			<iframe src="http://127.0.0.1:5501/patients/index.html" frameborder="0"></iframe>
		<!--</div>-->
	</main>
</template>

<script setup lang="ts">
	import axios from 'axios';
	var record
axios.get('http://23.94.211.99:8090/api/collections/patients/records')
	.then((record) => console.log(record))
	.catch((error)=>console.log(error))
	// import DeviceList from '@/components/DeviceList.vue'
	// import { DevicesModuleAction } from '@/store/modules/devices/types'
	// import { computed } from 'vue'
	// import { useStore } from 'vuex'

	// let store = useStore()

	// let devices = computed(() => store.getters.devices)

	// let isDevicesLoaded = computed(() => {
	// 	try {
	// 		return devices.value.length > 0
	// 	} catch (e) {
	// 		return false
	// 	}
	// })

	// const load = () => {
	// 	store.dispatch(DevicesModuleAction.GetDevices)
	// }
</script>

<style scoped>
	 main {
		margin:none;
	}

	h1 {
		margin-bottom: 10rem;
		text-align: center;
	}

	.device-section {
		margin: auto;
		max-width: fit-content;
	}

	button {
		text-align: center;
		padding: 10px 0px;
		width: 10rem;
		border-radius: 20px;
		background-color: var(--vt-c-primary);
		cursor: pointer;
	}

	iframe {
		min-height: 30vh;
		min-width: 30vw;
		max-height: 100vh;
		max-width: 100vw;
	}
	
</style>
