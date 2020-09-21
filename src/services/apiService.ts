import { ServiceBase } from './serviceBase';
import { ApiResponse } from '../types/Contact';

export default class ApiService extends ServiceBase {
  public constructor() {
    super('https://randomuser.me');
  }

  public getContacts = () => this.instance.get<ApiResponse>('/api?results=1');
}
