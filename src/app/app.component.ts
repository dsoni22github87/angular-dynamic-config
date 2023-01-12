import { Component } from '@angular/core';
import { ConfigurationService } from './config/configuration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sampleConfigValue: string | undefined;
  title = 'angular-dynamic-configuration';
  constructor(configService: ConfigurationService) {
    this.sampleConfigValue = configService.config?.sampleConfigValue;
  }
}
