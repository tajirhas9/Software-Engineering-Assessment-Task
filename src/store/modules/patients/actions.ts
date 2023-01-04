import { getPatients } from '@/api/patients'
import type { ActionTree } from 'vuex'
import type { IRootState } from '../root/types'
import { type IModuleState, type TModuleActions, EModuleAction, type IPatients, EModuleMutation } from './types'

export const actions: ActionTree<IModuleState, IRootState> & TModuleActions = {
	async [EModuleAction.GetPatients]({ commit }) {
		try {
			const data: any = await getPatients()
			// Process data
			const patients= data.items as IPatients[]
			commit(EModuleMutation.SET_PATIENTS, patients)
		} catch (e) {
			commit(EModuleMutation.SET_PATIENTS, null)
		}
	},
}
