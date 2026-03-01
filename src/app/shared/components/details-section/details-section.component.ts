import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-details-section',
  imports: [],
  templateUrl: './details-section.component.html',
  styleUrl: './details-section.component.scss',
})
export class DetailsSectionComponent {
  @Input() content: string = '';
  @Input() contentTitle: string = '';
  @Input() contentSubtitle: string = '';
  @Input() imgURL: string = '';
  @Input() isImgLeft: boolean = false;
  @Input() isImgRight: boolean = false;
  @Input() iconClass: string = '';
}
