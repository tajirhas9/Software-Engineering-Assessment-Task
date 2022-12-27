import type { MutationTree } from 'vuex'
import { EModuleMutation, type IDevice, type IModuleState, type TModuleMutations } from './types'

export const mutations: MutationTree<IModuleState> & TModuleMutations = {
	[EModuleMutation.SET_DEVICES](state, devices: IDevice[] | null) {
		state.devices = devices
	},
}
