import { state as DefaultDevicesState } from '../devices/state'
import { state as DefaultPatientsState } from '../patients/state'
import type { IRootState } from './types'

export const state: IRootState = {
	devices: DefaultDevicesState,
	patients: DefaultPatientsState
}
