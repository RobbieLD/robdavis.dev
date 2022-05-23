import { createStore, Store } from 'vuex'
import GitHubUser from '@/models/github-user'
import GitHubService from '@/services/github.service'
import State from './state'
import { InjectionKey } from 'vue'

export const storeKey: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state: {
      githubUser: {} as GitHubUser
  },
  getters: {
  },
  mutations: {
      setGitHubUser: (state, user): void => {
        state.githubUser = user
      }
  },
  actions: {
      loadGitHubUser: async ({ commit }): Promise<void> => {
          const service = new GitHubService()
          const user = await service.Profile(process.env?.VUE_APP_GITHUB_USERNAME)
          commit('setGitHubUser', user)
      }
  },
  modules: {
  }
})
