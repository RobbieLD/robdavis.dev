import ProfileDetails from '@/models/profile.details'
import { BaseResponse, BaseResponseCollection } from '@/models/profile.response'
import Skill from '@/models/skill'
import Social from '@/models/social'
import BaseService from './base.service'

export default class ProfileService extends BaseService {
    constructor() {
        super(process.env?.VUE_APP_PROFILE_SERVICE_URL)
    }

    public async Details(): Promise<ProfileDetails> {
        const results = await this.http.get<BaseResponse<ProfileDetails>>('profile')
        return results.data.data.attributes
    }

    public async Socials(): Promise<Social[]> {
        const results = await this.http.get<BaseResponseCollection<Social[]>>('socials')
        return results.data.data.flatMap(x => x.attributes).sort(x => x.Order)
    }

    public async Skills(): Promise<Skill[]> {
        const results = await this.http.get<BaseResponseCollection<Skill[]>>('skills')
        return results.data.data.flatMap(x => x.attributes).sort(x => x.Order)
    }
}
