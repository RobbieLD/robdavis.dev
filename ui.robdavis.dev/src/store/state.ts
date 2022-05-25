import GitHubUser from '@/models/github-user'
import Hobby from '@/models/hobby'
import Job from '@/models/job'
import ProfileDetails from '@/models/profile.details'
import Skill from '@/models/skill'
import Social from '@/models/social'
import Image from '@/models/image'

export default interface State {
    githubUser: GitHubUser,
    profileDetails: ProfileDetails,
    socials: Social[],
    skills: Skill[],
    hobbies: Hobby[],
    jobs: Job<Image>[]
}
