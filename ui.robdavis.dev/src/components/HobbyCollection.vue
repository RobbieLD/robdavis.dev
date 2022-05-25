<template>
    <div class="hobby-collection">
        <div class="hobby-collection__header">
            <font-awesome-layers class="hobby-collection__icon hobby-collection__icon--left">
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="sun" class="hobby-collection__icon--symbol" transform="shrink-7" />
            </font-awesome-layers>
            <div class="hobby-collection__title">Hobbies</div>
            <font-awesome-layers class="hobby-collection__icon">
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="sun" class="hobby-collection__icon--symbol" transform="shrink-7" />
            </font-awesome-layers>
        </div>
        <div class="hobby-collection__divider"></div>
        <div class="hobby-collection__container">
            <div v-for="(hobby, index) of hobbies" :key="index" class="hobby" :title="hobby.Name">
                <font-awesome-layers>
                    <font-awesome-icon icon="square" />
                    <font-awesome-icon :icon="hobby.Icon" transform="shrink-7" class="hobby__icon" :class="hobby.Wide ? 'hobby__icon--wide' : ''" />
                </font-awesome-layers>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { storeKey } from '@/store'
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'

    export default defineComponent({
        name: 'HobbyCollection',
        components: {},
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
        margin-left: 2em;
        margin-top: 2em;
        margin-right: 2em;

        &__header {
            display: grid;
            grid-auto-flow: column;
            font-size: 1.5em;
            grid-template-columns: 1fr auto 1fr;
            margin-bottom: 0.5em;
            align-items: center;
        }

        &__icon {
            color: var(--secondary-color);

            &--symbol {
                color: var(--secondary-color-text);
            }

            &--left {
                justify-self: end;
            }
        }

        &__title {
            color: var(--primary-color-text);
            align-self: center;
            margin-left: 0.5em;
            margin-right: 0.5em;
        }

        &__divider {
            height: 0.1em;
            width: 18em;
            margin-bottom: 0.5em;
            background: var(--primary-color-text);
            background: linear-gradient(90deg, var(--primary-color-text-transparent) 0%, var(--primary-color-text) 20%, var(--primary-color-text) 80%, var(--primary-color-text-transparent) 100%);
        }

        &__container {
            margin-left: 2em;
        }
    }

    .hobby {
        margin-right: 0.2em;
        font-size: 0.8em;
        margin-bottom: 0.2em;
        color: var(--secondary-color);
        font-size: 2em;
        display: inline;

        &__icon {
            color: var(--secondary-color-text);

            &--wide {
                margin-left: -0.1em !important;
            }
        }
    }

</style>
