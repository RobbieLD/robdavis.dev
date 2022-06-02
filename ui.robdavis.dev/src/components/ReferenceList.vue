<template>
    <div class="references">
        <div class="ref" v-for="(ref, index) of refs" :key="index">
            <div class="ref__right">
                <div class="ref__name">{{ ref.Name }}</div>
                <div class="ref__job">{{ ref.Role }} at {{ ref.Company }}</div>
                <div class="ref__email-row">
                    <font-awesome-icon icon="envelope" class="ref__icon" />
                    <div class="ref__email">
                        <a target="_blank" :href="'mailto:' + ref.Email">{{ ref.Email }}</a>
                    </div>
                </div>
                <div class="ref__phone-row">
                    <font-awesome-icon icon="square-phone-flip" class="ref__icon" />
                    <div class="ref__phone">{{ ref.Phone }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { storeKey } from '@/store'
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'

    export default defineComponent({
        name: 'ReferenceList',
        components: {},
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
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.5em;
    }

    .ref {
        margin-bottom: 1em;
        margin-right: 1em;
        display: flex;
        

        &__icon {
            align-self: end;
            padding-right: 0.2em;
            color: var(--secondary-color);
            font-size: 1.1em;
        }

        &__phone {
            &-row {
                display: flex;
            }
        }

        &__email {
            a {
                text-decoration: none;
                color: black;

                &:hover {
                    color:var(--secondary-color)
                }
            }

            &-row {
                display: flex;
            }
        }
        
        &__name {
            font-weight: 500;
            color: var(--primary-color);
            font-size: 1.1em;
            border-bottom: dashed 1px var(--secondary-color);
        }

        &__job {
            color: var(--light-grey);
            font-variant: all-small-caps;
        }
    }
</style>
