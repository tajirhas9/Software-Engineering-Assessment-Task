import { setCookie, getCookie } from 'tiny-cookie';
import { computed } from 'vue'
import { useStore } from 'vuex'
import 'https://code.jquery.com/jquery-3.6.3.slim.min.js'

var $ = jQuery.noConflict();


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




export  function getPatients(paitients) {
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


	const element = document.getElementById("if2").contentWindow.document.getElementById('patients')

	const createHtml = createTable(paitients)

	console.log("createHtml",createHtml)
	element.innerHTML = createHtml
	
	

}

function setupClickEvent() {
	$('#patients tbody').on('dblclick', 'tr', function () {
		let children = $(this).children()
		let selectedPatient = {
			name: children[0].innerHTML,
			email: children[1].innerHTML,
			phone: children[2].innerHTML,
		}
		//console.log(selectedPatient)
		return selectedPatient
		//setCookie('selectedPatient', JSON.stringify(selectedPatient))
	})

	/**
	 * TODO: implement necessary logic to show this patient to banner iFrame
	 */
}


