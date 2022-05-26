export class Image {
    alternativeText: string;
    url: string;

    public constructor(alt: string, url: string) {
        this.alternativeText = alt
        this.url = url
    }
}
