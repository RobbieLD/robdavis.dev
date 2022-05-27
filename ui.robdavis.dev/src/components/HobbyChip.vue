<template>
    <div class="hobby">
        <font-awesome-icon :icon="icon" class="hobby__icon" />
        <span class="hobby__caption">{{ caption }}</span>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    export default defineComponent({
        name: 'EducationInstitution',
        components: {},
        props: {
            caption: String,
            icon: String
        }
    })
</script>

<style lang="scss">
    .hobby {
        white-space: nowrap;
        display: flex;
        background-color: var(--very-light-grey);
        border-radius: 2em;
        align-items: center;
        padding-top: 0.2em;
        padding-bottom: 0.2em;

        &__icon {
            color: var(--secondary-color);
            padding-left: 0.5em;
        }

        &__caption {
            margin-left: 0.5em;
            margin-right: 0.5em;
        }
    }
</style>
