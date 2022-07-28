<template>
    <div class="side-bar hidden">
        <profile-avatar></profile-avatar>
        <social-media></social-media>
        <skill-set></skill-set>
        <certifications-table></certifications-table>
    </div>
	<div class="main-content">
        <content-section icon="comment" caption="Introduction">
            {{ about(profile.About) }}
        </content-section>
        <content-section icon="user-graduate" caption="Education">
            <education-institutions></education-institutions>
        </content-section>
        <content-section icon="camera" caption="Hobbies">
            <hobby-collection></hobby-collection>
        </content-section>
        <content-section icon="address-book" caption="References">
            <reference-list v-if="token"></reference-list>
            <div v-else><i>References Available on Request</i></div>
        </content-section>
        <content-section icon="building" caption="Roles">
            <roles-history></roles-history>
        </content-section>
    </div>
    <print-button @click="print"></print-button>
    <Dialog header="Login" v-model:visible="showLogin" :modal="true">
        <span class="p-float-label">
            <InputText id="username" type="text" v-model="username" />
            <label for="username">Username</label>
        </span>
        <span class="p-float-label">
            <InputText id="password" type="password" v-model="password" />
            <label for="password">Password</label>
        </span>
        <template #footer>
            <Button :label="loggingIn ? 'Logging In ...' : 'Login'" @click="login" :disabled="loggingIn"></Button>
        </template>
    </Dialog>
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
    import PrintButton from '@/components/PrintButton.vue'
    import ReferenceList from '@/components/ReferenceList.vue'
    import InputText from 'primevue/inputtext'
    import { storeKey } from '@/store'
    import { computed, defineComponent, ref } from 'vue'
    import { useStore } from 'vuex'
    import { useToast } from 'primevue/usetoast'
    import Dialog from 'primevue/dialog'
    import Button from 'primevue/button'
    import * as converter from 'number-to-words'

    export default defineComponent({
        name: 'HomeView',
        components: {
            ProfileAvatar,
            SocialMedia,
            SkillSet,
            HobbyCollection,
            ContentSection,
            CertificationsTable,
            EducationInstitutions,
            RolesHistory,
            PrintButton,
            Dialog,
            Button,
            ReferenceList,
            InputText
        },
        setup() {
            const toast = useToast()
            const showLogin = ref(false)
            const username = ref('')
            const password = ref('')
            const store = useStore(storeKey)
            const profile = computed(() => store.state.profileDetails)
            const loggingIn = ref(false)
            const token = computed(() => store.state.jwt)

            const login = async () => {
                loggingIn.value = true

                try {
                    await store.dispatch('authenticate', {
                        username: username.value,
                        password: password.value
                    })
                    
                    await store.dispatch('loadReferences', store.state.jwt)
                    showLogin.value = false
                    toast.add({severity:'info', summary: 'Logged In', detail: 'You have now logged in, the references are now populating', life: 3000})

                } catch (e) {
                    console.log('error caught')
                    toast.add({severity:'error', summary: (e as Error).name, detail:(e as Error).message, life: 3000})
                    console.error(e)
                } finally {
                    loggingIn.value = false
                }
            }
            
            window.onkeyup = (e) => {
                if (e.altKey && e.key === 'l') {
                    showLogin.value = true
                }
            }

            const about = (about: string): string => {
                const year = new Date().getFullYear() - 2008
                const words = converter.toWords(year)
                return about.replace('{{career}}', words)
            }

            return {
                profile,
                prompt,
                login,
                loggingIn,
                showLogin,
                username,
                password,
                token,
                print: () => {
                    window.print()
                },
                about
            }
        }
    })
</script>
<style lang="scss">

    .p-float-label {
        margin-bottom: 0.5em;
    }

    .side-bar {
        grid-column: 1;
        background-color: var(--primary-color);
        height: 100vh;
        width: 22em;
        position: fixed;
        overflow-y: auto;
    }

    .history {
        display: none;
        font-size: 0.8em;
        font-style: italic;
        text-align: center;
    }

    @media print {
        .side-bar {
            position: initial;
        }

        .history {
            display: initial;
        }

    }

    .main-content {
        grid-column: 2;
        margin-top: 2em;
    }

    .print-settings {
        box-shadow: 0 0 12px 3px #72727294;
        margin-top: 1em;
    }

    .terminal {
        border: none !important;
        background: var(--primary-color) !important;
        color: var(--secondary-color) !important;
        margin-top: -2em !important;
        border-left: solid 0.5em !important;
    }

    .p-button {
        background: var(--primary-color) !important;
        border-color: var(--primary-color) !important;
        
        &:hover {
            color: var(--secondary-color) !important;
        }
    }

    @media only screen and (max-width: 800px) {
        .main-content {
            grid-column: 1;
        }

        .side-bar {
            height: initial;
            position: initial;
            justify-self: center;
            width: 100%;
        }
    }
</style>
