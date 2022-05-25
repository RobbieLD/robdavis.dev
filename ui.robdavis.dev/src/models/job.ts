export default interface Job<T> {
    Company: string,
    Start: number,
    End: number,
    Role: string,
    Description: string,
    Order: number,
    Logo: T
}
