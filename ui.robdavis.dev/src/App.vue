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
                // TODO: Handle error and add more initialisation code here
                Promise.all([store.dispatch('loadGitHubUser')])
            })
        }
    })
</script>
<style lang="scss">
    :root {
        --primary-color: #123456;
        --secondary-color: #c6538c;
        --primary-color-text: white;
        --secondary-color-text: white;
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
      grid-template-columns: 25em 1fr;
      border-left: var(--secondary-color) 2em solid;
    }
</style>
