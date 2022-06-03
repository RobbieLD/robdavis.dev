<template>
  <router-view v-if="modulesLoaded == 8" />
  <ProgressBar :value="progress" class="loading" v-if="modulesLoaded < 8" />
  <Toast />
</template>
<script lang="ts">
    import { computed, defineComponent, onMounted, ref } from 'vue'
    import { useStore } from 'vuex'
    import { storeKey } from './store'
    import Toast from 'primevue/toast'
    import ProgressBar from 'primevue/progressbar'

    export default defineComponent({
        name: 'App',
        components: {
            Toast,
            ProgressBar
        },
        setup() {
            const store = useStore(storeKey)
            const modulesLoaded = ref(0)
            const progress = computed(() => (modulesLoaded.value / 8) * 100)

            onMounted(() => {
                store.dispatch('loadGitHubUser').then(() => modulesLoaded.value++)
                store.dispatch('loadProfile').then(() => modulesLoaded.value++)
                store.dispatch('loadSocials').then(() => modulesLoaded.value++)
                store.dispatch('loadSkills').then(() => modulesLoaded.value++)
                store.dispatch('loadHobbies').then(() => modulesLoaded.value++)
                store.dispatch('loadJobs').then(() => modulesLoaded.value++)
                store.dispatch('loadCerts').then(() => modulesLoaded.value++)
                store.dispatch('loadEducations').then(() => modulesLoaded.value++)
            })

            return {
                modulesLoaded,
                progress
            }
        }
    })
</script>
<style lang="scss">
    :root {
        --primary-color: #123456 !important;
        --secondary-color: #c5508a !important;
        --primary-color-text: rgb(255, 255, 255) !important;
        --secondary-color-text: rgb(255, 255, 255) !important;
        --primary-color-text-transparent: rgba(255, 255, 255, 0) !important;
        --dark-grey: #646464;
        --light-grey: rgb(153, 153, 153);
        --very-light-grey: rgb(230, 230, 230);
    }

    html,
    body {
        font-size: 14px;
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    * {
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
    }

    @page {
        size: A4 portrait;
        margin: 0px;
    }

    @media print {
        html, body {
            width: 210mm;
            height: 297mm;
        }
    }

    .loading {
        width: 100vw;
    }

    .p-progressbar {
        border-radius: 0 !important;
    }

    .p-progressbar-value {
        background-color: var(--secondary-color) !important;
    }

    

    #app {
      display: grid;
      grid-template-columns: 22em 1fr;
      border-left: var(--secondary-color) 2em solid;
    }

    @media only screen and (max-width: 800px) {
        #app {
            grid-template-columns: 1fr;
        }
    }
</style>
