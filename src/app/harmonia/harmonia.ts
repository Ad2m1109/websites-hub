import { Component, ViewChild, ElementRef, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-harmonia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './harmonia.html',
  styleUrls: ['./harmonia.css']
})
export class HarmoniaComponent {
  @ViewChild('featuresSection') featuresSection!: ElementRef;
  @ViewChild('techSection') techSection!: ElementRef;
  @ViewChild('installationSection') installationSection!: ElementRef;
  @ViewChild('githubSection') githubSection!: ElementRef;
  @ViewChild('downloadSection') downloadSection!: ElementRef;
  @ViewChild('top') top!: ElementRef;

  isMenuOpen = false;
  isScrolled = false;

  features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Privacy First',
      description: 'All data stays on your device. No cloud storage, no data collection, complete privacy.',
      image: '/assets/harmonia/privacy.png'
    },
    {
      icon: 'fas fa-bell',
      title: 'Smart Reminders',
      description: 'Customizable medication and daily task reminders with flexible scheduling.',
      image: '/assets/harmonia/reminders.png'
    },
    {
      icon: 'fas fa-user-friends',
      title: 'Emergency Contacts',
      description: 'Quick access to family and caregivers with one-tap calling functionality.',
      image: '/assets/harmonia/contacts.png'
    },
    {
      icon: 'fas fa-map-marked-alt',
      title: 'Location Sharing',
      description: 'Optional real-time location sharing for safety without compromising privacy.',
      image: '/assets/harmonia/location.png'
    },
    {
      icon: 'fas fa-camera',
      title: 'Photo Memory Aid',
      description: 'Store photos of familiar faces, places, and items to help with recognition.',
      image: '/assets/harmonia/photos.png'
    },
    {
      icon: 'fas fa-accessible-icon',
      title: 'Accessibility Focused',
      description: 'Large fonts, high contrast, voice commands, and intuitive navigation.',
      image: '/assets/harmonia/accessibility.png'
    }
  ];

  techDetails = [
    {
      icon: 'fab fa-flutter',
      title: 'Flutter Framework',
      items: [
        'Cross-platform compatibility',
        'Native performance',
        'Beautiful, responsive UI',
        'Fast development cycle'
      ]
    },
    {
      icon: 'fas fa-lock',
      title: 'Security & Privacy',
      items: [
        'Local-only data storage',
        'No external servers',
        'Encrypted sensitive data',
        'HIPAA-compliant design'
      ]
    },
    {
      icon: 'fas fa-mobile-alt',
      title: 'Device Features',
      items: [
        'GPS location services',
        'Local notifications',
        'Camera integration',
        'Offline functionality'
      ]
    }
  ];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Show scroll-to-top button
    this.isScrolled = scrollTop > 300;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 70; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      this.isMenuOpen = false; // Close mobile menu after navigation
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}