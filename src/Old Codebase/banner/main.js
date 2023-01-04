import {getCookie} from "tiny-cookie"

$(document).ready(function () {
	let patient = getSelectedPatient()

	$('#banner').html(`<p>Selected Patient: ${patient.name}</p>`)
})

function getSelectedPatient() {
	/**
	 * @returns the patient selected in {@link /static/patient/index.html}.
	 *
	 *
	 * TODO Remove the dummy data
	 * TODO Retrieve the selected patient in patient iFrame
	 *
	 * ! Do not call the api here. All API calls must lie in the core Vue framework.
	 */
	let selectpatient=JSON.parse(getCookie('Sepatient'))
	console.log("hdgfdhsfh   ",selectpatient)
	return selectpatient
}
