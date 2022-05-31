<template>
    <div class="roles">
        <Timeline :value="jobs" align="alternate" class="roles__timeline">
            <template #marker="slotProps">
                <img :src="slotProps.item.Logo.url" :alt="slotProps.item.Logo.alternativeText" class="roles__marker">
            </template>
            <template #content="slotProps">
                <div class="roles__container">
                    <span class="roles__title">
                        {{ slotProps.item.Company }}
                    </span>
                    <span class="roles__years">
                        {{slotProps.item.Start}} - {{ slotProps.item.End || 'Present'}}
                    </span>
                </div>
                <div class="roles__description">
                    <span class="roles__role">{{ slotProps.item.Role }}: </span>
                    <span v-html="slotProps.item.Description"></span>
                </div>
                <div class="roles__techs">
                    <img v-for="(tech, index) of slotProps.item.Technologies" :key="index" :src="tech.url" :title="tech.alternativeText" :alt="tech.alternativeText" class="roles__tech"/>
                </div>
            </template>
        </Timeline>
    </div>
</template>

<script lang="ts">
    import { storeKey } from '@/store'
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import Timeline from 'primevue/timeline'

    export default defineComponent({
        name: 'RolesHistory',
        components: {
            Timeline
        },
        setup() {
            const store = useStore(storeKey)
            const jobs = computed(() => store.state.jobs)

            return {
                jobs
            }
        }
    })
</script>
<style lang="scss">
    .roles { 
        &__marker {
            display: flex;
            width: 5rem;
            height: 5rem;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            z-index: 1;
            padding: 0.2em;
            box-shadow: 0px 0px 3px 2px #88888852;
        }

        &__container {
            margin-top: 1em;
        }

        &__title {
            font-size: 1.5em;
            font-weight: 600;
            color: var(--primary-color);
            font-variant: small-caps;
        }

        &__description {
            margin-top: 0.5em;
        }

        &__years {
            color: var(--light-grey);
            font-weight: 600;
            margin-left: 0.5em;
        }

        &__role {
            font-weight: 500;
        }

        &__techs {
            margin-top: 0.5em;
        }

        &__tech {
            width: 1.5em;
            margin-right: 0.2em;
        }
    }

    ::v-deep(.p-timeline-event-content)
    ::v-deep(.p-timeline-event-opposite) {
        line-height: 1;
    }

    @media (max-width: 960px) {
        .roles__timeline {
            .p-timeline-event:nth-child(even) {
                flex-direction: row !important;
                
                .p-timeline-event-content {
                    text-align: left !important;
                }
            }

            .p-timeline-event-opposite {
                flex: 0;
            }

            .p-card {
                margin-top: 1rem;
            }
        }
    }
</style>
