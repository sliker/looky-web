import { Component, Input } from '@angular/core';

@Component({
    selector: 'looky-pet-detail-header',
    templateUrl: './pet-detail-header.component.html',
    styleUrls: ['./pet-detail-header.component.scss']
})
export class PetDetailHeaderComponent {
    @Input() publishDate: string;
    @Input() petKind: string;
    @Input() petType: number;
}
