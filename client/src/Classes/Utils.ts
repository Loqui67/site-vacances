export default class Utils {

getPageUrl(): string {
    return window.location.href;
}

redirect(url: string): void {
    window.location.href = url;
}

}