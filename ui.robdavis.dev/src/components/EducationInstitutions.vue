<template>
    <div class="educations">
        <div v-for="(ed, index) of eds" :key="index" class="educations__row">
            <Chip :label="ed.Institute" :image="ed.Logo.url" />
            <!-- <img :src="ed.Logo.url" :alt="ed.Logo.alternativeText" class="educations__logo" />
            <span>{{ ed.Institute }}</span>| <span>{{ ed.Name }}</span>
            <span>{{ ed.Year }}</span> -->
        </div>
    </div>
</template>

<script lang="ts">
    import { storeKey } from '@/store'
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import Chip from 'primevue/chip'

    export default defineComponent({
        name: 'EducationInstitution',
        components: {
            Chip
        },
        setup() {
            const store = useStore(storeKey)
            const eds = computed(() => store.state.educations)
            
            return {
                eds
            }
        }
    })
</script>
<style lang="scss">
    .educations {

        &__row {
            margin-bottom: 0.5em;
        }

        &__logo {
            border-radius: 50%;
            width: 5em;
        }
    }
</style>
