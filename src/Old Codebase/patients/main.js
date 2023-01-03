import { setCookie, getCookie } from 'tiny-cookie';
import { computed } from 'vue'
import { useStore } from 'vuex'

$(document).ready(function () {
	let patients = getPatients()

	$('#patients').html(createTable(patients))

	setupClickEvent()
})

function createTable(patients) {
	let html = `<table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                <tbody>`

	patients.forEach((patient) => {
		html += `       <tr>`
		html += `           <td>${patient.name}</td>`
		html += `           <td>${patient.email}</td>`
		html += `           <td>${patient.phone}</td>`
		html += `       </tr>`
	})

	html += `   </tbody>
            </table>`
	return html
}

function getPatients() {
	/**
	 * @returns Patients list
	 *
	 * TODO: Remove the dummy data
	 * TODO: use backend API to fetch patients from the database.
	 *
	 *
	 * ! Do not call any API here. All API calls must lie in the core Vue framework.
	 *
	 */
	
	const store = useStore()

	let patients = computed(() => store.getters.patients)
	console.log(patients)
	return patients
}

function setupClickEvent() {
	$('#patients tbody').on('dblclick', 'tr', function () {
		let children = $(this).children()
		let selectedPatient = {
			name: children[0].innerHTML,
			email: children[1].innerHTML,
			phone: children[2].innerHTML,
		}
		console.log(selectedPatient)
		setCookie('selectedPatient', JSON.stringify(selectedPatient))
	})

	/**
	 * TODO: implement necessary logic to show this patient to banner iFrame
	 */
}
