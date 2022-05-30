<template>
    <div class="social-media">
        <div class="link-row" v-for="(social, index) in socials" :key="index">
            <font-awesome-layers class="link-row__icon">
                <font-awesome-icon icon="circle" />
                <font-awesome-icon :icon="[social.Library, social.Icon]" class="link-row__icon--symbol" transform="shrink-7" />
            </font-awesome-layers>
            <div class="link-row__text">
                <a class="link-row__anchor link-row__anchor--screen" :href="social.Link" target="_blank">{{ social.Name }}</a>
                <div class="link-row__anchor link-row__anchor--print">{{ social.PrintLink }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { storeKey } from '@/store'
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'

    export default defineComponent({
        name: 'SocialMedia',
        components: {
        },
        setup() {
            const store = useStore(storeKey)

            const socials = computed(() => store.state.socials)
            
            return {
                socials
            }
        }
    })
</script>
<style lang="scss">
    .social-media {
        margin-left: 2em;
        margin-top: 2em;
    }

    .link-row {
        display: grid;
        grid-auto-flow: column;
        grid-template-columns: min-content;
        margin-bottom: 0.5em;

        &__text {
            align-self: center;
            margin-left: 1em;
        }

        &__anchor {
            text-decoration: none;
            color: var(--secondary-color-text);

            &:hover {
                color: var(--secondary-color);
            }

            &--print {
                display: none;
            }
        }

        &__icon {
            font-size: 1.5em;
            color: var(--secondary-color);

            &--symbol {
                color: var(--secondary-color-text);
            }
        }
    }

    @media print {
        .link-row__anchor--print {
            display: initial;
        }

        .link-row__anchor--screen {
            display: none;
        }

    }
</style>
