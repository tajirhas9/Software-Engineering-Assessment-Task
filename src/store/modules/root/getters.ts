import type { GetterTree } from 'vuex'
import type { IRootGetters, IRootState } from './types'

export const getters: GetterTree<IRootState, IRootState> & IRootGetters = {}
