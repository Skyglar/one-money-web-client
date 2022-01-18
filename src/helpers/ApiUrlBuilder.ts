import { VERSION_URL } from '../web.api/api.constants';

export class ApiUrlBuilder {
    public static Build(url: string, lang: string): string {
        return VERSION_URL + lang + url;
    }
}