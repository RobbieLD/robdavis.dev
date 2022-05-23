<template>
	<div class="side-bar">
		<profile-avatar></profile-avatar>
		<social-media></social-media>
	</div>
	<div class="main-content">content</div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'
    import ProfileAvatar from '@/components/ProfileAvatar.vue'
    import SocialMedia from '@/components/SocialMedia.vue'

    export default defineComponent({
        name: 'HomeView',
        components: {
            ProfileAvatar,
            SocialMedia
        }
    })
</script>
<style lang="scss">
    .side-bar {
        grid-column: 1;
        background-color: var(--primary-color);
    }

    .main-content {
        grid-column: 2;
    }
</style>
