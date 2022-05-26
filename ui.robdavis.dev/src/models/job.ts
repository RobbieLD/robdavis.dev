import { BaseResponse, BaseResponseCollection } from './profile.response'
import { Image } from './image'

export interface JobResponse {
    Company: string
    Start: number
    End: number
    Role: string
    Description: string
    Order: number
    Logo: BaseResponse<Image>
    Technologies: BaseResponseCollection<Image>
}

export default class Job {
    Company: string
    Start: number
    End: number
    Role: string
    Description: string
    Order: number
    Logo: Image
    Technologies: Image[]

    public constructor(response: JobResponse, baseURl: string) {
        this.Company = response.Company
        this.Start = response.Start
        this.End = response.End
        this.Description = response.Description
        this.Role = response.Role
        this.Order = response.Order
        this.Logo = new Image(response.Logo.data.attributes.alternativeText, baseURl + response.Logo.data.attributes.url)
        this.Technologies = response.Technologies.data?.map(t => new Image(t.attributes.alternativeText, baseURl + t.attributes.url))
    }
}

