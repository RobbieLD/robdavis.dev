<template>
    <div class="action-button" @click="print">
        <i class="pi action-button__icon pi-print" ></i>
    </div>
</template>
<script lang='ts'>
    import { defineComponent } from 'vue'

    export default defineComponent({
        name: 'PrintButton',
        components: {},
        emits: ['click'],
        setup(_, { emit }) {
            return {
                print: () => {
                    emit('click')
                }
            }
        },
    })
</script>
<style lang='scss' scoped>
    .action-button {
        top: 30%;
        position: fixed;
        z-index: 1;
        right: 0;
        border-top-left-radius: 0.5em;
        border-bottom-left-radius: 0.5em;
        color: var(--secondary-color-text);
        background-color: var(--secondary-color);
        padding: 1em;
        box-shadow: 5px 10px 18px #0000006b;
        cursor: pointer;

        &:hover {
            color: var(--primary-color);
        }

        &__icon {
            font-size: 2em;
        }

        @media print {
            display: none;   
        }

        @media (max-width: 960px) {
            display: none;
        }
    }
</style>
