import { Component, Input } from '@angular/core';

@Component({
    selector: 'looky-divider-copy',
    templateUrl: './divider-copy.component.html',
    styleUrls: ['./divider-copy.component.scss']
})
export class DividerCopyComponent {
    defaultCopyText: string;

    private copy: string;

    constructor() {
        this.defaultCopyText = 'DIVIDER_COPY.DEFAULT';
        this.copy = this.defaultCopyText;
    }

    @Input()
    set copyText(copyText: string) {
        this.copy = (copyText && copyText.trim()) || this.defaultCopyText;
    }

    get copyText(): string {
        return this.copy;
    }
}
