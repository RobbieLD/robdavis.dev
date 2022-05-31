<template>
  <router-view />
</template>
<script lang="ts">
    import { defineComponent, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import { storeKey } from './store'
    import { useToast } from 'primevue/usetoast'

    export default defineComponent({
        name: 'App',
        setup() {
            const toast = useToast()
            const store = useStore(storeKey)

            onMounted(() => {
                Promise.all([
                    store.dispatch('loadGitHubUser'),
                    store.dispatch('loadProfile'),
                    store.dispatch('loadSocials'),
                    store.dispatch('loadSkills'),
                    store.dispatch('loadHobbies'),
                    store.dispatch('loadJobs'),
                    store.dispatch('loadCerts'),
                    store.dispatch('loadEducations'),
                    store.dispatch('loadReferences')])
                    .catch((e: Error) => {
                        toast.add({severity:'error', summary: e.name, detail:e.message, life: 3000})
                    })
            })
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

  #app {
      display: grid;
      grid-template-columns: 22em 1fr;
      border-left: var(--secondary-color) 2em solid;
    }
</style>
