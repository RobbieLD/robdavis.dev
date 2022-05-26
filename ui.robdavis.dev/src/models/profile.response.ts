export interface BaseResponse<T> {
    data: BaseResponseData<T>
}

export interface BaseResponseCollection<T> {
    data: BaseResponseData<T>[]
}

export interface BaseResponseData<T> {
    id: number,
    attributes: T
}
