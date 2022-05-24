import GitHubUser from '@/models/github-user'
import ProfileDetails from '@/models/profile.details'
import Social from '@/models/social'

export default interface State {
    githubUser: GitHubUser,
    profileDetails: ProfileDetails,
    socials: Social[]
}
