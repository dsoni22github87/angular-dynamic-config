import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, Injector, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Configuration } from './config/configuration';
import { ConfigurationService } from './config/configuration.service';
import { HttpClientModule } from '@angular/common/http';

export function ConfigLoader(injector: Injector): () => Promise<Configuration> {
  return () => injector.get(ConfigurationService).loadConfiguration();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: ConfigLoader,
    deps: [Injector],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
