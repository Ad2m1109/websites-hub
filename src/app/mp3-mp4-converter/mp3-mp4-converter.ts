import { Component, HostListener } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-mp3-mp4-converter',
  standalone: true,
  imports: [NgClass],
  templateUrl: './mp3-mp4-converter.html',
  styleUrl: './mp3-mp4-converter.css',
})
export class Mp3Mp4Converter {
  isMenuOpen = false;

  scrollTo(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    this.isMenuOpen = false;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
