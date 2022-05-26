import { BaseResponse } from './profile.response'
import { Image } from './image'

export interface CertificationResponse {
    Link: string,
    Badge: BaseResponse<Image>,
    Name: string,
    Acquired: Date
}

export class Certification {
    Link: string
    Badge: Image
    Name: string
    Acquired: Date

    constructor(response: CertificationResponse, baseUrl: string) {
        this.Link = response.Link
        this.Name = response.Name
        this.Acquired = response.Acquired
        this.Badge = new Image(response.Badge.data.attributes.alternativeText, baseUrl + response.Badge.data.attributes.url)
    }
}
