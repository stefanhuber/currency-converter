import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage';

@Injectable()
export class CurrencyService {

    constructor(protected storage: Storage, protected http:Http) {}

    setSource(currency:string) {
        return this.storage.set('source', currency);
    }

    setTarget(currencies:string[]) {
        return this.storage.set('target',currencies);
    }

    getSource() : Promise<string> {
        return this.storage.get('source');
    }

    getTarget() : Promise<string[]> {
        return this.storage.get('target');
    }

    getCurrencies() : Promise<any> {
        return this.storage.get('currencies');
    }

    updateCurrencies() {
        this.http.get('http://api.fixer.io/latest')
            .subscribe((resp) => {
                let currencies = resp.json().rates;
                currencies['EUR'] = 1;
                this.storage.set('currencies', currencies);
            });
    }

}