import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selectedSegment: string = 'explab'; // Valor predeterminado al inicio

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }
  

  constructor() { }
}
