import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { CurrencyConverterApp } from './app.component';
import { CurrencyPage } from '../pages/currency/currency';
import { SettingsPage } from '../pages/settings/settings';
import { CurrencyService } from './../services/currency';

@NgModule({
  declarations: [
    CurrencyConverterApp,
    CurrencyPage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(CurrencyConverterApp) ,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    CurrencyConverterApp,
    CurrencyPage,
    SettingsPage
  ],
  providers: [CurrencyService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
