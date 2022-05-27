import { Image } from './image'
import { BaseResponse } from './profile.response'

export interface EducationResponse {
    Name: string,
    Institute: string,
    Year: number,
    Logo: BaseResponse<Image>
}

export class Education {
    Name: string
    Institute: string
    Year: number
    Logo: Image

    public constructor(response: EducationResponse, baseUrl: string) {
        this.Name = response.Name
        this.Institute = response.Institute
        this.Year = response.Year
        this.Logo = new Image(response.Logo.data.attributes.alternativeText, baseUrl + response.Logo.data.attributes.url)
    }
}
