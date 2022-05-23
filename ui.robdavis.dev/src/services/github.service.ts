
import GitHubUser from '@/models/github-user'
import BaseService from './base.service'

export default class MovieService extends BaseService {
    constructor() {
        super('https://api.github.com/users/')
    }

    public async Profile(username: string): Promise<GitHubUser> {
        const results = await this.http.get<GitHubUser>(username)
        return results.data
    }
}
