import { Image } from './image'
import { BaseResponse } from './profile.response'

export interface ReferenceResponse {
    Name: string,
    Role: string,
    Company: string,
    Email: string,
    Phone: string,
    Order: number,
    Avatar: BaseResponse<Image>
}

export class Reference {
    Name: string
    Role: string
    Company: string
    Phone: string
    Email: string
    Avatar: Image
    Order: number

    public constructor(response: ReferenceResponse, baseUrl: string) {
        this.Name = response.Name
        this.Role = response.Role
        this.Phone = response.Phone
        this.Company = response.Company
        this.Email = response.Email
        this.Order = response.Order
        this.Avatar = new Image(response.Avatar.data.attributes.alternativeText, baseUrl + response.Avatar.data.attributes.url)
    }
}
