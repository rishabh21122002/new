import { Component, EventEmitter, Inject, Input, LOCALE_ID, Output } from '@angular/core';
import { CldrIntlService, IntlService } from '@progress/kendo-angular-intl';
import { MessageService } from '@progress/kendo-angular-l10n';
import { CustomMessagesService } from '../services/custom-messages.service';
import { locales } from 'src/app/resources/locales';

@Component({
    selector: 'app-header-component',
    templateUrl: './header.commponent.html'
})
export class HeaderComponent {
    @Output() public toggle = new EventEmitter();
    @Input() public selectedPage?: string;

    public customMsgService: CustomMessagesService;

    public selectedLanguage = { locale: 'English', localeId: 'en-US' };
    public locales = locales;
    public popupSettings = { width: '150' };
    public themes: {href: string, text: string}[] = [
        {
            href: 'assets/kendo-theme-default/dist/all.css',
            text: 'Default'
        },
        {
            href: 'assets/kendo-theme-bootstrap/dist/all.css',
            text: 'Bootstrap'
        },
        {
            href: 'assets/kendo-theme-material/dist/all.css',
            text: 'Material'
        }
    ];
    public selectedTheme = this.themes[0];

    constructor(public messages: MessageService, @Inject(LOCALE_ID) public localeId: string, public intlService: IntlService) {
        this.localeId = this.selectedLanguage.localeId;
        this.setLocale(this.localeId);

        this.customMsgService = this.messages as CustomMessagesService;
        this.customMsgService.language = this.selectedLanguage.localeId;
    }

    public changeTheme(theme: {href: string, text: string}) {
        this.selectedTheme = theme;
        const themeEl: any = document.getElementById('theme');
        themeEl.href = theme.href;
    }

    public changeLanguage(item: any): void {
        this.customMsgService.language = item.localeId;
        this.setLocale(item.localeId);
    }

    public setLocale(locale: any): void {
        (this.intlService as CldrIntlService).localeId = locale;
    }

    public onButtonClick(): void {
        this.toggle.emit();
    }
}
