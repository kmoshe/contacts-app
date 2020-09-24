export default class Configuration {

    _keyValue: Map<string, string> = new Map<string, string>();

    constructor() {
        this.setConfiguration();
    }

    setConfiguration() {
        this._keyValue.set('contactsApiUrl', 'https://randomuser.me');
    }

    getKey(key: string): string {
        return this._keyValue.get(key) as string;
    }
}