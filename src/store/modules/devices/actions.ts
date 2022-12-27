import { getDevices } from '@/api/devices'
import type { ActionTree } from 'vuex'
import type { IRootState } from '../root/types'
import { type IModuleState, type TModuleActions, EModuleAction, type IDevice, EModuleMutation } from './types'

export const actions: ActionTree<IModuleState, IRootState> & TModuleActions = {
	async [EModuleAction.GetDevices]({ commit }) {
		try {
			const data: any = await getDevices()
			// Process data
			const devices = data.items as IDevice[]
			commit(EModuleMutation.SET_DEVICES, devices)
		} catch (e) {
			commit(EModuleMutation.SET_DEVICES, null)
		}
	},
}
