import { Certification } from '@/models/certification'
import { Education } from '@/models/education'
import GitHubUser from '@/models/github-user'
import Hobby from '@/models/hobby'
import Job from '@/models/job'
import ProfileDetails from '@/models/profile.details'
import Skill from '@/models/skill'
import Social from '@/models/social'

export default interface State {
    githubUser: GitHubUser,
    profileDetails: ProfileDetails,
    socials: Social[],
    skills: Skill[],
    hobbies: Hobby[],
    jobs: Job[],
    certifications: Certification[],
    educations: Education[]
}
