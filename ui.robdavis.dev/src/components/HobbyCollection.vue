<template>
    <div class="hobby-collection">
        <hobby-chip v-for="(hobby, index) of hobbies" :key="index" :caption="hobby.Name" :icon="hobby.Icon"></hobby-chip>
    </div>
</template>

<script lang="ts">
    import { storeKey } from '@/store'
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import HobbyChip from './HobbyChip.vue'

    export default defineComponent({
        name: 'HobbyCollection',
        components: {
            HobbyChip
        },
        setup() {
            const store = useStore(storeKey)
            const hobbies = computed(() => store.state.hobbies)
            
            return {
                hobbies
            }
        }
    })
</script>
<style lang="scss">
    .hobby-collection {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5em;
    }
</style>
