import {
  Component,
  LOCALE_ID,
  Inject,
  Output,
  EventEmitter,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Output() locale = new EventEmitter<string>();

  locales = [
    { code: '', title: 'English'},
    { code: 'fr', title: 'Français'}
  ];

  constructor(@Inject(LOCALE_ID) public localeId: string) { }

  ngOnInit() {
    if (this.localeId && this.localeId.length && this.localeId.indexOf('-') !== -1) {
      this.localeId = this.localeId.split('-')[0];

      if (this.localeId === 'en') {
        this.localeId = '';
      }
    }
  }

  onLocaleChange(newLocaleCode: string) {
    if (newLocaleCode === this.localeId) {
      return;
    }

    this.locale.emit(newLocaleCode);
  }
}
