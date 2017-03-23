import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { CurrencyService } from './../../services/currency';

@Component({
    templateUrl : 'currency.html'
})
export class CurrencyPage {
    
    constructor(protected http:Http, protected currencyService:CurrencyService) {}

    public source = "EUR";
    public target;
    public input = null;
    public outputs = [];

    ionViewWillEnter() {
        Promise.all([
            this.currencyService.getSource() ,
            this.currencyService.getTarget()
        ]).then(values => {
            if (values[0]) {
                this.source = values[0];
            }
            this.target = values[1];
        });        
    }

    exchange() {
        this.currencyService.getCurrencies()
            .then(currencyRates => {
                this.outputs = [];
                for (let currency of this.target) {
                    this.outputs.push({
                        name  : currency ,
                        value : (this.input * currencyRates[this.source] / currencyRates[currency])
                    });
                }
            });
    }

}