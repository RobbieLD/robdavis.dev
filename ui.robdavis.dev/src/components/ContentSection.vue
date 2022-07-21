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
        margin-top: 5em;
        margin-bottom: 2em;
        margin-right: 2.5em;

        &:nth-last-child(2) {
            page-break-after: always;
        }

        &:first-of-type {
            margin-top:0.5em;
        }

        &:last-of-type {
            .content {
                margin-left: 0;
            }
        }

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
            border-radius: 50%;
            box-shadow: 0px 0px 3px 2px #88888852;

            &--symbol {
                color: var(--secondary-color-text);
            }
        }
    }

    @media print {
        .content-section {
            margin-top: 0.5em;

            &:last-child {
                margin-left: -23em;
                height: 100%;
                overflow: hidden;
                .content-section__heading {
                    display: none;
                }
            }
        }
    }

    .content {
        margin-top: 1em;
        margin-left: 1.5em;
    }
</style>
