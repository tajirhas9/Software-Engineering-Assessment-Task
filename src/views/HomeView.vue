<template>
	<main>
		<h1>Welcome to Software Engineer Technical Assessment</h1>
		<!--<div class="device-section">
			<device-list v-if="isDevicesLoaded" />
			<button @click="load" v-else>Load Devices</button>
		</div>-->
		<div>
			<iframe src="src/Old Codebase/patients/index.html" frameborder="0"></iframe>
			<iframe src="src/Old Codebase/banner/index.html" frameborder="0"></iframe>
		</div>
	</main>
</template>

<script setup lang="ts">
	//<import DeviceList from '@/components/DeviceList.vue'
	//import { DevicesModuleAction } from '@/store/modules/devices/types'
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	import axios from 'axios'
	import {setCookie,getCookie } from 'tiny-cookie';
	import { stringify } from 'querystring';
	import { json } from 'stream/consumers';

	let patienttoken={
		headers:{
		Authorization: 'Bearer ' + getCookie('Token')
		}
	}
	axios.get('http://23.94.211.99:8090/api/collections/patients/records',patienttoken)
	.then(response=>{
		const Items=response.data.items
		setCookie('Items',JSON.stringify(Items))
		//console.log(response.data.items)
	})
	.catch((e)=>console.log(e))
	//let store = useStore()

	//let devices = computed(() => store.getters.devices)

	//let isDevicesLoaded = computed(() => {
	//	try {
	//		return devices.value.length > 0
	//	} catch (e) {
	//		return false
	//	}
	//})

	//const load = () => {
	//	store.dispatch(DevicesModuleAction.GetDevices)
	//}

</script>

<style scoped>
	main {
		margin: auto;
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
