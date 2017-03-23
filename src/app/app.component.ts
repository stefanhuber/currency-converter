import { CurrencyService } from './../services/currency';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Menu } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { CurrencyPage } from '../pages/currency/currency';
import { SettingsPage } from '../pages/settings/settings';

@Component({
  templateUrl: 'app.html'
})
export class CurrencyConverterApp {
  updateInterval:number = 1000 * 60 * 5; // 5 minutes
  rootPage = CurrencyPage;
  @ViewChild('content') nav:Nav;
  @ViewChild('menu') menu:Menu;

  constructor(platform: Platform, protected currencyService:CurrencyService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
      this.updateCurrencies();
    });
  }

  updateCurrencies() {
      this.currencyService.updateCurrencies();
      setTimeout(() => { this.updateCurrencies() }, this.updateInterval);
  }

  openCurrencyPage() {
    this.nav.setRoot(CurrencyPage);
    this.menu.close();
  }

  openSettingsPage() {
    this.nav.push(SettingsPage);
    this.menu.close();
  }

}
