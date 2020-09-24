import { ServiceBase } from './serviceBase';
import { ApiResponse } from '../types/Contact';
import Configuration from '../configuration';

export default class ApiService extends ServiceBase {

  
  public constructor(baseUrl: string) {
    super(baseUrl);
  }

  public getContacts = () => this.instance.get<ApiResponse>('/api?results=1');
}
