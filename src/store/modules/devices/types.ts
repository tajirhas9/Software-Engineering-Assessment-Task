import type { Store as VuexStore, ActionContext, CommitOptions, DispatchOptions } from 'vuex'
import type { IRootState } from '../root/types'

export interface IDevice {
	id: string
	name: string
	usage: string
}

export interface IModuleState {
	devices: IDevice[] | null
}

export interface IModuleGetters {
	devices(state: IModuleState): IDevice[] | null
}

export enum EModuleMutation {
	SET_DEVICES = 'SET_DEVICES',
}

export type TModuleMutations<S = IModuleState> = {
	[EModuleMutation.SET_DEVICES](state: S, devices: IDevice[] | null): void
}

export type AugmentedActionContext = {
	commit<K extends keyof TModuleMutations>(
		key: K,
		payload: Parameters<TModuleMutations[K]>[1]
	): ReturnType<TModuleMutations[K]>
} & Omit<ActionContext<IModuleState, IRootState>, 'commit'>

export enum EModuleAction {
	GetDevices = 'GET_DEVICES',
}

export type TModuleActions = {
	[EModuleAction.GetDevices]({ commit }: AugmentedActionContext): Promise<void>
}

export type IModule<S = IModuleState> = Omit<VuexStore<S>, 'commit' | 'getters' | 'dispatch'> & {
	commit<K extends keyof TModuleMutations, P extends Parameters<TModuleMutations[K]>[1]>(
		key: K,
		payload?: P,
		options?: CommitOptions
	): ReturnType<TModuleMutations[K]>
} & {
	getters: {
		[K in keyof IModuleGetters]: ReturnType<IModuleGetters[K]>
	} & {
		dispatch<K extends keyof TModuleActions>(
			key: K,
			payload?: Parameters<TModuleActions[K]>[1],
			options?: DispatchOptions
		): ReturnType<TModuleActions[K]>
	}
}

export type { IModuleState as DevicesModuleState }
export { EModuleAction as DevicesModuleAction }
export { EModuleMutation as DevicesModuleMutation }
export type { IModuleGetters as DevicesModuleGetters }
