<template>
	<div class="side-bar hidden">
		<profile-avatar></profile-avatar>
		<social-media></social-media>
        <skill-set></skill-set>
        <certifications-table></certifications-table>
	</div>
	<div class="main-content">
        <Terminal welcomeMessage="Welcome to admin mode" prompt="admin > " v-if="showTerminal" class="terminal" />
        <content-section icon="comment" caption="Introduction">
            {{ profile.About }}
        </content-section>
        <content-section icon="user-graduate" caption="Education">
            <education-institutions></education-institutions>
        </content-section>
        <content-section icon="camera" caption="Hobbies" class="page__one">
            <hobby-collection></hobby-collection>
            <!-- <div class="history">Employment history on the following page</div> -->
        </content-section>
        <content-section icon="building" class="page__two" caption="Roles">
            <roles-history></roles-history>
        </content-section>
    </div>
    <print-button @click="handlePrint"></print-button>
    <Dialog header="Recommended Print Settings" v-model:visible="showPrintDialog" :modal="true">
    <img src="../../public/print-settings.png" class="print-settings" />
        <template #footer>
            <Button label="Print" @click="print"></Button>
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
    import { storeKey } from '@/store'
    import { computed, defineComponent, onBeforeUnmount, onMounted, ref } from 'vue'
    import { useStore } from 'vuex'
    import Terminal from 'primevue/terminal'
    import TerminalService from 'primevue/terminalservice'
    import Dialog from 'primevue/dialog'
    import Button from 'primevue/button'

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
            Terminal,
            Dialog,
            Button
        },
        setup() {
            const store = useStore(storeKey)
            const showTerminal = ref(false)
            const showPrintDialog = ref(false)
            const profile = computed(() => store.state.profileDetails)

            onMounted(() => {
                TerminalService.on('command', commandHandler)
            })

            onBeforeUnmount(() => {
                TerminalService.off('command', commandHandler)
            })

            const commandHandler = (text: string) => {
                let response
                let argsIndex = text.indexOf(' ')
                let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text

                switch(command) {
                case 'exit':
                    showTerminal.value = false
                    break
                case 'refs':
                    response = 'Populating references ...'
                    break

                default:
                    response = 'Unknown command: ' + command
                }
                
                TerminalService.emit('response', response)
            }
            
            window.onkeyup = (e) => {
                if (e.altKey && e.key === 't') {
                    showTerminal.value = true
                }
            }

            return {
                profile,
                showTerminal,
                commandHandler,
                showPrintDialog,
                handlePrint: () => {
                    showPrintDialog.value = true
                },
                print: () => {
                    showPrintDialog.value = false
                    // This gives the dialog time to hide before the print function is called
                    setTimeout(() => {
                        window.print()
                    }, 300)
                }
            }
        }
    })
</script>
<style lang="scss">
    .side-bar {
        grid-column: 1;
        background-color: var(--primary-color);
        height: 100vh;
        position: fixed;
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

        .page__two {
            margin-left: -25em;
        }

        .page__two .content-section__heading {
            display: none;
        }
    }

    .main-content {
        grid-column: 2;
        margin-top: 2em;
    }

    .page__one {
        page-break-after: always;
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
</style>
