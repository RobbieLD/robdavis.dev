<template>
  <router-view />
</template>
<script lang="ts">
    import { defineComponent, onMounted } from 'vue'
    import { useStore } from 'vuex'
    import { storeKey } from './store'

    export default defineComponent({
        name: 'App',
        setup() {

            const store = useStore(storeKey)
            onMounted(() => {
                // TODO: Handle errors
                Promise.all([
                    store.dispatch('loadGitHubUser'),
                    store.dispatch('loadProfile'),
                    store.dispatch('loadSocials'),
                    store.dispatch('loadSkills')])
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
    }

    html,
    body {
        font-size: 14px;
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

  #app {
      display: grid;
      height: 100%;
      grid-template-columns: 22em 1fr;
      border-left: var(--secondary-color) 2em solid;
    }
</style>
