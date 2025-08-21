import { Component } from '@angular/core';
import { FooterDetails } from '../../types/footer.type';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  footerContent: FooterDetails[];

  constructor() {
    this.footerContent = [
      {
        headline: 'PRIVACY',
        content: ['Terms of use', 'Privacy policy', 'Cookies'],
      },
      {
        headline: 'SERVICES',
        content: ['Shop', 'Order ahead', 'Menu'],
      },
      {
        headline: 'ABOUT US',
        content: ['Find a location', 'About us', 'Our story'],
      },
      {
        headline: 'INFORMATION',
        content: ['Plans & pricing', 'Set your products', 'Jobs'],
      },
    ];
  }
}
