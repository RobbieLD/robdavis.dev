<template>
    <div class="profile">
        <img class="profile__avatar" :src="url" alt="avatar">
        <div class="profile__name">ROB DAVIS</div>
        <div class="profile__title">Software Engineer</div>
    </div>
</template>

<script lang="ts">
    import { storeKey } from '@/store'
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'

    export default defineComponent({
        name: 'ProfileAvatar',
        components: {},
        setup() {
            const store = useStore(storeKey)

            const url = computed(() => store.state.githubUser.avatar_url)

            return {
                url
            }
        }
    })
</script>
<style lang="scss">
    .profile {
        display: grid;
        justify-items: center;
        margin-top: 3em;

        &__avatar {
            width: 15em;
            border-radius: 50%;
            border: solid 0.5em var(--secondary-color);
            padding: 0.2em;
        }

        &__name {
            color: var(--primary-color-text);
            font-size: 2.5em;
            padding-bottom: 0.08em;
            margin-top: 0.3em;
        }

        &__title {
            color: var(--primary-color-text);
            font-style: italic;
            font-size: 1.5em;
            padding-top: 0.2em;
            border-top: solid 0.05em var(--primary-color-text);
        }
    }
</style>
