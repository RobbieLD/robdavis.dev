<template>
	<div class="side-bar">
		<profile-avatar></profile-avatar>
		<social-media></social-media>
        <skill-set></skill-set>
        <certifications-table></certifications-table>
	</div>
	<div class="main-content">
        <content-section icon="comment" caption="Introduction">
            {{ profile.About }}
        </content-section>
        <content-section icon="user-graduate" caption="Education">
            <education-institutions></education-institutions>
        </content-section>
        <content-section icon="camera" caption="Hobbies">
            <hobby-collection></hobby-collection>
        </content-section>
        <content-section icon="user" caption="References">
            TLB
        </content-section>
        <!-- <content-section icon="computer" caption="Roles">
            <roles-history></roles-history>
        </content-section> -->
    </div>
</template>

<script lang="ts">
    import ProfileAvatar from '@/components/ProfileAvatar.vue'
    import SocialMedia from '@/components/SocialMedia.vue'
    import SkillSet from '@/components/SkillSet.vue'
    import HobbyCollection from '@/components/HobbyCollection.vue'
    import ContentSection from '@/components/ContentSection.vue'
    import RolesHistory from '@/components/RolesHistory.vue'
    import EducationInstitutions from '@/components/EducationInstitutions.vue'
    import CertificationsTable from '@/components/CertificationsTable.vue'
    import { storeKey } from '@/store'
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'

    export default defineComponent({
        name: 'HomeView',
        components: {
            ProfileAvatar,
            SocialMedia,
            SkillSet,
            HobbyCollection,
            ContentSection,
            CertificationsTable,
            EducationInstitutions
            //RolesHistory
        },
        setup() {
            const store = useStore(storeKey)
            const profile = computed(() => store.state.profileDetails)
            
            return {
                profile
            }
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
        margin-top: 2em;
    }
</style>
