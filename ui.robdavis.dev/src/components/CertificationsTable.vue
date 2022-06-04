<template>
    <div class="cert-table">
        <div class="cert-table__header">
            <font-awesome-layers class="cert-table__icon cert-table__icon--left">
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="certificate" class="cert-table__icon--symbol" transform="shrink-7" />
            </font-awesome-layers>
            <div class="cert-table__title">Certifications</div>
            <font-awesome-layers class="skill-set__icon">
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="certificate" class="cert-table__icon--symbol" transform="shrink-7" />
            </font-awesome-layers>
        </div>
        <div class="cert-table__divider"></div>
        <div class="cert-table__certs">
            <a v-for="(cert, index) of certs" :key="index" :href="cert.Link" target="_blank" :title="cert.Name">
                <img :src="cert.Badge.url" :alt="cert.Badge.alternativeText" class="cert-table__badge" />
            </a>
        </div>
    </div>
</template>

<script lang="ts">
    import { storeKey } from '@/store'
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'

    export default defineComponent({
        name: 'CertificationsTable',
        components: {},
        setup() {
            const store = useStore(storeKey)
            const certs = computed(() => store.state.certifications)
            
            return {
                certs
            }
        }
    })
</script>
<style lang="scss">
    .cert-table {
        margin: 2em;

        &__header {
            display: grid;
            grid-auto-flow: column;
            font-size: 1.5em;
            grid-template-columns: 1fr auto 1fr;
            margin-bottom: 0.5em;
            align-items: center;
        }

        &__badge {
            width: 5em;
            margin-left: 0.3em;
            margin-right: 0.3em;
        }

        &__certs {
            display: flex;
            justify-content: center;
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
            margin-bottom: 0.5em;
            background: var(--primary-color-text);
            background: linear-gradient(90deg, var(--primary-color-text-transparent) 0%, var(--primary-color-text) 20%, var(--primary-color-text) 80%, var(--primary-color-text-transparent) 100%);
        }
    }
</style>
