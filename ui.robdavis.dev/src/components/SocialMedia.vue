<template>
    <div class="social-media">
        <div class="link-row">
            <font-awesome-layers class="link-row__icon">
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="phone" class="link-row__icon--symbol" transform="shrink-7" />
            </font-awesome-layers>
            <div class="link-row__text">
                <a class="link-row__anchor" href="mailto:robert.lyndon.davis@gmail.com" target="_blank">robert.lyndon.davis@gmail.com</a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'SocialMedia',
        components: {
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
        }

        &__icon {
            font-size: 2em;
            color: var(--secondary-color);

            &--symbol {
                color: var(--secondary-color-text);
            }
        }
    }
</style>
