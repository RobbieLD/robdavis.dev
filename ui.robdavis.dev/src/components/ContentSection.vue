<template>
    <div class="content-section">
        <div class="content-section__heading">
            <font-awesome-layers class="content-section__icon">
                <font-awesome-icon icon="circle" />
                <font-awesome-icon :icon="$props.icon" class="content-section__icon--symbol" transform="shrink-7" />
            </font-awesome-layers>
            <div class="content-section__caption">{{ $props.caption }}</div>
        </div>
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'ContentSection',
        components: {
        },
        props: {
            icon: String,
            caption: String,
        }
    })
</script>
<style lang="scss">
    .content-section {
        margin-left: 2em; 
        margin-top: 0.5em;
        margin-bottom: 2em;
        margin-right: 2.5em;

        &__heading {
            display: grid;
            grid-template-columns: min-content;
            grid-auto-flow: column;
        }

        &__caption {
            margin-left: 0.5em;
            font-size: 2em;
            align-self: center;
            color: var(--primary-color);
        }

        &__icon {
            font-size: 2.5em;
            color: var(--secondary-color);
            border: 0.07em var(--primary-color) solid;
            border-radius: 50%;
            padding: 0.6em;

            &--symbol {
                color: var(--secondary-color-text);
            }
        }
    }

    .content {
        margin-top: 1em;
        margin-left: 1.5em;
    }
</style>
