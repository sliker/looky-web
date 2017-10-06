import { Component, Input } from '@angular/core';

@Component({
    selector: 'looky-loading',
    templateUrl: './loading.component.html'
})
export class LoadingComponent {
    @Input() loading: boolean;
}
