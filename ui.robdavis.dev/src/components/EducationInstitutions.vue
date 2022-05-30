<template>
    <div class="educations">
        <div v-for="(ed, index) of eds" :key="index" class="educations__row">
            <img :src="ed.Logo.url" :alt="ed.Logo.alternativeText" class="educations__logo" />
            <div class="educations__details">
                <span class="educations__name">{{ ed.Name }}</span>
                <span class="educations__institute">{{ ed.Institute }}</span>
                <span class="educations__year">{{ ed.Year }}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { storeKey } from '@/store'
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'

    export default defineComponent({
        name: 'EducationInstitution',
        components: {},
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5em;
        
        &__institue {
            font-variant: small-caps;
        }

        &__name {
            font-weight: 500;
        }

        &__year {
            color: var(--light-grey);
        }

        &__row {
            margin-bottom: 0.5em;
            display: grid;
            grid-auto-flow: column;
            grid-template-columns: min-content;
            margin-right: 1em;
        }

        &__logo {
            border-radius: 50%;
            width: 5em;
        }

        &__details {
            display: grid;
            grid-auto-flow: row;
            border-left: solid 2px var(--primary-color);
            padding-left: 0.5em;
        }
    }
</style>
