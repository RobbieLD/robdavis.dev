<template>
  <router-view v-if="modulesLoaded" />
  <ProgressSpinner class="loading" v-if="!modulesLoaded"></ProgressSpinner>
  <Toast />
</template>
<script lang="ts">
    import { defineComponent, onMounted, ref } from 'vue'
    import { useStore } from 'vuex'
    import { storeKey } from './store'
    import Toast from 'primevue/toast'
    import ProgressSpinner from 'primevue/progressspinner'

    export default defineComponent({
        name: 'App',
        components: {
            Toast,
            ProgressSpinner
        },
        setup() {
            const store = useStore(storeKey)
            const modulesLoaded = ref(false)
            
            
            onMounted(() => {
                Promise.all([
                    store.dispatch('loadGitHubUser'),
                    store.dispatch('loadProfile'),
                    store.dispatch('loadSocials'),
                    store.dispatch('loadSkills'),
                    store.dispatch('loadHobbies'),
                    store.dispatch('loadJobs'),
                    store.dispatch('loadCerts'),
                    store.dispatch('loadEducations')
                ]).then(() => {
                    modulesLoaded.value = true
                })
            })

            return {
                modulesLoaded
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
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
    }

    .p-progressbar {
        border-radius: 0 !important;
    }

    .p-progressbar-value {
        background-color: var(--secondary-color) !important;
    }

    .wait {
        color: var(--dark-grey);
        position: fixed;
        top: 30%;
        width: 100%;
        text-align: center;
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

    @keyframes p-progress-spinner-color {
        100%,
        0% {
            stroke: var(--primary-color);
        }
        90% {
            stroke: var(--secondary-color);
        }
    }
</style>
