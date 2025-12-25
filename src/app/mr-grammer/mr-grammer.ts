import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-mr-grammer',
  standalone: true,
  imports: [NgClass],
  templateUrl: './mr-grammer.html',
  styleUrl: './mr-grammer.css',
})
export class MrGrammer {
  isMenuOpen = false;

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
