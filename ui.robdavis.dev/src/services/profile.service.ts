import Hobby from '@/models/hobby'
import { JobResponse } from '@/models/job'
import Job from '@/models/job'
import ProfileDetails from '@/models/profile.details'
import { BaseResponse, BaseResponseCollection } from '@/models/profile.response'
import Skill from '@/models/skill'
import Social from '@/models/social'
import BaseService from './base.service'

export default class ProfileService extends BaseService {
    private readonly imageBaseUrl = process.env?.VUE_APP_PROFILE_SERVICE_URL

    constructor() {
        super(process.env?.VUE_APP_PROFILE_SERVICE_URL + '/api/')
    }

    public async Details(): Promise<ProfileDetails> {
        const results = await this.http.get<BaseResponse<ProfileDetails>>('profile')
        return results.data.data.attributes
    }

    public async Socials(): Promise<Social[]> {
        const results = await this.http.get<BaseResponseCollection<Social>>('socials')
        return results.data.data.map(x => x.attributes).sort((a, b) => a.Order - b.Order)
    }

    public async Skills(): Promise<Skill[]> {
        const results = await this.http.get<BaseResponseCollection<Skill>>('skills')
        return results.data.data.map(x => x.attributes).sort((a, b) => a.Order - b.Order)
    }

    public async Hobbies(): Promise<Hobby[]> {
        const results = await this.http.get<BaseResponseCollection<Hobby>>('hobbies')
        return results.data.data.map(x => x.attributes)
    }

    public async Jobs(): Promise<Job[]> {
        const results = await this.http.get<BaseResponseCollection<JobResponse>>('jobs?populate=*')
        const jobs = results.data.data.map(x => new Job(x.attributes, this.imageBaseUrl)).sort((a, b) => a.Order - b.Order)
        return jobs
    }
}
