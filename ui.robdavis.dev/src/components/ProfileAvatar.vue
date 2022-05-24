<template>
    <div class="profile">
        <img class="profile__avatar" :src="url" alt="avatar">
        <div class="profile__name">{{ details.FirstName }} {{ details.LastName }}</div>
        <div class="profile__divider"></div>
        <div class="profile__title">{{ details.Title }}</div>
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
            const details = computed(() => store.state.profileDetails)

            return {
                url,
                details
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
        }

        &__divider {
            height: 0.05em;
            width: 18em;
            background: var(--primary-color-text);
            background: linear-gradient(90deg, var(--primary-color-text-transparent) 0%, var(--primary-color-text) 20%, var(--primary-color-text) 80%, var(--primary-color-text-transparent) 100%);
        }
    }
</style>
