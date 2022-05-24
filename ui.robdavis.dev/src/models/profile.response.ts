export interface BaseResponse<T> {
    data: BaseResponseData<T>
}

export interface BaseResponseCollection<T> {
    data: BaseResponseData<T>[]
}

interface BaseResponseData<T> {
    id: number,
    attributes: T
}
