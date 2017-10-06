import { DebugElement } from '@angular/core';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpModule, Http } from '@angular/http';
import { By } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from '@ngx-translate/core';

import { rootReducer } from '../../reducers';
import { GetAppButtonComponent } from './get-app-button.component';
import {
    googlePlayUrl
} from '../../constants';

describe('GetAppButton', () => {
    let component: GetAppButtonComponent;
    let fixture: ComponentFixture<GetAppButtonComponent>;
    let debugLinkElement: DebugElement;
    let linkNativeElement: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpModule,
                TranslateModule.forRoot({
                    provide: TranslateLoader,
                    useFactory: (http: Http) => new TranslateStaticLoader(http, '/assets/i18n', '.json'),
                    deps: [Http]
                }),
                StoreModule.provideStore(rootReducer)
            ],
            declarations: [GetAppButtonComponent]
        });

        fixture = TestBed.createComponent(GetAppButtonComponent);
        component = fixture.componentInstance;
        debugLinkElement = fixture.debugElement.query(By.css('a'));
        linkNativeElement = debugLinkElement.nativeElement;
    });

    it('correctly render the component', () => {
        expect(component instanceof GetAppButtonComponent).toBe(true, 'should create AppComponent');
    });

    it('correct download app link', () => {
        fixture.detectChanges();
        expect(linkNativeElement.getAttribute('href')).toBe(googlePlayUrl);
    });
});
