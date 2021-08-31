import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import { getCardSVG } from './cardSvg';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  sub$ = new Subscription();
  sel_brand = "unknown";
  dashIdxs: any[] = [];

  cardFormGroup: FormGroup = this.fb.group({
    cardNumber: ['', [Validators.required]],
    cardName: '',
    expiryDate: '',
    securityCode: ''
  });
  constructor(private fb: FormBuilder, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.dashIdxs = this.getPattern('0000-0000-0000-0000');
    console.log(this.dashIdxs);

    this.sub$ = this.cardFormGroup.get('cardNumber')!.valueChanges
      .pipe(distinctUntilChanged())
      .subscribe(
        d => {

          if (this.dashIdxs.includes(d.length)) {
            d += "-";
            console.log(d);
            this.updateInput(d, false);
          }


          if ((d.length) > '0000-0000-0000-0000'.length) {
            d = d.slice(0, '0000-0000-0000-0000'.length);
            console.log('checking', d);
            this.updateInput(d, true);

          }

          if (d === '') {
            this.sel_brand = 'unknown';
          } else {
            this.cc_brand_id(d);
          }
        }
      );
  }

  cc_brand_id(cur_val: any) {
    // the regular expressions check for possible matches as you type, hence the OR operators based on the number of chars
    // regexp string length {0} provided for soonest detection of beginning of the card numbers this way it could be used for BIN CODE detection also

    //JCB
    let jcb_regex = new RegExp('^(?:2131|1800|35)[0-9]{0,}$'); //2131, 1800, 35 (3528-3589)
    // American Express
    let amex_regex = new RegExp('^3[47][0-9]{0,}$'); //34, 37
    // Diners Club
    let diners_regex = new RegExp('^3(?:0[0-59]{1}|[689])[0-9]{0,}$'); //300-305, 309, 36, 38-39
    // Visa
    let visa_regex = new RegExp('^4[0-9]{0,}$'); //4
    // MasterCard
    let mastercard_regex = new RegExp('^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$'); //2221-2720, 51-55
    let maestro_regex = new RegExp('^(5[06789]|6)[0-9]{0,}$'); //always growing in the range: 60-69, started with / not something else, but starting 5 must be encoded as mastercard anyway
    //Discover
    let discover_regex = new RegExp('^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$');
    ////6011, 622126-622925, 644-649, 65


    // get rid of anything but numbers
    cur_val = cur_val.replace(/\D/g, '');

    // checks per each, as their could be multiple hits
    //fix: ordering matter in detection, otherwise can give false results in rare cases

    if (cur_val.match(jcb_regex)) {
      this.sel_brand = "jcb";
    } else if (cur_val.match(amex_regex)) {
      this.sel_brand = "amex";
    } else if (cur_val.match(diners_regex)) {
      this.sel_brand = "diners_club";
    } else if (cur_val.match(visa_regex)) {
      this.sel_brand = "visa";
    } else if (cur_val.match(mastercard_regex)) {
      this.sel_brand = "mastercard";
    } else if (cur_val.match(discover_regex)) {
      this.sel_brand = "discover";
    } else if (cur_val.match(maestro_regex)) {
      if (cur_val[0] == '5') { //started 5 must be mastercard
        this.sel_brand = "mastercard";
      } else {
        this.sel_brand = "maestro"; //maestro is all 60-69 which is not something else, thats why this condition in the end
      }
    }

    return this.sel_brand;
  }

  get getIcon(): any {
    const { ccIcon, ccSingle, cardClasses } = getCardSVG(this.sel_brand);
    return {
      ccIcon: this.sanitizer.bypassSecurityTrustHtml(ccIcon),
      ccSingle: this.sanitizer.bypassSecurityTrustHtml(ccSingle),
      cardClasses,
    };
  }

  getPattern(pattern: string) {
    let dashIdxs: any[] = [];

    pattern.split("").forEach((char: any, idx: number) => {
      if (char !== "-") {
        return;
      }

      dashIdxs.push(idx);
    });
    return dashIdxs;
  }

  updateInput(val: any, status: boolean) {
    this.cardFormGroup.get('cardNumber')!.patchValue(val, { emitEvent: status });
  }

}
