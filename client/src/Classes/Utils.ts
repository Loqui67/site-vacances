export default class Utils {

getPageUrl(): string {
    return window.location.href;
}

redirectTo(url: string): void {
    window.location.href = url;
}

}