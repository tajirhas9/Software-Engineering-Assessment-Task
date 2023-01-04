import type { MutationTree } from 'vuex'
import { EModuleMutation, type IPatients, type IModuleState, type TModuleMutations } from './types'

export const mutations: MutationTree<IModuleState> & TModuleMutations = {
	[EModuleMutation.SET_PATIENTS](state, patients: IPatients[] | null) {
		state.patients = patients
	},
}
