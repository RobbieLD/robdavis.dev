<template>
    <div class="references">
        <div class="ref" v-for="(ref, index) of refs" :key="index">
            <Chip :label="'<b>' + ref.Name + '</b>'" :image="ref.Avatar.url"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { storeKey } from '@/store'
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import Chip from 'primevue/chip'

    export default defineComponent({
        name: 'ReferenceList',
        components: {
            Chip
        },
        setup() {
            const store = useStore(storeKey)
            const refs = computed(() => store.state.references)
            
            return {
                refs
            }
        }
    })
</script>
<style lang="scss">
    .references {

    }
</style>
