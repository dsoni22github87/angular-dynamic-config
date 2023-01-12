import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Configuration } from './configuration';
@Injectable({
  providedIn: 'root'
})
export class ConfigurationService {
  private configData: Configuration | undefined;
  private readonly configPath: string = '/assets/config/configuration.json';
  constructor(
    private http: HttpClient
  ) { }

  async loadConfiguration(): Promise<Configuration> {
    try {
      const response = await this.http.get<Configuration>(`${this.configPath}`)
        .toPromise();
      this.configData = response;
      return this.configData;
    } catch (err) {
      return Promise.reject(err);
    }
  }

  get config(): Configuration | undefined {
    return this.configData;
  }
}
