import { Component } from '@angular/core';
import { DetailsSectionComponent } from '../../shared/components/details-section/details-section.component';

@Component({
  selector: 'app-about',
  imports: [DetailsSectionComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  ourStory: string = '';
  ourMission: string = '';
  ourVision: string = '';

  constructor() {
    this.ourStory =
      'Founded in 1975 in Toronto, Canada, Second Cup grew from a small mall kiosk into a leading café brand by expanding across Canada in the 1980s and broadening its menu in the 1990s as café culture rose. By the 2000s, it became a popular gathering place focused on coffee craftsmanship, later refreshing its cafés and menus in 2015 and expanding internationally into regions such as the Middle East and Europe.';

    this.ourMission =
      'Second Cup is driven by a mission of innovation and excellence across every part of the café experience, from ethical bean sourcing to customer service. Coffee quality remains central to the brand, with carefully selected beans and a passion for consistency, while its cafés and menus continue to evolve through new beverages, food options, and engaging experiences that enrich coffee culture for guests.';

    this.ourVision =
      'Second Cup aims to become the world’s leading sustainable café brand by combining premium coffee experiences with responsible growth and environmental care. Rooted in its Canadian heritage, this vision is supported by commitments to fair trade, certified coffee, ethical sourcing, and sustainable practices that benefit both farmers and the planet.';
  }
}
