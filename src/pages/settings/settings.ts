import { CurrencyService } from './../../services/currency';
import { Component } from '@angular/core';

@Component({
    templateUrl : 'settings.html'
})
export class SettingsPage {

    currencies = [];
    source;
    target;

    constructor(protected currencyService:CurrencyService) {}

    ionViewWillEnter() {
        Promise.all([
            this.currencyService.getCurrencies() ,
            this.currencyService.getSource(),
            this.currencyService.getTarget()
        ]).then(values => {
            this.currencies = [];
            for (let currency in values[0]) {
                this.currencies.push(currency);
            }

            this.source = values[1];
            this.target = values[2];
        });
    }

    ionViewCanLeave() {
        return new Promise<void>((resolve, reject) => {
            Promise.all([
                this.currencyService.setSource(this.source),
                this.currencyService.setTarget(this.target)
            ]).then(() => {
                resolve();
            });
        });
    }

}
