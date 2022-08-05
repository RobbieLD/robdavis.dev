<template>
    <div class="skill-set">
        <div class="skill-set__header">
            <font-awesome-layers class="skill-set__icon skill-set__icon--left">
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="code" class="skill-set__icon--symbol" transform="shrink-7" />
            </font-awesome-layers>
            <div class="skill-set__title">Core Skills</div>
            <font-awesome-layers class="skill-set__icon">
                <font-awesome-icon icon="circle" />
                <font-awesome-icon icon="code" class="skill-set__icon--symbol" transform="shrink-7" />
            </font-awesome-layers>
        </div>
        <div class="skill-set__divider"></div>
        <div v-for="(skill, index) of skills" :key="index" class="skill-row">
            <div class="skill-row__name">{{ skill.Name }}</div>
            <Rating class="skill-row__rating" v-model="skill.Level" :readonly="true" :cancel="false"/>
        </div>
    </div>
</template>

<script lang="ts">
    import { storeKey } from '@/store'
    import { computed, defineComponent } from 'vue'
    import { useStore } from 'vuex'
    import Rating from 'primevue/rating'

    export default defineComponent({
        name: 'SkillSet',
        components: {
            Rating
        },
        setup() {
            const store = useStore(storeKey)
            const skills = computed(() => store.state.skills)
            
            return {
                skills
            }
        }
    })
</script>
<style lang="scss">
    .skill-set {
        margin-left: 2em;
        margin-top: 2em;
        margin-right: 2em;

        &__header {
            display: grid;
            grid-auto-flow: column;
            font-size: 1.5em;
            grid-template-columns: 1fr auto 1fr;
            margin-bottom: 0.5em;
            align-items: center;
        }

        &__icon {
            color: var(--secondary-color);

            &--symbol {
                color: var(--secondary-color-text);
                margin-left: -0.1em !important;
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

    .skill-row {
        display: grid;
        grid-auto-flow: column;
        margin-bottom: 0.5em;
        color: var(--primary-color-text);

        &__name {
            margin-left: 2em;
        }

        &__rating {
            justify-self: end;
            margin-right: 2em;
        }
    }

    .p-rating .p-rating-icon.pi-star-fill {
        color: var(--secondary-color) !important;
        
        &:before {
            content: "\e9dd" !important;
        }
    }

    .pi-star:before {
        content: "\e9dc" !important;
    }

    .p-rating .p-rating-icon {
        font-size: 0.8em !important;
    }
</style>
