<template>
	<body>
		<div style="width: 1125px">
			<div style="float: center,margin-bottom: 30px">
				<iframe width="1260px" height="315px" :srcdoc="HeadHtml" frameborder="1" allowfullscreen></iframe>
			</div>

			<div style="float: right">
				<iframe width="560px" height="315px" :srcdoc="TableHtml" frameborder="1" allowfullscreen></iframe>
			</div>
			<div style="float: left">
				<iframe width="560px" height="315px" :srcdoc="GotHtml" frameborder="1" allowfullscreen></iframe>
			</div>

			<div style="clear: both"></div>
		</div>
	</body>
</template>

<script>
	let name = ['Rafi', 'asif']
	let selected = 'None'
	import DeviceList from '@/components/DeviceList.vue'
	import { DevicesModuleAction } from '@/store/modules/devices/types'
	import { computed } from 'vue'
	import { useStore } from 'vuex'
	import axios from 'axios'

	let store = useStore()

	let devices = computed(() => store.getters.devices)

	let isDevicesLoaded = computed(() => {
		try {
			return devices.value.length > 0
		} catch (e) {
			return false
		}
	})

	const load = () => {
		store.dispatch(DevicesModuleAction.GetDevices)
	}
	export default {
		name: 'App',
		data() {
			return {
				arr: [],
				TableHtml: `<h1 style="color: white">
						<table border=1>
							<tr>
								<th>
									Patients
								</th>
							    <th>
									Email
								</th>
								 <th>
									 Phone
								</th>
							</tr>
							<tr>
								<td>${name[0]} </td>
								<td> 123@gmail.com </td>
								<td> 0162762 </td>
							</tr>
							<tr>
							<td> ${name[1]} </td>
								<td> example@gmail.com </td>
								<td> 01712233367 </td>
								</tr>
								</h1> `,
				GotHtml: `<h1 style="color: white"> This Patient is ${selected}</h1>`,
				HeadHtml: `<h1 style="color:white"><p align="center"> Welcome to Software Engineer Technical Assessment</p></h1>`,
			}
		},
		methods: {
			async load() {
				let result = await axios
					.get('http://localhost:3000/patients/records')
					.then((res) => {
						for (let i in res.data) {
							//console.warn(res.data[i].name)
							this.arr.push(res.data[i].name)
							console.warn(this.arr[0])
						}
					})
					.catch((err) => {
						console.warn(err)
					})
			},

			logout() {
				console.warn('logout')
			},
		},
		beforeMount() {
			this.load()
		},
	}
</script>

<style scoped>
	body,
	html {
		height: 100%;
		width: 100%;
	}
	body {
		background-color: black;
	}

	main {
		margin: auto;
	}

	h1 {
		margin-top: 20px;
		margin-left: 180px;
		color: aliceblue;
		margin-bottom: 10rem;
		text-align: center;
	}

	button {
		text-align: center;
		padding: 10px 0px;
		width: 10rem;
		border-radius: 20px;
		background-color: var(--vt-c-primary);
		cursor: pointer;
	}
	p {
		color: white;
	}
	.visible {
		color: aliceblue;
	}
	iframe {
		color: aliceblue;
	}
</style>
