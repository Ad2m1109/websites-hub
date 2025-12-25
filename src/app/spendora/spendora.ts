import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-spendora',
  standalone: true,
  imports: [NgClass],
  templateUrl: './spendora.html',
  styleUrl: './spendora.css',
})
export class Spendora {
  isMenuOpen = false;

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
