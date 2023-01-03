<template>
	<main>
		<h1>Welcome to Software Engineer Technical Assessment</h1>
		  <div class="device-section">
			<!-- <device-list v-if="isDevicesLoaded" />
			<button @click="load" v-else>Load Devices</button> -->
			<iframe src='src/Old Codebase\banner\index.html' frameborder="0"></iframe>
			<iframe src='src/Old Codebase\patients\index.html' frameborder="0"></iframe>
		</div>
	</main>
</template>

<script setup lang="ts">
	import LogInVue from '@/components/LogIn.vue'

    //import Patientlist from '@/components/PatientList.vue'

	// import DeviceList from '@/components/DeviceList.vue'
	// import { DevicesModuleAction } from '@/store/modules/devices/types'
	import { PatientsModuleAction } from '@/store/modules/patients/types'
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	import { setCookie, getCookie } from 'tiny-cookie';

	// import axios from 'axios'

	let store = useStore()
// 	console.log('HJGDSFHGDSF')
// 	const getToken = getCookie('token')
// 	console.log(getToken)

// 	let config = {
// 		headers: {
// 			Authorization: 'Bearer ' + getToken,
// 		}
// }

// 	console.log(config)
	// let devices = computed(() => store.getters.devices)
	let patients = computed(() => store.getters.patients)

	// axios.get('http://23.94.211.99:8090/api/collections/patients/records', config)
	// 	.then(response => {
	// 			console.log('hsdhdgfjdsbfjs')
	// 			console.log(response)
	// 			let patients = response.data.items
	// 			setCookie('patients', JSON.stringify(patients))
	// 		})
	// 	.catch((e)=>console.log(e))




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

	// let isPatientsLoaded = computed(() => {
	// 	try {
	// 		return patients.value.length > 0
	// 	} catch (e) {
	// 		return false
	// 	}
	// })

	// if (patients.value.length > 0) console.log('yes')
	// else console.log('No')
	store.dispatch(PatientsModuleAction.GetPatients)
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
