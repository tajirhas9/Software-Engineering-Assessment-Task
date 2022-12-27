import { state as DefaultDevicesState } from '../devices/state'
import type { IRootState } from './types'

export const state: IRootState = {
	devices: DefaultDevicesState,
}
