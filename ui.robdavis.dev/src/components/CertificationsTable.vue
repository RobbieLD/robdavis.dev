<template>
    <DataTable :value="certs">
        <Column field="Badge" header="Badge">
            <template #body="slotProps">
                <img :src="slotProps.data.Badge.url" class="certs__badge"/>
            </template>
        </Column>
        <Column field="Name" header="Name"></Column>
        <Column field="Acquired" header="Date">
            <template #body="slotProps">
                <span v-html="slotProps.data.Acquired" class="certs__date"></span>
            </template>
        </Column>
    </DataTable>
</template>

<script lang="ts">
    import { storeKey } from '@/store'
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import DataTable from 'primevue/datatable'
    import Column from 'primevue/column'

    export default defineComponent({
        name: 'CertificationsTable',
        components: {
            DataTable,
            Column
        },
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
    .certs {
        &__badge {
            width: 5em;
        }

        &__date {
            white-space: nowrap;
        }
    }

</style>
