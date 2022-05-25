import { createStore, Store } from 'vuex'
import GitHubUser from '@/models/github-user'
import GitHubService from '@/services/github.service'
import State from './state'
import { InjectionKey } from 'vue'
import ProfileService from '@/services/profile.service'
import ProfileDetails from '@/models/profile.details'

export const storeKey: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state: {
      githubUser: {} as GitHubUser,
      profileDetails: {} as ProfileDetails,
      socials: [],
      skills: [],
      hobbies: [],
      jobs: []
  },
  getters: {
  },
  mutations: {
      setGitHubUser: (state, user): void => {
        state.githubUser = user
      },

      setProfileDetails: (state, details): void => {
          state.profileDetails = details
      },

      setSocials: (state, socials): void => {
          state.socials = socials
      },

      setSkills: (state, skills): void => {
          state.skills = skills
      },
      
      setHobbies: (state, hobbies): void => {
          state.hobbies = hobbies
      },

      setJobs: (state, jobs): void => {
          state.jobs = jobs
      }
  },
  actions: {
      loadGitHubUser: async ({ commit }): Promise<void> => {
          const service = new GitHubService()
          const user = await service.Profile(process.env?.VUE_APP_GITHUB_USERNAME)
          commit('setGitHubUser', user)
      },

      loadProfile: async ({ commit }): Promise<void> => {
          const service = new ProfileService()
          const details = await service.Details()
          commit('setProfileDetails', details)
      },

      loadSocials: async ({ commit }): Promise<void> => {
          const service = new ProfileService()
          const socials = await service.Socials()
          commit('setSocials', socials)
      },

      loadSkills: async ({ commit }): Promise<void> => {
          const service = new ProfileService()
          const skills = await service.Skills()
          commit('setSkills', skills)
      },

      loadHobbies: async ({ commit }): Promise<void> => {
          const service = new ProfileService()
          const hobbies = await service.Hobbies()
          commit('setHobbies', hobbies)
      },

      loadJobs: async ({ commit }): Promise<void> => {
          const service = new ProfileService()
          const jobs = await service.Jobs()
          commit('setJobs', jobs)
      }
  },
  modules: {
  }
})
